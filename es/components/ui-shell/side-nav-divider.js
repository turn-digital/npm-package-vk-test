import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement } from 'lit';
import { prefix } from '../../globals/settings';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././side-nav.css.js";

/**
 * A divider in side nav.
 *
 * @element cds-side-nav-divider
 */ /**
     * A divider in side nav.
     *
     * @element cds-side-nav-divider
     */
let CDSSideNavDivider = _decorate([customElement(`${prefix}-side-nav-divider`)], function (_initialize, _LitElement) {
  class CDSSideNavDivider extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSideNavDivider,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'separator');
        }
        _get(_getPrototypeOf(CDSSideNavDivider.prototype), "connectedCallback", this).call(this);
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
export default CDSSideNavDivider;
//# sourceMappingURL=side-nav-divider.js.map
