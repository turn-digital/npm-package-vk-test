import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2,
  _t3;
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
import throttle from 'lodash-es/throttle';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import FormMixin from '../../globals/mixins/form';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import styles from "././slider.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
/**
 * The direction to move the thumb, associated with key symbols.
 */
const THUMB_DIRECTION = {
  Left: -1,
  ArrowLeft: -1,
  Up: -1,
  ArrowUp: -1,
  Right: 1,
  ArrowRight: 1,
  Down: 1,
  ArrowDown: 1
};

/**
 * Slider.
 *
 * @element cds-slider
 * @fires cds-slider-input-changed
 *   The name of the custom event fired after the value is changed in `<cds-slider-input>` by user gesture.
 * @slot label-text - The label text.
 * @slot max-text - The text for maximum value.
 * @slot min-text - The text for minimum value.
 * @fires cds-slider-changed - The custom event fired after the value is changed by user gesture.
 */
let CDSSlider = _decorate([customElement(`${prefix}-slider`)], function (_initialize, _HostListenerMixin) {
  class CDSSlider extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSlider,
    d: [{
      kind: "field",
      key: "_max",
      value() {
        return '100';
      }
    }, {
      kind: "field",
      key: "_min",
      value() {
        return '0';
      }
    }, {
      kind: "field",
      key: "_step",
      value() {
        return '1';
      }
    }, {
      kind: "field",
      key: "_stepMultiplier",
      value() {
        return '4';
      }
    }, {
      kind: "field",
      key: "_throttledHandlePointermoveImpl",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "_dragging",
      value() {
        return false;
      }
    }, {
      kind: "get",
      key: "_rate",
      value:
      /**
       * The internal value of `max` property.
       */

      /**
       * The internal value of `min` property.
       */

      /**
       * The internal value of `step` property.
       */

      /**
       * The internal value of `stepMultiplier` property.
       */

      /**
       * The handle for the throttled listener of `pointermove` event.
       */

      /**
       * `true` if dragging of thumb is in progress.
       */

      /**
       * The rate of the thumb position in the track.
       * When we try to set a new value, we adjust the value considering `step` property.
       */
      function _rate() {
        const {
          max,
          min,
          value
        } = this;
        // Copes with out-of-range value coming programmatically or from `<cds-slider-input>`
        return (Math.min(Number(max), Math.max(Number(min), value)) - Number(min)) / (Number(max) - Number(min));
      }
    }, {
      kind: "set",
      key: "_rate",
      value: function _rate(rate) {
        const {
          max,
          min,
          step
        } = this;
        this.value = Number(min) + Math.round((Number(max) - Number(min)) * Math.min(1, Math.max(0, rate)) / Number(step)) * Number(step);
      }

      /**
       * The DOM element of the thumb.
       */
    }, {
      kind: "field",
      decorators: [query('#thumb')],
      key: "_thumbNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#track')],
      key: "_trackNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleClickLabel",
      value:
      /**
       * The DOM element of the track.
       */
      /**
       * Handles `click` event on the `<label>` to focus on the thumb.
       */
      function _handleClickLabel() {
        var _this$_thumbNode;
        (_this$_thumbNode = this._thumbNode) === null || _this$_thumbNode === void 0 || _this$_thumbNode.focus();
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
          formData.append(name, String(value));
        }
      }

      /**
       * Handles `keydown` event on the thumb to increase/decrease the value.
       */
    }, {
      kind: "method",
      key: "_handleKeydown",
      value: function _handleKeydown({
        key,
        shiftKey
      }) {
        if (!this.disabled) {
          if (key in THUMB_DIRECTION) {
            const {
              max: rawMax,
              min: rawMin,
              step: rawStep,
              stepMultiplier: rawstepMultiplier,
              value
            } = this;
            const max = Number(rawMax);
            const min = Number(rawMin);
            const step = Number(rawStep);
            const stepMultiplier = Number(rawstepMultiplier);
            const diff = (!shiftKey ? step : (max - min) / stepMultiplier) * THUMB_DIRECTION[key];
            const stepCount = (value + diff) / step;
            // Snaps to next
            this.value = Math.min(max, Math.max(min, (diff >= 0 ? Math.floor(stepCount) : Math.ceil(stepCount)) * step));
            this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
              bubbles: true,
              composed: true,
              detail: {
                value: this.value,
                intermediate: false
              }
            }));
          }
        }
      }

      /**
       * Handles `pointerdown` event on the thumb to start dragging.
       */
    }, {
      kind: "method",
      key: "_startDrag",
      value: function _startDrag() {
        this._dragging = true;
        this._thumbNode.style.touchAction = 'none';
      }

      /**
       * Handles `pointerdown` event on the track to update the thumb position and the value as necessary.
       */
    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick(event) {
        if (!this.disabled) {
          const {
            _trackNode: trackNode
          } = this;
          const isRtl = trackNode.ownerDocument.defaultView.getComputedStyle(trackNode).getPropertyValue('direction') === 'rtl';
          const thumbPosition = event.clientX;
          const {
            left: trackLeft,
            width: trackWidth
          } = trackNode.getBoundingClientRect();
          this._rate = (isRtl ? trackLeft + trackWidth - thumbPosition : thumbPosition - trackLeft) / trackWidth;
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              value: this.value
            }
          }));
        }
      }

      /**
       * Handles `pointermove` to update the thumb position and the value as necessary.
       *
       * @param event The event.
       */
    }, {
      kind: "field",
      decorators: [HostListener('document:pointermove')],
      key: "_handlePointermove",
      value() {
        return event => {
          const {
            disabled,
            _dragging: dragging
          } = this;
          if (!disabled && dragging) {
            this._throttledHandlePointermoveImpl(event);
          }
        };
      }
    }, {
      kind: "method",
      key: "_handlePointermoveImpl",
      value:
      /**
       * Updates thumb position and value upon user's `pointermove` gesture.
       *
       * @param event The event.
       */
      function _handlePointermoveImpl(event) {
        const {
          disabled,
          _dragging: dragging,
          _trackNode: trackNode
        } = this;
        if (!disabled && dragging) {
          const isRtl = trackNode.ownerDocument.defaultView.getComputedStyle(trackNode).getPropertyValue('direction') === 'rtl';
          const thumbPosition = event.clientX;
          const {
            left: trackLeft,
            width: trackWidth
          } = this._trackNode.getBoundingClientRect();
          this._rate = (isRtl ? trackLeft + trackWidth - thumbPosition : thumbPosition - trackLeft) / trackWidth;
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              value: this.value,
              intermediate: true
            }
          }));
        }
      }

      /**
       * Handles `pointerup` and `pointerleave` event to finishing dragging.
       */
    }, {
      kind: "field",
      key: "_endDrag",
      value() {
        return () => {
          if (this._dragging) {
            this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
              bubbles: true,
              composed: true,
              detail: {
                value: this.value
              }
            }));
            this._dragging = false;
            this._thumbNode.style.touchAction = '';
          }
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('eventChangeInput')],
      key: "_handleChangeInput",
      value() {
        return ({
          detail
        }) => {
          const {
            intermediate,
            value
          } = detail;
          this.value = value;
          this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
            bubbles: true,
            composed: true,
            detail: {
              value,
              intermediate
            }
          }));
        };
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
      key: "required",
      value() {
        return false;
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
        attribute: 'label-text'
      })],
      key: "labelText",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'max-label',
        reflect: true
      })],
      key: "maxLabel",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'min-label',
        reflect: true
      })],
      key: "minLabel",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatMaxText",
      value() {
        return (max, maxLabel) => `${max}${maxLabel}`;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatMinText",
      value() {
        return (min, minLabel) => `${min}${minLabel}`;
      }
    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "max",
      value:
      /**
       * Handles `${prefix}-slider-input-changed` event to update the value.
       */
      /**
       * `true` if the check box should be disabled.
       */
      /**
       * 	true to specify if the control is required.
       */
      /**
       * 	Whether the slider should be read-only
       */
      /**
       * The label text.
       */
      /**
       * The label associated with the maximum value.
       */
      /**
       * The label associated with the minimum value.
       */
      /**
       * The formatter for the text for maximum value.
       * Should be changed upon the locale the UI is rendered with.
       */
      /**
       * The formatter for the text for min/max value.
       * Should be changed upon the locale the UI is rendered with.
       */
      /**
       * The maximum value.
       */
      function max() {
        return this._max.toString();
      }
    }, {
      kind: "set",
      key: "max",
      value: function max(value) {
        const {
          max: oldMax
        } = this;
        this._max = value;
        this.requestUpdate('max', oldMax);
      }

      /**
       * The minimum value.
       */
    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "min",
      value: function min() {
        return this._min.toString();
      }
    }, {
      kind: "set",
      key: "min",
      value: function min(value) {
        const {
          min: oldMin
        } = this;
        this._min = value;
        this.requestUpdate('min', oldMin);
      }

      /**
       * The form name.
       */
    }, {
      kind: "field",
      decorators: [property()],
      key: "name",
      value: void 0
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
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "step",
      value:
      /**
       * true to specify if the control is invalid.
       */
      /**
       * Message which is displayed if the value is invalid.
       */
      /**
       * true to specify if the control should display warn icon and text.
       */
      /**
       * Provide the text that is displayed when the control is in warning state
       */
      /**
       * The snapping step of the value.
       */
      function step() {
        return this._step.toString();
      }
    }, {
      kind: "set",
      key: "step",
      value: function step(value) {
        const {
          step: oldStep
        } = this;
        this._step = value;
        this.requestUpdate('step', oldStep);
      }

      /**
       * A value determining how much the value should increase/decrease by Shift+arrow keys,
       * which will be `(max - min) / stepMultiplier`.
       */
    }, {
      kind: "get",
      decorators: [property({
        type: Number,
        reflect: true,
        attribute: 'step-multiplier'
      })],
      key: "stepMultiplier",
      value: function stepMultiplier() {
        return this._stepMultiplier.toString();
      }
    }, {
      kind: "set",
      key: "stepMultiplier",
      value: function stepMultiplier(value) {
        const {
          stepMultiplier: oldstepMultiplier
        } = this;
        this._stepMultiplier = value;
        this.requestUpdate('stepMultiplier', oldstepMultiplier);
      }

      /**
       * The value.
       */
    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "isValid",
      value: void 0
    }, {
      kind: "method",
      key: "_getInputValidity",
      value:
      /**
       * is slide input valid
       */
      function _getInputValidity(input) {
        if (this.invalid) {
          return false;
        }
        if ((input === null || input === void 0 ? void 0 : input.valueAsNumber) > Number(this.max) || (input === null || input === void 0 ? void 0 : input.valueAsNumber) < Number(this.min)) {
          return false;
        }
        return true;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(CDSSlider.prototype), "connectedCallback", this).call(this);
        if (!this._throttledHandlePointermoveImpl) {
          this._throttledHandlePointermoveImpl = throttle(this._handlePointermoveImpl, 10);
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._throttledHandlePointermoveImpl) {
          this._throttledHandlePointermoveImpl.cancel();
          this._throttledHandlePointermoveImpl = null;
        }
        _get(_getPrototypeOf(CDSSlider.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        const input = this.querySelector(this.constructor.selectorInput);
        if (changedProperties.has('disabled')) {
          if (input) {
            input.disabled = this.disabled;
          }
          if (this.disabled) {
            this._dragging = false;
          }
        }
        if (changedProperties.has('readonly')) {
          if (input) {
            input.readonly = this.readonly;
          }
          if (this.readonly) {
            this._dragging = false;
          }
        }
        if (input) {
          ['max', 'min', 'step', 'value'].forEach(name => {
            if (changedProperties.has(name)) {
              input[name] = this[name];
            }
          });
          if (changedProperties.has('value') || changedProperties.has('invalid') || changedProperties.has('warn') || changedProperties.has('readonly')) {
            var _input$shadowRoot;
            const innerInput = input === null || input === void 0 || (_input$shadowRoot = input.shadowRoot) === null || _input$shadowRoot === void 0 ? void 0 : _input$shadowRoot.querySelector('input');
            this.isValid = this._getInputValidity(innerInput);
            if (!this.readonly && !this.isValid) {
              input.invalid = true;
            } else {
              input.invalid = false;
            }
            if (!this.readonly && !this.invalid && this.warn && this.isValid) {
              input.warn = true;
            } else {
              input.warn = false;
            }
          }
        }
        return true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          formatMaxText,
          formatMinText,
          labelText,
          max,
          min,
          maxLabel,
          minLabel,
          readonly,
          invalidText,
          isValid,
          warn,
          warnText,
          value,
          _rate: rate,
          _handleClickLabel: handleClickLabel,
          _handleKeydown: handleKeydown,
          _handleClick: handleClick,
          _startDrag: startDrag,
          _endDrag: endDrag
        } = this;
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--label--disabled`]: disabled
        });
        const sliderClasses = classMap({
          [`${prefix}--slider`]: true,
          [`${prefix}--slider--disabled`]: disabled,
          [`${prefix}--slider--readonly`]: readonly
        });
        return html(_t || (_t = _`
      <label class="${0}" @click="${0}">
        <slot name="label-text">${0}</slot>
      </label>
      <div class="${0}--slider-container">
        <span class="${0}--slider__range-label">
          <slot name="min-text">${0}</slot>
        </span>
        <div
          @keydown="${0}"
          @click="${0}"
          @pointerup="${0}"
          @pointerleave="${0}"
          class="${0}"
          tabindex="-1"
          role="presentation">
          <div
            id="thumb"
            class="${0}--slider__thumb"
            role="slider"
            tabindex="${0}"
            aria-valuemax="${0}"
            aria-valuemin="${0}"
            aria-valuenow="${0}"
            style="left: ${0}%"
            @pointerdown="${0}"></div>
          <div id="track" class="${0}--slider__track"></div>
          <div class="${0}-ce--slider__filled-track-container">
            <div
              class="${0}--slider__filled-track"
              style="transform: translate(0%, -50%) scaleX(${0})"></div>
          </div>
        </div>
        <span class="${0}--slider__range-label">
          <slot name="max-text">${0}</slot>
        </span>
        <slot></slot>
      </div>

      ${0}
      ${0}
    `), labelClasses, handleClickLabel, labelText, prefix, prefix, formatMinText(min, minLabel), handleKeydown, handleClick, endDrag, endDrag, sliderClasses, prefix, !readonly ? 0 : -1, max, min, value, rate * 100, startDrag, prefix, prefix, prefix, rate, prefix, formatMaxText(max, maxLabel), !readonly && !isValid ? html(_t2 || (_t2 = _`
            <div
              class="${0}--slider__validation-msg ${0}--slider__validation-msg--invalid ${0}--form-requirement">
              ${0}
            </div>
          `), prefix, prefix, prefix, invalidText) : null, !readonly && warn && isValid ? html(_t3 || (_t3 = _`<div
            class="${0}--slider__validation-msg ${0}--form-requirement">
            ${0}
          </div>`), prefix, prefix, warnText) : null);
      }

      /**
       * A selector that will return the `<input>` box got entering the value directly.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorInput",
      value: function selectorInput() {
        return `${prefix}-slider-input`;
      }

      /**
       * The name of the custom event fired after the value is changed by user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-slider-changed`;
      }

      /**
       * The name of the custom event fired after the value is changed in `<cds-slider-input>` by user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChangeInput",
      value: function eventChangeInput() {
        return `${prefix}-slider-input-changed`;
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
}, HostListenerMixin(FormMixin(FocusMixin(LitElement))));
export default CDSSlider;
//# sourceMappingURL=slider.js.map
