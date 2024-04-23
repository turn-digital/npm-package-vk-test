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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M26.4612,15.7968A12.1352,12.1352,0,0,0,25.2821,11.48L29,10.13a11.9879,11.9879,0,0,0-1.0281-1.7382l-1.7431.635a11.9884,11.9884,0,0,0-21.71,7.9129l1.7477-.6412a12.19,12.19,0,0,0,.3309,1.9846L2.8838,19.6384A12.1451,12.1451,0,0,0,4.7565,23.7l1.9663-.7163.0026.0039a11.8856,11.8856,0,0,0,4.67,3.8909A12.013,12.013,0,0,0,27.34,21.0743a11.8725,11.8725,0,0,0,1.08-5.992Zm-2.92,3.4967a7.8,7.8,0,0,1-10.3533,3.7744,7.7207,7.7207,0,0,1-2.2714-1.6128l-1.9846.7235a7.84,7.84,0,0,1-2.0742-3.9895l.0009-.0008,3.7242-1.3566a7.8175,7.8175,0,0,1-.1232-2.0653l-1.7517.6362A7.7729,7.7729,0,0,1,19.7645,8.94h.0067a7.7442,7.7442,0,0,1,2.2646,1.615L23.78,9.921a7.8014,7.8014,0,0,1,1.229,1.6558l-3.71,1.3595a7.8245,7.8245,0,0,1,.9766,4.3882l1.9685-.7151A7.6714,7.6714,0,0,1,23.5411,19.2935Z"></path></svg>`;
export default svgResultCarbonIcon;
