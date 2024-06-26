/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { svg } from 'lit';
import spread from '../../../globals/directives/spread';
const svgResultCarbonIcon = ({ children, ...attrs } = {}) =>
  svg`<svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" ...="${spread(
    attrs
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M28 30H22V26a2.002 2.002 0 012-2h2V22H22V20h4a2.0023 2.0023 0 012 2v2a2.0023 2.0023 0 01-2 2H24v2h4zM28 16h2A14 14 0 0016 2V4A12 12 0 0128 16z"></path><path d="M26 16A10 10 0 0016 6V16zM16 28A11.96 11.96 0 015.416 21.6548c-.0664-.127-.133-.2534-.1953-.3843-.0547-.1123-.106-.227-.1572-.3413A13.1207 13.1207 0 014.19 18l-1.9677.4131A13.9173 13.9173 0 002.7 20.2993l-.0251.0083A13.9615 13.9615 0 0016 30zM5.5913 10L3.86 9a14.14 14.14 0 00-1.6382 4.5872l1.9677.3469A12.1519 12.1519 0 015.5913 10zM11.8164 4.7646L11.1328 2.887A13.976 13.976 0 006.9507 5.3278L8.2358 6.8593A11.9729 11.9729 0 0111.8164 4.7646z"></path></svg>`;
export default svgResultCarbonIcon;
