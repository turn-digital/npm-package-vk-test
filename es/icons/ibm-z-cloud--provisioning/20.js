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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M10 17H14V21H10zM17 10H21V14H17zM17 17H21V21H17z"></path><path d="M19.758 26.65L16 28.842 5 22.426V18H3v5c0 .355.189.685.496.864l12 7C15.652 30.955 15.826 31 16 31s.348-.045.504-.136l4.282-2.498L19.758 26.65zM28.504 8.136l-4.269-2.49-1.029 1.715L27 9.574v12.852l-3.787 2.209 1.029 1.715 4.262-2.486C28.811 23.685 29 23.355 29 23V9C29 8.645 28.811 8.315 28.504 8.136zM5 9.574l11-6.417 3.751 2.188L20.78 3.63l-4.276-2.494C16.348 1.045 16.174 1 16 1s-.348.045-.504.136l-12 7C3.189 8.315 3 8.645 3 9v5h2V9.574z"></path></svg>`;
export default svgResultCarbonIcon;
