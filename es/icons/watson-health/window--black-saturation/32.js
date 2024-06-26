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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M15 2H17V5H15zM27 15H30V17H27zM15 27H17V30H15zM2 15H5V17H2z"></path><path d="M6.225 5.729H8.228V8.732H6.225z" transform="rotate(-45 7.227 7.23)"></path><path d="M23.267 6.227H26.267V8.227H23.267z" transform="rotate(-45 24.767 7.227)"></path><path d="M23.769 23.269H25.770999999999997V26.270999999999997H23.769z" transform="rotate(-44.999 24.77 24.77)"></path><path d="M5.47 25.126L7.591 23 9 24.419 6.884 26.54 5.47 25.126zM15 13H17V15H15zM19 13H21V15H19zM17 11H19V13H17zM17 15H19V17H17zM17 19H19V21H17zM15 17H17V19H15zM19 17H21V19H19z"></path><path d="M16,7a9,9,0,1,0,9,9A9.01,9.01,0,0,0,16,7ZM9,16a7.004,7.004,0,0,1,6-6.92V11h2V9.08a6.9231,6.9231,0,0,1,2,.605V11h1.89c.0374.0366.074.0732.11.11V13h1.3149a6.931,6.931,0,0,1,.6053,2H21v2h1.92a6.931,6.931,0,0,1-.6053,2H21v1.89c-.0364.0372-.073.0738-.11.11H19v1.3149a6.9231,6.9231,0,0,1-2,.605V21H15v1.92A7.004,7.004,0,0,1,9,16Z"></path></svg>`;
export default svgResultCarbonIcon;
