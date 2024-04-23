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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24 20L24 24 20 24 20 28 16 28 16 30 22 30 22 26 26 26 26 22 30 22 30 20 24 20zM8 4h8v6c0 1.1025.8972 2 2 2h6v4h2v-6c0-.2651-.1055-.5195-.293-.707l-7-7c-.1875-.1875-.4419-.293-.707-.293H8c-1.1028 0-2 .8975-2 2V28c0 1.1025.8972 2 2 2h4v-2h-4V4zm15.5857 6h-5.5857V4.4141l5.5857 5.5859z"></path></svg>`;
export default svgResultCarbonIcon;
