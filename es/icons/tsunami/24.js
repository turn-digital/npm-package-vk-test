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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30,26H24A10.0349,10.0349,0,0,1,17.0732,8.7378,11.9629,11.9629,0,0,0,12.9937,8a6.9027,6.9027,0,0,0-6.0308,3.42C4.9966,14.4348,4,19.34,4,26H2c0-7.0542,1.106-12.3274,3.2871-15.6726A8.906,8.906,0,0,1,12.9937,6h.0068a14.762,14.762,0,0,1,6.4619,1.592,1,1,0,0,1,.0869,1.7222A8.0249,8.0249,0,0,0,24,24h6Z"></path></svg>`;
export default svgResultCarbonIcon;
