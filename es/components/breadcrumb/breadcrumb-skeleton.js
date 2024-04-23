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
import { customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././breadcrumb.css.js";
const renderItem = () => {
  return html(_t || (_t = _`
    <div class="${0}--breadcrumb-item">
      <span class="${0}--link">&nbsp;</span>
    </div>
  `), prefix, prefix);
};

/**
 * Skeleton of breadcrumb.
 */
let CDSBreadcrumbSkeleton = _decorate([customElement(`${prefix}-breadcrumb-skeleton`)], function (_initialize, _LitElement) {
  class CDSBreadcrumbSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSBreadcrumbSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t2 || (_t2 = _`
      <div class="${0}--breadcrumb ${0}--skeleton">
        ${0} ${0} ${0}
      </div>
    `), prefix, prefix, renderItem(), renderItem(), renderItem());
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
export default CDSBreadcrumbSkeleton;
//# sourceMappingURL=breadcrumb-skeleton.js.map
