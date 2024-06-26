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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="m23.0002,31c-.0095,0-.0188-.0001-.0283-.0004-.4102-.0115-.7715-.2723-.9116-.6578l-3.1365-8.6252-2.0046,4.6774c-.1577.3677-.519.6061-.9192.6061h-4v-2h3.3406l2.7402-6.3939c.1619-.3772.5479-.6166.9473-.6057.4102.0115.7715.2723.9116.6578l3.1365,8.6252,2.0046-4.6774c.1577-.3677.519-.6061.9192-.6061h4v2h-3.3406l-2.7402,6.3939c-.158.3684-.52.6061-.9189.6061Z"></path><path d="m9,25h-5v-15h24v9h2v-9c0-1.103-.8975-2-2-2h-6V4c0-1.103-.8975-2-2-2h-8c-1.103,0-2,.897-2,2v4h-6c-1.103,0-2,.897-2,2v15c0,1.1025.897,2,2,2h5v-2ZM12,4h8v4h-8V4Z"></path></svg>`;
export default svgResultCarbonIcon;
