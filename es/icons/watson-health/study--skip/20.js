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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M22,9h5.2A11,11,0,0,0,7,15H5A13,13,0,0,1,28,6.7V3h2v8H22Z"></path><path d="M16 12a3 3 0 11-3 3 2.95 2.95 0 013-3m0-2a5 5 0 105 5A5 5 0 0016 10zM23 30H21V27a3 3 0 00-3-3H14a3 3 0 00-3 3v3H9V27a5 5 0 015-5h4a5 5 0 015 5z"></path></svg>`;
export default svgResultCarbonIcon;
