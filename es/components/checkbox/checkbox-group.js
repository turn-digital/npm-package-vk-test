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
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
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
let CDSCheckboxGroup = _decorate([customElement(`${prefix}-checkbox-group`)], function (_initialize, _LitElement) {
  class CDSCheckboxGroup extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSCheckboxGroup,
    d: [{
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true,
        attribute: 'aria-labelledby'
      })],
      key: "ariaLabelledBy",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "disabled",
      value: void 0
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
        attribute: 'invalid'
      })],
      key: "invalid",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true,
        attribute: 'invalid-text'
      })],
      key: "invalidText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true,
        attribute: 'legend-id'
      })],
      key: "legendId",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true,
        attribute: 'legend-text'
      })],
      key: "legendText",
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
      key: "warn",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true,
        attribute: 'warn-text'
      })],
      key: "warnText",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * fieldset `aria-labelledby`
       */

      /**
       * Specify whether the form group is currently disabled
       */

      /**
       * Provide text for the form group for additional help
       */

      /**
       * Specify whether the form group is currently invalid
       */

      /**
       * Provide the text that is displayed when the form group is in an invalid state
       */

      /**
       * Provide id for the fieldset <legend> which corresponds to the fieldset
       * `aria-labelledby`
       */

      /**
       * Provide the text to be rendered inside of the fieldset <legend>
       */

      /**
       * Whether the CheckboxGroup should be read-only
       */

      /**
       * Specify whether the form group is currently in warning state
       */

      /**
       * Provide the text that is displayed when the form group is in warning state
       */

      /*
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
      value: function updated(changedProperties) {
        const {
          selectorCheckbox
        } = this.constructor;
        const checkboxes = this.querySelectorAll(selectorCheckbox);
        ['disabled', 'readonly'].forEach(name => {
          if (changedProperties.has(name)) {
            const {
              [name]: value
            } = this;
            // Propagate the property to descendants until `:host-context()` gets supported in all major browsers
            checkboxes.forEach(elem => {
              elem[name] = value;
            });
          }
        });
        if (changedProperties.has('invalid')) {
          const {
            invalid
          } = this;
          checkboxes.forEach(elem => {
            if (invalid) {
              elem.setAttribute('invalid-group', '');
            } else {
              elem.removeAttribute('invalid-group');
            }
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          ariaLabelledBy,
          disabled,
          helperText,
          invalid,
          invalidText,
          legendId,
          legendText,
          readonly,
          warn,
          warnText,
          _hasSlug: hasSlug,
          _handleSlotChange: handleSlotChange
        } = this;
        const showWarning = !readonly && !invalid && warn;
        const showHelper = !invalid && !warn;
        const checkboxGroupInstanceId = Math.random().toString(16).slice(2);
        const helperId = !helperText ? undefined : `checkbox-group-helper-text-${checkboxGroupInstanceId}`;
        const helper = helperText ? html(_t || (_t = _` <div id="${0}" class="${0}--form__helper-text">
          ${0}
        </div>`), helperId, prefix, helperText) : null;
        const fieldsetClasses = classMap({
          [`${prefix}--checkbox-group`]: true,
          [`${prefix}--checkbox-group--readonly`]: readonly,
          [`${prefix}--checkbox-group--invalid`]: !readonly && invalid,
          [`${prefix}--checkbox-group--warning`]: showWarning,
          [`${prefix}--checkbox-group--slug`]: hasSlug
        });
        return html(_t2 || (_t2 = _`
      <fieldset
        class="${0}"
        ?data-invalid=${0}
        ?disabled=${0}
        aria-readonly=${0}
        ?aria-labelledby=${0}
        ?aria-describedby=${0}>
        <legend class="${0}--label" id=${0}>
          ${0}
          <slot name="slug" @slotchange="${0}"></slot>
        </legend>
        <slot></slot>
        <div class="${0}--checkbox-group__validation-msg">
          ${0}
          ${0}
        </div>
        ${0}
      </fieldset>
    `), fieldsetClasses, invalid, disabled, readonly, ariaLabelledBy || legendId, !invalid && !warn && helper ? helperId : undefined, prefix, legendId || ariaLabelledBy, legendText, handleSlotChange, prefix, !readonly && invalid ? html(_t3 || (_t3 = _`
                ${0}
                <div class="${0}--form-requirement">${0}</div>
              `), WarningFilled16({
          class: `${prefix}--checkbox__invalid-icon`
        }), prefix, invalidText) : null, showWarning ? html(_t4 || (_t4 = _`
                ${0}
                <div class="${0}--form-requirement">${0}</div>
              `), WarningAltFilled16({
          class: `${prefix}--checkbox__invalid-icon ${prefix}--checkbox__invalid-icon--warning`
        }), prefix, warnText) : null, showHelper ? helper : null);
      }

      /**
       * A selector that will return the checkboxes.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorCheckbox",
      value: function selectorCheckbox() {
        return `${prefix}-checkbox`;
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
}, LitElement);
export default CDSCheckboxGroup;
//# sourceMappingURL=checkbox-group.js.map
