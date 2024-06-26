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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28.1655 2a12.9848 12.9848 0 00-8.4074 3.1065A3.9947 3.9947 0 1015.583 11.728l-1.1362 4.1665c-.0725.2657-.1579.5254-.2489.7818a3.9864 3.9864 0 00-5.1547 6.0054A10.9541 10.9541 0 013.8345 24H2v2H3.8345c.2975 0 .5918-.0171.8853-.0371l7.9291 2.9736A1 1 0 0014 28V21.0923a12.9311 12.9311 0 00.9121-1.313l6.3628-1.8179a1 1 0 00.5059-1.5864L17.7843 11.38a10.9268 10.9268 0 011.1516-2.3472l5.7477 1.916A1 1 0 0026 10V4.2251A10.8956 10.8956 0 0128.1655 4H30V2zM17 6a1.98 1.98 0 011.3237.53A12.9413 12.9413 0 0016.24 9.8482 1.9988 1.9988 0 0117 6zM10 20a1.9879 1.9879 0 013.3374-1.4717 11.0157 11.0157 0 01-2.5959 3.0147A1.9975 1.9975 0 0110 20zM8.3354 25.1826A13.047 13.047 0 0012 23.0943v3.4624zm7.74-7.8154c.1107-.3105.2136-.625.3013-.9463l.732-2.6846L19.28 16.4512zM24 8.6123l-3.7411-1.247A11.0712 11.0712 0 0124 4.8306zM22 22L22 24 26.586 24 22 28.586 23.414 30 28 25.414 28 30 30 30 30 22 22 22zM2 2L2 4 6.586 4 2 8.586 3.414 10 8 5.414 8 10 10 10 10 2 2 2z"></path></svg>`;
export default svgResultCarbonIcon;
