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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<switch ><g ><path d="M28 13h2v2h-2zM23.778 4.797l1.414-1.414 1.414 1.414-1.414 1.414zM15 0h2v2h-2zM6.808 6.233 5.393 4.818l1.415-1.414 1.414 1.414zM2 13h2v2H2zM13 30h6v2h-6zM11 26h10v2H11zM16 4C10.5 4 6 8.5 6 14c0 4.4 2 6.3 3.5 7.6 1 .9 1.5 1.5 1.5 2.4h2c0-1.8-1.1-2.9-2.2-3.9C9.4 18.9 8 17.5 8 14c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.5-1.4 4.9-2.8 6.1-1.1 1-2.2 2-2.2 3.9h2c0-.9.5-1.5 1.5-2.4C24 20.3 26 18.4 26 14c0-5.5-4.5-10-10-10z"></path><path fill="none" d="M0 0h32v32H0z"></path></g></switch></svg>`;
export default svgResultCarbonIcon;
