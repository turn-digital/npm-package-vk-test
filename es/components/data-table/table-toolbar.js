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
import styles from "././data-table.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Table toolbar.
 *
 * @element cds-table-toolbar
 */
let CDSTableToolbar = _decorate([customElement(`${prefix}-table-toolbar`)], function (_initialize, _LitElement) {
  class CDSTableToolbar extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTableToolbar,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Toolbar size
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'section');
        }
        _get(_getPrototypeOf(CDSTableToolbar.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('size')) {
          this.querySelector(this.constructor.selectorToolbarContent).size = this.size;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <slot></slot> `));
      }

      /**
       * The CSS selector to find the toolbar contents
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorToolbarContent",
      value: function selectorToolbarContent() {
        return `${prefix}-table-toolbar-content`;
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
export default CDSTableToolbar;
//# sourceMappingURL=table-toolbar.js.map
