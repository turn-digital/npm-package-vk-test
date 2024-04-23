import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import Calendar16 from "../../icons/calendar/16";
import { ifDefined } from 'lit/directives/if-defined.js';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import { INPUT_SIZE } from '../text-input/text-input';
import { DATE_PICKER_INPUT_COLOR_SCHEME, DATE_PICKER_INPUT_KIND } from './defs';
import WarningFilled16 from "../../icons/warning--filled/16";
import WarningAltFilled16 from "../../icons/warning--alt--filled/16";
import styles from "././date-picker.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { DATE_PICKER_INPUT_COLOR_SCHEME, DATE_PICKER_INPUT_KIND };

/**
 * The input box for date picker.
 *
 * @element cds-date-picker-input
 */
let CDSDatePickerInput = _decorate([customElement(`${prefix}-date-picker-input`)], function (_initialize, _FocusMixin) {
  class CDSDatePickerInput extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSDatePickerInput,
    d: [{
      kind: "field",
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlugSlotChange",
      value:
      /**
       * `true` if there is a slug.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlugSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().filter(elem => elem.matches !== undefined ? elem.matches(this.constructor.slugItem) : false);
        this._hasSlug = Boolean(hasContent);
        hasContent[0].setAttribute('size', 'mini');
        this.requestUpdate();
      }

      /**
       * The calendar icon.
       */
    }, {
      kind: "field",
      decorators: [query(`.${prefix}--date-picker__icon`)],
      key: "_iconNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleClickWrapper",
      value:
      /**
       * Handles `click` event on the calendar icon.
       *
       * @param event The event.
       */
      function _handleClickWrapper(event) {
        if (event.target === this._iconNode) {
          this.input.focus();
        }
      }

      /**
       * Handles `input` event on `<input>` in the shadow DOM.
       *
       * @param event The event.
       * @param event.target The event target.
       */
    }, {
      kind: "method",
      key: "_handleInput",
      value: function _handleInput({
        target
      }) {
        const {
          value
        } = target;
        this.value = value;
      }

      /**
       * @returns The template for the the calendar icon.
       */
    }, {
      kind: "method",
      key: "_renderIcon",
      value: function _renderIcon() {
        return this.kind === DATE_PICKER_INPUT_KIND.SIMPLE ? undefined : Calendar16({
          class: `${prefix}--date-picker__icon`,
          role: 'img',
          children: [html(_t || (_t = _` <title>Open calendar</title> `))]
        });
      }

      /**
       * `true` if there is helper text content.
       */
    }, {
      kind: "field",
      decorators: [state()],
      key: "_hasHelperText",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * Handles `slotchange` event on the default `<slot>`.
       */
      function _handleSlotChange({
        target
      }) {
        if (!target.name) {
          const hasContent = target.assignedNodes().some(node => node.nodeType !== Node.TEXT_NODE || node.textContent.trim());
          this._hasHelperText = hasContent;
        }
      }

      /**
       * The `<input>`, used for Flatpickr to grab.
       */
    }, {
      kind: "field",
      decorators: [query('input')],
      key: "input",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",
      value() {
        return DATE_PICKER_INPUT_COLOR_SCHEME.REGULAR;
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
      key: "invalid",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "kind",
      value() {
        return DATE_PICKER_INPUT_KIND.SIMPLE;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-text'
      })],
      key: "labelText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "pattern",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "placeholder",
      value: void 0
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
        attribute: 'size',
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
      key: "short",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "type",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "value",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The color scheme.
       */
      /**
       * `true` if the check box should be disabled.
       */
      /**
       * `true` if the label should be hidden.
       */
      /**
       * Specify whether the control is currently in warning state
       */
      /**
       * Provide the text that is displayed when the control is in warning state
       */
      /**
       * Message which is displayed if the value is invalid.
       */
      /**
       * Controls the invalid state and visibility of the `validityMessage`.
       */
      /**
       * Date picker input kind.
       */
      /**
       * The label text.
       */
      /**
       * The `pattern` attribute for the `<input>` in the shadow DOM.
       */
      /**
       * The placeholder text.
       */
      /**
       * Specify if the component should be read-only
       */
      /**
       * `true` if the value is required.
       */
      /**
       * Vertical size of this date picker input.
       */
      /**
       * true to use the short version.
       */
      /**
       * The `type` attribute for the `<input>` in the shadow DOM.
       */
      /**
       * The value.
       */
      function render() {
        const constructor = this.constructor;
        const {
          disabled,
          _hasHelperText: hasHelperText,
          hideLabel,
          invalid,
          invalidText,
          labelText,
          pattern = constructor.defaultPattern,
          placeholder,
          readonly,
          size,
          type = constructor.defaultType,
          value,
          warn,
          warnText,
          _handleClickWrapper: handleClickWrapper,
          _handleInput: handleInput,
          _hasSlug: hasSlug
        } = this;
        const invalidIcon = WarningFilled16({
          class: `${prefix}--date-picker__icon ${prefix}--date-picker__icon--invalid`
        });
        const warnIcon = WarningAltFilled16({
          class: `${prefix}--date-picker__icon ${prefix}--date-picker__icon--warn`
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
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--visually-hidden`]: hideLabel,
          [`${prefix}--label--disabled`]: disabled
        });
        const inputClasses = classMap({
          [`${prefix}--date-picker__input`]: true,
          [`${prefix}--date-picker__input--invalid`]: normalizedProps.invalid,
          [`${prefix}--date-picker__input--warn`]: normalizedProps.warn,
          [`${prefix}--date-picker__input--${size}`]: size
        });
        const inputWrapperClasses = classMap({
          [`${prefix}--date-picker-input__wrapper`]: true,
          [`${prefix}--date-picker-input__wrapper--invalid`]: normalizedProps.invalid,
          [`${prefix}--date-picker-input__wrapper--warn`]: normalizedProps.warn,
          [`${prefix}--date-picker-input__wrapper--slug`]: hasSlug
        });
        const helperTextClasses = classMap({
          [`${prefix}--form__helper-text`]: true,
          [`${prefix}--form__helper-text--disabled`]: disabled
        });
        return html(_t2 || (_t2 = _`
      <label for="input" class="${0}">
        <slot name="label-text">${0}</slot>
      </label>
      <div class="${0}" @click="${0}">
        <span>
          <input
            id="input"
            type="${0}"
            class="${0}"
            ?disabled="${0}"
            pattern="${0}"
            placeholder="${0}"
            .value="${0}"
            ?data-invalid="${0}"
            @input="${0}"
            ?readonly="${0}" />
          ${0}
          <slot name="slug" @slotchange="${0}"></slot>
        </span>
      </div>
      <div
        class="${0}--form-requirement"
        ?hidden="${0}">
        <slot name="${0}">
          ${0}
        </slot>
      </div>
      <div ?hidden="${0}" class="${0}">
        <slot name="helper-text" @slotchange="${0}"></slot>
      </div>
    `), labelClasses, labelText, inputWrapperClasses, handleClickWrapper, type, inputClasses, disabled, pattern, ifDefined(placeholder), ifDefined(value), invalid, handleInput, readonly, normalizedProps.icon || this._renderIcon(), this._handleSlugSlotChange, prefix, !normalizedProps.invalid && !normalizedProps.warn, normalizedProps['slot-name'], normalizedProps['slot-text'], hasHelperText, helperTextClasses, this._handleSlotChange);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated() {
        var _this$shadowRoot, _this$querySelector;
        (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector("slot[name='slug']")) === null || _this$shadowRoot === void 0 || _this$shadowRoot.classList.toggle(`${prefix}--slug--revert`, (_this$querySelector = this.querySelector(`${prefix}-slug`)) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.hasAttribute('revert-active'));
      }

      /**
       * The default value for `pattern` property.
       */
    }, {
      kind: "field",
      static: true,
      key: "defaultPattern",
      value() {
        return '\\d{1,2}\\/\\d{1,2}\\/\\d{4}';
      }
    }, {
      kind: "field",
      static: true,
      key: "defaultType",
      value() {
        return 'text';
      }
    }, {
      kind: "get",
      static: true,
      key: "selectorParent",
      value:
      /**
       * The default value for `type` property.
       */
      /**
       * A selector that will return the parent date picker.
       */
      function selectorParent() {
        return `${prefix}-date-picker`;
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
}, FocusMixin(LitElement));
export default CDSDatePickerInput;
//# sourceMappingURL=date-picker-input.js.map
