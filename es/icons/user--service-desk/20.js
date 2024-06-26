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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25.334 11.95l1.2055-1.206a1.178 1.178 0 011.2593-.2584l1.4693.5868A1.1736 1.1736 0 0130 12.1489v2.692A1.1681 1.1681 0 0128.8229 16l-.05-.0015C18.4775 15.3578 16.4 6.6357 16.0073 3.2976a1.1681 1.1681 0 011.0315-1.29A1.1492 1.1492 0 0117.1751 2h2.5994a1.1626 1.1626 0 011.0764.7322l.5866 1.47a1.1635 1.1635 0 01-.2529 1.26L19.9791 6.668S20.6733 11.3682 25.334 11.95zM16 30H14V25a3.0033 3.0033 0 00-3-3H7a3.0033 3.0033 0 00-3 3v5H2V25a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM9 10a3 3 0 11-3 3 3 3 0 013-3M9 8a5 5 0 105 5A5 5 0 009 8z"></path></svg>`;
export default svgResultCarbonIcon;
