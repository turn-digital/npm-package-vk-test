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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M22 13H24V15H22zM26 13H28V15H26zM30 13H32V15H30zM30 17H32V19H30zM15 20H17V22H15zM20 28H22V30H20zM24 28H26V30H24zM19 26h9v-9h-9v9zm2-7h5v5h-5v-5z"></path><path d="m16,3v.0005c-.002,0-.004-.0003-.006-.0003-4.7007.0032-8.9033,3.3306-9.8242,8.1152C2.6037,11.7607.0078,14.8598,0,18.4815c-.0089,4.1434,3.345,7.5096,7.4911,7.5185h9.5089v-2H7.4954c-3.0367-.0065-5.502-2.4802-5.4954-5.5142.0057-2.6569,1.9092-4.9289,4.5259-5.4023l1.3488-.2441.2591-1.3459c.7241-3.7623,4.0386-6.4933,7.8662-6.4935h0c3.7363,0,6.9395,2.5367,7.79,6.169l1.9473-.4561c-1.0635-4.541-5.0674-7.7129-9.7373-7.7129Z"></path></svg>`;
export default svgResultCarbonIcon;
