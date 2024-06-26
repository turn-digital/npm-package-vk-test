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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26,30H11a2.0023,2.0023,0,0,1-2-2V22h2v6H26V6H17V4h9a2.0023,2.0023,0,0,1,2,2V28A2.0023,2.0023,0,0,1,26,30Z"></path><path d="M17 10H24V12H17zM16 15H24V17H16zM15 20H24V22H15zM9 19a5.0055 5.0055 0 01-5-5V3H6V14a3 3 0 006 0V5a1 1 0 00-2 0V15H8V5a3 3 0 016 0v9A5.0055 5.0055 0 019 19z"></path></svg>`;
export default svgResultCarbonIcon;
