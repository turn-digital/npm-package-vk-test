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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path stroke-width="0" d="M13 27h-3c-3.8599 0-7-3.1401-7-7v-2h2v2c0 2.7568 2.2432 5 5 5h3v2zM25 27h-4c-1.1025 0-2-.8975-2-2v-4c0-1.1025.8975-2 2-2h4c1.1025 0 2 .8975 2 2v4c0 1.1025-.8975 2-2 2zm-4-6h-.002l.002 4h4v-4h-4zM25 15H27V17H25zM29 19H31V21H29zM29 23H31V25H29zM15 21H17V23H15zM15 25H17V27H15zM15 29H17V31H15zM19 29H21V31H19zM27 13v-2c0-3.8599-3.1401-7-7-7h-7v2h7c2.7568 0 5 2.2432 5 5v2h2zM10 8V4c0-1.1046-.8954-2-2-2H2v13h2v-5h1.48l2.34 5h2.18l-2.33-5h.33c1.1046 0 2-.8954 2-2zM4 4h4v4h-4V4z"></path></svg>`;
export default svgResultCarbonIcon;
