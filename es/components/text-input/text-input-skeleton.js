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
import styles from "././text-input.css.js";

/**
 * Skeleton of number input.
 */ /**
     * Skeleton of number input.
     */
let CDSTextInputSkeleton = _decorate([customElement(`${prefix}-text-input-skeleton`)], function (_initialize, _LitElement) {
  class CDSTextInputSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTextInputSkeleton,
    d: [{
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
      kind: "method",
      key: "render",
      value:
      /**
       * Specify whether the label should be hidden, or not
       */

      function render() {
        const {
          hideLabel
        } = this;
        return html(_t || (_t = _`
      ${0}
      <div class="${0}--text-input ${0}--skeleton"></div>
    `), !hideLabel && html(_t2 || (_t2 = _` <span class="${0}--label ${0}--skeleton"></span> `), prefix, prefix), prefix, prefix);
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
export default CDSTextInputSkeleton;
//# sourceMappingURL=text-input-skeleton.js.map
