import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././header.css.js";

/**
 * Header.
 *
 * @element cds-header-nav
 * @csspart menu-body The menu body.
 * @csspart divider The divider.
 */ /**
     * Header.
     *
     * @element cds-header-nav
     * @csspart menu-body The menu body.
     * @csspart divider The divider.
     */
let CDSHeaderNav = _decorate([customElement(`${prefix}-header-nav`)], function (_initialize, _LitElement) {
  class CDSHeaderNav extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSHeaderNav,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'menu-bar-label'
      })],
      key: "menuBarLabel",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * The `aria-label` attribute for the menu bar UI.
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'navigation');
        }
        _get(_getPrototypeOf(CDSHeaderNav.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          menuBarLabel
        } = this;
        return html(_t || (_t = _`
      <div part="divider" class="${0}-ce--header__divider"></div>
      <ul
        part="menu-body"
        class="${0}--header__menu-bar"
        aria-label="${0}">
        <slot></slot>
      </ul>
    `), prefix, prefix, menuBarLabel);
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }]
  };
}, LitElement);
export default CDSHeaderNav;
//# sourceMappingURL=header-nav.js.map
