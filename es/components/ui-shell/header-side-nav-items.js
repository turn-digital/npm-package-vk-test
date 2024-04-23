import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././side-nav.css.js";

/**
 * Header Side Nav Items section
 *
 * @element cds-header-side-nav-items
 */ /**
     * Header Side Nav Items section
     *
     * @element cds-header-side-nav-items
     */
let CDSHeaderSideNavItems = _decorate([customElement(`${prefix}-header-side-nav-items`)], function (_initialize, _LitElement) {
  class CDSHeaderSideNavItems extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSHeaderSideNavItems,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'has-divider'
      })],
      key: "hasDivider",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Optionally specify if container will have a bottom divider to differentiate
       * between original sidenav items and header menu items. False by default.
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'list');
        }
        _get(_getPrototypeOf(CDSHeaderSideNavItems.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`<slot></slot>`));
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
export default CDSHeaderSideNavItems;
//# sourceMappingURL=header-side-nav-items.js.map
