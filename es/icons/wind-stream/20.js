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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M25,2,23.5859,3.4141,26.1719,6h-5.09a16.93,16.93,0,0,0-6.3139,1.2158L10.4893,8.9272A14.93,14.93,0,0,1,4.9185,10H2v2H4.9185a16.93,16.93,0,0,0,6.3139-1.2158l4.2783-1.7114A14.93,14.93,0,0,1,21.0815,8h5.09l-2.586,2.5859L25,12l5-5Z"></path><path d="M21,11l-1.4141,1.4141L22.1719,15H18.9014a16.9422,16.9422,0,0,0-5.9693,1.0825l-2.5664.9624A14.9456,14.9456,0,0,1,5.0986,18H2v2H5.0986a16.9422,16.9422,0,0,0,5.9693-1.0825l2.5664-.9624A14.9456,14.9456,0,0,1,18.9014,17h3.2705l-2.586,2.5859L21,21l5-5Z"></path><path d="M17,20l-1.4141,1.4141L18.1719,24H16.5967a16.9879,16.9879,0,0,0-5.3765.8721l-1.0727.3584A14.9852,14.9852,0,0,1,5.4033,26H2v2H5.4033a16.9879,16.9879,0,0,0,5.3765-.8721l1.0727-.3584A14.9852,14.9852,0,0,1,16.5967,26h1.5752l-2.586,2.5859L17,30l5-5Z"></path></svg>`;
export default svgResultCarbonIcon;
