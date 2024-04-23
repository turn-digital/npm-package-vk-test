import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
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
import styles from "././breadcrumb.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Breadcrumb.
 *
 * @element cds-breadcrumb
 */
let CDSBreadcrumb = _decorate([customElement(`${prefix}-breadcrumb`)], function (_initialize, _LitElement) {
  class CDSBreadcrumb extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSBreadcrumb,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'no-trailing-slash'
      })],
      key: "noTrailingSlash",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Optional prop to omit the trailing slash for the breadcrumbs
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'navigation');
        }
        _get(_getPrototypeOf(CDSBreadcrumb.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const classes = classMap({
          [`${prefix}--breadcrumb`]: true,
          [`${prefix}--breadcrumb--no-trailing-slash`]: this.noTrailingSlash
        });
        return html(_t || (_t = _`
      <ol class="${0}">
        <slot></slot>
      </ol>
    `), classes);
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
export default CDSBreadcrumb;
//# sourceMappingURL=breadcrumb.js.map
