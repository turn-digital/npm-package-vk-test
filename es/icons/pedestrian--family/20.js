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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M20 30H17a2.0021 2.0021 0 01-2-2V23h2v5h3V23h2V19a1.0011 1.0011 0 00-1-1H12.2793l-2-6H4a1.0011 1.0011 0 00-1 1v6H5v9H9V21h2v7a2.0021 2.0021 0 01-2 2H5a2.0021 2.0021 0 01-2-2V21a2.0021 2.0021 0 01-2-2V13a3.0033 3.0033 0 013-3h6.2793a1.998 1.998 0 011.8975 1.3674L13.7207 16H21a3.0033 3.0033 0 013 3v4a2.0021 2.0021 0 01-2 2v3A2.0021 2.0021 0 0120 30zM28 30H26V19h3V13a1.0011 1.0011 0 00-1-1H24V10h4a3.0033 3.0033 0 013 3v6a2.0021 2.0021 0 01-2 2H28zM7 9a4 4 0 114-4A4.0045 4.0045 0 017 9zM7 3A2 2 0 109 5 2.0021 2.0021 0 007 3zM25 9a4 4 0 114-4A4.0045 4.0045 0 0125 9zm0-6a2 2 0 102 2A2.0021 2.0021 0 0025 3z"></path><path d="M18.5,15A3.5,3.5,0,1,1,22,11.5,3.5041,3.5041,0,0,1,18.5,15Zm0-5A1.5,1.5,0,1,0,20,11.5,1.5017,1.5017,0,0,0,18.5,10Z"></path></svg>`;
export default svgResultCarbonIcon;
