/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M20 17V15a2 2 0 00-2-2H10a2 2 0 00-2 2v2a2 2 0 002 2h8A2 2 0 0020 17zM10 15h8v2H10zM23.42 24.48A2 2 0 0021 23.06l-7.73 2.07a2 2 0 00-1.42 2.44h0l.52 1.93A2 2 0 0014.27 31a3 3 0 00.52-.07l7.73-2.07h0a2 2 0 001.41-2.45zM14.27 29l-.51-1.94L21.48 25 22 26.92zM13.24 6.86L21 8.93h0a2.24 2.24 0 00.51.07 2 2 0 001.94-1.48L24 5.58a2 2 0 00-1.41-2.45L14.79 1.06a2 2 0 00-2.45 1.41h0l-.52 1.93a2 2 0 001.42 2.44zm1-3.86L22 5.07 21.48 7 13.76 4.93zM14 21H16V23H14zM14 9H16V11H14z"></path></svg>`;
export default svgResultCarbonIcon;
