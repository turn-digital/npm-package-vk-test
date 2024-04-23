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
import { property, query } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././data-table.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Data table body.
 *
 * @element cds-table-body
 */
let CDSTableBody = _decorate([customElement(`${prefix}-table-body`)], function (_initialize, _LitElement) {
  class CDSTableBody extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTableBody,
    d: [{
      kind: "field",
      decorators: [query('slot')],
      key: "_slotNode",
      value: void 0
    }, {
      kind: "method",
      key: "_updateZebra",
      value:
      /**
       * The `<slot>` element in the shadow DOM.
       */

      /**
       * Updates `even`/`odd` properties of the child `<cds-table-row>`s.
       */
      function _updateZebra() {
        const {
          useZebraStyles,
          _slotNode: slotNode
        } = this;
        slotNode.assignedNodes().forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const even = node.matches('*:nth-of-type(even)');
            node.even = useZebraStyles && even;
            node.odd = useZebraStyles && !even;
          }
        });
      }

      /**
       * Handles `slotchange` event in the `<slot>` element in the shadow DOM.
       */
    }, {
      kind: "field",
      key: "_handleSlotChange",
      value() {
        return () => {
          this._updateZebra();
        };
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'use-zebra-styles'
      })],
      key: "useZebraStyles",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * TODO: Uncomment when Carbon fully implements sticky header
       * Specify whether the header should be sticky.
       * Still experimental: may not work with every combination of table props
       */
      // @property({ type: Boolean, reflect: true, attribute: 'sticky-header' })
      // stickyHeader = false;
      /**
       * The color scheme.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'rowgroup');
        }
        _get(_getPrototypeOf(CDSTableBody.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('useZebraStyles')) {
          this._updateZebra();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _handleSlotChange: handleSlotChange
        } = this;
        return html(_t || (_t = _` <slot @slotchange="${0}"></slot> `), handleSlotChange);
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
export default CDSTableBody;
//# sourceMappingURL=table-body.js.map
