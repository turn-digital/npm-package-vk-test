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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M29.391,14.527L17.473,2.609C17.067,2.203,16.533,2,16,2s-1.067,0.203-1.473,0.609L2.609,14.527C2.203,14.933,2,15.466,2,16	s0.203,1.067,0.609,1.473l11.917,11.917C14.933,29.797,15.467,30,16,30s1.067-0.203,1.473-0.609l11.917-11.917	C29.797,17.067,30,16.534,30,16S29.797,14.933,29.391,14.527z M21,18H11v-4h10V18z"></path><path fill="none" d="M11 14H21V18H11z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;
