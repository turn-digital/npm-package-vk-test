import _decorate from "@babel/runtime/helpers/esm/decorate";
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
import { classMap } from 'lit/directives/class-map.js';
import { prefix } from '../../globals/settings';
import FormMixin from '../../globals/mixins/form';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { find, forEach } from '../../globals/internal/collection-helpers';
import { RADIO_BUTTON_LABEL_POSITION, RADIO_BUTTON_ORIENTATION } from './defs';
import WarningFilled16 from "../../icons/warning--filled/16";
import WarningAltFilled16 from "../../icons/warning--alt--filled/16";
import styles from "././radio-button.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { RADIO_BUTTON_ORIENTATION };

/**
 * Radio button group.
 *
 * @element cds-radio-button-group
 * @fires cds-radio-button-group-changed - The custom event fired after this radio button group changes its selected item.
 * @fires cds-radio-button-changed
 *   The name of the custom event fired after a radio button changes its checked state.
 */
let CDSRadioButtonGroup = _decorate([customElement(`${prefix}-radio-button-group`)], function (_initialize, _FormMixin) {
  class CDSRadioButtonGroup extends _FormMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSRadioButtonGroup,
    d: [{
      kind: "field",
      decorators: [HostListener('eventChangeRadioButton')],
      key: "_handleAfterChangeRadioButton",
      value() {
        return () => {
          const {
            selectorRadioButton
          } = this.constructor;
          const selected = find(this.querySelectorAll(selectorRadioButton), elem => elem.checked);
          const oldValue = this.value;
          this.value = selected && selected.value;
          if (oldValue !== this.value) {
            const {
              eventChange
            } = this.constructor;
            this.dispatchEvent(new CustomEvent(eventChange, {
              bubbles: true,
              composed: true,
              detail: {
                value: this.value
              }
            }));
          }
        };
      }
    }, {
      kind: "method",
      key: "_handleFormdata",
      value:
      /**
       * Handles user-initiated change in selected radio button.
       */

      function _handleFormdata(event) {
        const {
          formData
        } = event; // TODO: Wait for `FormDataEvent` being available in `lib.dom.d.ts`
        const {
          disabled,
          name,
          value
        } = this;
        if (!disabled && typeof name !== 'undefined' && typeof value !== 'undefined') {
          formData.append(name, value);
        }
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
        this._hasSlug = Boolean(hasContent);
        hasContent[0].setAttribute('size', 'mini');
        this.requestUpdate();
      }

      /**
       * `true` if there is a slug.
       */
    }, {
      kind: "field",
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "defaultSelected",
      value: void 0
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
        reflect: true,
        attribute: 'label-position'
      })],
      key: "labelPosition",
      value() {
        return RADIO_BUTTON_LABEL_POSITION.RIGHT;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'legend-text'
      })],
      key: "legendText",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'helper-text'
      })],
      key: "helperText",
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
      decorators: [property()],
      key: "name",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "orientation",
      value() {
        return RADIO_BUTTON_ORIENTATION.HORIZONTAL;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "readOnly",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "value",
      value: void 0
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * The `value` attribute for the `<input>` for selection.
       */
      /**
       * `true` if the radio button group should be disabled.
       */
      /**
       * The label position.
       */
      /**
       * The label position.
       */
      /**
       * The helper text.
       */
      /**
       * Specify whether the control is currently in warning state
       */
      /**
       * Provide the text that is displayed when the control is in warning state
       */
      /**
       * Specify if the currently value is invalid.
       */
      /**
       * Message which is displayed if the value is invalid.
       */
      /**
       * The `name` attribute for the `<input>` for selection.
       */
      /**
       * The orientation to lay out radio buttons.
       */
      /**
       * Controls the readonly state of the radio button group.
       */
      /**
       * The `value` attribute for the `<input>` for selection.
       */
      function updated(changedProperties) {
        const {
          selectorRadioButton
        } = this.constructor;
        ['disabled', 'labelPosition', 'orientation', 'readOnly', 'name'].forEach(name => {
          if (changedProperties.has(name)) {
            const {
              [name]: value
            } = this;
            // Propagate the property to descendants until `:host-context()` gets supported in all major browsers
            forEach(this.querySelectorAll(selectorRadioButton), elem => {
              elem[name] = value;
            });
          }
        });
        if (changedProperties.has('value')) {
          const {
            value
          } = this;
          forEach(this.querySelectorAll(selectorRadioButton), elem => {
            elem.checked = value === elem.value;
          });
        }
        if (changedProperties.has('invalid')) {
          forEach(this.querySelectorAll(selectorRadioButton), elem => {
            elem.invalid = this.invalid;
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          readOnly,
          invalid,
          invalidText,
          warn,
          warnText,
          disabled,
          orientation,
          legendText,
          helperText,
          _hasSlug: hasSlug,
          _handleSlotChange: handleSlotChange
        } = this;
        const showWarning = !readOnly && !invalid && warn;
        const showHelper = !invalid && !disabled && !warn;
        const invalidIcon = WarningFilled16({
          class: `${prefix}--radio-button__invalid-icon`
        });
        const warnIcon = WarningAltFilled16({
          class: `${prefix}--radio-button__invalid-icon ${prefix}--radio-button__invalid-icon--warning`
        });
        const helper = helperText ? html(_t || (_t = _`<div class="${0}--form__helper-text">${0}</div>`), prefix, helperText) : null;
        const fieldsetClasses = classMap({
          [`${prefix}--radio-button-group`]: true,
          [`${prefix}--radio-button-group--readonly`]: readOnly,
          [`${prefix}--radio-button-group--${orientation}`]: orientation === 'vertical',
          [`${prefix}--radio-button-group--slug`]: hasSlug
        });
        return html(_t2 || (_t2 = _` <fieldset
        class="${0}"
        ?disabled="${0}"
        aria-readonly="${0}">
        ${0}
        <slot></slot>
      </fieldset>
      <div class="${0}--radio-button__validation-msg">
        ${0}
        ${0}
      </div>
      ${0}`), fieldsetClasses, disabled, readOnly, legendText ? html(_t3 || (_t3 = _` <legend class="${0}--label">
              ${0}
              <slot name="slug" @slotchange="${0}"></slot>
            </legend>`), prefix, legendText, handleSlotChange) : ``, prefix, !readOnly && invalid ? html(_t4 || (_t4 = _`
              ${0}
              <div class="${0}--form-requirement">${0}</div>
            `), invalidIcon, prefix, invalidText) : null, showWarning ? html(_t5 || (_t5 = _`${0}
              <div class="${0}--form-requirement">${0}</div>`), warnIcon, prefix, warnText) : null, showHelper ? helper : null);
      }

      /**
       * A selector that will return the radio buttons.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorRadioButton",
      value: function selectorRadioButton() {
        return `${prefix}-radio-button`;
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
       * The name of the custom event fired after this radio button group changes its selected item.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-radio-button-group-changed`;
      }

      /**
       * The name of the custom event fired after a radio button changes its checked state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChangeRadioButton",
      value: function eventChangeRadioButton() {
        return `${prefix}-radio-button-changed`;
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
}, FormMixin(HostListenerMixin(LitElement)));
export default CDSRadioButtonGroup;
//# sourceMappingURL=radio-button-group.js.map
