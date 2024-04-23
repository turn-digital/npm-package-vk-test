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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M29.5081 22.2549l-2.0781-3.7402-1.7485.9707 2.0781 3.7412c.3247.584.3162 1.2769-.0229 1.8535-.3391.5762-.9407.9199-1.6091.9199h-7.2974l2.5801-2.5898-1.4102-1.4102-5 5 5 5 1.4102-1.4102-2.5801-2.5898h7.2974c1.3848 0 2.6306-.7124 3.3328-1.9058.7024-1.1938.7202-2.6284.0479-3.8394zM5.8726 26c-.6685 0-1.27-.3438-1.6091-.9199-.3391-.5767-.3477-1.2695-.0229-1.8535l4.1111-7.4004 1.0479 3.52 1.9121-.5664-2.0083-6.7798-6.7798 2.0083.5664 1.9121 3.4934-1.0298-4.0913 7.3643c-.6724 1.2109-.6545 2.6455.0479 3.8394.7021 1.1934 1.948 1.9058 3.3328 1.9058h6.1274v-2H5.8726zM25.51 9.6538l-1.0476 3.519L19.3503 3.9712c-.6858-1.2344-1.9382-1.9712-3.3503-1.9712s-2.6646.7368-3.3503 1.9712l-3.0796 5.5435 1.7485.9707 3.0796-5.543c.3276-.5898.9265-.9424 1.6018-.9424s1.2742.3525 1.6018.9424l5.0925 9.167-3.4939-1.0298-.5664 1.9121 6.78 2.0083 2.0083-6.7798-1.9124-.5664z"></path></svg>`;
export default svgResultCarbonIcon;