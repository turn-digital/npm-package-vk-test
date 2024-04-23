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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M24 28H30V30H24z"></path><circle cx="21" cy="29" r="1"></circle><circle cx="29" cy="25" r="1"></circle><path d="M20 24H26V26H20z" transform="rotate(-180 23 25)"></path><path d="M24 20H30V22H24z"></path><circle cx="21" cy="21" r="1"></circle><path d="M21.4927,14.1299l-8.5-4.8149c-.3057-.1729-.6797-.1729-.9854,0L3.5073,14.1299c-.3135,.1777-.5073,.5098-.5073,.8701v10c0,.3604,.1938,.6924,.5073,.8701l8.5,4.8149,.9854-1.7402-7.9927-4.5278V15.583l7.5-4.2485,7.5,4.2485v2.417h2v-3c0-.3604-.1938-.6924-.5073-.8701Z"></path><path d="M25,15h2V7c0-.3604-.1938-.6924-.5073-.8701L17.9927,1.3149c-.3057-.1729-.6797-.1729-.9854,0L8.5074,6.1299l.9854,1.7402L17.5,3.3345l7.5,4.2485v7.417Z"></path></svg>`;
export default svgResultCarbonIcon;
