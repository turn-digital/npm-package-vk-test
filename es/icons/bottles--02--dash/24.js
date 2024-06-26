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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24 9.0513v-3.0513c0-.5522-.4478-1-1-1h-3v2h2v3.02s2 1.1238 2 3.48v11.5h-4v2h5c.5522 0 1-.4478 1-1V13.5c0-1.7129-.7229-3.3076-2-4.4487zM16 25h-3v2h4c.5522 0 1-.4478 1-1v-4h-2v3zM8 22h-2v4c0 .5522.4478 1 1 1h4v-2h-3v-3zM16 16H18V20H16zM6 16H8V20H6zM16 9.0513v-3.0513c0-.5522-.4478-1-1-1h-6c-.5522 0-1 .4478-1 1v3.0513c-1.2771 1.1411-2 2.7358-2 4.4487v.5h2v-.5c0-2.356 2-3.48 2-3.48v-3.02h4v3.02s2 1.124 2 3.48v.5h2v-.5c0-1.7129-.7229-3.3076-2-4.4487z"></path></svg>`;
export default svgResultCarbonIcon;
