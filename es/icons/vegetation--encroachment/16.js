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
  )}" aria-hidden="true" width="16" height="16" viewBox="0 0 32 32">${children}<path d="M19 20h7v-2h-9v10c.0015 1.104.896 1.9985 2 2h3v-2h-3v-8zM12 30h-3v-2h3v-12.4336l-3.5146-2.1089 1.0292-1.7148 3.5147 2.1084c.6007.3632.9686 1.0133.9707 1.7153v12.4336c-.0013 1.104-.896 1.9987-2 2zM30 6.4102L28.59 5 25 8.5898 21.41 5 20 6.4102 23.59 10 20 13.5898 21.41 15 25 11.4102 28.59 15 30 13.5898 26.41 10 30 6.4102z"></path><path d="m17.3079,2.2852c-.7283-.1821-1.4995-.2852-2.3079-.2852-2.8545.0083-5.4897,1.5317-6.9214,4.001-.0261-.001-.0522-.001-.0786-.001-3.3137,0-6,2.6865-6,6s2.6863,6,6,6v-2c-2.209,0-4-1.791-4-4s1.791-4,4-4c.1299.0039.259.0166.387.0391l.863.1143.3086-.6675c.9834-2.1196,3.1047-3.4785,5.4414-3.4858.6079,0,1.1819.0854,1.731.2148l.5769-1.9297Z"></path></svg>`;
export default svgResultCarbonIcon;
