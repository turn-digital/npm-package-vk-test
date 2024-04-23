import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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
import styles from "././header.css.js";
import { prefix } from '../../globals/settings';

/**
 * Switcher
 *
 * @element cds-switcher
 */
let CDSSwitcher = _decorate([customElement(`${prefix}-switcher`)], function (_initialize, _LitElement) {
  class CDSSwitcher extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSwitcher,
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
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Required props for accessibility label on the underlying menu
       */

      /**
       * Prop for accessibility labelled by on the underlying menu
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'list');
        }
        _get(_getPrototypeOf(CDSSwitcher.prototype), "connectedCallback", this).call(this);
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
}, LitElement);
export default CDSSwitcher;
//# sourceMappingURL=switcher.js.map
