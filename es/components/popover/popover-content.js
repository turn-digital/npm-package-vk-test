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
import { property, customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././popover.css.js";

/**
 * Popover.
 *
 * @element cds-popover
 */ /**
     * Popover.
     *
     * @element cds-popover
     */
let CDSPopoverContent = _decorate([customElement(`${prefix}-popover-content`)], function (_initialize, _LitElement) {
  class CDSPopoverContent extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSPopoverContent,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true,
        type: String
      })],
      key: "align",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "caret",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "dropShadow",
      value() {
        return true;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "open",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "tabTip",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "slot",
      value() {
        return 'content';
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Specify the popover alignment
       */

      /**
       * Specify whether a caret should be rendered
       */

      /**
       * Specify whether a dropShadow should be rendered
       */

      /**
       * Specify whether the component is currently open or closed
       */

      /**
       * Render the component using the tab tip variant
       */

      /**
       * The shadow slot this popover content should be in.
       */

      function render() {
        return html(_t || (_t = _`
      <span class="${0}--popover-content">
        <slot> </slot>
      </span>
      <span class="${0}--popover-caret"></span>
    </span>
    `), prefix, prefix);
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
export default CDSPopoverContent;
//# sourceMappingURL=popover-content.js.map
