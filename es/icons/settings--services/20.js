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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M29,25H27V23h1V19H24v1H22V18a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v6A1,1,0,0,1,29,25Z"></path><path d="M24 30H18a1 1 0 01-1-1V23a1 1 0 011-1h6a1 1 0 011 1v6A1 1 0 0124 30zm-5-2h4V24H19zM15 19.8579A3.9934 3.9934 0 1120 16h2a6 6 0 10-7 5.91z"></path><path d="M28.89,13.55l-2.31,2.03-1.42-1.42,2.41-2.12L25.21,7.96,21.77,9.12a9.3684,9.3684,0,0,0-2.7-1.57L18.36,4H13.64l-.71,3.55a8.8609,8.8609,0,0,0-2.71,1.57L6.79,7.96,4.43,12.04l2.72,2.39a8.8948,8.8948,0,0,0,0,3.13l-2.72,2.4,2.36,4.08,3.44-1.16a9.3684,9.3684,0,0,0,2.7,1.57L13.64,28H15v2H13.64a2.0007,2.0007,0,0,1-1.96-1.61l-.51-2.52a11.412,11.412,0,0,1-1.31-.75l-2.43.82a2.038,2.038,0,0,1-.64.1,1.973,1.973,0,0,1-1.73-1L2.7,20.96a2,2,0,0,1,.41-2.51l1.92-1.68C5.01,16.51,5,16.26,5,16s.02-.51.04-.76L3.11,13.55a2,2,0,0,1-.41-2.51L5.06,6.96a1.973,1.973,0,0,1,1.73-1,2.038,2.038,0,0,1,.64.1l2.42.82a11.5416,11.5416,0,0,1,1.32-.75l.51-2.52A2.0007,2.0007,0,0,1,13.64,2h4.72a2.0007,2.0007,0,0,1,1.96,1.61l.51,2.52a11.412,11.412,0,0,1,1.31.75l2.43-.82a2.038,2.038,0,0,1,.64-.1,1.973,1.973,0,0,1,1.73,1l2.36,4.08A2,2,0,0,1,28.89,13.55Z"></path></svg>`;
export default svgResultCarbonIcon;
