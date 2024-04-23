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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<circle cx="15.5" cy="11.5" r="1.5"></circle><circle cx="20.5" cy="15.5" r="1.5"></circle><circle cx="16" cy="16" r="1"></circle><circle cx="16.5" cy="20.5" r="1.5"></circle><circle cx="11.5" cy="16.5" r="1.5"></circle><path d="M28,13v2H25.9492a9.9476,9.9476,0,0,0-2.2143-5.3213l1.4367-1.4365,1.4143,1.4145L28,8.2427,23.7578,4l-1.414,1.4141,1.414,1.414-1.437,1.4365A9.9464,9.9464,0,0,0,17,6.0508V4h2V2H13V4h2V6.0508A9.9464,9.9464,0,0,0,9.6792,8.2646L8.2422,6.8281l1.414-1.414L8.2422,4,4,8.2427l1.4141,1.414L6.8284,8.2422,8.2651,9.6787A9.9476,9.9476,0,0,0,6.0508,15H4V13H2v6H4V17H6.0508a9.9476,9.9476,0,0,0,2.2143,5.3213L6.8284,23.7578,5.4141,22.3433,4,23.7573,8.2422,28l1.414-1.4141-1.414-1.414,1.437-1.4365A9.9464,9.9464,0,0,0,15,25.9492V28H13v2h6V28H17V25.9492a9.9464,9.9464,0,0,0,5.3208-2.2138l1.437,1.4365-1.414,1.414L23.7578,28,28,23.7573l-1.4141-1.414-1.4143,1.4145-1.4367-1.4365A9.9476,9.9476,0,0,0,25.9492,17H28v2h2V13ZM16,24a8,8,0,1,1,8-8A8.0092,8.0092,0,0,1,16,24Z"></path></svg>`;
export default svgResultCarbonIcon;
