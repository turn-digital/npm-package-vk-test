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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M26 12c-1.8584 0-3.4106 1.2798-3.8579 3h-2.7278c-.5344 0-1.0366.208-1.4143.5859l-5.4143 5.4141H2v2h10.5857c.5344 0 1.0366-.208 1.4143-.5859l5.4143-5.4141h2.7278c.4473 1.7202 1.9995 3 3.8579 3 2.2056 0 4-1.7944 4-4s-1.7944-4-4-4zm0 6c-1.1028 0-2-.8975-2-2s.8972-2 2-2 2 .8975 2 2-.8972 2-2 2zM16.1717 14.5859l-3.5859-3.5859H2v-2h10.5857c.5344 0 1.0366.208 1.4143.5859l3.5859 3.5859-1.4143 1.4141z"></path></svg>`;
export default svgResultCarbonIcon;
