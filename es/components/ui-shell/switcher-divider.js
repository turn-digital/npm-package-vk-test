import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././header.css.js";

/**
 * A divider in switcher.
 *
 * @element cds-switcher-divider
 */ /**
     * A divider in switcher.
     *
     * @element cds-switcher-divider
     */
let CDSSwitcherDivider = _decorate([customElement(`${prefix}-switcher-divider`)], function (_initialize, _LitElement) {
  class CDSSwitcherDivider extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSwitcherDivider,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'separator');
        }
        _get(_getPrototypeOf(CDSSwitcherDivider.prototype), "connectedCallback", this).call(this);
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
export default CDSSwitcherDivider;
//# sourceMappingURL=switcher-divider.js.map
