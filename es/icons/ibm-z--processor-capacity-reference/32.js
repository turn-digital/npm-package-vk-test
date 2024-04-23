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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M25 25H27V29H25zM21 23H23V29H21zM29 20H31V29H29z"></path><path d="M30 17V5c0-1.1046-.8954-2-2-2h-9c-1.1046 0-2 .8954-2 2v24h2V5h9v12h2zM13 3H4c-1.1046 0-2 .8954-2 2v22c0 1.1046.8954 2 2 2h9c1.1046 0 2-.8954 2-2V5c0-1.1046-.8954-2-2-2zm-9 2.9635l8.2998 6.0365-8.2998 6.0365V5.9635zm0 21.0365v-5.0366l6.9253 5.0366h-6.9253zm9-.9635l-8.2998-6.0365 8.2998-6.0365v12.073zm0-15.9999l-6.9253-5.0366h6.9253v5.0366z"></path></svg>`;
export default svgResultCarbonIcon;
