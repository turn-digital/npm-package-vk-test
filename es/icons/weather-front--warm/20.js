/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28.1655 2a13.0289 13.0289 0 00-12.542 9.5791l-1.1767 4.3154A11.0237 11.0237 0 013.8345 24H2v2H3.8345a12.9139 12.9139 0 003.4687-.4819 3.9979 3.9979 0 106.5818-4.2866 12.9671 12.9671 0 001.6209-2.5269 3.9944 3.9944 0 102.3772-7.5991 10.95 10.95 0 011.7253-3.01 3.9825 3.9825 0 006.9058-3.9648A10.9435 10.9435 0 0128.1655 4H30V2zM11 26a1.9983 1.9983 0 01-1.8118-1.1655 13.0811 13.0811 0 003.2969-2.1426A1.9773 1.9773 0 0111 26zm8-11a1.9926 1.9926 0 01-2.759 1.8467c.0442-.1426.0959-.2813.1355-.4258L17.301 13.03A1.9976 1.9976 0 0119 15zm6-9a1.9942 1.9942 0 01-3.9011.5894 11.0511 11.0511 0 013.3623-1.9385A1.995 1.995 0 0125 6zM10 4L10 8.586 3.414 2 2 3.414 8.586 10 4 10 4 12 12 12 12 4 10 4z"></path></svg>`;
export default svgResultCarbonIcon;
