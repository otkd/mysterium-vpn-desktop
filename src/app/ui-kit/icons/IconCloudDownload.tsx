/**
 * Copyright (c) 2021 BlockDev AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react"

import { IconProps } from "./Props"

export const IconCloudDownload: React.FC<IconProps> = ({ color }) => (
    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M19.0038 16.0001H6.00382C2.87819 16.002 0.274715 13.604 0.020185 10.4887C-0.234345 7.37347 1.94535 4.58465 5.02982 4.07911C6.44953 1.562 9.11394 0.00362534 12.0038 5.65992e-05C13.8058 -0.00675485 15.5563 0.601415 16.9658 1.72411C18.3499 2.82197 19.3339 4.34509 19.7658 6.05811C22.3497 6.45514 24.1916 8.77563 23.9918 11.3822C23.7921 13.9888 21.6181 16.0015 19.0038 16.0001ZM12.0038 2.0001C9.83553 2.00267 7.8365 3.17221 6.77182 5.06111L6.30382 5.90011L5.35482 6.05511C3.3051 6.39852 1.85983 8.25441 2.02904 10.3258C2.19824 12.3972 3.92555 13.9939 6.00382 14.0001H19.0038C20.5724 14.0017 21.8774 12.7947 21.998 11.2308C22.1186 9.66685 21.0141 8.27401 19.4638 8.03511L18.1478 7.83511L17.8258 6.54311C17.1611 3.86992 14.7584 1.99507 12.0038 2.0001ZM12.0038 12.0001L8.00382 8.00011H10.5538V5.00011H13.4538V8.00011H16.0038L12.0038 12.0001Z"
            fill={color}
        />
    </svg>
)
