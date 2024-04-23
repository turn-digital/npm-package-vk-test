import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
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
import styles from "././file-uploader.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * The shell UI for file uploader.
 *
 * @element cds-file-uploader
 * @slot label-title.
 * @slot lebel-description.
 */
let CDSFileUploader = _decorate([customElement(`${prefix}-file-uploader`)], function (_initialize, _LitElement) {
  class CDSFileUploader extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSFileUploader,
    d: [{
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
        attribute: 'label-description'
      })],
      key: "labelDescription",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-title'
      })],
      key: "labelTitle",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * `true` if the file uploader should disabled.
       */

      /**
       * The description text.
       */

      /**
       * The label title.
       */

      function updated(changedProperties) {
        if (changedProperties.has('disabled')) {
          const {
            selectorUploaderItem
          } = this.constructor;
          const uploaderItem = this.querySelector(selectorUploaderItem);
          uploaderItem.disabled = this.disabled;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          labelDescription,
          labelTitle
        } = this;
        const labelClasses = classMap({
          [`${prefix}--file--label`]: true,
          [`${prefix}--label-description--disabled`]: disabled
        });
        const descriptionClasses = classMap({
          [`${prefix}--label-description`]: true,
          [`${prefix}--label-description--disabled`]: disabled
        });
        return html(_t || (_t = _`
      <p class="${0}">
        <slot name="label-title">${0}</slot>
      </p>
      <p class="${0}">
        <slot name="label-description">${0}</slot>
      </p>
      <slot name="drop-container"></slot>
      <div class="${0}--file-container">
        <slot></slot>
      </div>
    `), labelClasses, labelTitle, descriptionClasses, labelDescription, prefix);
      }

      /**
       * A selector that will return the `<input>` to enter starting date.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorUploaderItem",
      value: function selectorUploaderItem() {
        return `${prefix}-file-uploader-button,${prefix}-file-uploader-drop-container`;
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
export default CDSFileUploader;
//# sourceMappingURL=file-uploader.js.map
