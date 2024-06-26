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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<switch ><g ><path d="M25 16c0-1.5-1.2-2.8-2.7-3-1.1-2.4-3.5-4-6.3-4-.2 0-.5 0-.7.1C14.7 8.4 13.9 8 13 8c-1.7 0-3 1.3-3 3 0 .4.1.7.2 1.1C9.4 13.2 9 14.5 9 16s.4 2.8 1.2 3.9c-.1.4-.2.7-.2 1.1 0 1.7 1.3 3 3 3 .9 0 1.7-.4 2.3-1.1.2 0 .5.1.7.1 2.8 0 5.2-1.7 6.3-4 1.5-.2 2.7-1.5 2.7-3zm-12-6c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm3-1c0-1.7-1.3-3-3-3-.5 0-1 .1-1.4.4-.4-.7-.6-1.5-.6-2.4s.2-1.7.6-2.4c.4.3.9.4 1.4.4 1.7 0 3-1.3 3-3 1.9 0 3.4 1 4.3 2.5-.8.6-1.3 1.5-1.3 2.5s.5 1.9 1.3 2.5C19.4 20 17.9 21 16 21zm6-4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"></path><path d="M16 31c-.2 0-.3 0-.5-.1l-12-7c-.3-.2-.5-.5-.5-.9V9c0-.4.2-.7.5-.9l12-7c.3-.2.7-.2 1 0l12 7-1 1.7L16 3.2 5 9.6v12.9l11 6.4 11-6.4V15h2v8c0 .4-.2.7-.5.9l-12 7c-.2.1-.3.1-.5.1z"></path><path fill="none" d="M0 0h32v32H0z"></path></g></switch></svg>`;
export default svgResultCarbonIcon;
