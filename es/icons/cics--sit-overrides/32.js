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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M31.707 20.293l-3-3c-.3901-.3906-1.0239-.3906-1.4141 0l-9.293 9.293v4.4141h4.4143l9.2927-9.293c.3906-.3906.3906-1.0234 0-1.4141zm-7.4141 6l-2.7073 2.707h-1.5857v-1.5859l2.707-2.707 2.293-2.293 1.5859 1.5859-2.293 2.293zm3.707-3.707l-1.5859-1.5859 1.5859-1.5859 1.5857 1.5859-1.5857 1.5859zM20 20v-2h-4v-7h10v2h2V6c0-1.6543-1.3457-3-3-3H5c-1.6543 0-3 1.3457-3 3V26c0 1.6543 1.3457 3 3 3h11v-9h4zm-6-2H4v-7H14v7zM5 5H25c.5515 0 1 .4482 1 1v3H4v-3c0-.5518.4485-1 1-1zM14 27H5c-.5515 0-1-.4482-1-1v-6H14v7z"></path></svg>`;
export default svgResultCarbonIcon;
