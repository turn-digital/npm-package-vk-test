import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././form-group.css.js";

/**
 * The shell UI for file uploader.
 *
 * @element cds-form-group
 * @slot label-title.
 * @slot lebel-description.
 */ /**
     * The shell UI for file uploader.
     *
     * @element cds-form-group
     * @slot label-title.
     * @slot lebel-description.
     */
let CDSFormGroup = _decorate([customElement(`${prefix}-form-group`)], function (_initialize, _LitElement) {
  class CDSFormGroup extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSFormGroup,
    d: [{
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
        attribute: 'legend-id'
      })],
      key: "legendId",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
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
      key: "message",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        attribute: 'message-text',
        reflect: true
      })],
      key: "messageText",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Specify whether the Form Group is invalid
       */

      /**
       * Provide id for the fieldset <legend> which corresponds to the fieldset
       * `aria-labelledby`
       */

      /**
       * Provide the text to be rendered inside of the fieldset <legend>
       */

      /**
       * Specify whether the message should be displayed in the Form Group
       */

      /**
       * Provide the text for the message in the Form Group
       */

      function render() {
        const {
          invalid,
          legendId,
          legendText,
          message,
          messageText
        } = this;
        return html(_t || (_t = _`
      <fieldset
        class="${0}--fieldset"
        ?data-invalid=${0}
        aria-labelledby="${0}">
        <legend class="${0}--label" id=${0}>${0}</legend>
        <slot></slot>
        ${0}
      </fieldset>
    `), prefix, invalid, legendId, prefix, legendId, legendText, message ? html(_t2 || (_t2 = _`<div class="${0}--form__requirements">
              ${0}
            </div>`), prefix, messageText) : null);
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
export default CDSFormGroup;
//# sourceMappingURL=form-group.js.map
