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
import { prefix } from '../../globals/settings';
import styles from "././skeleton-placeholder.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton placeholder.
 *
 * @element cds-skeleton-placeholder
 */
let CDSSkeletonPlaceholder = _decorate([customElement(`${prefix}-skeleton-placeholder`)], function (_initialize, _LitElement) {
  class CDSSkeletonPlaceholder extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSkeletonPlaceholder,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <div class="${0}--skeleton__placeholder"></div> `), prefix);
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
export default CDSSkeletonPlaceholder;
//# sourceMappingURL=skeleton-placeholder.js.map
