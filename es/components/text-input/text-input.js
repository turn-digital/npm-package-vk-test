import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6,
  _t7,
  _t8;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { prefix } from '../../globals/settings';
import View16 from "../../icons/view/16";
import ViewOff16 from "../../icons/view--off/16";
import WarningFilled16 from "../../icons/warning--filled/16";
import WarningAltFilled16 from "../../icons/warning--alt--filled/16";
import ifNonEmpty from '../../globals/directives/if-non-empty';
import FormMixin from '../../globals/mixins/form';
import ValidityMixin from '../../globals/mixins/validity';
import { INPUT_COLOR_SCHEME, INPUT_SIZE, INPUT_TOOLTIP_ALIGNMENT, INPUT_TOOLTIP_DIRECTION, INPUT_TYPE } from './defs';
import styles from "././text-input.css.js";
export { INPUT_COLOR_SCHEME, INPUT_SIZE, INPUT_TOOLTIP_ALIGNMENT, INPUT_TOOLTIP_DIRECTION, INPUT_TYPE };

/**
 * Text Input element. Supports all the usual attributes for textual input types
 *
 * @element cds-text-input
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */
let CDSTextInput = _decorate([customElement(`${prefix}-text-input`)], function (_initialize, _ValidityMixin) {
  class CDSTextInput extends _ValidityMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTextInput,
    d: [{
      kind: "field",
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * `true` if there is a slug.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().filter(elem => elem.matches !== undefined ? elem.matches(this.constructor.slugItem) : false);
        this._hasSlug = Boolean(hasContent);
        hasContent[0].setAttribute('size', 'mini');
        this.requestUpdate();
      }
      /**
       * The underlying input element
       */
    }, {
      kind: "field",
      decorators: [query('input')],
      key: "_input",
      value: void 0
    }, {
      kind: "field",
      key: "_value",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "_handleInput",
      value:
      /**
       * The internal value.
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
        this.value = target.value;
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
       * May be any of the standard HTML autocomplete options
       */
    }, {
      kind: "field",
      decorators: [property()],
      key: "autocomplete",
      value() {
        return '';
      }
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
        type: Boolean,
        attribute: 'enable-counter',
        reflect: true
      })],
      key: "enableCounter",
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
        type: Number,
        attribute: 'max-count',
        reflect: true
      })],
      key: "maxCount",
      value: void 0
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
        attribute: 'hide-label',
        type: Boolean,
        reflect: true
      })],
      key: "hideLabel",
      value() {
        return false;
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
      kind: "field",
      decorators: [property()],
      key: "hidePasswordLabel",
      value() {
        return 'Hide password';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "showPasswordLabel",
      value() {
        return 'Show password';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'show-password-visibility-toggle',
        reflect: true
      })],
      key: "showPasswordVisibilityToggle",
      value() {
        return false;
      }
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
        type: Boolean,
        reflect: true
      })],
      key: "inline",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "tooltipAlignment",
      value() {
        return INPUT_TOOLTIP_ALIGNMENT.CENTER;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "tooltipDirection",
      value() {
        return INPUT_TOOLTIP_DIRECTION.BOTTOM;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",
      value() {
        return INPUT_TYPE.TEXT;
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
      kind: "get",
      decorators: [property({
        reflect: true
      })],
      key: "value",
      value:
      /**
       * Sets the input to be focussed automatically on page load. Defaults to false
       */
      /**
       * Controls the disabled state of the input
       */
      /**
       * Specify whether to display the character counter
       */
      /**
       * The helper text.
       */
      /**
       * Specify if the currently value is invalid.
       */
      /**
       * Message which is displayed if the value is invalid.
       */
      /**
       * Max character count allowed for input. This is needed in order for enableCounter to display
       */
      /**
       * Specify whether the control is currently in warning state
       */
      /**
       * Provide the text that is displayed when the control is in warning state
       */
      /**
       * Specify whether you want the underlying label to be visually hidden
       */
      /**
       * Generic label that will be used as the textual representation of what this field is for
       */
      /**
       * Name for the input in the `FormData`
       */
      /**
       * Pattern to validate the input against for HTML validity checking
       */
      /**
       * Value to display when the input has an empty `value`
       */
      /**
       * Specify if the component should be read-only
       */
      /**
       * Boolean property to set the required status
       */
      /**
       * The special validity message for `required`.
       */
      /**
       * "Hide password" tooltip text on password visibility toggle
       */
      /**
       * "Show password" tooltip text on password visibility toggle
       */
      /**
       * Boolean property to render password visibility toggle
       */
      /**
       * The input box size.
       */
      /**
       * true to use the inline version.
       */
      /**
       * Specify the alignment of the tooltip to the icon-only button.
       * Can be one of: start, center, or end.
       */
      /**
       * Specify the direction of the tooltip for icon-only buttons.
       * Can be either top, right, bottom, or left.
       */
      /**
       * The type of the input. Can be one of the types listed in the INPUT_TYPE enum
       */
      /**
       * The validity message. If present and non-empty, this input shows the UI of its invalid state.
       */
      /**
       * The value of the input.
       */
      function value() {
        // FIXME: Figure out how to deal with TS2611
        // once we have the input we can directly query for the value
        if (this._input) {
          return this._input.value;
        }
        // but before then _value will work fine
        return this._value;
      }
    }, {
      kind: "set",
      key: "value",
      value: function value(_value) {
        const oldValue = this._value;
        this._value = _value;
        // make sure that lit-element updates the right properties
        this.requestUpdate('value', oldValue);
        // we set the value directly on the input (when available)
        // so that programatic manipulation updates the UI correctly
        if (this._input) {
          this._input.value = _value;
        }
      }

      /**
       * Handles password visibility toggle button click
       */
    }, {
      kind: "method",
      key: "handleTogglePasswordVisibility",
      value: function handleTogglePasswordVisibility() {
        this.type = this.type === INPUT_TYPE.PASSWORD ? INPUT_TYPE.TEXT : INPUT_TYPE.PASSWORD;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          enableCounter,
          helperText,
          hideLabel,
          inline,
          invalid,
          invalidText,
          label,
          maxCount,
          readonly,
          required,
          size,
          type,
          warn,
          warnText,
          value,
          _handleInput: handleInput,
          _hasSlug: hasSlug,
          _handleSlotChange: handleSlotChange
        } = this;
        const invalidIcon = WarningFilled16({
          class: `${prefix}--text-input__invalid-icon`
        });
        const warnIcon = WarningAltFilled16({
          class: `${prefix}--text-input__invalid-icon ${prefix}--text-input__invalid-icon--warning`
        });
        const normalizedProps = {
          disabled: !readonly && disabled,
          invalid: !readonly && invalid,
          warn: !readonly && !invalid && warn,
          'slot-name': '',
          'slot-text': '',
          icon: null
        };
        if (normalizedProps.invalid) {
          normalizedProps.icon = invalidIcon;
          normalizedProps['slot-name'] = 'invalid-text';
          normalizedProps['slot-text'] = invalidText;
        } else if (normalizedProps.warn) {
          normalizedProps.icon = warnIcon;
          normalizedProps['slot-name'] = 'warn-text';
          normalizedProps['slot-text'] = warnText;
        }
        const counterClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--text-input__label-counter`]: true,
          [`${prefix}--label--disabled`]: disabled
        });
        const inputWrapperClasses = classMap({
          [`${prefix}--form-item`]: true,
          [`${prefix}--text-input-wrapper`]: true,
          [`${prefix}--text-input-wrapper--inline`]: inline,
          [`${prefix}--text-input-wrapper--readonly`]: readonly,
          [`${prefix}--text-input-wrapper--inline--invalid`]: inline && normalizedProps.invalid
        });
        const inputClasses = classMap({
          [`${prefix}--text-input`]: true,
          [`${prefix}--text-input--invalid`]: normalizedProps.invalid,
          [`${prefix}--text-input--warning`]: normalizedProps.warn,
          [`${prefix}--text-input--${size}`]: size,
          [`${prefix}--layout--size-${size}`]: size,
          [`${prefix}--password-input`]: type === INPUT_TYPE.PASSWORD
        });
        const fieldOuterWrapperClasses = classMap({
          [`${prefix}--text-input__field-outer-wrapper`]: true,
          [`${prefix}--text-input__field-outer-wrapper--inline`]: inline
        });
        const fieldWrapperClasses = classMap({
          [`${prefix}--text-input__field-wrapper`]: true,
          [`${prefix}--text-input__field-wrapper--warning`]: normalizedProps.warn,
          [`${prefix}--text-input__field-wrapper--slug`]: hasSlug
        });
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--visually-hidden`]: hideLabel,
          [`${prefix}--label--disabled`]: normalizedProps.disabled
        });
        const helperTextClasses = classMap({
          [`${prefix}--form__helper-text`]: true,
          [`${prefix}--form__helper-text--disabled`]: normalizedProps.disabled
        });
        const passwordIsVisible = type !== INPUT_TYPE.PASSWORD;
        const passwordVisibilityIcon = passwordIsVisible ? ViewOff16({
          class: `${prefix}--icon-visibility-off`
        }) : View16({
          class: `${prefix}--icon-visibility-on`
        });
        const passwordVisibilityToggleClasses = classMap({
          [`${prefix}--text-input--password__visibility__toggle`]: true,
          [`${prefix}--btn`]: true,
          [`${prefix}--btn--icon-only`]: true,
          [`${prefix}--tooltip__trigger`]: true,
          [`${prefix}--tooltip--a11y`]: true,
          [`${prefix}--btn--disabled`]: normalizedProps.disabled,
          [`${prefix}--tooltip--${this.tooltipDirection}`]: this.tooltipDirection,
          [`${prefix}--tooltip--align-${this.tooltipAlignment}`]: this.tooltipAlignment
        });
        const passwordButtonLabel = html(_t || (_t = _`
      <span class="${0}--assistive-text">
        ${0}
      </span>
    `), prefix, passwordIsVisible ? this.hidePasswordLabel : this.showPasswordLabel);
        const passwordVisibilityButton = () => html(_t2 || (_t2 = _`
      <button
        type="button"
        class="${0}"
        ?disabled="${0}"
        @click="${0}">
        ${0}
        ${0}
      </button>
    `), passwordVisibilityToggleClasses, normalizedProps.disabled, this.handleTogglePasswordVisibility, !normalizedProps.disabled ? passwordButtonLabel : null, passwordVisibilityIcon);
        const textCount = value === null || value === void 0 ? void 0 : value.length;
        const counter = enableCounter && maxCount ? html(_t3 || (_t3 = _` <label class="${0}">
            <slot name="label-text">${0}/${0}</slot>
          </label>`), counterClasses, textCount, maxCount) : null;
        const labelText = label && !hideLabel ? html(_t4 || (_t4 = _`<label class="${0}"> ${0} </label>`), labelClasses, label) : null;
        const labelWrapper = html(_t5 || (_t5 = _`<div class="${0}--text-input__label-wrapper">
      ${0} ${0}
    </div>`), prefix, labelText, counter);
        const helper = helperText ? html(_t6 || (_t6 = _`<div
          class="${0}"
          id="helper-text"
          ?hidden="${0}">
          <slot name="helper-text"> ${0} </slot>
        </div>`), helperTextClasses, normalizedProps.invalid || normalizedProps.warn, helperText) : null;
        return html(_t7 || (_t7 = _`
      <div class="${0}">
        ${0}
        <div class="${0}">
          <div class="${0}" ?data-invalid="${0}">
            ${0}
            <input
              autocomplete="${0}"
              ?autofocus="${0}"
              class="${0}"
              ?data-invalid="${0}"
              ?disabled="${0}"
              aria-describedby="helper-text"
              id="input"
              name="${0}"
              pattern="${0}"
              placeholder="${0}"
              ?readonly="${0}"
              ?required="${0}"
              type="${0}"
              .value="${0}"
              maxlength="${0}"
              @input="${0}" />
            <slot name="slug" @slotchange="${0}"></slot>
            ${0}
          </div>
          ${0}
          <div
            class="${0}--form-requirement"
            ?hidden="${0}">
            <slot name="${0}">
              ${0}
            </slot>
          </div>
        </div>
      </div>
    `), inputWrapperClasses, !inline ? labelWrapper : html(_t8 || (_t8 = _`<div class="${0}--text-input__label-helper-wrapper">
              ${0} ${0}
            </div>`), prefix, labelWrapper, helper), fieldOuterWrapperClasses, fieldWrapperClasses, invalid, normalizedProps.icon, this.autocomplete, this.autofocus, inputClasses, invalid, disabled, ifNonEmpty(this.name), ifNonEmpty(this.pattern), ifNonEmpty(this.placeholder), readonly, required, ifNonEmpty(type), this._value, ifNonEmpty(maxCount), handleInput, handleSlotChange, this.showPasswordVisibilityToggle && (type === INPUT_TYPE.PASSWORD || type === INPUT_TYPE.TEXT) ? passwordVisibilityButton() : null, !inline ? helper : null, prefix, !normalizedProps.invalid && !normalizedProps.warn, normalizedProps['slot-name'], normalizedProps['slot-text']);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated() {
        var _this$shadowRoot, _this$querySelector;
        (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector("slot[name='slug']")) === null || _this$shadowRoot === void 0 || _this$shadowRoot.classList.toggle(`${prefix}--slug--revert`, (_this$querySelector = this.querySelector(`${prefix}-slug`)) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.hasAttribute('revert-active'));
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
    }]
  };
}, ValidityMixin(FormMixin(LitElement)));
export default CDSTextInput;
//# sourceMappingURL=text-input.js.map
