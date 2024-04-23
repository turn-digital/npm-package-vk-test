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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M9 13H11V19H9zM21 13H23V19H21zM13 11H15V24H13zM17 9H19V22H17z"></path><circle cx="22" cy="5" r="2"></circle><circle cx="10" cy="27" r="2"></circle><path d="M22.0916 28h-8.0916v-2h8.0916l5.9082-10-2.6992-4.5679 1.7227-1.0176 2.6992 4.5679c.3701.6274.3701 1.4077 0 2.0352l-5.9092 10c-.3574.6055-1.0176.9824-1.7217.9824zM4.9768 21.5859l-2.6992-4.5684c-.3701-.6274-.3701-1.4077 0-2.0352l5.9092-10c.3584-.606 1.0176-.9824 1.7217-.9824h8.0916v2h-8.0916l-5.9082 10 2.6992 4.5684-1.7227 1.0176z"></path></svg>`;
export default svgResultCarbonIcon;
