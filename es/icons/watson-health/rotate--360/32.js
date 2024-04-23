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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M25.95,7.65l.0047-.0039c-.0918-.1094-.197-.2061-.2925-.3125-.1841-.2051-.3672-.41-.5635-.603-.1382-.1358-.2856-.2613-.43-.3907-.1831-.1645-.3657-.3286-.5581-.4824-.1592-.1279-.3244-.2466-.4895-.3667-.1921-.14-.3855-.2768-.5854-.4062-.1743-.1128-.3523-.2188-.5322-.3238q-.3081-.1786-.6253-.3408c-.1846-.0942-.37-.1846-.56-.27-.2224-.1-.449-.1914-.678-.2793-.1894-.0723-.3777-.1455-.5713-.209-.2463-.0815-.498-.1494-.7507-.2163-.1848-.0493-.3674-.1025-.5554-.1431-.29-.0634-.5865-.1074-.8833-.1508-.159-.023-.3145-.0552-.4754-.0728A12.9331,12.9331,0,0,0,6,7.7031V4H4v8h8V10H6.8115A10.961,10.961,0,0,1,16,5a11.1114,11.1114,0,0,1,1.189.0669c.1362.0146.268.042.4026.0615.2509.0366.5014.0742.7468.1275.1592.0346.3144.08.4712.1215.2131.0562.4258.1138.6335.1822.1643.0547.325.1167.4859.1782.1926.0742.3835.1509.5705.2349.1611.0727.3193.15.4763.23q.2677.1363.5262.2867c.153.0893.3046.18.4531.2758.1679.1089.3308.2242.4922.3413.1406.1026.2817.2037.417.3125.1616.1294.3156.2676.47.4063.1225.11.2478.2168.3652.332.1668.1636.3223.3379.4785.5117A10.9928,10.9928,0,1,1,5,16H3A13,13,0,1,0,25.95,7.65Z"></path></svg>`;
export default svgResultCarbonIcon;