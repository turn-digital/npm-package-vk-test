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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M2 26H4V28H2zM4 28H6V30H4zM6 30H8V32H6zM6 26H8V28H6zM2 30H4V32H2zM20 26H22V28H20zM22 28H24V30H22zM24 30H26V32H24zM24 26H26V28H24zM20 30H22V32H20zM11 26H13V28H11zM13 28H15V30H13zM15 30H17V32H15zM15 26H17V28H15zM11 30H13V32H11zM20 0H22V3H20zM29 10.001H32V12.001H29z"></path><path d="M26.732 3.768H29.732V5.768H26.732z" transform="rotate(-45 28.232 4.768)"></path><path d="M26.732 16.233H29.732V18.233H26.732z" transform="rotate(-135 28.232 17.233)"></path><path d="M12.268 3.768H15.268V5.768H12.268z" transform="rotate(-135 13.768 4.768)"></path><path d="M27,11A5.9852,5.9852,0,0,0,16.1431,7.5083,7.3737,7.3737,0,0,0,13.5,7a7.5511,7.5511,0,0,0-7.1494,5.2441A5.9926,5.9926,0,0,0,8,24H19a5.9672,5.9672,0,0,0,5.5667-8.2A5.9722,5.9722,0,0,0,27,11ZM19,22H8a3.9926,3.9926,0,0,1-.6733-7.9292l.663-.1128.1456-.6562a5.496,5.496,0,0,1,10.7294,0l.1456.6562.6626.1128A3.9925,3.9925,0,0,1,19,22Zm4.5222-7.9131a5.9592,5.9592,0,0,0-2.8728-1.8428,7.5212,7.5212,0,0,0-2.7224-3.78,3.9869,3.9869,0,1,1,5.5952,5.6225Z"></path></svg>`;
export default svgResultCarbonIcon;
