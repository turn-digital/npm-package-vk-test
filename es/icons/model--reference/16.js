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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20z"></path><path d="M23.5,4H8.5L1.7158,13.0454,6.01,18l1.5114-1.31L5.19,14h5.2554L16,22.8867,21.5544,14H26.81L15.8125,26.6919,17.3242,28l12.96-14.9546ZM5,12,9.5,6h4.6958l-3.75,6ZM16,6.8867,19.1958,12H12.8042Zm0,12.2266L12.8044,14h6.3912ZM21.5542,12l-3.75-6H22.5L27,12Z"></path></svg>`;
export default svgResultCarbonIcon;
