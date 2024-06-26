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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M28 10H4A2.0022 2.0022 0 012 8V4A2.0021 2.0021 0 014 2H28a2.0021 2.0021 0 012 2V8A2.0022 2.0022 0 0128 10zM4 4V8H28V4zM28 30H4a2.0022 2.0022 0 01-2-2V24a2.0021 2.0021 0 012-2H28a2.0021 2.0021 0 012 2v4A2.0022 2.0022 0 0128 30zM4 24v4H28V24zM28 20H4a2.0022 2.0022 0 01-2-2V14a2.0021 2.0021 0 012-2H28a2.0021 2.0021 0 012 2v4A2.0022 2.0022 0 0128 20zM4 14v4H28V14z"></path></svg>`;
export default svgResultCarbonIcon;
