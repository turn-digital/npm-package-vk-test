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
import styles from "././data-table.css.js";

/**
 * Data table header description
 *
 * @element cds-table-header-description
 */ /**
     * Data table header description
     *
     * @element cds-table-header-description
     */
let CDSTableHeaderDescription = _decorate([customElement(`${prefix}-table-header-description`)], function (_initialize, _LitElement) {
  class CDSTableHeaderDescription extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTableHeaderDescription,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <slot></slot> `));
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
export default CDSTableHeaderDescription;
//# sourceMappingURL=table-header-description.js.map
