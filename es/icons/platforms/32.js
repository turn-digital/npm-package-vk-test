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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="m28,28H4c-1.1028,0-2-.8972-2-2v-6h2v6h24v-6h2v6c0,1.1028-.8972,2-2,2Z"></path><path d="M17 17v4c0 .5522.4477 1 1 1h4c.5523 0 1-.4478 1-1v-4c0-.5523-.4477-1-1-1h-4c-.5523 0-1 .4477-1 1zm2 1h2v2h-2v-2zM9 17v4c0 .5522.4477 1 1 1h4c.5523 0 1-.4478 1-1v-4c0-.5523-.4477-1-1-1h-4c-.5523 0-1 .4477-1 1zm2 1h2v2h-2v-2zM17 9v4c0 .5522.4477 1 1 1h4c.5523 0 1-.4478 1-1v-4c0-.5523-.4477-1-1-1h-4c-.5523 0-1 .4477-1 1zm2 1h2v2h-2v-2zM5 5v8c0 .5522.4477 1 1 1h8c.5523 0 1-.4478 1-1V5c0-.5523-.4477-1-1-1H6c-.5523 0-1 .4477-1 1zm2 1h6v6h-6v-6z"></path></svg>`;
export default svgResultCarbonIcon;
