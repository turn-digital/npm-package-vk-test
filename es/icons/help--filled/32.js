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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,23a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,25Zm1.1421-7.754v2.5014h-2.25V15h2.125a2.3763,2.3763,0,0,0,0-4.7526h-1.5a2.3777,2.3777,0,0,0-2.375,2.375V13.26h-2.25v-.6377A4.6279,4.6279,0,0,1,15.5171,8h1.5a4.6238,4.6238,0,0,1,.125,9.246Z"></path><path fill="none" d="M16,25a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,25Zm1.1421-7.754v2.5014h-2.25V15h2.125a2.3763,2.3763,0,0,0,0-4.7526h-1.5a2.3777,2.3777,0,0,0-2.375,2.375V13.26h-2.25v-.6377A4.6279,4.6279,0,0,1,15.5171,8h1.5a4.6238,4.6238,0,0,1,.125,9.246Z" data-icon-path="inner-path"></path></svg>`;
export default svgResultCarbonIcon;
