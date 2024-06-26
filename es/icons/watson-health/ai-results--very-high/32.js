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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M24 2H26V9H24zM25 11a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0025 11zM11 24H21V26H11zM13 28H19V30H13zM23.0488 16a9.6136 9.6136 0 01-1.8711 2.1426C20.1069 19.1348 19 20.1611 19 22h2c0-.9194.5264-1.45 1.5352-2.3857A9.9886 9.9886 0 0025.2815 16zM16 4a7.94 7.94 0 014 1.0825V2.8408A9.9887 9.9887 0 006 12a9.1793 9.1793 0 003.46 7.6162C10.4717 20.5508 11 21.0815 11 22h2c0-1.84-1.1108-2.8662-2.1855-3.8594A7.1851 7.1851 0 018 12 8.0092 8.0092 0 0116 4z"></path></svg>`;
export default svgResultCarbonIcon;
