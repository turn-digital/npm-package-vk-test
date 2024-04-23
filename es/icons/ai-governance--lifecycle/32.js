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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 23l-2.1387-1.0127c-1.7383-.8223-2.8613-2.5967-2.8613-4.5195v-6.4678h10v6.4678c0 1.9229-1.123 3.6973-2.8613 4.5195l-2.1387 1.0127zm-3-10v4.4678c0 1.1533.6738 2.2178 1.7168 2.7109l1.2832.6074 1.2832-.6074c1.043-.4932 1.7168-1.5576 1.7168-2.7109v-4.4678h-6zM4.1208 17.6562c.5305-.3594.8792-.9673.8792-1.6562 0-1.1045-.8955-2-2-2s-2 .8955-2 2c0 .7886.4607 1.4644 1.124 1.79.6792 5.334 4.3472 9.8477 9.5686 11.5347l.6147-1.9033c-4.4355-1.4326-7.5642-5.2461-8.1865-9.7651zM29.3247 20.3076l-1.9033-.6152c-1.4329 4.4355-5.2461 7.5645-9.7651 8.1865-.3596-.5303-.967-.8789-1.6562-.8789-1.1045 0-2 .8955-2 2s.8955 2 2 2c.7888 0 1.4644-.4604 1.7898-1.124 5.334-.6792 9.8479-4.3472 11.5349-9.5684zM29.876 14.21c-.6792-5.334-4.3472-9.8477-9.5686-11.5347l-.6147 1.9033c4.4355 1.4326 7.5642 5.2461 8.1865 9.7651-.5305.3594-.8792.9673-.8792 1.6562 0 1.1045.8955 2 2 2s2-.8955 2-2c0-.7886-.4604-1.4644-1.124-1.79zM16 1c-.7888 0-1.4644.4604-1.7898 1.124-5.334.6792-9.8479 4.3472-11.5349 9.5684l1.9033.6152c1.4329-4.4355 5.2461-7.5645 9.7651-8.1865.3596.5303.967.8789 1.6562.8789 1.1045 0 2-.8955 2-2s-.8955-2-2-2z"></path></svg>`;
export default svgResultCarbonIcon;