import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { prefix } from '../../globals/settings';
import styles from "././structured-list.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Structured list cell.
 *
 * @element cds-structured-list-cell
 */
let CDSStructuredListCell = _decorate([customElement(`${prefix}-structured-list-cell`)], function (_initialize, _LitElement) {
  class CDSStructuredListCell extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSStructuredListCell,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'cell');
        }
        _get(_getPrototypeOf(CDSStructuredListCell.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <slot></slot> `));
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
export default CDSStructuredListCell;
//# sourceMappingURL=structured-list-cell.js.map
