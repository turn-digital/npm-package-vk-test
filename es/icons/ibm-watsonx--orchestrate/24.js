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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="m27.9248,19.4282c-1.123,1.6104-2.9641,2.5718-4.9248,2.5718-2.1233,0-4.0464-1.0874-5.1438-2.9092l-1.7129,1.0322c1.4624,2.4277,4.0256,3.877,6.8567,3.877,1.4231,0,2.7925-.3911,3.9922-1.0835-2.3442,3.6958-6.4814,6.0835-10.9922,6.0835-5.7104,0-10.8347-3.8184-12.4617-9.2852l-1.917.5703c1.8774,6.3086,7.79,10.7148,14.3787,10.7148s12.5012-4.4062,14.3787-10.7148l-2.4539-.8569Z"></path><circle cx="30" cy="16" r="2"></circle><circle cx="2" cy="16" r="2"></circle><circle cx="16" cy="16" r="2"></circle><path d="m16,1C9.4114,1,3.4988,5.4062,1.6213,11.7148l2.4539.8569c1.123-1.6104,2.9641-2.5718,4.9248-2.5718s3.8018.9614,4.9248,2.5718l1.6406-1.144c-1.4971-2.1465-3.9514-3.4277-6.5654-3.4277-1.4231,0-2.7925.3911-3.9922,1.0835,2.3442-3.6953,6.4814-6.0835,10.9922-6.0835,5.7104,0,10.8347,3.8184,12.4617,9.2852l1.917-.5703c-1.8774-6.3086-7.79-10.7148-14.3787-10.7148Z"></path></svg>`;
export default svgResultCarbonIcon;
