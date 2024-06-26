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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29 23v-2c0-1.6499-1.3501-3-3-3s-3 1.3501-3 3v2c-1.1001 0-2 .8999-2 2v4c0 1.1001.8999 2 2 2h6c1.1001 0 2-.8999 2-2v-4c0-1.1001-.8999-2-2-2zm-4-2c0-.5498.45-1 1-1s1 .4502 1 1v2h-2v-2zm4 8h-6v-4h6v4zM7 22.14v-9.14h-2v9.14c-1.72.45-3 2-3 3.86 0 2.21 1.79 4 4 4 1.86 0 3.41-1.28 3.86-3h8.14v-2h-8.14c-.37-1.4-1.46-2.49-2.86-2.86zm-1 5.86c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM30 6c0-2.21-1.79-4-4-4-1.86 0-3.41 1.28-3.86 3h-9.14v2h9.14c.37 1.4 1.46 2.49 2.86 2.86v5.14h2v-5.14c1.72-.45 3-2 3-3.86zm-4 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path><path d="m10,8.5898V2H2v8h6.5901l10.9958,11,1.4141-1.4141-11-10.9961Zm-2-.5898h-4v-4h4v4Z"></path></svg>`;
export default svgResultCarbonIcon;
