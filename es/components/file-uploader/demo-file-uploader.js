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

import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { delay } from 'bluebird';
import { prefix } from '../../globals/settings';
import { ifDefined } from 'lit/directives/if-defined.js';
import './index';
import { FILE_UPLOADER_ITEM_STATE } from './file-uploader-item';
import { BUTTON_SIZE } from '../button/button';
/**
 * A class to manage file uploading states, like sending file contents to server.
 * DEMONSTRATION-PURPOSE ONLY.
 * Data/state handling in file uploading tends to involve lots of application-specific logics
 * and thus abstracting everything in a library won't be a good return on investment
 * vs. letting users copy code here and implement features that fit their needs.
 */
let CDSCEDemoFileUploader = _decorate([customElement(`${prefix}-ce-demo-file-uploader`)], function (_initialize, _LitElement) {
  class CDSCEDemoFileUploader extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSCEDemoFileUploader,
    d: [{
      kind: "field",
      key: "_files",
      value() {
        return [];
      }
    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * The files being uploaded.
       */

      /**
       * Handles `cds-drop-container-changed` on `<cds-file-drop-container>`.
       *
       * @param event The event.
       */
      function _handleChange(event) {
        const {
          addedFiles
        } = event.detail;
        const newFiles = addedFiles.map(item => ({
          id: Math.random().toString(36).slice(2),
          file: item,
          state: FILE_UPLOADER_ITEM_STATE.UPLOADING
        }));
        const {
          multiple,
          _files: files,
          _simulateUpload: simulateUpload
        } = this;
        if (multiple) {
          this._files = files.concat(newFiles);
          this.requestUpdate();
          newFiles.forEach(simulateUpload, this);
        } else if (addedFiles.length > 0) {
          this._files = files.concat(newFiles[0]);
          this.requestUpdate();
          this._simulateUpload(newFiles[0]);
        }
      }

      /**
       * Handles `cds-file-uploader-item-deleted` on `<cds-file-uploader-item>`.
       *
       * @param event The event.
       */
    }, {
      kind: "method",
      key: "_handleDelete",
      value: function _handleDelete(event) {
        const {
          fileId: idToDelete
        } = event.target.dataset;
        this._files = this._files.filter(({
          id
        }) => idToDelete !== id);
        this.requestUpdate();
      }

      /**
       * Simulates updating file.
       *
       * @param data The data of the file being uploaded.
       */
    }, {
      kind: "method",
      key: "_simulateUpload",
      value: async function _simulateUpload(data) {
        const {
          id,
          file
        } = data;
        if (file.size > 524288) {
          this._files = this._files.map(item => id !== item.id ? item : _objectSpread(_objectSpread({}, item), {}, {
            state: FILE_UPLOADER_ITEM_STATE.EDIT,
            invalid: true,
            errorSubject: 'File size exceeds limit',
            errorBody: '500kb max file size. Select a new file and try again.'
          }));
          this.requestUpdate();
        } else {
          // Simulates network request time
          const rand = Math.random() * 1000;
          await delay(rand);
          this._files = this._files.map(item => id !== item.id ? item : _objectSpread(_objectSpread({}, item), {}, {
            state: FILE_UPLOADER_ITEM_STATE.COMPLETE
          }));
          this.requestUpdate();
          // Shows x icon after 1 second
          await delay(1000);
          this._files = this._files.map(item => id !== item.id ? item : _objectSpread(_objectSpread({}, item), {}, {
            state: FILE_UPLOADER_ITEM_STATE.EDIT
          }));
          this.requestUpdate();
        }
      }

      /**
       * The file types the file input should accept, separated by space.
       */
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
      key: "button",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'button-kind'
      })],
      key: "buttonKind",
      value() {
        return 'primary';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'button-label'
      })],
      key: "buttonLabel",
      value() {
        return 'Add file';
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
        attribute: 'icon-description'
      })],
      key: "iconDescription",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'input-name'
      })],
      key: "inputName",
      value() {
        return '';
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
      key: "size",
      value() {
        return BUTTON_SIZE.MEDIUM;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'input-state'
      })],
      key: "inputState",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * `true` if the drop container should be disabled.
       */
      /**
       * Button kind.
       */
      /**
       * Button label.
       */
      /**
       * `true` if the drop container should be disabled.
       */
      /**
       * Icon description.
       */
      /**
       * The input name.
       */
      /**
       * The label description text.
       */
      /**
       * The label title.
       */
      /**
       * `true` if the drop container should accept more than one files at once.
       * Note that even with `false` set here, user _can_ select multiple files one by one.
       */
      /**
       * The size of the button item.
       */
      /**
       * The state of this file uploader item.
       */
      function render() {
        const {
          accept,
          button,
          buttonKind,
          buttonLabel,
          disabled,
          labelDescription,
          labelTitle,
          multiple,
          size,
          inputState,
          iconDescription,
          _files: files,
          _handleChange: handleChange,
          _handleDelete: handleDelete
        } = this;
        return html(_t || (_t = _`
      <cds-file-uploader
        label-description="${0}"
        label-title="${0}"
        ?disabled="${0}">
        ${0}
        ${0}
      </cds-file-uploader>
    `), ifDefined(labelDescription), ifDefined(labelTitle), disabled, !button ? html(_t2 || (_t2 = _` <cds-file-uploader-drop-container
              accept="${0}"
              ?multiple="${0}"
              name="${0}"
              @cds-file-uploader-drop-container-changed="${0}">
              Drag and drop files here or click to upload
            </cds-file-uploader-drop-container>`), ifDefined(accept), multiple, ifDefined(this.inputName), handleChange) : html(_t3 || (_t3 = _` <cds-file-uploader-button
              size="${0}"
              button-kind="${0}"
              accept="${0}"
              name="${0}"
              ?multiple="${0}"
              @cds-file-uploader-button-changed="${0}">
              ${0}
            </cds-file-uploader-button>`), ifDefined(size), buttonKind, ifDefined(accept), ifDefined(this.inputName), multiple, handleChange, buttonLabel), files.map(({
          id,
          invalid,
          file,
          state,
          errorSubject,
          errorBody
        }) => html(_t4 || (_t4 = _`
            <cds-file-uploader-item
              data-file-id="${0}"
              ?invalid="${0}"
              state="${0}"
              icon-description="${0}"
              error-subject="${0}"
              error-body="${0}"
              @cds-file-uploader-item-deleted="${0}">
              ${0}
            </cds-file-uploader-item>
          `), id, invalid, inputState || ifDefined(state), ifDefined(iconDescription), ifDefined(errorSubject), ifDefined(errorBody), handleDelete, file.name)));
      }
    }]
  };
}, LitElement);
export { CDSCEDemoFileUploader as default };
//# sourceMappingURL=demo-file-uploader.js.map
