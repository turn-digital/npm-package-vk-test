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
  )}" aria-hidden="true" width="24" height="24" viewBox="0 0 32 32">${children}<path d="M30 6v-2h-3v-2h-2v2h-1c-1.1028 0-2 .8975-2 2v2c0 1.1025.8972 2 2 2h4v2h-6v2h3v2h2v-2h1c1.1028 0 2-.8975 2-2v-2c0-1.1025-.8972-2-2-2h-4v-2h6zM24 20v2h2.5859l-3.5857 3.5859-2.2917-2.293c-.1875-.1875-.4419-.293-.707-.293h-.0015c-.2651 0-.5183.1055-.7058.293l-5.2942 5.293 1.4143 1.4141 4.5867-4.5859 2.2917 2.293c.1875.1875.4419.293.7073.293.2651 0 .5195-.1055.707-.293l4.293-4.293v2.5859h2v-6h-6zM4 30h-2v-5c0-3.8599 3.1401-7 7-7h6c1.9885 0 3.8901.8502 5.217 2.3328l-1.4902 1.334c-.948-1.0592-2.3064-1.6667-3.7268-1.6667h-6c-2.7571 0-5 2.243-5 5v5zM12 16c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm0-12c2.7615 0 5 2.2385 5 5s-2.2385 5-5 5-5-2.2385-5-5c.0032-2.7601 2.2399-4.9968 5-5z"></path></svg>`;
export default svgResultCarbonIcon;
