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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M16 2a8 8 0 108 8A8.0092 8.0092 0 0016 2zm5.91 7H19.4724a15.2457 15.2457 0 00-.7917-4.36A6.0088 6.0088 0 0121.91 9zM16.022 15.999h-.0076c-.3813-.1206-1.3091-1.8213-1.479-4.999h2.9292C17.2952 14.1763 16.3711 15.877 16.022 15.999zM14.5354 9c.1694-3.1763 1.0935-4.877 1.4426-4.999h.0076c.3813.1206 1.3091 1.8213 1.479 4.999zM13.3193 4.64A15.2457 15.2457 0 0012.5276 9H10.09A6.0088 6.0088 0 0113.3193 4.64zM10.09 11h2.4373a15.2457 15.2457 0 00.7917 4.36A6.0088 6.0088 0 0110.09 11zm8.59 4.36A15.2457 15.2457 0 0019.4724 11H21.91A6.0088 6.0088 0 0118.6807 15.36zM28 30H4a2.0021 2.0021 0 01-2-2V22a2.0021 2.0021 0 012-2H28a2.0021 2.0021 0 012 2v6A2.0021 2.0021 0 0128 30zM4 22v6H28V22z"></path><circle cx="7" cy="25" r="1"></circle></svg>`;
export default svgResultCarbonIcon;
