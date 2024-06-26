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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M2 26H4V28H2zM4 28H6V30H4zM6 30H8V32H6zM6 26H8V28H6zM2 30H4V32H2zM20 26H22V28H20zM22 28H24V30H22zM24 30H26V32H24zM24 26H26V28H24zM20 30H22V32H20zM11 26H13V28H11zM13 28H15V30H13zM15 30H17V32H15zM15 26H17V28H15zM11 30H13V32H11zM29.8439 13.0347a1.517 1.517 0 00-1.23-.8658 5.3552 5.3552 0 01-3.4095-1.7158 6.4655 6.4655 0 01-1.286-6.3926 1.6025 1.6025 0 00-.2989-1.5459 1.4543 1.4543 0 00-1.36-.4931l-.0191.0039a7.7685 7.7685 0 00-5.8847 5.5737A7.3706 7.3706 0 0013.5 7a7.5511 7.5511 0 00-7.1494 5.2441A5.9926 5.9926 0 008 24H19a6.0066 6.0066 0 006-6c0-.0571-.0123-.1113-.0139-.1685a7.5076 7.5076 0 004.7611-3.2768A1.5369 1.5369 0 0029.8439 13.0347zM19 22H8a3.9926 3.9926 0 01-.6733-7.9292l.663-.1128.1456-.6562a5.496 5.496 0 0110.7294 0l.1456.6562.6626.1128A3.9925 3.9925 0 0119 22zm5.5974-6.1289a5.9661 5.9661 0 00-3.948-3.627 7.49 7.49 0 00-2.489-3.58 5.9018 5.9018 0 013.6381-4.4473 8.4577 8.4577 0 001.94 7.5967A7.4007 7.4007 0 0027.64 14.041 5.4487 5.4487 0 0124.5974 15.8711z"></path></svg>`;
export default svgResultCarbonIcon;
