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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24,13H22a3.0033,3.0033,0,0,0-3-3V8A5.0057,5.0057,0,0,1,24,13Z"></path><path d="M28 13H26a7.0078 7.0078 0 00-7-7V4A9.01 9.01 0 0128 13zM20.3333 21.4823l2.24-2.24a2.1667 2.1667 0 012.3368-.48l2.7281 1.0913A2.1666 2.1666 0 0129 21.8659v4.9613a2.1668 2.1668 0 01-2.2843 2.1686C7.5938 27.8054 3.7321 11.6114 3.0146 5.4079A2.162 2.162 0 015.1692 3H10.042a2.1666 2.1666 0 012.0117 1.362L13.145 7.09a2.1666 2.1666 0 01-.48 2.3367l-2.24 2.24S11.6667 20.399 20.3333 21.4823z"></path></svg>`;
export default svgResultCarbonIcon;
