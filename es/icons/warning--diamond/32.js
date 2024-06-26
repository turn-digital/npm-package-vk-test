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
  )}" aria-hidden="true" width="32" height="32" viewBox="0 0 32 32">${children}<path d="M16 20c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5h0zM15 9H17V18H15z"></path><path d="m16,30c-.5335,0-1.0672-.2031-1.4732-.6094L2.6094,17.4732c-.8126-.8123-.8126-2.1342,0-2.9465L14.5268,2.6094c.8121-.8126,2.1344-.8126,2.9465,0l11.9173,11.9173c.8126.8123.8126,2.1342,0,2.9465l-11.9173,11.9173c-.406.4063-.9398.6094-1.4732.6094Zm0-26.0008c-.0215,0-.0427.0083-.0591.0244L4.0236,15.9409c-.0325.0327-.0325.0855,0,.1182l11.9173,11.9173c.0327.0322.0855.0322.1182,0l11.9173-11.9173c.0325-.0327.0325-.0855,0-.1182l-11.9173-11.9173c-.0164-.0161-.0376-.0244-.0591-.0244Z"></path></svg>`;
export default svgResultCarbonIcon;
