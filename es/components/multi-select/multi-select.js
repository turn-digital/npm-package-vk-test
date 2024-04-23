import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import Close16 from "../../icons/close/16";
import { prefix } from '../../globals/settings';
import { filter, forEach, indexOf } from '../../globals/internal/collection-helpers';
import CDSDropdown, { DROPDOWN_KEYBOARD_ACTION, DROPDOWN_TYPE } from '../dropdown/dropdown';
import { SELECTION_FEEDBACK_OPTION } from './defs';
import styles from "././multi-select.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { DROPDOWN_SIZE, DROPDOWN_TYPE, DROPDOWN_DIRECTION } from '../dropdown/dropdown';
export { SELECTION_FEEDBACK_OPTION };

/**
 * Multi select.
 *
 * @element cds-multi-select
 * @fires cds-multi-select-beingselected
 *   The custom event fired before a multi select item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires cds-multi-select-selected - The custom event fired after a multi select item is selected upon a user gesture.
 * @fires cds-multi-select-beingtoggled
 *   The custom event fired before the open state of this multi select is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires cds-multi-select-toggled
 *   The custom event fired after the open state of this multi select is toggled upon a user gesture.
 */
let CDSMultiSelect = _decorate([customElement(`${prefix}-multi-select`)], function (_initialize, _CDSDropdown) {
  class CDSMultiSelect extends _CDSDropdown {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSMultiSelect,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "filterable",
      value: void 0
    }, {
      kind: "field",
      key: "_selectedItemsCount",
      value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [query('#clear-button')],
      key: "_clearButtonNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#selection-button')],
      key: "_selectionButtonNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#menu-body')],
      key: "_menuBodyNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('input')],
      key: "_filterInputNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${prefix}--list-box__field`)],
      key: "_triggerNode",
      value: void 0
    }, {
      kind: "method",
      key: "_selectionShouldChange",
      value:
      /**
       * The count of selected items.
       */

      /**
       * The clear button.
       */

      /**
       * The selection button.
       */

      /**
       * The menu body.
       */

      /**
       * The `<input>` for filtering.
       */

      /**
       * The trigger button.
       */

      function _selectionShouldChange(itemToSelect) {
        // If we are selecting an item, assumes we always toggle
        return Boolean(this.value || itemToSelect);
      }
    }, {
      kind: "method",
      key: "_selectionDidChange",
      value: function _selectionDidChange(itemToSelect) {
        if (itemToSelect) {
          itemToSelect.selected = !itemToSelect.selected;
          this._assistiveStatusText = itemToSelect.selected ? this.selectedItemAssistiveText : this.unselectedItemAssistiveText;
        } else {
          forEach(this.querySelectorAll(this.constructor.selectorItemSelected), item => {
            item.selected = false;
          });
          this._handleUserInitiatedToggle(false);
          this._assistiveStatusText = this.unselectedAllAssistiveText;
        }
        // Change in `.selected` hasn't been reflected to the corresponding attribute yet
        this.value = filter(this.querySelectorAll(this.constructor.selectorItem), item => item.selected).map(item => item.value).join(',');
      }
    }, {
      kind: "method",
      key: "_handleClickInner",
      value: function _handleClickInner(event) {
        var _this$_selectionButto, _this$_clearButtonNod, _event$target;
        if ((_this$_selectionButto = this._selectionButtonNode) !== null && _this$_selectionButto !== void 0 && _this$_selectionButto.contains(event.target) && !this.readOnly) {
          this._handleUserInitiatedSelectItem();
          if (this.filterable) {
            this._filterInputNode.focus();
          } else {
            this._triggerNode.focus();
          }
        } else if ((_this$_clearButtonNod = this._clearButtonNode) !== null && _this$_clearButtonNod !== void 0 && _this$_clearButtonNod.contains(event.target)) {
          this._handleUserInitiatedClearInput();
        } else if (!((_event$target = event.target) !== null && _event$target !== void 0 && _event$target.matches(this.constructor.slugItem))) {
          _get(_getPrototypeOf(CDSMultiSelect.prototype), "_handleClickInner", this).call(this, event);
          if (this.filterable) {
            this._filterInputNode.focus();
          }
        }
      }

      /**
       * Handler for the `keypress` event, ensures filter still works upon entering space
       */
    }, {
      kind: "method",
      key: "_handleKeypressInner",
      value: function _handleKeypressInner(event) {
        var _this$_clearButtonNod2, _this$_selectionButto2;
        const {
          key
        } = event;
        const action = this.constructor.getAction(key);
        const {
          TRIGGERING
        } = DROPDOWN_KEYBOARD_ACTION;
        if ((_this$_clearButtonNod2 = this._clearButtonNode) !== null && _this$_clearButtonNod2 !== void 0 && _this$_clearButtonNod2.contains(event.target) && (
        // Space key should be handled by `<input>` unless "clear selection" button has focus
        action === TRIGGERING || key === ' ')) {
          this._handleUserInitiatedClearInput();
        } else if ((_this$_selectionButto2 = this._selectionButtonNode) !== null && _this$_selectionButto2 !== void 0 && _this$_selectionButto2.contains(event.target)) {
          this._handleUserInitiatedSelectItem();
          this.open = true;
          if (this.filterable) {
            this._filterInputNode.focus();
          } else {
            this._triggerNode.focus();
          }
        } else if (this.filterable) {
          this._handleKeypressInnerFlterable(event);
        } else {
          _get(_getPrototypeOf(CDSMultiSelect.prototype), "_handleKeypressInner", this).call(this, event);
        }
      }

      /**
       * Special andler for the `keypress` event, ensures space selection for filterable
       * variation is disabled
       */
    }, {
      kind: "method",
      key: "_handleKeypressInnerFlterable",
      value: function _handleKeypressInnerFlterable(event) {
        const {
          key
        } = event;
        const action = this.constructor.getAction(key);
        if (!this.open) {
          switch (action) {
            case DROPDOWN_KEYBOARD_ACTION.TRIGGERING:
              this._handleUserInitiatedToggle(true);
              break;
            default:
              break;
          }
        } else {
          switch (key) {
            case 'Enter':
              {
                const constructor = this.constructor;
                const highlightedItem = this.querySelector(constructor.selectorItemHighlighted);
                if (highlightedItem) {
                  this._handleUserInitiatedSelectItem(highlightedItem);
                } else {
                  this._handleUserInitiatedToggle(false);
                }
              }
              break;
            default:
              break;
          }
        }
      }
    }, {
      kind: "method",
      key: "_renderTitleLabel",
      value: function _renderTitleLabel() {
        const {
          clearSelectionDescription,
          clearSelectionText,
          disabled,
          hideLabel,
          titleText,
          _selectedItemsCount: selectedItemsCount,
          _slotTitleTextNode: slotTitleTextNode,
          _handleSlotchangeLabelText: handleSlotchangeLabelText
        } = this;
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--label--disabled`]: disabled,
          [`${prefix}--visually-hidden`]: hideLabel
        });
        const hasTitleText = titleText || slotTitleTextNode && slotTitleTextNode.assignedNodes().length > 0;
        return html(_t || (_t = _`
      <label
        part="title-text"
        class="${0}"
        ?hidden="${0}">
        <slot name="title-text" @slotchange="${0}"
          >${0}</slot
        >
        ${0}
      </label>
    `), labelClasses, !hasTitleText, handleSlotchangeLabelText, titleText, selectedItemsCount > 0 ? html(_t2 || (_t2 = _`
              <span class="${0}--visually-hidden">
                ${0} ${0},
                ${0}
              </span>
            `), prefix, clearSelectionDescription, selectedItemsCount, clearSelectionText) : null);
      }
    }, {
      kind: "method",
      key: "_renderPrecedingLabel",
      value: function _renderPrecedingLabel() {
        const {
          disabled,
          readOnly,
          clearSelectionLabel,
          _selectedItemsCount: selectedItemsCount
        } = this;
        const selectionButtonClasses = classMap({
          [`${prefix}--list-box__selection`]: true,
          [`${prefix}--list-box__selection--multi`]: true,
          [`${prefix}--tag`]: true,
          [`${prefix}--tag--filter`]: true,
          [`${prefix}--tag--high-contrast`]: true,
          [`${prefix}--tag--disabled`]: disabled
        });
        return selectedItemsCount === 0 ? undefined : html(_t3 || (_t3 = _`
          <div
            id="selection-button"
            role="button"
            class="${0}"
            tabindex="-1"
            aria-disabled=${0}
            title="${0}">
            ${0}
            ${0}
          </div>
        `), selectionButtonClasses, readOnly, clearSelectionLabel, selectedItemsCount, Close16({
          'aria-label': clearSelectionLabel,
          class: `${prefix}--tag__close-icon`
        }));
      }

      /**
        @returns The main content of the trigger button.
       */
    }, {
      kind: "method",
      key: "_renderLabel",
      value: function _renderLabel() {
        const {
          label,
          value,
          _selectedItemContent: selectedItemContent
        } = this;
        const inputClasses = classMap({
          [`${prefix}--text-input`]: true,
          [`${prefix}--text-input--empty`]: !value
        });
        return !this.filterable ? html(_t4 || (_t4 = _`
          <span id="trigger-label" class="${0}--list-box__label"
            >${0}</span
          >
        `), prefix, selectedItemContent || label) : html(_t5 || (_t5 = _`
          <input
            id="trigger-label"
            class="${0}"
            placeholder="${0}"
            role="combobox"
            aria-controls="menu-body"
            aria-autocomplete="list"
            @input="${0}" />
        `), inputClasses, label, this._handleInput);
      }
    }, {
      kind: "method",
      key: "_renderFollowingLabel",
      value: function _renderFollowingLabel() {
        const {
          clearSelectionLabel,
          _filterInputNode: filterInputNode
        } = this;
        return filterInputNode && filterInputNode.value.length > 0 && this.filterable ? html(_t6 || (_t6 = _`
          <div
            id="clear-button"
            role="button"
            class="${0}--list-box__selection"
            tabindex="0"
            title="${0}">
            ${0}
          </div>
        `), prefix, clearSelectionLabel, Close16({
          'aria-label': clearSelectionLabel
        })) : undefined;
      }

      /**
       * Handles `input` event on the `<input>` for filtering.
       */
    }, {
      kind: "method",
      key: "_handleInput",
      value: function _handleInput() {
        const items = this.querySelectorAll(this.constructor.selectorItem);
        const inputValue = this._filterInputNode.value.toLocaleLowerCase();
        if (!this.open) {
          this.open = true;
        }
        forEach(items, item => {
          const itemValue = item.innerText.toLocaleLowerCase();
          if (!itemValue.includes(inputValue)) {
            item.setAttribute('filtered', '');
            item.removeAttribute('highlighted');
          } else {
            item.removeAttribute('filtered');
          }
        });
        this.requestUpdate();
      }

      /**
       * Navigate through dropdown items.
       *
       * @param direction `-1` to navigate backward, `1` to navigate forward.
       */
    }, {
      kind: "method",
      key: "_navigate",
      value: function _navigate(direction) {
        if (!this.filterable) {
          _get(_getPrototypeOf(CDSMultiSelect.prototype), "_navigate", this).call(this, direction);
        } else {
          // only navigate through remaining item
          const constructor = this.constructor;
          const items = this.querySelectorAll(constructor.selectorItemResults);
          const highlightedItem = this.querySelector(constructor.selectorItemHighlighted);
          const highlightedIndex = indexOf(items, highlightedItem);
          let nextIndex = highlightedIndex + direction;
          if (nextIndex < 0) {
            nextIndex = items.length - 1;
          }
          if (nextIndex >= items.length) {
            nextIndex = 0;
          }
          forEach(items, (item, i) => {
            item.highlighted = i === nextIndex;
          });
        }
      }

      /**
       * Handles user-initiated clearing the `<input>` for filtering.
       */
    }, {
      kind: "method",
      key: "_handleUserInitiatedClearInput",
      value: function _handleUserInitiatedClearInput() {
        const constructor = this.constructor;
        const items = this.querySelectorAll(constructor.selectorItemFiltered);
        this._filterInputNode.value = '';
        this.open = true;
        this._filterInputNode.focus();
        forEach(items, item => {
          item.removeAttribute('filtered');
        });
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
        attribute: 'clear-selection-description'
      })],
      key: "clearSelectionDescription",
      value() {
        return 'Total items selected: ';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'clear-selection-text'
      })],
      key: "clearSelectionText",
      value() {
        return 'To clear selection, press Delete or Backspace.';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "locale",
      value() {
        return 'en';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'unselected-item-assistive-text'
      })],
      key: "unselectedItemAssistiveText",
      value() {
        return 'Unselected an item.';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'unselected-all-assistive-text'
      })],
      key: "unselectedAllAssistiveText",
      value() {
        return 'Unselected all items.';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selection-feedback'
      })],
      key: "selectionFeedback",
      value() {
        return SELECTION_FEEDBACK_OPTION.TOP_AFTER_REOPEN;
      }
    }, {
      kind: "get",
      key: "_classes",
      value:
      /**
       * Specify the text that should be read for screen readers that describes total items selected
       */
      /**
       * Specify the text that should be read for screen readers to clear selection.
       */
      /**
       * Specify the locale of the control. Used for the default compareItems used for sorting the list of items in the control.
       */
      /**
       * An assistive text for screen reader to announce, telling that an item is unselected.
       */
      /**
       * An assistive text for screen reader to announce, telling that all items are unselected.
       */
      /**
       * Specify feedback (mode) of the selection.
       * `top`: selected item jumps to top
       * `fixed`: selected item stays at it's position
       * `top-after-reopen`: selected item jump to top after reopen dropdown
       */
      /**
       * The CSS class list for multi-select listbox
       */
      function _classes() {
        const {
          disabled,
          size,
          type,
          invalid,
          readOnly,
          open,
          warn,
          _selectedItemsCount: selectedItemsCount
        } = this;
        const inline = type === DROPDOWN_TYPE.INLINE;
        return classMap({
          [`${prefix}--multi-select`]: true,
          [`${prefix}--list-box`]: true,
          [`${prefix}--list-box--disabled`]: disabled,
          [`${prefix}--list-box--inline`]: inline,
          [`${prefix}--list-box--expanded`]: open,
          [`${prefix}--list-box--${size}`]: size,
          [`${prefix}--multi-select--invalid`]: invalid,
          [`${prefix}--multi-select--warn`]: warn,
          [`${prefix}--multi-select--inline`]: inline,
          [`${prefix}--multi-select--readonly`]: readOnly,
          [`${prefix}--multi-select--selected`]: selectedItemsCount > 0
        });
      }
    }, {
      kind: "field",
      key: "compareItems",
      value() {
        return (itemA, itemB, {
          locale
        }) => {
          itemA.localeCompare(itemB, locale, {
            numeric: true
          });
        };
      }
    }, {
      kind: "field",
      key: "sortItems",
      value() {
        return (menuItems, {
          values,
          compareItems,
          locale: _locale = 'en'
        }) => {
          const menuItemsArray = Array.from(menuItems);
          const sortedArray = menuItemsArray.sort((itemA, itemB) => {
            const hasItemA = values.includes(itemA.value);
            const hasItemB = values.includes(itemB.value);

            // Prefer whichever item is in the `value` array first
            if (hasItemA && !hasItemB) {
              return -1;
            }
            if (hasItemB && !hasItemA) {
              return 1;
            }
            return compareItems(itemA.value, itemB.value, {
              locale: _locale
            });
          });
          return sortedArray;
        };
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        const {
          selectorItem,
          slugItem
        } = this.constructor;
        const slug = this.querySelector(slugItem);
        const items = this.querySelectorAll(selectorItem);
        const {
          value,
          locale
        } = this;
        const values = !value ? [] : value.split(',');
        if (changedProperties.has('size')) {
          forEach(this.querySelectorAll(selectorItem), elem => {
            elem.size = this.size;
          });
        }
        if (changedProperties.has('value')) {
          // Updates selection beforehand because our rendering logic for `<cds-multi-select>` looks for selected items via `qSA()`
          forEach(items, elem => {
            elem.selected = values.indexOf(elem.value) >= 0;
          });
          this._selectedItemsCount = filter(items, elem => values.indexOf(elem.value) >= 0).length;
          if (this.selectionFeedback === SELECTION_FEEDBACK_OPTION.TOP) {
            const sortedMenuItems = this.sortItems(items, {
              values,
              compareItems: this.compareItems,
              locale
            });
            slug ? sortedMenuItems.unshift(slug) : '';
            this.replaceChildren(...sortedMenuItems);
          }
        }
        if (changedProperties.has('open')) {
          if (this.selectionFeedback === SELECTION_FEEDBACK_OPTION.TOP_AFTER_REOPEN) {
            const sortedMenuItems = this.sortItems(items, {
              values,
              compareItems: this.compareItems,
              locale
            });
            slug ? sortedMenuItems.unshift(slug) : '';
            this.replaceChildren(...sortedMenuItems);
          }
        }
        return true;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(CDSMultiSelect.prototype), "updated", this).call(this, changedProperties);
        if (changedProperties.has('open') && this.open && !this.filterable) {
          // move focus to menu body when open for non-filterable mulit-select
          this._menuBodyNode.focus();
        }
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(CDSMultiSelect.prototype), "connectedCallback", this).call(this);
        /**
         * Detect if multi-select already has initially selected items
         */
        this.value = filter(this.querySelectorAll(this.constructor.selectorItem), item => item.selected).map(item => item.value).join(',');
      }

      /**
       * A selector that will return menu body.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorMenuBody",
      value: function selectorMenuBody() {
        return `div[part="menu-body"]`;
      }

      /**
       * A selector that will return highlighted items.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItemHighlighted",
      value: function selectorItemHighlighted() {
        return `${prefix}-multi-select-item[highlighted]`;
      }

      /**
       * A selector that will return multi select items.
       * We use a separate property from `.itemTagName` due to the nature in difference of tag name vs. selector.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value: function selectorItem() {
        return `${prefix}-multi-select-item`;
      }

      /**
       * A selector that will return remaining items after a filter.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItemFiltered",
      value: function selectorItemFiltered() {
        return `${prefix}-multi-select-item[filtered]`;
      }

      /**
       * A selector that will return remaining items after a filter.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItemResults",
      value: function selectorItemResults() {
        return `${prefix}-multi-select-item:not([filtered])`;
      }

      /**
       * A selector that will return selected items.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItemSelected",
      value: function selectorItemSelected() {
        return `${prefix}-multi-select-item[selected]`;
      }

      /**
       * The name of the custom event fired before this multi select item is being toggled upon a user gesture.
       * Cancellation of this event stops the user-initiated action of toggling this multi select item.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeToggle",
      value: function eventBeforeToggle() {
        return `${prefix}-multi-select-beingtoggled`;
      }

      /**
       * The name of the custom event fired after this multi select item is toggled upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-multi-select-toggled`;
      }

      /**
       * The name of the custom event fired before a multi select item is selected upon a user gesture.
       * Cancellation of this event stops changing the user-initiated selection.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeSelect",
      value: function eventBeforeSelect() {
        return `${prefix}-multi-select-beingselected`;
      }

      /**
       * The name of the custom event fired after a a multi select item is selected upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventSelect",
      value: function eventSelect() {
        return `${prefix}-multi-select-selected`;
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
export default CDSMultiSelect;
//# sourceMappingURL=multi-select.js.map
