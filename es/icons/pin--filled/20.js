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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28.5858,13.3137,30,11.9,20,2,18.6858,3.415l1.1858,1.1857L8.38,14.3225,6.6641,12.6067,5.25,14l5.6572,5.6773L2,28.5831,3.41,30l8.9111-8.9087L18,26.7482l1.3929-1.414L17.6765,23.618l9.724-11.4895Z"></path></svg>`;
export default svgResultCarbonIcon;
