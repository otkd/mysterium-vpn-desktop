/**
 * Copyright (c) 2021 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { observer } from "mobx-react-lite"
import React from "react"

import { LoadingView } from "../../../views/common/Loading/loading-view"
import { useStores } from "../../../store"

export const StartupLoadingView: React.FC = observer(function StartupLoadingView() {
    const { daemon } = useStores()
    return <LoadingView status={daemon.startupStatus} />
})
