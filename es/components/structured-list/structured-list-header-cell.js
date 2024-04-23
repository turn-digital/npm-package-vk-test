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
 * Structured list header cell.
 *
 * @element cds-structured-list-header-cell
 */
let CDSStructuredListHeaderCell = _decorate([customElement(`${prefix}-structured-list-header-cell`)], function (_initialize, _LitElement) {
  class CDSStructuredListHeaderCell extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSStructuredListHeaderCell,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'columnheader');
        }
        _get(_getPrototypeOf(CDSStructuredListHeaderCell.prototype), "connectedCallback", this).call(this);
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
export default CDSStructuredListHeaderCell;
//# sourceMappingURL=structured-list-header-cell.js.map
