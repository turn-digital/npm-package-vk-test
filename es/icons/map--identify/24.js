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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M15 8H17V14H15zM15 18H17V24H15zM18 15H24V17H18zM8 15H14V17H8zM4 10H2V4A2.0021 2.0021 0 014 2h6V4H4zM10 30H4a2.0021 2.0021 0 01-2-2V22H4v6h6zM28 30H22V28h6V22h2v6A2.0021 2.0021 0 0128 30zM30 10H28V4H22V2h6a2.0021 2.0021 0 012 2z"></path></svg>`;
export default svgResultCarbonIcon;
