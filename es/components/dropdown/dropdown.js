import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import ChevronDown16 from "../../icons/chevron--down/16";
import WarningFilled16 from "../../icons/warning--filled/16";
import WarningAltFilled16 from "../../icons/warning--alt--filled/16";
import FocusMixin from '../../globals/mixins/focus';
import FormMixin from '../../globals/mixins/form';
import HostListenerMixin from '../../globals/mixins/host-listener';
import ValidityMixin from '../../globals/mixins/validity';
import HostListener from '../../globals/decorators/host-listener';
import { find, forEach, indexOf } from '../../globals/internal/collection-helpers';
import { DROPDOWN_DIRECTION, DROPDOWN_KEYBOARD_ACTION, DROPDOWN_SIZE, DROPDOWN_TYPE, NAVIGATION_DIRECTION } from './defs';
import styles from "././dropdown.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { DROPDOWN_KEYBOARD_ACTION, DROPDOWN_DIRECTION, DROPDOWN_SIZE, DROPDOWN_TYPE, NAVIGATION_DIRECTION };

/**
 * Dropdown.
 *
 * @element cds-dropdown
 * @csspart label-text The label text.
 * @csspart helper-text The helper text.
 * @csspart trigger-button The trigger button.
 * @csspart menu-body The menu body.
 * @csspart validity-message The validity message.
 * @fires cds-dropdown-beingselected
 *   The custom event fired before a dropdown item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires cds-dropdown-beingtoggled
 *   The custom event fired before the open state of this dropdown is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires cds-dropdown-selected - The custom event fired after a dropdown item is selected upon a user gesture.
 * @fires cds-dropdown-toggled - The custom event fired after the open state of this dropdown is toggled upon a user gesture.
 */
let CDSDropdown = _decorate([customElement(`${prefix}-dropdown`)], function (_initialize, _ValidityMixin) {
  class CDSDropdown extends _ValidityMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSDropdown,
    d: [{
      kind: "field",
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "_selectedItemContent",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "_shouldTriggerBeFocusable",
      value() {
        return true;
      }
    }, {
      kind: "field",
      decorators: [query(`.${prefix}--list-box`)],
      key: "_listBoxNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('slot[name="helper-text"]')],
      key: "_slotHelperTextNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('slot[name="title-text"]')],
      key: "_slotTitleTextNode",
      value: void 0
    }, {
      kind: "method",
      key: "_selectionShouldChange",
      value:
      /**
       * `true` if there is a slug.
       */

      /**
       * The latest status of this dropdown, for screen reader to accounce.
       */

      /**
       * The content of the selected item.
       */

      /**
       * `true` if the trigger button should be focusable.
       * Derived class can set `false` to this if the trigger button contains another primary focusable element (e.g. `<input>`).
       */

      /**
       * The list box `<div>` node.
       */

      /**
       * The `<slot>` element for the helper text in the shadow DOM.
       */

      /**
       * The `<slot>` element for the title text in the shadow DOM.
       */

      /**
       * @param itemToSelect A dropdown item. Absense of this argument means clearing selection.
       * @returns `true` if the selection of this dropdown should change if the given item is selected upon user interaction.
       */
      function _selectionShouldChange(itemToSelect) {
        return !itemToSelect || itemToSelect.value !== this.value;
      }

      /**
       * A callback that runs after change in dropdown selection upon user interaction is confirmed.
       *
       * @param itemToSelect
       *   A dropdown item.
       *   Absense of this argument means clearing selection, which may be handled by a derived class.
       */
    }, {
      kind: "method",
      key: "_selectionDidChange",
      value: function _selectionDidChange(itemToSelect) {
        if (itemToSelect) {
          this.value = itemToSelect.value;
          forEach(this.querySelectorAll(this.constructor.selectorItemSelected), item => {
            item.selected = false;
          });
          itemToSelect.selected = true;
          this._assistiveStatusText = this.selectedItemAssistiveText;
          this._handleUserInitiatedToggle(false);
        }
      }

      /**
       * Handles `click` event on the top-level element in the shadow DOM.
       *
       * @param event The event.
       */
    }, {
      kind: "method",
      key: "_handleClickInner",
      value: function _handleClickInner(event) {
        if (this.readOnly) {
          return;
        }
        if (this.shadowRoot.contains(event.target)) {
          this._handleUserInitiatedToggle();
        } else {
          const item = event.target.closest(this.constructor.selectorItem);
          if (this.contains(item)) {
            this._handleUserInitiatedSelectItem(item);
          }
        }
      }

      /**
       * Handler for the `keydown` event on the top-level element in the shadow DOM.
       */
    }, {
      kind: "method",
      key: "_handleKeydownInner",
      value: function _handleKeydownInner(event) {
        const {
          key
        } = event;
        const action = this.constructor.getAction(key);
        if (!this.open) {
          switch (action) {
            case DROPDOWN_KEYBOARD_ACTION.NAVIGATING:
              this._handleUserInitiatedToggle(true);
              // If this menu gets open with an arrow key, reset the highlight
              this._clearHighlight();
              break;
            default:
              break;
          }
        } else {
          switch (action) {
            case DROPDOWN_KEYBOARD_ACTION.CLOSING:
              this._handleUserInitiatedToggle(false);
              break;
            case DROPDOWN_KEYBOARD_ACTION.NAVIGATING:
              this._navigate(NAVIGATION_DIRECTION[key]);
              break;
            default:
              break;
          }
        }
      }

      /**
       * Handler for the `keypress` event on the top-level element in the shadow DOM.
       */
    }, {
      kind: "method",
      key: "_handleKeypressInner",
      value: function _handleKeypressInner(event) {
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
          switch (action) {
            case DROPDOWN_KEYBOARD_ACTION.TRIGGERING:
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

      /**
       * Handles `blur` event handler on the document this element is in.
       *
       * @param event The event.
       */
    }, {
      kind: "method",
      decorators: [HostListener('focusout')],
      key: "_handleFocusOut",
      value: function _handleFocusOut(event) {
        if (!this.contains(event.relatedTarget)) {
          this._handleUserInitiatedToggle(false);
        }
      }

      /**
       * Handles `slotchange` event for the `<slot>` for helper text.
       */
    }, {
      kind: "method",
      key: "_handleSlotchangeHelperText",
      value: function _handleSlotchangeHelperText() {
        this.requestUpdate();
      }

      /**
       * Handles `slotchange` event for the `<slot>` for label text.
       */
    }, {
      kind: "method",
      key: "_handleSlotchangeLabelText",
      value: function _handleSlotchangeLabelText() {
        this.requestUpdate();
      }

      /**
       * Handles `slotchange` event.
       */
    }, {
      kind: "method",
      key: "_handleSlugSlotChange",
      value: function _handleSlugSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().filter(elem => elem.matches !== undefined ? elem.matches(this.constructor.slugItem) : false);
        this._hasSlug = Boolean(hasContent);
        hasContent[0].setAttribute('size', 'mini');
        this.requestUpdate();
      }

      /**
       * Handles user-initiated selection of a dropdown item.
       *
       * @param [item] The dropdown item user wants to select. Absense of this argument means clearing selection.
       */
    }, {
      kind: "method",
      key: "_handleUserInitiatedSelectItem",
      value: function _handleUserInitiatedSelectItem(item) {
        if (item !== null && item !== void 0 && item.hasAttribute('disabled')) {
          return;
        }
        if (this._selectionShouldChange(item)) {
          const init = {
            bubbles: true,
            composed: true,
            detail: {
              item
            }
          };
          const constructor = this.constructor;
          const beforeSelectEvent = new CustomEvent(constructor.eventBeforeSelect, _objectSpread(_objectSpread({}, init), {}, {
            cancelable: true
          }));
          if (this.dispatchEvent(beforeSelectEvent)) {
            this._selectionDidChange(item);
            const afterSelectEvent = new CustomEvent(constructor.eventSelect, init);
            this.dispatchEvent(afterSelectEvent);
          }
        }
      }

      /**
       * Handles user-initiated toggling the open state.
       *
       * @param [force] If specified, forces the open state to the given one.
       */
    }, {
      kind: "method",
      key: "_handleUserInitiatedToggle",
      value: function _handleUserInitiatedToggle(force = !this.open) {
        const {
          eventBeforeToggle,
          eventToggle
        } = this.constructor;
        const {
          disabled
        } = this;
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            open: force
          }
        };
        if (!disabled) {
          if (this.dispatchEvent(new CustomEvent(eventBeforeToggle, init))) {
            this.open = force;
            if (this.open) {
              this._assistiveStatusText = this.selectingItemsAssistiveText;
            } else {
              const {
                selectedItemAssistiveText,
                label,
                _assistiveStatusText: assistiveStatusText,
                _selectedItemContent: selectedItemContent
              } = this;
              const selectedItemText = selectedItemContent && selectedItemContent.textContent || label;
              if (selectedItemText && assistiveStatusText !== selectedItemAssistiveText) {
                this._assistiveStatusText = selectedItemText;
              }
              forEach(this.querySelectorAll(this.constructor.selectorItemHighlighted), item => {
                item.highlighted = false;
              });
            }
            this.requestUpdate();
            this.dispatchEvent(new CustomEvent(eventToggle, init));
          }
        }
      }

      /**
       * Clears the selection of dropdown items.
       */
    }, {
      kind: "method",
      key: "_clearHighlight",
      value: function _clearHighlight() {
        forEach(this.querySelectorAll(this.constructor.selectorItem), item => {
          item.highlighted = false;
        });
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
        var _items$nextIndex;
        const constructor = this.constructor;
        const items = this.querySelectorAll(constructor.selectorItem);
        const highlightedItem = this.querySelector(constructor.selectorItemHighlighted);
        const highlightedIndex = indexOf(items, highlightedItem);
        let nextIndex = highlightedIndex + direction;
        if ((_items$nextIndex = items[nextIndex]) !== null && _items$nextIndex !== void 0 && _items$nextIndex.hasAttribute('disabled')) {
          nextIndex += direction;
        }
        if (nextIndex < 0) {
          nextIndex = items.length - 1;
        }
        if (nextIndex >= items.length) {
          nextIndex = 0;
        }
        forEach(items, (item, i) => {
          item.highlighted = i === nextIndex;
        });
        const nextItem = items[nextIndex];
        // Using `{ block: 'nearest' }` to prevent scrolling unless scrolling is absolutely necessary.
        // `scrollIntoViewOptions` seems to work in latest Safari despite of MDN/caniuse table.
        // IE falls back to the old behavior.
        nextItem.scrollIntoView({
          block: 'nearest'
        });
        const nextItemText = nextItem.textContent;
        if (nextItemText) {
          this._assistiveStatusText = nextItemText;
        }
        this.requestUpdate();
      }

      /* eslint-disable class-methods-use-this */
      /**
       * @returns The content preceding the trigger button.
       */
    }, {
      kind: "method",
      key: "_renderPrecedingLabel",
      value: function _renderPrecedingLabel() {
        return undefined;
      }
      /* eslint-enable class-methods-use-this */

      /**
       * @returns The main content of the trigger button.
       */
    }, {
      kind: "method",
      key: "_renderLabel",
      value: function _renderLabel() {
        const {
          label,
          _selectedItemContent: selectedItemContent
        } = this;
        return html(_t || (_t = _`
      <span id="trigger-label" class="${0}--list-box__label"
        >${0}</span
      >
    `), prefix, selectedItemContent || label);
      }

      /**
       * @returns The title label.
       */
    }, {
      kind: "method",
      key: "_renderTitleLabel",
      value: function _renderTitleLabel() {
        const {
          disabled,
          hideLabel,
          titleText,
          _slotTitleTextNode: slotTitleTextNode,
          _handleSlotchangeLabelText: handleSlotchangeLabelText
        } = this;
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--label--disabled`]: disabled,
          [`${prefix}--visually-hidden`]: hideLabel
        });
        const hasTitleText = titleText || slotTitleTextNode && slotTitleTextNode.assignedNodes().length > 0;
        return html(_t2 || (_t2 = _`
      <label
        part="title-text"
        class="${0}"
        ?hidden="${0}">
        <slot name="title-text" @slotchange="${0}"
          >${0}</slot
        >
      </label>
    `), labelClasses, !hasTitleText, handleSlotchangeLabelText, titleText);
      }

      /* eslint-disable class-methods-use-this */
      /**
       * @returns The content following the trigger button.
       */
    }, {
      kind: "method",
      key: "_renderFollowingLabel",
      value: function _renderFollowingLabel() {
        return undefined;
      }
      /* eslint-enable class-methods-use-this */

      /**
       * Handles event to include selected value on the parent form.
       *
       * @param event The event.
       */
    }, {
      kind: "method",
      key: "_handleFormdata",
      value: function _handleFormdata(event) {
        const {
          formData
        } = event; // TODO: Wait for `FormDataEvent` being available in `lib.dom.d.ts`
        const {
          disabled,
          name,
          value
        } = this;
        if (!disabled) {
          formData.append(name, value);
        }
      }

      /**
       * 'aria-label' of the ListBox component.
       * Specify a label to be read by screen readers on the container node
       */
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true,
        attribute: 'aria-label'
      })],
      key: "ariaLabel",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true
      })],
      key: "direction",
      value() {
        return DROPDOWN_DIRECTION.BOTTOM;
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
        attribute: 'helper-text'
      })],
      key: "helperText",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'hide-label'
      })],
      key: "hideLabel",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "invalid",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'invalid-text'
      })],
      key: "invalidText",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'title-text'
      })],
      key: "titleText",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "name",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "open",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'read-only'
      })],
      key: "readOnly",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "required",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'required-validity-message'
      })],
      key: "requiredValidityMessage",
      value() {
        return 'Please fill out this field.';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selecting-items-assistive-text'
      })],
      key: "selectingItemsAssistiveText",
      value() {
        return 'Selecting items. Use up and down arrow keys to navigate.';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selected-item-assistive-text'
      })],
      key: "selectedItemAssistiveText",
      value() {
        return 'Selected an item.';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return DROPDOWN_SIZE.MEDIUM;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'toggle-label-closed'
      })],
      key: "toggleLabelClosed",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'toggle-label-open'
      })],
      key: "toggleLabelOpen",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label'
      })],
      key: "label",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",
      value() {
        return DROPDOWN_TYPE.DEFAULT;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'validity-message'
      })],
      key: "validityMessage",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "value",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "warn",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'warn-text'
      })],
      key: "warnText",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value:
      /**
       * Specify the direction of the dropdown. Can be either top or bottom.
       */
      /**
       * `true` if this dropdown should be disabled.
       */
      /**
       * The helper text.
       */
      /**
       * Specify whether the title text should be hidden or not
       */
      /**
       * `true` to show the UI of the invalid state.
       */
      /**
       * Message which is displayed if the value is invalid.
       */
      /**
       * Provide the title text that will be read by a screen reader when visiting this control
       */
      /**
       * Name for the dropdown in the `FormData`
       */
      /**
       * `true` if this dropdown should be open.
       */
      /**
       * Whether or not the Dropdown is readonly
       */
      /**
       * `true` if the value is required.
       */
      /**
       * The special validity message for `required`.
       */
      /**
       * An assistive text for screen reader to announce, telling the open state.
       */
      /**
       * An assistive text for screen reader to announce, telling that an item is selected.
       */
      /**
       * Dropdown size.
       */
      /**
       * The `aria-label` attribute for the UI indicating the closed state.
       */
      /**
       * The `aria-label` attribute for the UI indicating the open state.
       */
      /**
       * Generic label that will be used as the textual representation of what this field is for
       */
      /**
       * `true` if this dropdown should use the inline UI variant.
       */
      /**
       * The validity message.
       */
      /**
       * The value of the selected item.
       */
      /**
       * Specify whether the control is currently in warning state
       */
      /**
       * Provide the text that is displayed when the control is in warning state
       */
      function shouldUpdate(changedProperties) {
        const {
          selectorItem
        } = this.constructor;
        if (changedProperties.has('size')) {
          forEach(this.querySelectorAll(selectorItem), elem => {
            elem.size = this.size;
          });
        }
        if (changedProperties.has('disabled') && this.disabled) {
          const {
            disabled
          } = this;
          // Propagate `disabled` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(selectorItem), elem => {
            if (disabled) {
              elem.disabled = disabled;
            } else {
              elem.removeAttribute('disabled');
            }
          });
        }
        if (changedProperties.has('value')) {
          // `<cds-multi-select>` updates selection beforehand
          // because our rendering logic for `<cds-multi-select>` looks for selected items via `qSA()`
          forEach(this.querySelectorAll(selectorItem), elem => {
            elem.selected = elem.value === this.value;
          });
          const item = find(this.querySelectorAll(selectorItem), elem => elem.value === this.value);
          if (item) {
            const range = this.ownerDocument.createRange();
            range.selectNodeContents(item);
            this._selectedItemContent = range.cloneContents();
          } else {
            this._selectedItemContent = null;
          }
        }
        return true;
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      kind: "method",
      key: "updated",
      value: function updated(_changedProperties) {
        var _this$shadowRoot, _this$querySelector;
        this._hasSlug ? this.setAttribute('slug', '') : this.removeAttribute('slug');
        (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector("slot[name='slug']")) === null || _this$shadowRoot === void 0 || _this$shadowRoot.classList.toggle(`${prefix}--slug--revert`, (_this$querySelector = this.querySelector(`${prefix}-slug`)) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.hasAttribute('revert-active'));
      }

      /**
       * The CSS class list for dropdown listbox
       */
    }, {
      kind: "get",
      key: "_classes",
      value: function _classes() {
        const {
          disabled,
          size,
          type,
          invalid,
          open,
          warn
        } = this;
        const inline = type === DROPDOWN_TYPE.INLINE;
        const selectedItemsCount = this.querySelectorAll(this.constructor.selectorItemSelected).length;
        return classMap({
          [`${prefix}--dropdown`]: true,
          [`${prefix}--list-box`]: true,
          [`${prefix}--list-box--disabled`]: disabled,
          [`${prefix}--list-box--inline`]: inline,
          [`${prefix}--list-box--expanded`]: open,
          [`${prefix}--list-box--${size}`]: size,
          [`${prefix}--dropdown--invalid`]: invalid,
          [`${prefix}--dropdown--warn`]: warn,
          [`${prefix}--dropdown--inline`]: inline,
          [`${prefix}--dropdown--selected`]: selectedItemsCount > 0
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          ariaLabel,
          _classes: classes,
          disabled,
          helperText,
          invalid,
          invalidText,
          open,
          toggleLabelClosed,
          toggleLabelOpen,
          type,
          warn,
          warnText,
          _assistiveStatusText: assistiveStatusText,
          _shouldTriggerBeFocusable: shouldTriggerBeFocusable,
          _handleClickInner: handleClickInner,
          _handleKeydownInner: handleKeydownInner,
          _handleKeypressInner: handleKeypressInner,
          _handleSlotchangeHelperText: handleSlotchangeHelperText,
          _handleSlugSlotChange: handleSlugSlotChange,
          _slotHelperTextNode: slotHelperTextNode
        } = this;
        const inline = type === DROPDOWN_TYPE.INLINE;
        const helperClasses = classMap({
          [`${prefix}--form__helper-text`]: true,
          [`${prefix}--form__helper-text--disabled`]: disabled
        });
        const iconContainerClasses = classMap({
          [`${prefix}--list-box__menu-icon`]: true,
          [`${prefix}--list-box__menu-icon--open`]: open
        });
        const toggleLabel = (open ? toggleLabelOpen : toggleLabelClosed) || undefined;
        const hasHelperText = helperText || slotHelperTextNode && slotHelperTextNode.assignedNodes().length > 0;
        const validityIcon = !invalid ? undefined : WarningFilled16({
          class: `${prefix}--list-box__invalid-icon`,
          'aria-label': toggleLabel
        });
        const warningIcon = !warn || invalid && warn ? undefined : WarningAltFilled16({
          class: `${prefix}--list-box__invalid-icon ${prefix}--list-box__invalid-icon--warning`,
          'aria-label': toggleLabel
        });
        const helperMessage = invalid ? invalidText : warn ? warnText : helperText;
        const menuBody = !open ? undefined : html(_t3 || (_t3 = _`
          <div
            aria-label="${0}"
            id="menu-body"
            part="menu-body"
            class="${0}--list-box__menu"
            role="listbox"
            tabindex="-1">
            <slot></slot>
          </div>
        `), ariaLabel, prefix);
        return html(_t4 || (_t4 = _`
      ${0}
      <div
        role="listbox"
        class="${0}"
        ?data-invalid=${0}
        @click=${0}
        @keydown=${0}
        @keypress=${0}>
        <div
          part="trigger-button"
          role="${0}"
          class="${0}--list-box__field"
          tabindex="${0}"
          aria-labelledby="trigger-label"
          aria-expanded="${0}"
          aria-haspopup="listbox"
          aria-owns="menu-body"
          aria-controls="menu-body">
          ${0}${0}${0}${0}${0}
          <div id="trigger-caret" class="${0}">
            ${0}
          </div>
        </div>
        <slot name="slug" @slotchange=${0}></slot>
        ${0}
      </div>
      <div
        part="helper-text"
        class="${0}"
        ?hidden="${0}">
        <slot name="helper-text" @slotchange="${0}"
          >${0}</slot
        >
      </div>
      <div
        class="${0}--assistive-text"
        role="status"
        aria-live="assertive"
        aria-relevant="additions text">
        ${0}
      </div>
    `), this._renderTitleLabel(), classes, invalid, handleClickInner, handleKeydownInner, handleKeypressInner, ifDefined(!shouldTriggerBeFocusable ? undefined : 'button'), prefix, ifDefined(!shouldTriggerBeFocusable ? undefined : '0'), String(open), this._renderPrecedingLabel(), this._renderLabel(), validityIcon, warningIcon, this._renderFollowingLabel(), iconContainerClasses, ChevronDown16({
          'aria-label': toggleLabel
        }), handleSlugSlotChange, menuBody, helperClasses, inline && !warn && !invalid || !hasHelperText, handleSlotchangeHelperText, helperMessage, prefix, assistiveStatusText);
      }

      /**
       * Symbols of keys that triggers opening/closing menu and selecting/deselecting menu item.
       */
    }, {
      kind: "field",
      static: true,
      key: "TRIGGER_KEYS",
      value() {
        return new Set([' ', 'Enter']);
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
        return `${prefix}-dropdown-item[highlighted]`;
      }

      /**
       * A selector that will return dropdown items.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value: function selectorItem() {
        return `${prefix}-dropdown-item`;
      }

      /**
       * A selector that will return selected items.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItemSelected",
      value: function selectorItemSelected() {
        return `${prefix}-dropdown-item[selected]`;
      }

      /**
       * The name of the custom event fired before a dropdown item is selected upon a user gesture.
       * Cancellation of this event stops changing the user-initiated selection.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeSelect",
      value: function eventBeforeSelect() {
        return `${prefix}-dropdown-beingselected`;
      }

      /**
       * The name of the custom event fired after a a dropdown item is selected upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventSelect",
      value: function eventSelect() {
        return `${prefix}-dropdown-selected`;
      }

      /**
       * The name of the custom event fired before this dropdown item is being toggled upon a user gesture.
       * Cancellation of this event stops the user-initiated action of toggling this dropdown item.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeToggle",
      value: function eventBeforeToggle() {
        return `${prefix}-dropdown-beingtoggled`;
      }

      /**
       * The name of the custom event fired after this dropdown item is toggled upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-dropdown-toggled`;
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
    }, {
      kind: "method",
      static: true,
      key: "getAction",
      value:
      /**
       * @returns A action for dropdown for the given key symbol.
       */
      function getAction(key) {
        if (key === 'Escape') {
          return DROPDOWN_KEYBOARD_ACTION.CLOSING;
        }
        if (key in NAVIGATION_DIRECTION) {
          return DROPDOWN_KEYBOARD_ACTION.NAVIGATING;
        }
        if (this.TRIGGER_KEYS.has(key)) {
          return DROPDOWN_KEYBOARD_ACTION.TRIGGERING;
        }
        return DROPDOWN_KEYBOARD_ACTION.NONE;
      }
    }]
  };
}, ValidityMixin(HostListenerMixin(FormMixin(FocusMixin(LitElement)))));
export default CDSDropdown;
//# sourceMappingURL=dropdown.js.map
