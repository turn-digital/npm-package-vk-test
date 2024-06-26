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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M30 18h-10v6.4678c0 1.9229 1.1231 3.6973 2.8613 4.5195l2.1387 1.0127 2.1387-1.0127c1.7383-.8223 2.8613-2.5967 2.8613-4.5195v-6.4678h0zm-5 9.7861l-1.2832-.6074c-1.043-.4932-1.7168-1.5576-1.7168-2.7109v-4.4678h6v4.4678c0 1.1533-.6738 2.2178-1.7168 2.7109l-1.2832.6074h0zM17 18H5c-1.1045 0-2 .8954-2 2v5c0 1.1045.8955 2 2 2h12v-2H5v-5h12v-2h0zM27 4h-5c-1.1045 0-2 .8954-2 2v9h2V6h5v9h2V6c0-1.1046-.8955-2-2-2h0zM15 4H5c-1.1045 0-2 .8954-2 2v7c0 1.1045.8955 2 2 2h10c1.1045 0 2-.8955 2-2v-7c0-1.1046-.8955-2-2-2h0zM5 13v-7h10v7H5z"></path></svg>`;
export default svgResultCarbonIcon;
