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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path fill-rule="evenodd" d="M8.5089 15.1845l5.0598 2.4675c.9733.4747.8229 1.9059-.2278 2.1679l-5.4618 1.3619c-.6813.1699-1.3541-.3002-1.4345-.9977-.1719-1.492-.0021-2.9655.4564-4.3296.2227-.6625.9797-.9764 1.6079-.67zM10.5348 25.6004l3.7659-4.1831c.7245-.8048 2.0589-.2657 2.0211.8165l-.1964 5.6273c-.0245.7012-.6613 1.2203-1.3532 1.1041-1.4551-.2444-2.8315-.8069-4.0331-1.6322-.5775-.3967-.6731-1.212-.2043-1.7327zM19.464 20.0339l5.3529 1.7396c.6663.2165.9912.9705.6894 1.6027-.6279 1.3155-1.5387 2.4909-2.6766 3.4301-.5412.4466-1.3521.3154-1.724-.2796l-2.9838-4.7752c-.5738-.9184.3123-2.0524 1.3421-1.7177zM24.9076 16.619l-5.411 1.5515c-1.0409.2984-1.8868-.8658-1.2812-1.7636l3.1481-4.6668c.3909-.5795 1.2034-.6861 1.7275-.2237 1.0791.9521 1.9628 2.1433 2.56 3.5214.2792.6443-.0685 1.3877-.7434 1.5813zM12.2638 3.4886c-.9739.2609-1.903.6058-2.7815 1.0247-.6096.2907-.8399 1.0415-.5022 1.6264l5.2887 9.1604c.5934 1.0277 2.1643.6067 2.1643-.5799V4.1427c0-.6754-.5749-1.2105-1.2481-1.1574-.9703.0765-1.9474.2424-2.9212.5033z"></path></svg>`;
export default svgResultCarbonIcon;
