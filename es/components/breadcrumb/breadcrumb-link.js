import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
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

import { html } from 'lit';
import { prefix } from '../../globals/settings';
import CDSLink from '../link/link';
import styles from "././breadcrumb.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Link in breadcrumb.
 *
 * @element cds-breadcrumb-link
 */
let CDSBreadcrumbLink = _decorate([customElement(`${prefix}-breadcrumb-link`)], function (_initialize, _CDSLink) {
  class CDSBreadcrumbLink extends _CDSLink {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSBreadcrumbLink,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      ${0}
    `), this.href ? _get(_getPrototypeOf(CDSBreadcrumbLink.prototype), "render", this).call(this) : html(_t2 || (_t2 = _`<span class="${0}--link"><slot></slot></span>`), prefix));
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
}, CDSLink);
export default CDSBreadcrumbLink;
//# sourceMappingURL=breadcrumb-link.js.map
