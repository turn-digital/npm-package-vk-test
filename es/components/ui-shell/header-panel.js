import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import styles from "././header.css.js";
import { prefix } from '../../globals/settings';

/**
 * Header panel
 *
 * @element cds-header-panel
 */
let CDSHeaderPanel = _decorate([customElement(`${prefix}-header-panel`)], function (_initialize, _LitElement) {
  class CDSHeaderPanel extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSHeaderPanel,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "expanded",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Specify whether the panel is expanded
       */

      function render() {
        return html(_t || (_t = _`<slot></slot>`));
      }
    }, {
      kind: "field",
      static: true,
      key: "shadowRootOptions",
      value() {
        return _objectSpread(_objectSpread({}, LitElement.shadowRootOptions), {}, {
          delegatesFocus: true
        });
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
export default CDSHeaderPanel;
//# sourceMappingURL=header-panel.js.map
