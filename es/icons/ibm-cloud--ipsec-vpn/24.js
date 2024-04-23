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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M16 29c-.373 0-.7151-.2076-.8872-.5386l-2.0801-4 1.7744-.9229 1.1929 2.2939 4.3127-8.2938 1.7744.9226-5.2 10c-.1721.3311-.5142.5387-.8872.5387zM11 15.2783v-2.2783c0-2.2056-1.7944-4-4-4s-4 1.7944-4 4v2.2783c-.595.3467-1 .9849-1 1.7217v5c0 1.1025.897 2 2 2h6c1.103 0 2-.8975 2-2v-5c0-.7368-.405-1.375-1-1.7217zm-4-4.2783c1.103 0 2 .8975 2 2v2H5v-2c0-1.1025.897-2 2-2zm3 11H4v-5h6v5zM29 2h-9.2773c-.3464-.5952-.9841-1-1.7227-1-1.1045 0-2 .8955-2 2s.8955 2 2 2c.7385 0 1.3762-.4048 1.7227-1h7.6304l-4.1697 8.0186c-.0613-.0059-.1206-.0186-.1833-.0186-1.1045 0-2 .8955-2 2s.8955 2 2 2 2-.8955 2-2c0-.2881-.0635-.5601-.1729-.8076L29.8872 3.4614c.02-.0439.1128-.2104.1128-.4614 0-.5522-.4478-1-1-1zM3 2c-.5522 0-1 .4478-1 1 0 .2509.0929.4177.1128.4614l1.8401 3.5386h2.2542l-1.5601-3H14V2H3z"></path></svg>`;
export default svgResultCarbonIcon;
