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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">${children}<path d="M2.5 11.5v-.8l1.3-1.4C3.9 9.3 4 9.1 4 9V6.5c0-2.2 1.8-4 4-4 .9 0 1.8.3 2.5.9l.7-.7C10.5 2 9.5 1.6 8.5 1.5v-1h-1v1C5 1.8 3 3.9 3 6.5v2.3l-1.4 1.3c-.1.1-.2.2-.1.4v1H2.5zM13 8.8V6.5c0-.8-.2-1.6-.5-2.2L15 1.7 14.3 1 1 14.3 1.7 15l2.5-2.5h1.3C5.5 13.9 6.6 15 8 15s2.5-1.1 2.5-2.5H14c.3 0 .5-.2.5-.4 0 0 0 0 0-.1v-1.5c0-.1-.1-.3-.1-.4L13 8.8zM8 14c-.8 0-1.5-.7-1.5-1.5h3C9.5 13.3 8.8 14 8 14zM13.5 11.5H5.2L11.7 5C11.9 5.5 12 6 12 6.5V9c0 .1.1.3.1.4l1.4 1.3V11.5z"></path></svg>`;
export default svgResultCarbonIcon;
