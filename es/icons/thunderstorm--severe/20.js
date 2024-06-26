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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M21 30a1 1 0 01-.8944-1.4474l2-4.0005a1 1 0 111.7887.8947l-2 4A.9981.9981 0 0121 30zM9 32a1 1 0 01-.8944-1.4474l2-4.0005a1 1 0 111.7887.8947l-2 4A.9981.9981 0 019 32zM15.901 30.496L14.165 29.504 17.309 24 11.31 24 16.165 15.504 17.901 16.496 14.756 22 20.757 22 15.901 30.496zM27.9516 15A4.399 4.399 0 0128 15.5 4.5049 4.5049 0 0123.5 20H23v2h.5A6.5075 6.5075 0 0030 15.5c0-.17-.0312-.333-.0444-.5z"></path><path fill="none" d="M25.75,8h-1.5V4h1.5ZM25,9a1,1,0,1,0,1,1A1,1,0,0,0,25,9Z"></path><path d="M31.9115 11.9355L25.6283.3706a.7181.7181 0 00-1.2568 0L18.0883 11.9355A.72.72 0 0018.72 13H31.28A.72.72 0 0031.9115 11.9355zM24.25 4h1.5V8h-1.5zM25 11a1 1 0 111-1A1 1 0 0125 11zM8.144 11.019l.8154-.0639.0991-.812a6.9863 6.9863 0 019.97-5.45L20 2.9468A8.9777 8.9777 0 007.2 9.1362 6.4929 6.4929 0 007.43 21.9043L6.1059 24.5527a1 1 0 101.7885.8946l2-4a1 1 0 00-.4471-1.3418A.9786.9786 0 009 20.01V20H8.5a4.4975 4.4975 0 01-.3559-8.981z"></path></svg>`;
export default svgResultCarbonIcon;
