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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<circle cx="29" cy="5" r="2"></circle><circle cx="29" cy="27" r="2"></circle><path d="m7,13H1v6h6v-6Zm-2,4h-2v-2h2v2Z"></path><path d="m17.4999,6.6774c-1.316-1.67-3.3437-2.6774-5.4999-2.6774-2.4907,0-4.8135,1.3403-6.063,3.499l-1.1655,2.0186,1.7324,1,1.165-2.0176c.8921-1.542,2.5518-2.5,4.3311-2.5s3.439.958,4.3311,2.4995c.0048.0082.011.0154.0158.0236l-1.9328,3.348c-1.1128,1.9282-3.188,3.1274-5.415,3.1289l.001,1-.001,1c2.2271.002,4.3022,1.2002,5.415,3.1289l1.9326,3.347c-.0049.0084-.0112.0156-.0161.024-.8916,1.542-2.5513,2.5-4.3306,2.5s-3.439-.958-4.3306-2.499l-1.165-2.0186-1.7324,1,1.1655,2.0195c1.249,2.1572,3.5718,3.498,6.0625,3.498,2.1555,0,4.1829-1.0075,5.5004-2.6772,1.3154,1.6699,3.3427,2.6772,5.4996,2.6772h2v-2h-2c-1.7387,0-3.3566-.918-4.2612-2.3972.9349-1.003,2.254-1.6018,3.6547-1.6018h2.6064v-2h-2.6064c-1.7564,0-3.4199.6761-4.6906,1.824l-1.5565-2.6961c-.7776-1.3467-1.9164-2.4129-3.2465-3.1289,1.3301-.716,2.4688-1.7822,3.2465-3.1289l1.5565-2.6962c1.2706,1.1483,2.9341,1.8246,4.6906,1.8246h2.6064v-2h-2.6064c-1.4005,0-2.7194-.5986-3.6552-1.6017.9044-1.4795,2.5226-2.3978,4.2616-2.3978h2v-2h-2c-2.157,0-4.1844,1.0074-5.5001,2.6774Z"></path></svg>`;
export default svgResultCarbonIcon;