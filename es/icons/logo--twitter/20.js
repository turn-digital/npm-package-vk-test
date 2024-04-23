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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M11.5475,25.7523c9.0566,0,14.0102-7.5034,14.0102-14.0102,0-.2131,0-.4253-.0144-.6365,.9637-.697,1.7955-1.5601,2.4566-2.5488-.8987,.3982-1.852,.6594-2.8282,.7747,1.0279-.6154,1.7972-1.5833,2.1648-2.7235-.9666,.5736-2.024,.9778-3.1267,1.1952-1.8648-1.9829-4.984-2.0786-6.9669-.2138-1.2788,1.2026-1.8214,2.9947-1.4245,4.7047-3.9591-.1985-7.6479-2.0685-10.1482-5.1446-1.3069,2.2499-.6394,5.1282,1.5245,6.5731-.7836-.0232-1.5501-.2346-2.2349-.6163v.0624c.0006,2.3439,1.6529,4.3628,3.9504,4.8269-.7249,.1977-1.4855,.2266-2.2234,.0845,.6451,2.0058,2.4937,3.38,4.6003,3.4195-1.7436,1.3703-3.8975,2.1142-6.1152,2.112-.3918-.0008-.7832-.0245-1.1722-.071,2.2518,1.4451,4.8719,2.2116,7.5475,2.208"></path></svg>`;
export default svgResultCarbonIcon;
