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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M13,15c1.4854,0,2.5544,1.4966,3.6863,3.0811C17.9983,19.918,19.4854,22,22,22c5.6709,0,7.78-10.79,8-12l-1.9678-.3584C27.55,12.2827,25.3938,20,22,20c-1.4854,0-2.5544-1.4966-3.6863-3.0811C17.0017,15.082,15.5146,13,13,13c-4.186,0-7.4448,7.4043-9,11.7617V2H2V28a2.0025,2.0025,0,0,0,2,2H30V28H5.0439C6.5544,22.8574,9.9634,15,13,15Z"></path></svg>`;
export default svgResultCarbonIcon;
