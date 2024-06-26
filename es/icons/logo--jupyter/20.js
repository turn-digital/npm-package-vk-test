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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M26.0766 3.5878a1.69 1.69 0 11-1.76-1.5853 1.67 1.67 0 011.76 1.5853zM16.2191 23.1113c-4.4866 0-8.43-1.61-10.4688-3.9882a11.1618 11.1618 0 0020.9377 0C24.6541 21.5011 20.7257 23.1113 16.2191 23.1113zM16.2191 7.6483c4.4867 0 8.43 1.61 10.4689 3.9881a11.1618 11.1618 0 00-20.9377 0C7.7892 9.2535 11.7126 7.6483 16.2191 7.6483zM10.0427 27.7388a2.1085 2.1085 0 11-.2031-.7976 2.1278 2.1278 0 01.2031.7976zM6.26 7.1064A1.2263 1.2263 0 117.4517 5.83 1.2415 1.2415 0 016.26 7.1064z"></path></svg>`;
export default svgResultCarbonIcon;
