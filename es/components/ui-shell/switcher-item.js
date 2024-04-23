import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././header.css.js";

/**
 * Switcher menu item.
 *
 * @element cds-switcher-item
 */ /**
     * Switcher menu item.
     *
     * @element cds-switcher-item
     */
let CDSSwitcherItem = _decorate([customElement(`${prefix}-switcher-item`)], function (_initialize, _FocusMixin) {
  class CDSSwitcherItem extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSwitcherItem,
    d: [{
      kind: "field",
      decorators: [property({
        type: String,
        attribute: 'aria-label'
      })],
      key: "ariaLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        attribute: 'aria-labelledby'
      })],
      key: "ariaLabelledBy",
      value: void 0
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
        type: Boolean,
        reflect: true
      })],
      key: "selected",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        reflect: true,
        attribute: 'tab-index'
      })],
      key: "tabIndex",
      value() {
        return 0;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Required props for accessibility label
       */

      /**
       * Props for accessibility labelled by
       */

      /**
       * Link `href`.
       */

      /**
       * Specify if this is a large variation of the side nav link
       */

      /**
       * Specify if this is a large variation of the side nav link
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'listitem');
        }
        _get(_getPrototypeOf(CDSSwitcherItem.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          href,
          selected,
          ariaLabel,
          ariaLabelledBy,
          tabIndex
        } = this;
        const classes = classMap({
          [`${prefix}--switcher__item-link`]: true,
          [`${prefix}--switcher__item-link--selected`]: selected
        });
        return html(_t || (_t = _`
      <a
        part="link"
        aria-label="${0}"
        aria-labelledby="${0}"
        tabindex="${0}"
        class="${0}"
        href="${0}">
        <slot></slot>
      </a>
    `), ariaLabel, ariaLabelledBy, tabIndex, classes, href);
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
export default CDSSwitcherItem;
//# sourceMappingURL=switcher-item.js.map
