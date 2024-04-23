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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M24 9.0513v-3.0513c0-.5522-.4478-1-1-1h-3v2h2v3.02s2 1.1238 2 3.48v11.5h-4v2h5c.5522 0 1-.4478 1-1V13.5c0-1.7129-.7229-3.3076-2-4.4487zM16 9.0513v-3.0513c0-.5522-.4478-1-1-1h-6c-.5522 0-1 .4478-1 1v3.0513c-1.2771 1.1411-2 2.7358-2 4.4487v12.5c0 .5522.4478 1 1 1h10c.5522 0 1-.4478 1-1V13.5c0-1.7129-.7229-3.3076-2-4.4487zm0 15.9487H8V13.5c0-2.356 2-3.48 2-3.48v-3.02h4v3.02s2 1.124 2 3.48v11.5z"></path></svg>`;
export default svgResultCarbonIcon;
