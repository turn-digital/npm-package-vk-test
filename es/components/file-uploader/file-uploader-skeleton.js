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

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import '../skeleton-text/skeleton-text';
import { SKELETON_TEXT_TYPE } from '../skeleton-text/skeleton-text';
import '../button/button-skeleton';

/**
 * The File uploader skeleton.
 *
 * @element cds-file-uploader-skeleton
 */
let CDSFileUploaderSkeleton = _decorate([customElement(`${prefix}-file-uploader-skeleton`)], function (_initialize, _LitElement) {
  class CDSFileUploaderSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSFileUploaderSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <cds-skeleton-text
        type="${0}"
        width="100px"></cds-skeleton-text>
      <cds-skeleton-text width="225px"></cds-skeleton-text>
      <cds-button-skeleton></cds-button-skeleton>
    `), SKELETON_TEXT_TYPE.HEADING);
      }
    }]
  };
}, LitElement);
export default CDSFileUploaderSkeleton;
//# sourceMappingURL=file-uploader-skeleton.js.map
