import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6,
  _t7,
  _t8,
  _t9,
  _t10,
  _t11;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import ChevronDown16 from "../../icons/chevron--down/16";
import WarningFilled16 from "../../icons/warning--filled/16";
import WarningAltFilled16 from "../../icons/warning--alt--filled/16";
import { prefix } from '../../globals/settings';
import { ifDefined } from 'lit/directives/if-defined.js';
import FormMixin from '../../globals/mixins/form';
import { filter } from '../../globals/internal/collection-helpers';
import { INPUT_SIZE } from '../text-input/text-input';
import styles from "././select.css.js";
import ifNonEmpty from '../../globals/directives/if-non-empty';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Select box.
 *
 * @element cds-select
 * @fires cds-select-selected
 *   The name of the custom event fired after an item is selected.
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */
let CDSSelect = _decorate([customElement(`${prefix}-select`)], function (_initialize, _FormMixin) {
  class CDSSelect extends _FormMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSelect,
    d: [{
      kind: "field",
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "_observerMutation",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "_placeholderItemValue",
      value() {
        return `__${prefix}-select-placeholder_${Math.random().toString(36).slice(2)}`;
      }
    }, {
      kind: "field",
      decorators: [query('select')],
      key: "_selectNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleInput",
      value:
      /**
       * `true` if there is a slug.
       */

      /**
       * The mutation observer DOM mutation.
       */

      /**
       * The `value` for placeholder `<option>`.
       */

      /**
       * The select box.
       */

      /**
       * Handles `oninput` event on the `<input>`.
       *
       * @param event The event.
       * @param event.target The event target.
       */
      function _handleInput({
        target
      }) {
        const {
          value
        } = target;
        this.value = value;
        const {
          eventSelect
        } = this.constructor;
        this.dispatchEvent(new CustomEvent(eventSelect, {
          bubbles: true,
          composed: true,
          detail: {
            value
          }
        }));
      }

      /**
       * Handles DOM mutation of `<cds-select-item>` or `<cds-select-item-group>` put in `<cds-select>`, or their changes.
       * In such event, `<cds-select>` creates the corresponding `<option>` and `<optgroup>`, respectively, into shadow DOM,
       * with `._renderItems()`.
       * Doing so allows the shadow DOM style of `<cds-select>` to control the style of the `<option>` and `<optgroup>`,
       * notably the disabled ones.
       */
    }, {
      kind: "field",
      key: "_handleMutation",
      value() {
        return () => {
          this.requestUpdate();
        };
      }
    }, {
      kind: "method",
      key: "_renderItems",
      value:
      /**
       * @param element The parent element containing pseudo `<optgroup>`/`<option>`.
       * @returns The template containing child `<optgroup>`/`<option>` that will be rendered to shadow DOM.
       */
      function _renderItems(element) {
        const {
          selectorItem,
          selectorLeafItem
        } = this.constructor;
        // Harvests attributes from `<cds-select-item>` and `<cds-select-item-group>`.
        // Does not use properties to avoid delay in attribute to property mapping, which runs in custom element reaction cycle:
        // https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-reactions
        return html(_t || (_t = _`
      ${0}
    `), filter(element.childNodes, item => item.nodeType === Node.ELEMENT_NODE && item.matches(selectorItem)).map(item => {
          const disabled = item.hasAttribute('disabled');
          const label = item.getAttribute('label');
          const selected = item.hasAttribute('selected');
          const value = item.getAttribute('value');
          const {
            textContent
          } = item;
          return item.matches(selectorLeafItem) ? html(_t2 || (_t2 = _`
              <option
                class="${0}--select-option"
                ?disabled="${0}"
                label="${0}"
                ?selected="${0}"
                value="${0}">
                ${0}
              </option>
            `), prefix, disabled, ifNonEmpty(label), selected, ifDefined(value), textContent) : html(_t3 || (_t3 = _`
              <optgroup
                class="${0}--select-optgroup"
                ?disabled="${0}"
                label="${0}">
                ${0}
              </optgroup>
            `), prefix, disabled, ifDefined(label), this._renderItems(item));
        }));
      }
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
       * The count of child `<option>`s.
       * If the placeholder is in effect, it includes the `<option>` for the placeholder.
       */
    }, {
      kind: "get",
      key: "length",
      value: function length() {
        return this._selectNode.length;
      }

      /**
       * The child `<option>`s.
       */
    }, {
      kind: "get",
      key: "options",
      value: function options() {
        return this._selectNode.options;
      }

      /**
       * This form control's type.
       */
    }, {
      kind: "get",
      key: "type",
      value: function type() {
        return this._selectNode.type;
      }

      /**
       * Sets the select to be focussed automatically on page load. Defaults to false
       */
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "autofocus",
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
        attribute: 'hide-label'
      })],
      key: "hideLabel",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "id",
      value() {
        return '';
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
      kind: "field",
      decorators: [property({
        attribute: 'label-text'
      })],
      key: "labelText",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "inline",
      value() {
        return false;
      }
    }, {
      kind: "get",
      decorators: [property({
        type: Boolean
      })],
      key: "multiple",
      value:
      /**
       * Controls the disabled state of the select
       */
      /**
       * The helper text.
       */
      /**
       * Specify whether the label should be hidden, or not
       */
      /**
       * ID to link the `label` and `select`
       */
      /**
       * Specify if the currently value is invalid.
       */
      /**
       * Message which is displayed if the value is invalid.
       */
      /**
       * Specify if the currently value is warn.
       */
      /**
       * Message which is displayed if the value is warn.
       */
      /**
       * The label text.
       */
      /**
       * Specify whether you want the inline version of this control
       */
      /**
       * `true` to enable multiple selection.
       */
      function multiple() {
        return false;
      }

      /**
       * Name for the select in the `FormData`
       */
    }, {
      kind: "field",
      decorators: [property()],
      key: "name",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "pattern",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "placeholder",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "readonly",
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
      kind: "get",
      decorators: [property({
        type: Number
      })],
      key: "selectedIndex",
      value:
      /**
       * Pattern to validate the select against for HTML validity checking
       */
      /**
       * Value to display when the select has an empty `value`
       */
      /**
       * Controls the readonly state of the select
       */
      /**
       * Boolean property to set the required status
       */
      /**
       * The special validity message for `required`.
       */
      /**
       * The selected index.
       */
      function selectedIndex() {
        return this._selectNode.selectedIndex;
      }
    }, {
      kind: "set",
      key: "selectedIndex",
      value: function selectedIndex(value) {
        this._selectNode.selectedIndex = value;
        this.value = this._selectNode.value;
      }

      /**
       * The input box size.
       */
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return INPUT_SIZE.MEDIUM;
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
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * The value of the text area.
       */
      function connectedCallback() {
        _get(_getPrototypeOf(CDSSelect.prototype), "connectedCallback", this).call(this);
        this._observerMutation = new MutationObserver(this._handleMutation);
        this._observerMutation.observe(this, {
          attributes: true,
          childList: true,
          subtree: true
        });
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._observerMutation) {
          this._observerMutation.disconnect();
          this._observerMutation = null;
        }
        _get(_getPrototypeOf(CDSSelect.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        var _this$shadowRoot, _this$querySelector;
        if (changedProperties.has('value')) {
          const {
            value,
            _placeholderItemValue: placeholderItemValue
          } = this;
          // Ensures setting the `value` after rendering child `<option>`s/`<optgroup>`s when there is a change in `value`,
          // given reflecting `value` requires child `<option>`s/`<optgroup>`s being there beforehand
          this._selectNode.value = !value ? placeholderItemValue : value;
        }
        (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector("slot[name='slug']")) === null || _this$shadowRoot === void 0 || _this$shadowRoot.classList.toggle(`${prefix}--slug--revert`, (_this$querySelector = this.querySelector(`${prefix}-slug`)) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.hasAttribute('revert-active'));
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          helperText,
          hideLabel,
          inline,
          invalid,
          invalidText,
          labelText,
          placeholder,
          readonly,
          size,
          warn,
          warnText,
          value,
          _placeholderItemValue: placeholderItemValue,
          _handleInput: handleInput,
          _handleSlugSlotChange: handleSlugSlotChange,
          _hasSlug: hasSlug
        } = this;
        const selectClasses = classMap({
          [`${prefix}--select`]: true,
          [`${prefix}--select--inline`]: inline,
          [`${prefix}--select--invalid`]: invalid,
          [`${prefix}--select--warning`]: warn,
          [`${prefix}--select--disabled`]: disabled,
          [`${prefix}--select--readonly`]: readonly,
          [`${prefix}--select--slug`]: hasSlug
        });
        const inputClasses = classMap({
          [`${prefix}--select-input`]: true,
          [`${prefix}--select-input--${size}`]: size
        });
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--label--disabled`]: disabled
        });
        const helperTextClasses = classMap({
          [`${prefix}--form__helper-text`]: true,
          [`${prefix}--form__helper-text--disabled`]: disabled
        });
        const supplementalText = helperText ? html(_t4 || (_t4 = _`
          <div class="${0}">
            <slot name="helper-text"> ${0} </slot>
          </div>
        `), helperTextClasses, helperText) : null;
        const errorText = invalid || warn ? html(_t5 || (_t5 = _` <div class="${0}--form-requirement">
            ${0}
          </div>`), prefix, invalid ? invalidText : warnText) : null;
        const input = html(_t6 || (_t6 = _`
      <select
        id="input"
        class="${0}"
        ?disabled="${0}"
        aria-readonly="${0}"
        aria-invalid="${0}"
        aria-describedby="${0}"
        @input="${0}">
        ${0}
        ${0}
      </select>
      ${0}
      <slot name="slug" @slotchange=${0}></slot>
      ${0}
      ${0}
    `), inputClasses, disabled, String(Boolean(readonly)), String(Boolean(invalid)), ifDefined(!invalid ? undefined : 'invalid-text'), handleInput, !placeholder || value ? undefined : html(_t7 || (_t7 = _`
              <option
                disabled
                hidden
                class="${0}--select-option"
                value="${0}"
                selected>
                ${0}
              </option>
            `), prefix, placeholderItemValue, placeholder), this._renderItems(this), ChevronDown16({
          class: `${prefix}--select__arrow`
        }), handleSlugSlotChange, !invalid ? undefined : WarningFilled16({
          class: `${prefix}--select__invalid-icon`
        }), !invalid && warn ? WarningAltFilled16({
          class: `${prefix}--select__invalid-icon ${prefix}--select__invalid-icon--warning`
        }) : null);
        return html(_t8 || (_t8 = _`
      <div class="${0}">
        ${0}
        ${0}
        ${0}
      </div>
    `), selectClasses, !hideLabel ? html(_t9 || (_t9 = _`<label class="${0}" for="input">
              <slot name="label-text"> ${0} </slot>
            </label>`), labelClasses, labelText) : null, inline ? html(_t10 || (_t10 = _`<div class="${0}--select-input--inline__wrapper">
              <div
                class="${0}--select-input__wrapper"
                ?data-invalid="${0}">
                ${0}
              </div>
              ${0}
            </div>`), prefix, prefix, invalid, input, errorText) : html(_t11 || (_t11 = _`<div
              class="${0}--select-input__wrapper"
              ?data-invalid="${0}">
              ${0}
            </div> `), prefix, invalid, input), !inline && errorText ? errorText : supplementalText);
      }

      /**
       * A selector selecting child pseudo `<optgroup>`/`<option>`.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value: function selectorItem() {
        return `${prefix}-select-item-group,${prefix}-select-item`;
      }

      /**
       * A selector selecting child pseudo `<option>`.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorLeafItem",
      value: function selectorLeafItem() {
        return `${prefix}-select-item`;
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
       * The name of the custom event fired after item is selected.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventSelect",
      value: function eventSelect() {
        return `${prefix}-select-selected`;
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
    }]
  };
}, FormMixin(LitElement));
export default CDSSelect;
//# sourceMappingURL=select.js.map
