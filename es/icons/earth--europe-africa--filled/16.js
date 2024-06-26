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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2ZM4,16A11.9814,11.9814,0,0,1,9,6.2734V9a1,1,0,0,0,1,1h3.3821a1,1,0,0,0,.8943-.5527L15,8h4v6H13.2361a1.0006,1.0006,0,0,0-.4473.1055L9.5527,15.7236A1,1,0,0,0,9,16.6182v3.7046a1,1,0,0,0,.6287.9287L14,23l.8235,4.94A12.0152,12.0152,0,0,1,4,16ZM22,26.376V23l1.7546-2.6318a1.0012,1.0012,0,0,0,.1382-.7974L23,16V13h4.605A11.901,11.901,0,0,1,22,26.376Z"></path></svg>`;
export default svgResultCarbonIcon;
