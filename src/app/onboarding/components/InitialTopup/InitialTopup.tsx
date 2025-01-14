/**
 * Copyright (c) 2021 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { faUserFriends, faWallet } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Lottie from "react-lottie-player"

import { ViewContainer } from "../../../navigation/components/ViewContainer/ViewContainer"
import { ViewSplit } from "../../../navigation/components/ViewSplit/ViewSplit"
import { ViewSidebar } from "../../../navigation/components/ViewSidebar/ViewSidebar"
import { ViewContent } from "../../../navigation/components/ViewContent/ViewContent"
import { ViewNavBar } from "../../../navigation/components/ViewNavBar/ViewNavBar"
import { Heading2, Small } from "../../../ui-kit/typography"
import {
    ButtonContent,
    ButtonIcon,
    PrimarySidebarActionButton,
    SecondarySidebarActionButton,
} from "../../../ui-kit/components/Button/SidebarButtons"
import { useStores } from "../../../store"
import { brandLight } from "../../../ui-kit/colors"
import { locations } from "../../../navigation/locations"

import { ReferralCodeFormFields, UseReferralCodePrompt } from "./UseReferralCodePrompt"
import animationOnboardingTopup from "./animation_onboarding_topup.json"

const SideTop = styled.div`
    box-sizing: border-box;
    height: 136px;
    padding: 20px;
    overflow: hidden;
    text-align: center;
`

const SectionIcon = styled(FontAwesomeIcon)`
    margin-bottom: 10px;
    font-size: 20px;
    color: ${brandLight};
`

const Title = styled(Heading2)`
    margin-bottom: 15px;
`

const SideBot = styled.div`
    background: #fff;
    box-shadow: 0px 0px 30px rgba(11, 0, 75, 0.1);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 20px;
    flex: 1 0 auto;

    display: flex;
    flex-direction: column;
`

const Content = styled(ViewContent)`
    background: none;
    justify-content: center;
`

export const InitialTopup: React.FC = observer(function InitialTopup() {
    const { payment, onboarding } = useStores()
    const handleTopupNow = async () => {
        return payment.startTopupFlow(locations.onboardingWalletTopup)
    }
    const [referralPrompt, setReferralPrompt] = useState(false)
    const handleUseReferralCode = () => {
        setReferralPrompt(true)
    }
    const handleReferralSubmit = async ({ code }: ReferralCodeFormFields) => {
        setReferralPrompt(false)
        await onboarding.registerWithReferralCode(code)
    }
    const handleReferralCancel = () => {
        setReferralPrompt(false)
    }
    return (
        <ViewContainer>
            <ViewNavBar />
            <ViewSplit>
                <ViewSidebar>
                    <SideTop>
                        <SectionIcon icon={faWallet} />
                        <Title>Your Wallet</Title>
                        <Small>Top up your wallet now to complete the registration</Small>
                    </SideTop>
                    <SideBot>
                        <PrimarySidebarActionButton onClick={handleTopupNow}>
                            <ButtonContent>
                                <ButtonIcon>
                                    <FontAwesomeIcon icon={faWallet} />
                                </ButtonIcon>
                                Top up now
                            </ButtonContent>
                        </PrimarySidebarActionButton>
                        <SecondarySidebarActionButton onClick={handleUseReferralCode}>
                            <ButtonContent>
                                <ButtonIcon>
                                    <FontAwesomeIcon icon={faUserFriends} />
                                </ButtonIcon>
                                Use a Referral code
                            </ButtonContent>
                        </SecondarySidebarActionButton>
                    </SideBot>
                </ViewSidebar>
                <Content>
                    <Lottie
                        play
                        loop={false}
                        animationData={animationOnboardingTopup}
                        style={{ width: 256, height: 256 }}
                        renderer="svg"
                    />
                </Content>
                <UseReferralCodePrompt
                    visible={referralPrompt}
                    onSubmit={handleReferralSubmit}
                    onCancel={handleReferralCancel}
                />
            </ViewSplit>
        </ViewContainer>
    )
})
