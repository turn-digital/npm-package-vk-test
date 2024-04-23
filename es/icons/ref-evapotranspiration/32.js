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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M14 12a3.8978 3.8978 0 01-4-3.777 3.9017 3.9017 0 01.6533-2.0639L13.17 2.4141a1.0381 1.0381 0 011.6592 0L17.3154 6.11A3.9693 3.9693 0 0118 8.223 3.8978 3.8978 0 0114 12zm.0005-7.2368L12.3438 7.2257A1.89 1.89 0 0012 8.223 1.9 1.9 0 0014 10a1.9 1.9 0 002-1.777 1.98 1.98 0 00-.375-1.0466zM7.5 26A5.385 5.385 0 012 20.751 5.3837 5.3837 0 012.874 17.92L6.49 12.5383a1.2168 1.2168 0 012.02-.0006l3.55 5.2777A5.4923 5.4923 0 0113 20.751 5.385 5.385 0 017.5 26zm0-11.38L4.5649 18.9868A3.3586 3.3586 0 004 20.751 3.3855 3.3855 0 007.5 24 3.3855 3.3855 0 0011 20.751a3.4354 3.4354 0 00-.63-1.867zM25 2L20 7l1.4141 1.4141L24 5.8281V16a4.0045 4.0045 0 01-4 4H16v2h4a6.0066 6.0066 0 006-6V5.8281l2.5859 2.586L30 7zM2 28H30V30H2z"></path></svg>`;
export default svgResultCarbonIcon;
