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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path stroke-width="0" d="m29.51,17.69l-6-3.55c-.16-.09-.33-.14-.51-.14s-.35.05-.51.14l-6,3.55c-.3.18-.49.51-.49.86v6.9c0,.35.19.68.49.86l6,3.55c.16.09.33.14.51.14s.35-.05.51-.14l6-3.55c.3-.18.49-.51.49-.86v-6.9c0-.35-.19-.68-.49-.86Zm-1.51,7.19l-5,2.96-5-2.96v-5.76l5-2.96,5,2.96v5.76Z"></path><path stroke-width="0" d="m23.4,4.47c-.65,0-1.28.09-1.88.27-1.06-1.36-2.68-2.17-4.4-2.17-1.17,0-2.28.36-3.22,1.03-1.11-1.02-2.57-1.6-4.09-1.6h-.01c-1.62,0-3.14.63-4.29,1.78-1.14,1.14-1.76,2.65-1.76,4.25,0,.56.08,1.1.23,1.63-1.24,1.02-1.98,2.55-1.97,4.18,0,2.97,2.39,5.39,5.34,5.39h.28c.98,1.81,2.89,2.98,4.99,2.98h0c.47,0,.94-.06,1.38-.17v-2.11c-.43.18-.9.28-1.38.28h0c-1.53,0-2.92-.97-3.44-2.4l-.3-.81-.84.17c-.23.05-.46.07-.69.07-1.84,0-3.34-1.53-3.34-3.4,0-1.2.64-2.33,1.68-2.94l.77-.45-.36-.82c-.23-.51-.34-1.05-.34-1.61,0-1.07.41-2.07,1.17-2.83.77-.77,1.79-1.19,2.87-1.19h0c1.25,0,2.46.6,3.22,1.59l.6.79,1.2-.96c.65-.55,1.46-.85,2.3-.85,1.29,0,2.49.72,3.14,1.87l.45.8.83-.38c.58-.26,1.21-.39,1.86-.39,2.54,0,4.6,2.09,4.6,4.65,0,1.07-.37,2.04-.98,2.83l1.75,1.01c.77-1.09,1.22-2.41,1.22-3.84,0-3.67-2.96-6.65-6.6-6.65h.01Z"></path></svg>`;
export default svgResultCarbonIcon;