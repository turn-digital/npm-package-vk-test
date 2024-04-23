import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '../../globals/mixins/host-listener';
import ifNonEmpty from '../../globals/directives/if-non-empty';
import styles from "././file-uploader.css.js";
import { BUTTON_KIND, BUTTON_SIZE } from '../button/defs';
export { FORM_ELEMENT_COLOR_SCHEME as TILE_COLOR_SCHEME } from '../../globals/shared-enums';

/**
 * File uploader button .
 *
 * @element cds-file-uploader-container
 * @fires cds-file-uploader-button-changed The custom event fired when there is a user gesture to select files to upload.
 */
let CDSFileUploaderButton = _decorate([customElement(`${prefix}-file-uploader-button`)], function (_initialize, _HostListenerMixin) {
  class CDSFileUploaderButton extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSFileUploaderButton,
    d: [{
      kind: "method",
      key: "_handleClick",
      value:
      /**
       * Handles `click` event on the button.
       */
      function _handleClick(event) {
        var _this$shadowRoot, _this$shadowRoot2;
        event.target.value = null;
        const {
          selectorInput
        } = this.constructor;
        this === null || this === void 0 || (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector(selectorInput)) === null || _this$shadowRoot === void 0 || _this$shadowRoot.setAttribute('value', '');
        (this === null || this === void 0 || (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 ? void 0 : _this$shadowRoot2.querySelector(selectorInput)).click();
      }

      /**
       * Handles `keydown` event on the button.
       */
    }, {
      kind: "method",
      key: "_handleKeyDown",
      value: function _handleKeyDown(event) {
        const {
          selectorInput
        } = this.constructor;
        if (event.key === 'Enter' || event.key === 'Space') {
          var _this$shadowRoot3, _this$shadowRoot4;
          this === null || this === void 0 || (_this$shadowRoot3 = this.shadowRoot) === null || _this$shadowRoot3 === void 0 || (_this$shadowRoot3 = _this$shadowRoot3.querySelector(selectorInput)) === null || _this$shadowRoot3 === void 0 || _this$shadowRoot3.setAttribute('value', '');
          (this === null || this === void 0 || (_this$shadowRoot4 = this.shadowRoot) === null || _this$shadowRoot4 === void 0 ? void 0 : _this$shadowRoot4.querySelector(selectorInput)).click();
        }
      }

      /**
       * Handles user gesture to select files to upload.
       *
       * @param event The event.
       */
    }, {
      kind: "method",
      key: "_handleChange",
      value: function _handleChange(event) {
        var _this$shadowRoot5;
        const addedFiles = this._getFiles(event);
        const {
          eventChange,
          selectorInput
        } = this.constructor;
        this.dispatchEvent(new CustomEvent(eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            addedFiles
          }
        }));
        const fileInput = this === null || this === void 0 || (_this$shadowRoot5 = this.shadowRoot) === null || _this$shadowRoot5 === void 0 ? void 0 : _this$shadowRoot5.querySelector(selectorInput);
        if (fileInput) {
          fileInput.value = '';
        }
      }

      /**
       * @param event The event.
       * @returns The list of files user chose to upload.
       */
    }, {
      kind: "method",
      key: "_getFiles",
      value: function _getFiles(event) {
        var _ref;
        const {
          files
        } = (_ref = event.type === 'drop' ? event.dataTransfer : event.target) !== null && _ref !== void 0 ? _ref : {};
        const {
          accept
        } = this;
        if (!accept || !/^(change|drop)$/.test(event.type)) {
          return Array.from(files !== null && files !== void 0 ? files : []);
        }
        const acceptedTypes = new Set(accept.split(' '));
        return Array.prototype.filter.call(files, ({
          name,
          type: mimeType = ''
        }) => {
          var _fileExtensionRegExp$;
          const fileExtensionRegExp = /\.[^.]+$/;
          const hasFileExtension = fileExtensionRegExp.test(name);
          const [fileExtension] = !hasFileExtension ? [undefined] : (_fileExtensionRegExp$ = fileExtensionRegExp.exec(name)) !== null && _fileExtensionRegExp$ !== void 0 ? _fileExtensionRegExp$ : [];
          return acceptedTypes.has(mimeType) || fileExtension && acceptedTypes.has(fileExtension);
        });
      }

      /**
       * Button kind.
       */
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'button-kind'
      })],
      key: "buttonKind",
      value() {
        return BUTTON_KIND.PRIMARY;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return BUTTON_SIZE.MEDIUM;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "accept",
      value() {
        return '';
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
      key: "multiple",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "name",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "slot",
      value() {
        return 'drop-container';
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Button size.
       */
      /**
       * The file types the file input should accept, separated by space.
       */
      /**
       * `true` if this drop container should be disabled.
       */
      /**
       * `true` if this drop container should accept more than one files at once.
       * Note that even with `false` set here, user _can_ select multiple files one by one.
       */
      /**
       * The name of the input.
       */
      /**
       * The shadow DOM slot to put this drop container in.
       */
      function render() {
        const {
          accept,
          disabled,
          multiple,
          name,
          buttonKind,
          size,
          _handleChange: handleChange
        } = this;
        const labelClasses = classMap({
          [`${prefix}--file-browse-btn`]: true,
          [`${prefix}--file-browse-btn--disabled`]: disabled
        });
        const buttonClasses = classMap({
          [`${prefix}--btn`]: true,
          [`${prefix}--btn--${buttonKind}`]: buttonKind,
          [`${prefix}--layout--size-${size}`]: size,
          [`${prefix}--btn--disabled`]: disabled,
          [`${prefix}--btn--${size}`]: size
        });
        return html(_t || (_t = _`
      <button
        type="button"
        class="${0}"
        @click="${0}"
        @keydown="${0}">
        <slot></slot>
      </button>
      <label class="${0}" for="file"> </label>
      <input
        id="file"
        type="file"
        class="${0}--file-input"
        tabindex="-1"
        accept="${0}"
        ?disabled="${0}"
        ?multiple="${0}"
        name="${0}"
        @change="${0}" />
    `), buttonClasses, this._handleClick, this._handleKeyDown, labelClasses, prefix, ifNonEmpty(accept), disabled, multiple, ifNonEmpty(name), handleChange);
      }

      /**
       * The name of the custom event fired when there is a user gesture to select files to upload.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-file-uploader-button-changed`;
      }

      /**
       * A selector that will return the file `<input>`.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorInput",
      value: function selectorInput() {
        return `.${prefix}--file-input`;
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
}, HostListenerMixin(LitElement));
export default CDSFileUploaderButton;
//# sourceMappingURL=file-uploader-button.js.map
