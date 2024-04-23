import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _2 = t => t,
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
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { prefix } from '../../globals/settings';
import WarningFilled16 from "../../icons/warning--filled/16";
import WarningAltFilled16 from "../../icons/warning--alt--filled/16";
import Add16 from "../../icons/add/16";
import Subtract16 from "../../icons/subtract/16";
import ifNonEmpty from '../../globals/directives/if-non-empty';
import { NUMBER_INPUT_VALIDATION_STATUS } from './defs';
import styles from "././number-input.css.js";
import CDSTextInput, { INPUT_SIZE } from '../text-input/text-input';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { NUMBER_INPUT_VALIDATION_STATUS };

/**
 * Number input.
 *
 * @element cds-number-input
 * @fires cds-number-input
 *   The name of the custom event fired after the value is changed upon a user gesture.
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */
let CDSNumberInput = _decorate([customElement(`${prefix}-number-input`)], function (_initialize, _CDSTextInput) {
  class CDSNumberInput extends _CDSTextInput {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSNumberInput,
    d: [{
      kind: "method",
      key: "_handleInput",
      value:
      /**
       * Handles `input` event on the `<input>` in the shadow DOM.
       */
      function _handleInput(event) {
        const {
          target
        } = event;
        const {
          value
        } = target;
        this.dispatchEvent(new CustomEvent(this.constructor.eventInput, {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            value
          }
        }));
        _get(_getPrototypeOf(CDSNumberInput.prototype), "_handleInput", this).call(this, event);
      }

      /**
       * Handles `click` event on the up button in the shadow DOM.
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      kind: "method",
      key: "_handleUserInitiatedStepDown",
      value: function _handleUserInitiatedStepDown(_) {
        const {
          _input: input
        } = this;
        this.stepDown();
        this.dispatchEvent(new CustomEvent(this.constructor.eventInput, {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            value: input.value
          }
        }));
      }

      /**
       * Handles `click` event on the down button in the shadow DOM.
       */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, {
      kind: "method",
      key: "_handleUserInitiatedStepUp",
      value: function _handleUserInitiatedStepUp(_) {
        const {
          _input: input
        } = this;
        this.stepUp();
        this.dispatchEvent(new CustomEvent(this.constructor.eventInput, {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            value: input.value
          }
        }));
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
      kind: "method",
      key: "_getInputValidity",
      value: function _getInputValidity() {
        var _this$_input, _this$_input2;
        if (this.invalid) {
          return false;
        }
        if (((_this$_input = this._input) === null || _this$_input === void 0 ? void 0 : _this$_input.valueAsNumber) > Number(this.max) || ((_this$_input2 = this._input) === null || _this$_input2 === void 0 ? void 0 : _this$_input2.valueAsNumber) < Number(this.min)) {
          return false;
        }
        if (this.value === '') {
          return this.allowEmpty;
        }
        return true;
      }
    }, {
      kind: "field",
      key: "_min",
      value() {
        return '';
      }
    }, {
      kind: "field",
      key: "_max",
      value() {
        return '';
      }
    }, {
      kind: "field",
      key: "_step",
      value() {
        return '1';
      }
    }, {
      kind: "get",
      decorators: [property({
        reflect: true
      })],
      key: "min",
      value:
      /**
       * The minimum value allowed in the input
       */
      function min() {
        return this._min.toString();
      }
    }, {
      kind: "set",
      key: "min",
      value: function min(value) {
        const oldValue = this.min;
        this._min = value;
        this.requestUpdate('min', oldValue);
      }

      /**
       * The maximum value allowed in the input
       */
    }, {
      kind: "get",
      decorators: [property({
        reflect: true
      })],
      key: "max",
      value: function max() {
        return this._max.toString();
      }
    }, {
      kind: "set",
      key: "max",
      value: function max(value) {
        const oldValue = this.max;
        this._max = value;
        this.requestUpdate('max', oldValue);
      }

      /**
       * The amount the value should increase or decrease by
       */
    }, {
      kind: "get",
      decorators: [property({
        reflect: true
      })],
      key: "step",
      value: function step() {
        return this._step.toString();
      }
    }, {
      kind: "set",
      key: "step",
      value: function step(value) {
        const oldValue = this.step;
        this._step = value;
        this.requestUpdate('step', oldValue);
      }

      /**
       * Aria text for the button that increments the value
       */
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'increment-button-assistive-text'
      })],
      key: "incrementButtonAssistiveText",
      value() {
        return 'increase number input';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'decrement-button-assistive-text'
      })],
      key: "decrementButtonAssistiveText",
      value() {
        return 'decrease number input';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'hide-steppers',
        reflect: true
      })],
      key: "hideSteppers",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'allow-empty',
        reflect: true
      })],
      key: "allowEmpty",
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
      kind: "method",
      key: "stepUp",
      value:
      /**
       * Aria text for the button that decrements the value
       */
      /**
       * Specify whether you want the steppers to be hidden
       */
      /**
       * `true` to allow empty string.
       */
      /**
       * The input box size.
       */
      /**
       * Handles incrementing the value in the input
       */
      function stepUp() {
        this._input.stepUp();
      }

      /**
       * Handles decrementing the value in the input
       */
    }, {
      kind: "method",
      key: "stepDown",
      value: function stepDown() {
        this._input.stepDown();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _handleInput: handleInput,
          _handleUserInitiatedStepDown: handleUserInitiatedStepDown,
          _handleUserInitiatedStepUp: handleUserInitiatedStepUp
        } = this;
        const isValid = this._getInputValidity();
        const invalidIcon = WarningFilled16({
          class: `${prefix}--number__invalid`
        });
        const warnIcon = WarningAltFilled16({
          class: `${prefix}--number__invalid ${prefix}--number__invalid--warning`
        });
        const normalizedProps = {
          disabled: !this.readonly && this.disabled,
          invalid: !this.readonly && !isValid,
          warn: !this.readonly && isValid && this.warn,
          'slot-name': '',
          'slot-text': '',
          icon: null
        };
        const wrapperClasses = classMap({
          [`${prefix}--number`]: true,
          [`${prefix}--number--${this.size}`]: this.size,
          [`${prefix}--number--nosteppers`]: this.hideSteppers,
          [`${prefix}--number--readonly`]: this.readonly
        });
        const inputWrapperClasses = classMap({
          [`${prefix}--number__input-wrapper`]: true,
          [`${prefix}--number__input-wrapper--warning`]: normalizedProps.warn,
          [`${prefix}--number__input-wrapper--slug`]: this._hasSlug
        });
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--label--disabled`]: normalizedProps.disabled,
          [`${prefix}--visually-hidden`]: this.hideLabel
        });
        const helperTextClasses = classMap({
          [`${prefix}--form__helper-text`]: true,
          [`${prefix}--form__helper-text--disabled`]: normalizedProps.disabled
        });
        const incrementButton = html(_t || (_t = _2`
      <button
        class="${0}--number__control-btn up-icon"
        aria-label="${0}"
        aria-live="polite"
        aria-atomic="true"
        type="button"
        ?disabled=${0}
        @click=${0}>
        ${0}
      </button>
      <div class="${0}--number__rule-divider"></div>
    `), prefix, this.incrementButtonAssistiveText, normalizedProps.disabled, handleUserInitiatedStepUp, Add16(), prefix);
        const decrementButton = html(_t2 || (_t2 = _2`
      <button
        class="${0}--number__control-btn down-icon"
        aria-label="${0}"
        aria-live="polite"
        aria-atomic="true"
        type="button"
        ?disabled=${0}
        @click=${0}>
        ${0}
      </button>
      <div class="${0}--number__rule-divider"></div>
    `), prefix, this.decrementButtonAssistiveText, normalizedProps.disabled, handleUserInitiatedStepDown, Subtract16(), prefix);
        const input = html(_t3 || (_t3 = _2`
      <input
        autocomplete="${0}"
        ?autofocus="${0}"
        ?data-invalid="${0}"
        ?disabled="${0}"
        id="input"
        name="${0}"
        pattern="${0}"
        ?readonly="${0}"
        ?required="${0}"
        type="number"
        .value="${0}"
        @input="${0}"
        min="${0}"
        max="${0}"
        step="${0}"
        role="alert"
        aria-atomic="true" />
    `), this.autocomplete, this.autofocus, normalizedProps.invalid, normalizedProps.disabled, ifNonEmpty(this.name), ifNonEmpty(this.pattern), this.readonly, this.required, this._value, handleInput, ifNonEmpty(this.min), ifNonEmpty(this.max), ifNonEmpty(this.step));
        if (normalizedProps.invalid) {
          normalizedProps.icon = invalidIcon;
          normalizedProps['slot-name'] = 'invalid-text';
          normalizedProps['slot-text'] = this.invalidText;
        } else if (normalizedProps.warn) {
          normalizedProps.icon = warnIcon;
          normalizedProps['slot-name'] = 'warn-text';
          normalizedProps['slot-text'] = this.warnText;
        }
        return html(_t4 || (_t4 = _2`
      <div class="${0}" ?data-invalid=${0}>
        <label class="${0}" for="input">
          <slot name="label-text"> ${0} </slot>
        </label>
        <div class="${0}">
          ${0} ${0}
          <slot name="slug" @slotchange="${0}"></slot>
          <div class="${0}--number__controls">
            ${0}
          </div>
        </div>
        <div
          class="${0}"
          ?hidden="${0}">
          <slot name="helper-text"> ${0} </slot>
        </div>
        <div
          class="${0}--form-requirement"
          ?hidden="${0}">
          <slot name="${0}">
            ${0}
          </slot>
        </div>
      </div>
    `), wrapperClasses, normalizedProps.invalid, labelClasses, this.label, inputWrapperClasses, normalizedProps.icon, input, this._handleSlotChange, prefix, !this.hideSteppers ? html(_t5 || (_t5 = _2`${0} ${0}`), decrementButton, incrementButton) : null, helperTextClasses, normalizedProps.invalid || normalizedProps.warn, this.helperText, prefix, !normalizedProps.invalid && !normalizedProps.warn, normalizedProps['slot-name'], normalizedProps['slot-text']);
      }

      /**
       * The name of the custom event fired after the value is changed upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventInput",
      value: function eventInput() {
        return `${prefix}-number-input`;
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
}, CDSTextInput);
export default CDSNumberInput;
//# sourceMappingURL=number-input.js.map
