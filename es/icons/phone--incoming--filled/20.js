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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20.3333,21.4823l2.24-2.24a2.1667,2.1667,0,0,1,2.3368-.48l2.7281,1.0913A2.1666,2.1666,0,0,1,29,21.8659v4.9613a2.1668,2.1668,0,0,1-2.2843,2.1686C7.5938,27.8054,3.7321,11.6114,3.0146,5.4079A2.162,2.162,0,0,1,5.1692,3H10.042a2.1666,2.1666,0,0,1,2.0117,1.362L13.145,7.09a2.1666,2.1666,0,0,1-.48,2.3367l-2.24,2.24S11.6667,20.399,20.3333,21.4823Z"></path><path d="M27 13L27 11 22.414 11 29 4.414 27.586 3 21 9.586 21 5 19 5 19 13 27 13z"></path></svg>`;
export default svgResultCarbonIcon;
