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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M28 17H18a2.0025 2.0025 0 00-2 2v6a2.0025 2.0025 0 002 2h4V25H18V19H28v6H25.4648l-2.5937 3.8906L24.5352 30l2-3H28a2.0025 2.0025 0 002-2V19A2.0025 2.0025 0 0028 17zM8.6667 24.1086l.8614-.8615a.8334.8334 0 01.8988-.1844l1.0493.42A.8334.8334 0 0112 24.2561v1.9082a.8334.8334 0 01-.8786.8341c-7.3546-.4578-8.84-6.6863-9.1158-9.0723A.8316.8316 0 012.8343 17H4.7085a.8335.8335 0 01.7737.5238l.42 1.0493a.8332.8332 0 01-.1845.8988l-.8614.8614A4.5267 4.5267 0 008.6667 24.1086zM21 9H28V11H21zM21 5H30V7H21zM17 6L14 8.2V6a2.0024 2.0024 0 00-2-2H4A2.0024 2.0024 0 002 6v6a2.0024 2.0024 0 002 2h8a2.0024 2.0024 0 002-2V9.8L17 12zM4 12V6h8v6z"></path></svg>`;
export default svgResultCarbonIcon;
