import _decorate from "@babel/runtime/helpers/esm/decorate";
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
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././data-table.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
/**
 * Table row of collapsible details.
 *
 * @element cds-table-expanded-row
 */
let CDSTableExpandedRow = _decorate([customElement(`${prefix}-table-expanded-row`)], function (_initialize, _HostListenerMixin) {
  class CDSTableExpandedRow extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTableExpandedRow,
    d: [{
      kind: "method",
      decorators: [HostListener('mouseover'), HostListener('mouseout')],
      key: "_handleMouseOverOut",
      value:
      /**
       * Handles `mouseover`/`mouseout` event handler on this element.
       *
       * @param event The event.
       */
      function _handleMouseOverOut(event) {
        const {
          selectorRow
        } = this.constructor;
        const {
          previousElementSibling
        } = this;
        if (previousElementSibling !== null && previousElementSibling !== void 0 && previousElementSibling.matches(selectorRow)) {
          previousElementSibling.highlighted = event.type === 'mouseover';
        }
      }

      /**
       * The colspan.
       */
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        attribute: 'colspan'
      })],
      key: "colSpan",
      value() {
        return 1;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "expanded",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "filtered",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "highlighted",
      value() {
        return false;
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
      kind: "method",
      key: "render",
      value:
      /**
       * `true` if the table row should be expanded.
       */
      /**
       * `true` if the table row should be filtered.
       */
      /**
       * `true` if the table row should be highlighted.
       */
      /**
       * `true` if the previous table row has been selected
       */
      function render() {
        const {
          colSpan
        } = this;
        return html(_t || (_t = _`
      <td colspan="${0}">
        <div class="${0}--child-row-inner-container">
          <slot></slot>
        </div>
      </td>
    `), colSpan, prefix);
      }

      /**
       * A selector that will return the previous sibling row.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorRow",
      value: function selectorRow() {
        return `${prefix}-table-row`;
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
}, HostListenerMixin(LitElement));
export default CDSTableExpandedRow;
//# sourceMappingURL=table-expanded-row.js.map
