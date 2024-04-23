import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2;
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
import FocusMixin from '../../globals/mixins/focus';
import { OVERFLOW_MENU_SIZE } from './defs';
import styles from "././overflow-menu.css.js";

/**
 * Overflow menu item.
 *
 * @element cds-overflow-menu-item
 */ /**
     * Overflow menu item.
     *
     * @element cds-overflow-menu-item
     */
let CDSOverflowMenuItem = _decorate([customElement(`${prefix}-overflow-menu-item`)], function (_initialize, _FocusMixin) {
  class CDSOverflowMenuItem extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSOverflowMenuItem,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "danger",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "divider",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "href",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return OVERFLOW_MENU_SIZE.MEDIUM;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` if the action is danger.
       */

      /**
       * `true` if the overflow menu item should be disabled.
       */

      /**
       * `true` if the item has a divider
       */

      /**
       * The link href of the overflow menu item.
       */

      /**
       * The size of the overflow menu item.
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'menuitem');
        }
        _get(_getPrototypeOf(CDSOverflowMenuItem.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return this.href ? html(_t || (_t = _`
          <a
            class="${0}--overflow-menu-options__btn"
            ?disabled=${0}
            href="${0}"
            tabindex="-1">
            <div class="${0}--overflow-menu-options__option-content">
              <slot></slot>
            </div>
          </a>
        `), prefix, this.disabled, this.href, prefix) : html(_t2 || (_t2 = _`
          <button
            class="${0}--overflow-menu-options__btn"
            ?disabled=${0}
            tabindex="-1">
            <div class="${0}--overflow-menu-options__option-content">
              <slot></slot>
            </div>
          </button>
        `), prefix, this.disabled, prefix);
      }
    }, {
      kind: "field",
      static: true,
      key: "shadowRootOptions",
      value() {
        return _objectSpread(_objectSpread({}, LitElement.shadowRootOptions), {}, {
          delegatesFocus: true
        });
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
}, FocusMixin(LitElement));
export default CDSOverflowMenuItem;
//# sourceMappingURL=overflow-menu-item.js.map
