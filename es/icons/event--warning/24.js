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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M27.3803 28h-6.7625l3.3822-6.7642 3.3803 6.7642zm-3.3803-10c-.3915 0-.7305.2251-.8947.5527l-5 10c-.0674.1348-.1053.2866-.1053.4473 0 .5522.4477 1 1 1h10c.5523 0 1-.4478 1-1 0-.1382-.028-.2695-.0786-.3892l-5.0269-10.0581c-.1641-.3276-.5031-.5527-.8946-.5527h0zM16 23c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5h0zM15 12H17V21H15z"></path><path d="m15,30H3c-.3494,0-.6736-.1824-.8547-.4811-.1814-.2986-.1936-.6703-.0325-.9802L15.1128,3.5387c.1721-.3311.5297-.5387.8872-.5387s.7151.2076.8872.5387l6,11.5385-1.7744.9226-5.1128-9.8322L4.6472,28h10.3528v2Z"></path></svg>`;
export default svgResultCarbonIcon;
