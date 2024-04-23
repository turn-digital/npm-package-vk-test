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

import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import Close16 from "../../icons/close/16";
import { prefix } from '../../globals/settings';
import { findIndex, forEach } from '../../globals/internal/collection-helpers';
import CDSDropdown, { DROPDOWN_KEYBOARD_ACTION } from '../dropdown/dropdown';
import styles from "././combo-box.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { DROPDOWN_DIRECTION, DROPDOWN_SIZE } from '../dropdown/dropdown';

/**
 * Combo box.
 *
 * @element cds-combo-box
 * @fires cds-combo-box-beingselected
 *   The custom event fired before a combo box item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires cds-combo-box-beingtoggled
 *   The custom event fired before the open state of this combo box is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires cds-combo-box-selected - The custom event fired after a combo box item is selected upon a user gesture.
 * @fires cds-combo-box-toggled - The custom event fired after the open state of this combo box is toggled upon a user gesture.
 */
let CDSComboBox = _decorate([customElement(`${prefix}-combo-box`)], function (_initialize, _CDSDropdown) {
  class CDSComboBox extends _CDSDropdown {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSComboBox,
    d: [{
      kind: "field",
      key: "_filterInputValue",
      value() {
        return '';
      }
    }, {
      kind: "field",
      key: "_shouldTriggerBeFocusable",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [query('input')],
      key: "_filterInputNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#menu-body')],
      key: "_itemMenu",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#selection-button')],
      key: "_selectionButtonNode",
      value: void 0
    }, {
      kind: "method",
      key: "_testItemWithQueryText",
      value:
      /**
       * The text content that should be set to the `<input>` for filtering.
       */

      /**
       * The `<input>` for filtering.
       */

      /**
       * The menu containing all selectable items.
       */

      /**
       * The selection button.
       */

      /**
       * @param item A combo box item.
       * @returns `true` if the given combo box item matches the query text user types.
       */
      function _testItemWithQueryText(item) {
        return (this.itemMatches || this._defaultItemMatches)(item, this._filterInputNode.value);
      }

      /* eslint-disable class-methods-use-this */
      /**
       * The default item matching callback.
       *
       * @param item The combo box item.
       * @param queryText The query text user types.
       * @returns `true` if the given combo box item matches the given query text.
       */
    }, {
      kind: "method",
      key: "_defaultItemMatches",
      value: function _defaultItemMatches(item, queryText) {
        return item.textContent.toLowerCase().indexOf(queryText.toLowerCase()) >= 0;
      }
      /* eslint-enable class-methods-use-this */

      /**
       * Handles `input` event on the `<input>` for filtering.
       */
    }, {
      kind: "method",
      key: "_handleInput",
      value: function _handleInput() {
        if (this._filterInputValue.length != 0) {
          this.setAttribute('isClosable', '');
        } else {
          this.removeAttribute('isClosable');
        }
        const items = this.querySelectorAll(this.constructor.selectorItem);
        const index = !this._filterInputNode.value ? -1 : findIndex(items, this._testItemWithQueryText, this);
        forEach(items, (item, i) => {
          if (i === index) {
            var _this$_itemMenu;
            const menuRect = (_this$_itemMenu = this._itemMenu) === null || _this$_itemMenu === void 0 ? void 0 : _this$_itemMenu.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();
            if (menuRect && itemRect) {
              const isViewable = menuRect.top <= (itemRect === null || itemRect === void 0 ? void 0 : itemRect.top) && (itemRect === null || itemRect === void 0 ? void 0 : itemRect.bottom) <= (menuRect === null || menuRect === void 0 ? void 0 : menuRect.top) + this._itemMenu.clientHeight;
              if (!isViewable) {
                const scrollTop = (itemRect === null || itemRect === void 0 ? void 0 : itemRect.top) - (menuRect === null || menuRect === void 0 ? void 0 : menuRect.top);
                const scrollBot = (itemRect === null || itemRect === void 0 ? void 0 : itemRect.bottom) - (menuRect === null || menuRect === void 0 ? void 0 : menuRect.bottom);
                if (Math.abs(scrollTop) < Math.abs(scrollBot)) {
                  this._itemMenu.scrollTop += scrollTop;
                } else {
                  this._itemMenu.scrollTop += scrollBot;
                }
              }
            }
          }
          item.highlighted = i === index;
        });
        const {
          _filterInputNode: filterInput
        } = this;
        this._filterInputValue = !filterInput ? '' : filterInput.value;
        this.open = true;
        this.requestUpdate(); // If the only change is to `_filterInputValue`, auto-update doesn't happen
      }
    }, {
      kind: "method",
      key: "_handleClickInner",
      value: function _handleClickInner(event) {
        var _this$_selectionButto;
        const {
          target
        } = event;
        if ((_this$_selectionButto = this._selectionButtonNode) !== null && _this$_selectionButto !== void 0 && _this$_selectionButto.contains(target)) {
          this._handleUserInitiatedClearInput();
        } else {
          _get(_getPrototypeOf(CDSComboBox.prototype), "_handleClickInner", this).call(this, event);
        }
      }
    }, {
      kind: "method",
      key: "_handleKeypressInner",
      value: function _handleKeypressInner(event) {
        var _this$_selectionButto2;
        const {
          key
        } = event;
        const action = this.constructor.getAction(key);
        const {
          TRIGGERING
        } = DROPDOWN_KEYBOARD_ACTION;
        if ((_this$_selectionButto2 = this._selectionButtonNode) !== null && _this$_selectionButto2 !== void 0 && _this$_selectionButto2.contains(event.target) && (
        // Space key should be handled by `<input>` unless "clear selection" button has focus
        action === TRIGGERING || key === ' ')) {
          this._handleUserInitiatedClearInput();
        } else {
          _get(_getPrototypeOf(CDSComboBox.prototype), "_handleKeypressInner", this).call(this, event);
        }
      }

      /**
       * Handles user-initiated clearing the `<input>` for filtering.
       */
    }, {
      kind: "method",
      key: "_handleUserInitiatedClearInput",
      value: function _handleUserInitiatedClearInput() {
        forEach(this.querySelectorAll(this.constructor.selectorItem), item => {
          item.highlighted = false;
        });
        this._filterInputValue = '';
        this._filterInputNode.focus();
        this._handleUserInitiatedSelectItem();
      }
    }, {
      kind: "method",
      key: "_handleUserInitiatedSelectItem",
      value: function _handleUserInitiatedSelectItem(item) {
        if (item && !this._selectionShouldChange(item)) {
          // Escape hatch for `shouldUpdate()` logic that updates `._filterInputValue()` when selection changes,
          // given we want to update the `<input>` and close the dropdown even if selection doesn't update.
          // Use case:
          // 1. Select the 2nd item in combo box drop down
          // 2. Type some text in the `<input>`
          // 3. Re-select the 2nd item in combo box drop down,
          //    the `<input>` has to updated with the 2nd item and the dropdown should be closed,
          //    even if there is no change in the selected value
          this._filterInputValue = item.textContent || '';
          this.open = false;
          this.requestUpdate();
        }
        _get(_getPrototypeOf(CDSComboBox.prototype), "_handleUserInitiatedSelectItem", this).call(this, item);
      }
    }, {
      kind: "method",
      key: "_selectionDidChange",
      value: function _selectionDidChange(itemToSelect) {
        this.value = !itemToSelect ? '' : itemToSelect.value;
        forEach(this.querySelectorAll(this.constructor.selectorItemSelected), item => {
          item.selected = false;
        });
        if (itemToSelect) {
          itemToSelect.selected = true;
          this._assistiveStatusText = this.selectedItemAssistiveText;
        }
        this._handleUserInitiatedToggle(false);
      }
    }, {
      kind: "method",
      key: "_renderLabel",
      value: function _renderLabel() {
        const {
          disabled,
          inputLabel,
          label,
          readOnly,
          value,
          _filterInputValue: filterInputValue,
          _handleInput: handleInput
        } = this;
        const inputClasses = classMap({
          [`${prefix}--text-input`]: true,
          [`${prefix}--text-input--empty`]: !value
        });
        return html(_t || (_t = _`
      <input
        id="trigger-label"
        class="${0}"
        ?disabled=${0}
        placeholder="${0}"
        .value=${0}
        role="combobox"
        aria-label="${0}"
        aria-controls="menu-body"
        aria-autocomplete="list"
        ?readonly=${0}
        @input=${0} />
    `), inputClasses, disabled, label, filterInputValue, inputLabel, readOnly, handleInput);
      }
    }, {
      kind: "method",
      key: "_renderFollowingLabel",
      value: function _renderFollowingLabel() {
        const {
          clearSelectionLabel,
          _filterInputValue: filterInputValue
        } = this;
        if (filterInputValue.length != 0) {
          this.setAttribute('isClosable', '');
        } else {
          this.removeAttribute('isClosable');
        }
        return filterInputValue.length === 0 ? undefined : html(_t2 || (_t2 = _`
          <div
            id="selection-button"
            role="button"
            class="${0}--list-box__selection"
            tabindex="0"
            title="${0}">
            ${0}
          </div>
        `), prefix, clearSelectionLabel, Close16({
          'aria-label': clearSelectionLabel
        }));
      }

      /**
       * The `aria-label` attribute for the icon to clear selection.
       */
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'clear-selection-label'
      })],
      key: "clearSelectionLabel",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'input-label'
      })],
      key: "inputLabel",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "itemMatches",
      value: void 0
    }, {
      kind: "method",
      key: "shouldUpdate",
      value:
      /**
       * The `aria-label` attribute for the `<input>` for filtering.
       */
      /**
       * The custom item matching callback.
       */
      function shouldUpdate(changedProperties) {
        _get(_getPrototypeOf(CDSComboBox.prototype), "shouldUpdate", this).call(this, changedProperties);
        const {
          _selectedItemContent: selectedItemContent
        } = this;
        if (selectedItemContent && changedProperties.has('value')) {
          this._filterInputValue = (selectedItemContent === null || selectedItemContent === void 0 ? void 0 : selectedItemContent.textContent) || '';
        }
        return true;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(CDSComboBox.prototype), "updated", this).call(this, changedProperties);
        const {
          _listBoxNode: listBoxNode
        } = this;
        if (listBoxNode) {
          listBoxNode.classList.add(`${prefix}--combo-box`);
        }
      }

      // For combo box, open/selection with space key is disabled given the input box should take it over
    }, {
      kind: "field",
      static: true,
      key: "TRIGGER_KEYS",
      value() {
        return new Set(['Enter']);
      }
    }, {
      kind: "get",
      static: true,
      key: "selectorItemHighlighted",
      value:
      /**
       * A selector that will return highlighted items.
       */
      function selectorItemHighlighted() {
        return `${prefix}-combo-box-item[highlighted]`;
      }

      /**
       * A selector that will return combo box items.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value: function selectorItem() {
        return `${prefix}-combo-box-item`;
      }

      /**
       * A selector that will return selected items.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItemSelected",
      value: function selectorItemSelected() {
        return `${prefix}-combo-box-item[selected]`;
      }

      /**
       * The name of the custom event fired before this combo box item is being toggled upon a user gesture.
       * Cancellation of this event stops the user-initiated action of toggling this combo box item.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeToggle",
      value: function eventBeforeToggle() {
        return `${prefix}-combo-box-beingtoggled`;
      }

      /**
       * The name of the custom event fired after this combo box item is toggled upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-combo-box-toggled`;
      }

      /**
       * The name of the custom event fired before a combo box item is selected upon a user gesture.
       * Cancellation of this event stops changing the user-initiated selection.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeSelect",
      value: function eventBeforeSelect() {
        return `${prefix}-combo-box-beingselected`;
      }

      /**
       * The name of the custom event fired after a a combo box item is selected upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventSelect",
      value: function eventSelect() {
        return `${prefix}-combo-box-selected`;
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
}, CDSDropdown);
export default CDSComboBox;
//# sourceMappingURL=combo-box.js.map
