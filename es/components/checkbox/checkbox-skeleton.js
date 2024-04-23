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
import styles from "././checkbox.css.js";

/**
 * Skeleton of number input.
 */ /**
     * Skeleton of number input.
     */
let CDSCheckboxSkeleton = _decorate([customElement(`${prefix}-checkbox-skeleton`)], function (_initialize, _LitElement) {
  class CDSCheckboxSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSCheckboxSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <label class="${0}--checkbox-label" for="checkbox" part="label">
        <span class="${0}--checkbox-label-text ${0}--skeleton"
          ><slot></slot
        ></span>
      </label>
    `), prefix, prefix, prefix);
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
export default CDSCheckboxSkeleton;
//# sourceMappingURL=checkbox-skeleton.js.map
