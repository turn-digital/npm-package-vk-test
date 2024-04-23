import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5;
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
import ChevronRight16 from "../../icons/chevron--right/16";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././data-table.css.js";
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
/**
 * Data table row.
 *
 * @element cds-table-row
 * @csspart selection-container The container of the checkbox.
 * @csspart selection The checkbox.
 * @fires cds-table-row-change-selection
 *   The custom event fired before this row is selected/unselected upon a user gesture.
 *   Cancellation of this event stops the user-initiated change in selection.
 * @fires cds-radio-button-changed
 *   The name of the custom event fired after this radio button changes its checked state.
 * @fires cds-checkbox-changed
 *   The name of the custom event fired after this checkbox changes its checked state.
 * @fires cds-table-row-expando-beingtoggled
 *   The name of the custom event fired before the expanded state of this row is being toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of toggling the expanded state.
 * @fires cds-table-row-expando-toggled
 *   The name of the custom event fired after the expanded state of this row is toggled upon a user gesture.
 */
let CDSTableRow = _decorate([customElement(`${prefix}-table-row`)], function (_initialize, _HostListenerMixin) {
  class CDSTableRow extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTableRow,
    d: [{
      kind: "field",
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "method",
      decorators: [HostListener('eventRadioChange')],
      key: "_handleClickSelectionRadio",
      value:
      /**
       * `true` if there is a slug.
       */

      /**
       * Handles `click` event on the radio button.
       *
       * @param event The event.
       */
      function _handleClickSelectionRadio(event) {
        const {
          detail
        } = event;
        const selected = detail.checked;
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            selected
          }
        };
        const constructor = this.constructor;
        if (this.dispatchEvent(new CustomEvent(constructor.eventBeforeChangeSelection, init))) {
          var _this$nextElementSibl;
          this.selected = selected;
          const {
            selectorExpandedRow
          } = this.constructor;
          if ((_this$nextElementSibl = this.nextElementSibling) !== null && _this$nextElementSibl !== void 0 && _this$nextElementSibl.matches(selectorExpandedRow)) {
            this.nextElementSibling.selected = selected;
          }
        }
      }

      /**
       * Handles `click` event on the check box.
       *
       * @param event The event.
       */
    }, {
      kind: "method",
      decorators: [HostListener('eventCheckboxChange')],
      key: "_handleClickSelectionCheckbox",
      value: function _handleClickSelectionCheckbox(event) {
        const {
          detail
        } = event;
        const selected = detail.checked;
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            selected
          }
        };
        const constructor = this.constructor;
        if (this.dispatchEvent(new CustomEvent(constructor.eventBeforeChangeSelection, init))) {
          var _this$nextElementSibl2;
          this.selected = selected;
          const {
            selectorExpandedRow
          } = this.constructor;
          if ((_this$nextElementSibl2 = this.nextElementSibling) !== null && _this$nextElementSibl2 !== void 0 && _this$nextElementSibl2.matches(selectorExpandedRow)) {
            this.nextElementSibling.selected = selected;
          }
        }
      }

      /**
       * Handles `click` event on the expando button.
       */
    }, {
      kind: "method",
      key: "_handleClickExpando",
      value: function _handleClickExpando() {
        this._handleUserInitiatedToggleExpando();
      }

      /**
       * Handles `mouseover`/`mouseout` event handler on this element.
       *
       * @param event The event.
       */
    }, {
      kind: "method",
      decorators: [HostListener('mouseover'), HostListener('mouseout')],
      key: "_handleMouseOverOut",
      value: function _handleMouseOverOut(event) {
        const {
          selectorExpandedRow,
          selectorTableCellOverflowMenu
        } = this.constructor;
        const {
          nextElementSibling
        } = this;
        if (nextElementSibling !== null && nextElementSibling !== void 0 && nextElementSibling.matches(selectorExpandedRow)) {
          nextElementSibling.highlighted = event.type === 'mouseover';
        }
        if (this.overflowMenuOnHover) {
          const overflowMenu = this.querySelector(selectorTableCellOverflowMenu);
          const parentCell = overflowMenu === null || overflowMenu === void 0 ? void 0 : overflowMenu.parentElement;
          if (event.type === 'mouseout') {
            parentCell.overflowMenuOnHover = true;
          } else {
            parentCell.overflowMenuOnHover = false;
          }
        }
      }

      /**
       * Handles user-initiated toggle request of the expando button in this table row.
       *
       * @param expanded The new expanded state.
       */
    }, {
      kind: "method",
      key: "_handleUserInitiatedToggleExpando",
      value: function _handleUserInitiatedToggleExpando(expanded = !this.expanded) {
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            expanded
          }
        };
        if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeExpandoToggle, init))) {
          this.expanded = expanded;
          this.dispatchEvent(new CustomEvent(this.constructor.eventExpandoToggle, init));
        }
      }
    }, {
      kind: "method",
      key: "_renderExpandButton",
      value: function _renderExpandButton() {
        const {
          _handleClickExpando: handleClickExpando
        } = this;
        return html(_t || (_t = _`
      <div class="${0}--table-expand">
        <div>
          <slot name="slug" @slotchange="${0}"></slot>
          <button
            class="${0}--table-expand__button"
            @click="${0}">
            ${0}
          </button>
        </div>
      </div>
    `), prefix, this._handleSlotChange, prefix, handleClickExpando, ChevronRight16({
          class: `${prefix}--table-expand__svg`
        }));
      }

      /**
       * Handles `slotchange` event.
       */
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value: function _handleSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().filter(elem => elem.matches !== undefined ? elem.matches(this.constructor.slugItem) : false);
        if (hasContent.length > 0) {
          this._hasSlug = Boolean(hasContent);
          hasContent[0].setAttribute('size', 'mini');
        }
        this.requestUpdate();
      }

      /**
       * @returns The first set of table cells.
       */
    }, {
      kind: "method",
      key: "_renderFirstCells",
      value: function _renderFirstCells() {
        const {
          disabled,
          hideCheckbox,
          radio,
          selected,
          selectionLabel,
          selectionName,
          selectionValue
        } = this;
        return !selectionName ? undefined : html(_t2 || (_t2 = _`
          <div class="${0}--table-column-checkbox">
            <div>
              <slot name="slug" @slotchange="${0}"></slot>
              ${0}
            </div>
          </div>
        `), prefix, this._handleSlotChange, radio ? html(_t3 || (_t3 = _`<cds-radio-button data-table></cds-radio-button>`)) : html(_t4 || (_t4 = _`<cds-checkbox
                    hide-label
                    ?hide-checkbox="${0}"
                    label-text="${0}"
                    name=${0}
                    data-table
                    ?disabled=${0}
                    ?checked=${0}
                    value=${0}></cds-checkbox> `), hideCheckbox, selectionLabel, selectionName, disabled, selected, selectionValue));
      }

      /**
       * `true` if this table should support batch expansion
       */
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'batch-expansion'
      })],
      key: "batchExpansion",
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
      key: "even",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "expandable",
      value() {
        return false;
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
        reflect: true,
        attribute: 'hide-checkbox'
      })],
      key: "hideCheckbox",
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
      key: "odd",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'overflow-menu-on-hover'
      })],
      key: "overflowMenuOnHover",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "radio",
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
      kind: "field",
      decorators: [property({
        attribute: 'selection-label'
      })],
      key: "selectionLabel",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selection-name'
      })],
      key: "selectionName",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selection-value'
      })],
      key: "selectionValue",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` if this table row should be disabled.
       */
      /**
       * `true` if this table row is placed at an even position in parent `<cds-table-body>`.
       * `<cds-table-body>` sets this property, _only_ in zebra stripe mode.
       *
       * @private
       */
      /**
       * `true` if this table row can be expanded to show content underneath
       *
       * @private
       */
      /**
       * `true` when the table row expanded is showing
       *
       * @private
       */
      /**
       * `true` if this table row should be filtered out.
       */
      /**
       * Specify whether the checkbox should be present in the DOM,
       * but invisible and uninteractable.
       */
      /**
       * `true` if the table row should be highlighted.
       */
      /**
       * `true` if this table row is placed at an odd position in parent `<cds-table-body>`.
       * `<cds-table-body>` sets this property, _only_ in zebra stripe mode.
       *
       * @private
       */
      /**
       * Specify whether the overflow menu (if it exists) should be shown always, or only on hover
       */
      /**
       * Specify whether the control should be a radio button or inline checkbox
       *
       * @private
       */
      /**
       * `true` if this table row should be selected.
       */
      /**
       * The `aria-label` attribute for the `<label>` for selection.
       */
      /**
       * The `name` attribute for the `<input>` for selection.
       * If present, this table row will be a selectable one.
       */
      /**
       * The `value` attribute for the `<input>` for selection.
       */
      /**
       * TODO: Uncomment when Carbon fully implements sticky header
       * Specify whether the header should be sticky.
       * Still experimental: may not work with every combination of table props
       */
      // @property({ type: Boolean, reflect: true, attribute: 'sticky-header' })
      // stickyHeader = false;
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'row');
        }
        _get(_getPrototypeOf(CDSTableRow.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('expanded')) {
          const {
            selectorExpandedRow
          } = this.constructor;
          const {
            expanded,
            nextElementSibling
          } = this;
          if (nextElementSibling !== null && nextElementSibling !== void 0 && nextElementSibling.matches(selectorExpandedRow)) {
            nextElementSibling.expanded = expanded;
          }
        }
        if (changedProperties.has('highlighted')) {
          const {
            selectorExpandedRow
          } = this.constructor;
          const {
            highlighted,
            nextElementSibling
          } = this;
          if (nextElementSibling !== null && nextElementSibling !== void 0 && nextElementSibling.matches(selectorExpandedRow)) {
            nextElementSibling.highlighted = highlighted;
          }
        }
        if (this._hasSlug) {
          this.setAttribute('slug', '');
        } else {
          this.removeAttribute('slug');
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (this.selectionName) {
          var _this$closest;
          (_this$closest = this.closest(this.constructor.selectorTable)) === null || _this$closest === void 0 || _this$closest.setAttribute('is-selectable', '');
        }
        return html(_t5 || (_t5 = _`
      ${0}
      ${0}
      <slot></slot>
    `), this.expandable ? this._renderExpandButton() : '', this._renderFirstCells());
      }

      /**
       * The name of the custom event fired after this radio button changes its checked state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventRadioChange",
      value: function eventRadioChange() {
        return `${prefix}-radio-button-changed`;
      }

      /**
       * The name of the custom event fired after this radio button changes its checked state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventCheckboxChange",
      value: function eventCheckboxChange() {
        return `${prefix}-checkbox-changed`;
      }

      /**
       * The name of the custom event fired before this row is selected/unselected upon a user gesture.
       * Cancellation of this event stops the user-initiated change in selection.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeChangeSelection",
      value: function eventBeforeChangeSelection() {
        return `${prefix}-table-row-change-selection`;
      }

      /**
       * A selector that will return the parent table
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTable",
      value: function selectorTable() {
        return `${prefix}-table`;
      }

      /**
       * The CSS selector to find the overflow menu on the table cell
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableCellOverflowMenu",
      value: function selectorTableCellOverflowMenu() {
        return `${prefix}-table-cell ${prefix}-overflow-menu`;
      }

      /**
       * A selector that will return the corresponding expanded row.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorExpandedRow",
      value: function selectorExpandedRow() {
        return `${prefix}-table-expanded-row`;
      }

      /**
       * A selector that will return the slug item.
       */
    }, {
      kind: "get",
      static: true,
      key: "slugItem",
      value: function slugItem() {
        return `${prefix}-slug`;
      }

      /**
       * The name of the custom event fired before the expanded state this row is being toggled upon a user gesture.
       * Cancellation of this event stops the user-initiated action of toggling the expanded state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeExpandoToggle",
      value: function eventBeforeExpandoToggle() {
        return `${prefix}-table-row-expando-beingtoggled`;
      }

      /**
       * The name of the custom event fired after the expanded state this row is toggled upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventExpandoToggle",
      value: function eventExpandoToggle() {
        return `${prefix}-table-row-expando-toggled`;
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
}, HostListenerMixin(FocusMixin(LitElement)));
export default CDSTableRow;
//# sourceMappingURL=table-row.js.map
