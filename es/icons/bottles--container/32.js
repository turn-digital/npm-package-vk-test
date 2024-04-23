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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M23 10v-2c0-.5522-.4478-1-1-1h-3v2h2v1.9688s2 1.1238 2 3.48v8.5513h-4v2h5c.5522 0 1-.4478 1-1V14.4487c0-1.7129-.7229-3.3076-2-4.4487zM15 10v-2c0-.5522-.4478-1-1-1h-4c-.5522 0-1 .4478-1 1v2c-1.2771 1.1411-2 2.7358-2 4.4487v9.5513c0 .5522.4478 1 1 1h8c.5522 0 1-.4478 1-1V14.4487c0-1.7129-.7229-3.3076-2-4.4487zm0 13h-6V14.4487c0-2.356 2-3.48 2-3.48v-1.9688h2v1.9688s2 1.124 2 3.48v8.5513z"></path><path d="M28,2H4c-1.1046,0-2,.8954-2,2V28c0,1.1046,.8954,2,2,2H28c1.1046,0,2-.8954,2-2V4c0-1.1046-.8954-2-2-2Zm0,26H4V4H28V28Z"></path></svg>`;
export default svgResultCarbonIcon;
