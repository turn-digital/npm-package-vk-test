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
  )}" aria-hidden="true" width="20" height="20" viewBox="0 0 32 32">${children}<path d="M17 15H19V22H17z"></path><circle cx="18" cy="25" r="1.25"></circle><path d="M29 30H7c-.3499 0-.6743-.1829-.8555-.4823s-.1926-.6718-.0303-.9817L17.1143 7.536c.1726-.3296.5292-.536.8857-.536s.7131.2064.8857.536l11 21c.1624.3099.1509.6823-.0303.9817s-.5056.4823-.8555.4823zm-20.3474-2h18.6948l-9.3474-17.8448-9.3474 17.8448zM7 23H3c-.3467 0-.6685-.1794-.8506-.4742-.1824-.2948-.1987-.663-.0439-.973l2.5-5 1.7891.8945-1.7766 3.5527h2.3821v2z"></path><path d="M4.955 11.5H10.545V13.5H4.955z" transform="rotate(-63.435 7.75 12.5)"></path><path d="m10.8945,8.4473l-1.7891-.8945,2.5-5c.1694-.3387.532-.5527.8945-.5527s.7251.214.8945.5527l2,4-1.7891.8945-1.1055-2.2112-1.6055,3.2112Z"></path></svg>`;
export default svgResultCarbonIcon;
