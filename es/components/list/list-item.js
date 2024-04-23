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
import styles from "././list.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * List item.
 *
 * @element cds-list-item
 * @slot nested - The nested child list.
 */
let CDSListItem = _decorate([customElement(`${prefix}-list-item`)], function (_initialize, _LitElement) {
  class CDSListItem extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSListItem,
    d: [{
      kind: "field",
      key: "_hasNestedChild",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlotChangeNested",
      value:
      /**
       * `true` if there is slotted nested child list.
       */

      /**
       * Handles `slotchange` event for the `<slot>` for the nested child list.
       *
       * @param event The event.
       * @param event.target The event target.
       */
      function _handleSlotChangeNested({
        target
      }) {
        this._hasNestedChild = target.assignedNodes().length > 0;
        this.requestUpdate();
      }

      /**
       * `true` if this list item is a child of a nested list.
       * `<cds-ordered-list>` or `<cds-unordered-list>` automatically sets this property.
       */
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "nested",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        // Uses attribute for lookup from child
        this.toggleAttribute('nested', Boolean(this.closest(this.constructor.selectorNestedList)));
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'listitem');
        }
        _get(_getPrototypeOf(CDSListItem.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _hasNestedChild: hasNestedChild,
          _handleSlotChangeNested: handleSlotChangeNested
        } = this;
        return html(_t || (_t = _`
      <slot></slot>
      <div
        ?hidden="${0}"
        class="${0}-ce--list__item__nested-child">
        <slot name="nested" @slotchange="${0}"></slot>
      </div>
    `), !hasNestedChild, prefix, handleSlotChangeNested);
      }

      /**
       * A selector that will return nested list.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorNestedList",
      value: function selectorNestedList() {
        return `${prefix}-ordered-list[slot="nested"],${prefix}-unordered-list[slot="nested"]`;
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
export default CDSListItem;
//# sourceMappingURL=list-item.js.map
