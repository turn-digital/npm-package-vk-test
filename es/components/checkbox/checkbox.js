import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import FormMixin from '../../globals/mixins/form';
import WarningFilled16 from "../../icons/warning--filled/16";
import WarningAltFilled16 from "../../icons/warning--alt--filled/16";
import styles from "././checkbox.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Check box.
 *
 * @element cds-checkbox
 * @fires cds-checkbox-changed - The custom event fired after this changebox changes its checked state.
 * @csspart input The checkbox.
 * @csspart label The label.
 */
let CDSCheckbox = _decorate([customElement(`${prefix}-checkbox`)], function (_initialize, _FocusMixin) {
  class CDSCheckbox extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSCheckbox,
    d: [{
      kind: "field",
      decorators: [query('input')],
      key: "_checkboxNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * Handles `click` event on the `<input>` in the shadow DOM.
       */
      function _handleChange() {
        const {
          checked,
          indeterminate
        } = this._checkboxNode;
        this.checked = checked;
        this.indeterminate = indeterminate;
        const {
          eventChange
        } = this.constructor;
        this.dispatchEvent(new CustomEvent(eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            checked,
            indeterminate
          }
        }));
      }

      /**
       * Prevent checkbox state from updating when readonly
       */
    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick(event) {
        if (this.readonly) {
          event.preventDefault();
        }
      }
    }, {
      kind: "method",
      key: "_handleFormdata",
      value: function _handleFormdata(event) {
        const {
          formData
        } = event; // TODO: Wait for `FormDataEvent` being available in `lib.dom.d.ts`
        const {
          checked,
          disabled,
          name,
          value = 'on'
        } = this;
        if (!disabled && checked) {
          formData.append(name, value);
        }
      }

      /**
       * Specify whether the underlying input should be checked
       */
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'checked'
      })],
      key: "checked",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'data-table'
      })],
      key: "dataTable",
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
        type: String,
        reflect: true,
        attribute: 'helper-text'
      })],
      key: "helperText",
      value: void 0
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
      key: "indeterminate",
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
      decorators: [property()],
      key: "name",
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
        type: Boolean
      })],
      key: "invalid",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        attribute: 'invalid-text'
      })],
      key: "invalidText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'title'
      })],
      key: "title",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "value",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "warn",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        attribute: 'warn-text'
      })],
      key: "warnText",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * Specify if checkbox is being used in a data table
       */
      /**
       * Specify whether the Checkbox should be disabled
       */
      /**
       * Provide text for the form group for additional help
       */
      /**
       * Specify whether the checkbox should be present in the DOM,
       * but invisible and uninteractable. Used for data-table purposes.
       */
      /**
       * Specify whether the label should be hidden, or not
       */
      /**
       * Specify whether the Checkbox is in an indeterminate state
       */
      /**
       * Provide a label to provide a description of the Checkbox input that you are
       * exposing to the user
       */
      /**
       * The form name.
       */
      /**
       * Specify whether the Checkbox is read-only
       */
      /**
       * Specify whether the Checkbox is currently invalid
       */
      /**
       * Provide the text that is displayed when the Checkbox is in an invalid state
       */
      /**
       * Specify a title for the node for the Checkbox
       */
      /**
       * The value.
       */
      /**
       * Specify whether the Checkbox is in a warn state
       */
      /**
       * Provide the text that is displayed when the Checkbox is in a warn state
       */
      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().filter(elem => elem.matches !== undefined ? elem.matches(this.constructor.slugItem) : false);
        this._hasSlug = Boolean(hasContent);
        const type = hasContent[0].getAttribute('kind');
        hasContent[0].setAttribute('size', type === 'inline' ? 'md' : 'mini');
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
      kind: "method",
      key: "updated",
      value: function updated() {
        const {
          _hasSlug: hasSlug
        } = this;
        hasSlug ? this.setAttribute('slug', '') : this.removeAttribute('slug');
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          checked,
          disabled,
          helperText,
          hideLabel,
          indeterminate,
          invalid,
          invalidText,
          labelText,
          name,
          readonly,
          title,
          value,
          warn,
          warnText,
          _handleChange: handleChange,
          _handleClick: handleClick
        } = this;
        const showWarning = !readonly && !invalid && warn;
        const showHelper = !invalid && !warn;
        const helper = helperText ? html(_t || (_t = _` <div class="${0}--form__helper-text">${0}</div>`), prefix, helperText) : null;
        const labelClasses = classMap({
          [`${prefix}--checkbox-label`]: true
        });
        const labelTextClasses = classMap({
          [`${prefix}--checkbox-label-text`]: true,
          [`${prefix}--visually-hidden`]: hideLabel
        });
        return html(_t2 || (_t2 = _`
      <input
        id="checkbox"
        type="checkbox"
        part="input"
        class="${0}"
        aria-checked="${0}"
        aria-readonly="${0}"
        .checked="${0}"
        ?disabled="${0}"
        .indeterminate="${0}"
        name="${0}"
        value="${0}"
        @change="${0}"
        @click="${0}" />
      <label
        for="checkbox"
        part="label"
        class="${0}"
        title="${0}">
        <span class="${0}"
          >${0}</span
        >
      </label>
      <slot name="slug" @slotchange="${0}"></slot>
      <div class="${0}--checkbox__validation-msg">
        ${0}
        ${0}
      </div>
      ${0}
    `), `${prefix}--checkbox`, indeterminate ? 'mixed' : String(Boolean(checked)), String(Boolean(readonly)), checked, disabled, indeterminate, ifDefined(name), ifDefined(value), handleChange, handleClick, labelClasses, ifDefined(title), labelTextClasses, labelText ? labelText : html(_t3 || (_t3 = _`<slot></slot>`)), this._handleSlotChange, prefix, !readonly && invalid ? html(_t4 || (_t4 = _`
              ${0}
              <div class="${0}--form-requirement">${0}</div>
            `), WarningFilled16({
          class: `${prefix}--checkbox__invalid-icon`
        }), prefix, invalidText) : null, showWarning ? html(_t5 || (_t5 = _`
              ${0}
              <div class="${0}--form-requirement">${0}</div>
            `), WarningAltFilled16({
          class: `${prefix}--checkbox__invalid-icon ${prefix}--checkbox__invalid-icon--warning`
        }), prefix, warnText) : null, showHelper ? helper : null);
      }

      /**
       * The name of the custom event fired after this changebox changes its checked state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-checkbox-changed`;
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
}, FocusMixin(FormMixin(LitElement)));
export default CDSCheckbox;
//# sourceMappingURL=checkbox.js.map
