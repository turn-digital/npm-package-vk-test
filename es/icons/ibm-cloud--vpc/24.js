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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="m23.4141,22l-13.4141-13.4141V2H2v8h6.5859l13.4141,13.4141v6.5859h8v-8h-6.5859ZM8,8h-4V4h4v4Zm20,20h-4v-4h4v4Z"></path><path d="M30 6c0-2.2056-1.7944-4-4-4-1.8584 0-3.4106 1.2798-3.8579 3h-9.1421v2h9.1421c.3638 1.3989 1.4592 2.4941 2.8579 2.8579v9.1421h2v-9.1421c1.7202-.4473 3-1.9995 3-3.8579zm-4 2c-1.103 0-2-.8975-2-2s.897-2 2-2 2 .8975 2 2-.897 2-2 2zM19 25h-9.1421c-.3638-1.3989-1.4592-2.4941-2.8579-2.8579v-9.1421h-2v9.1421c-1.7202.4473-3 1.9995-3 3.8579 0 2.2056 1.7944 4 4 4 1.8584 0 3.4106-1.2798 3.8579-3h9.1421v-2zm-13 3c-1.103 0-2-.8975-2-2s.897-2 2-2 2 .8975 2 2-.897 2-2 2z"></path></svg>`;
export default svgResultCarbonIcon;
