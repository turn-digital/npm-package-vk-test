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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M27.3803 28h-6.7625l3.3822-6.7642 3.3803 6.7642zm-3.3803-10c-.3915 0-.7305.2251-.8947.5527l-5 10c-.0674.1348-.1053.2866-.1053.4473 0 .5522.4477 1 1 1h10c.5523 0 1-.4478 1-1 0-.1382-.028-.2695-.0786-.3892l-5.0269-10.0581c-.1641-.3276-.5031-.5527-.8946-.5527h0zM15 28h-6V8h14v7h2V4c0-1.103-.8975-2-2-2h-14c-1.103 0-2 .897-2 2v24c0 1.1025.897 2 2 2h6v-2zM9 4h14v2h-14v-2z"></path></svg>`;
export default svgResultCarbonIcon;
