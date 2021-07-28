/**
 * Copyright (c) 2021 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react"

import { IconProps } from "./Props"

export const IconCopy: React.FC<IconProps> = ({ color }) => (
    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.7798 14.6984H2.29662C1.03023 14.6984 0 13.6681 0 12.4018V4.62195C0 3.35556 1.03023 2.32533 2.29662 2.32533H7.7798C9.0462 2.32533 10.0764 3.35556 10.0764 4.62195V12.4018C10.0764 13.6681 9.0462 14.6984 7.7798 14.6984ZM2.29662 3.47364C1.66348 3.47364 1.14831 3.98881 1.14831 4.62195V12.4018C1.14831 13.0349 1.66348 13.5501 2.29662 13.5501H7.7798C8.41294 13.5501 8.92811 13.0349 8.92811 12.4018V4.62195C8.92811 3.98881 8.41294 3.47364 7.7798 3.47364H2.29662ZM12.373 10.9664V2.29662C12.373 1.03023 11.3428 0 10.0764 0H3.7033C3.38617 0 3.12915 0.257024 3.12915 0.574155C3.12915 0.891286 3.38617 1.14831 3.7033 1.14831H10.0764C10.7096 1.14831 11.2247 1.66348 11.2247 2.29662V10.9664C11.2247 11.2835 11.4818 11.5405 11.7989 11.5405C12.116 11.5405 12.373 11.2835 12.373 10.9664Z"
            fill={color}
        />
    </svg>
)