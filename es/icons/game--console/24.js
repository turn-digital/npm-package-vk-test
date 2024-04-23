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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M7.51,26a5.48,5.48,0,0,1-1.44-.19A5.6,5.6,0,0,1,2.19,19l2.33-8.84A5.54,5.54,0,0,1,7.11,6.73a5.43,5.43,0,0,1,4.15-.54A5.52,5.52,0,0,1,14.7,9h2.6a5.49,5.49,0,0,1,3.44-2.81,5.43,5.43,0,0,1,4.15.54,5.57,5.57,0,0,1,2.59,3.41L29.81,19a5.6,5.6,0,0,1-3.89,6.83,5.43,5.43,0,0,1-4.15-.54,5.54,5.54,0,0,1-2.59-3.41L19,21H13l-.23.86a5.54,5.54,0,0,1-2.59,3.41A5.46,5.46,0,0,1,7.51,26ZM9.83,8a3.49,3.49,0,0,0-1.72.46,3.6,3.6,0,0,0-1.66,2.19L4.12,19.49A3.6,3.6,0,0,0,6.6,23.88a3.43,3.43,0,0,0,2.62-.34,3.54,3.54,0,0,0,1.66-2.19L11.5,19h9l.61,2.35a3.58,3.58,0,0,0,1.66,2.19,3.46,3.46,0,0,0,2.63.34,3.58,3.58,0,0,0,2.47-4.39l-2.33-8.84a3.55,3.55,0,0,0-1.65-2.19,3.46,3.46,0,0,0-2.63-.34,3.55,3.55,0,0,0-2.37,2.22l-.24.66h-5.3l-.24-.66a3.56,3.56,0,0,0-2.38-2.22A3.48,3.48,0,0,0,9.83,8Z"></path><path d="M10,16a2,2,0,1,1,2-2A2,2,0,0,1,10,16Zm0-2Z"></path><circle cx="22" cy="12" r="1"></circle><circle cx="22" cy="16" r="1"></circle><circle cx="20" cy="14" r="1"></circle><circle cx="24" cy="14" r="1"></circle></svg>`;
export default svgResultCarbonIcon;