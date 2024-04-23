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
import { prefix } from '../../globals/settings';
import styles from "././data-table.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Data table header.
 *
 * @element cds-table-head
 */
let CDSTableHead = _decorate([customElement(`${prefix}-table-head`)], function (_initialize, _LitElement) {
  class CDSTableHead extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTableHead,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * TODO: Uncomment when Carbon fully implements sticky header
       * Specify whether the header should be sticky.
       * Still experimental: may not work with every combination of table props
       */
      //@property({ type: Boolean, reflect: true, attribute: 'sticky-header' })
      // stickyHeader = false;

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'rowgroup');
        }
        _get(_getPrototypeOf(CDSTableHead.prototype), "connectedCallback", this).call(this);
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
export default CDSTableHead;
//# sourceMappingURL=table-head.js.map
