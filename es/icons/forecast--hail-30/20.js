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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M8.964 13.5H14.036000000000001V15.499H8.964z" transform="rotate(-45 11.5 14.5)"></path><path d="M15.379 14.5H17.622V16.499H15.379z" transform="rotate(-44.995 16.5 15.5)"></path><circle cx="10.5" cy="22.5" r="1.5"></circle><circle cx="7.5" cy="18.5" r="1.5"></circle><circle cx="13.5" cy="18.5" r="1.5"></circle><path d="M14,28A10,10,0,0,1,14,8h4v5l6-6L18,1V6H14a12,12,0,0,0,0,24Z"></path><path d="M20 20H16v2h4v2H17v2h3v2H16v2h4a2.0027 2.0027 0 002-2V22A2.0023 2.0023 0 0020 20zM28 30H26a2.0021 2.0021 0 01-2-2V22a2.0021 2.0021 0 012-2h2a2.0021 2.0021 0 012 2v6A2.0021 2.0021 0 0128 30zm-2-8v6h2V22z"></path></svg>`;
export default svgResultCarbonIcon;
