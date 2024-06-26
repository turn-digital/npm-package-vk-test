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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M24 21c-.5 0-1-.2-1.4-.6l-3-3C19.2 17 19 16.5 19 16s.2-1 .6-1.4l3-3C23 11.2 23.5 11 24 11c.5 0 1 .2 1.4.6l3 3C28.8 15 29 15.5 29 16c0 .5-.2 1-.6 1.4l-3 3C25 20.8 24.5 21 24 21zM24 13l-3 3 3 3 3-3L24 13zM16 13c-.5 0-1-.2-1.4-.6l-3-3C11.2 9 11 8.5 11 8s.2-1 .6-1.4l3-3C15 3.2 15.5 3 16 3c.5 0 1 .2 1.4.6l3 3C20.8 7 21 7.5 21 8c0 .5-.2 1-.6 1.4l-3 3C17 12.8 16.5 13 16 13zM16 5l-3 3 3 3 3-3L16 5zM16 29c-.5 0-1-.2-1.4-.6l-3-3C11.2 25 11 24.5 11 24s.2-1 .6-1.4l3-3C15 19.2 15.5 19 16 19c.5 0 1 .2 1.4.6l3 3C20.8 23 21 23.5 21 24c0 .5-.2 1-.6 1.4l-3 3C17 28.8 16.5 29 16 29zM16 21l-3 3 3 3 3-3L16 21zM8 21c-.5 0-1-.2-1.4-.6l-3-3C3.2 17 3 16.5 3 16s.2-1 .6-1.4l3-3C7 11.2 7.5 11 8 11c.5 0 1 .2 1.4.6l3 3C12.8 15 13 15.5 13 16c0 .5-.2 1-.6 1.4l-3 3C9 20.8 8.5 21 8 21zM8 13l-3 3 3 3 3-3L8 13z"></path></svg>`;
export default svgResultCarbonIcon;
