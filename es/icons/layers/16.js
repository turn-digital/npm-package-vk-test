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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16,24a.9967.9967,0,0,1-.4741-.12l-13-7L3.4741,15.12,16,21.8643,28.5259,15.12l.9482,1.7607-13,7A.9967.9967,0,0,1,16,24Z"></path><path d="M16 30a.9967.9967 0 01-.4741-.12l-13-7L3.4741 21.12 16 27.8643 28.5259 21.12l.9482 1.7607-13 7A.9967.9967 0 0116 30zM16 18a.9967.9967 0 01-.4741-.12l-13-7a1 1 0 010-1.7607l13-7a.9982.9982 0 01.9482 0l13 7a1 1 0 010 1.7607l-13 7A.9967.9967 0 0116 18zM5.1094 10L16 15.8643 26.8906 10 16 4.1358z"></path></svg>`;
export default svgResultCarbonIcon;
