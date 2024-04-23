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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M31.707 19.2929l-3-3c-.3906-.3906-1.0234-.3906-1.4141 0l-9.293 9.293v4.4141h4.4141l9.293-9.293c.3906-.3906.3906-1.0234 0-1.4141zm-10.1211 8.707h-1.5859v-1.5859l5-5 1.5859 1.5859-5 5zm6.4141-6.4141l-1.5859-1.5859 1.5859-1.5859 1.5859 1.5859-1.5859 1.5859zM16 22c-3.3643 0-6-2.6357-6-6s2.6357-6 6-6 6 2.6357 6 6-2.6357 6-6 6zm0-10c-2.2803 0-4 1.7197-4 4s1.7197 4 4 4 4-1.7197 4-4-1.7197-4-4-4z"></path><path d="m27.5474,12.0005l1.7322-1-2.3354-4.0444c-.3652-.6328-1.0334-1.0005-1.7322-1.0005-.2134,0-.4294.0342-.6406.106l-2.4341.8232c-.418-.2812-.856-.5352-1.312-.7583l-.5037-2.5186c-.187-.9351-1.0078-1.6079-1.9612-1.6079h-4.7207c-.9534,0-1.7742.6729-1.9612,1.6079l-.5037,2.5186c-.459.2246-.9062.4692-1.3267.7534l-2.4194-.8184c-.2112-.0718-.4272-.106-.6406-.106-.6987,0-1.3669.3677-1.7322,1.0005l-2.3606,4.0879c-.4766.8257-.3042,1.873.4119,2.5024l1.9309,1.6968c-.0171.2515-.0381.5015-.0381.7568,0,.2578.0103.5127.0278.7656l-1.9207,1.688c-.7161.6294-.8884,1.6768-.4119,2.5024l2.3606,4.0879c.3652.6328,1.0334,1.0005,1.7322,1.0005.2134,0,.4297-.0342.6406-.106l2.4341-.8232c.418.2817.856.5352,1.312.7583l.5037,2.5186c.187.9351,1.0078,1.6079,1.9612,1.6079h2.3604v-2h-2.3604l-.7102-3.5508c-.9753-.356-1.9026-.9062-2.6948-1.5713l-3.4468,1.166-2.3604-4.0879,2.7253-2.395c-.1838-1.043-.1914-2.083-.0071-3.1279l-2.7183-2.3892,2.3611-4.0879,3.4268,1.1592c.8032-.6763,1.7295-1.2051,2.7141-1.5645l.7102-3.5508h4.7207l.7102,3.5508c.9753.356,1.9023.9062,2.6948,1.5713l3.4468-1.166,2.3352,4.0444Z"></path></svg>`;
export default svgResultCarbonIcon;
