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
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././modal.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Modal footer.
 *
 * @element cds-modal-footer
 */
let CDSModalFooter = _decorate([customElement(`${prefix}-modal-footer`)], function (_initialize, _LitElement) {
  class CDSModalFooter extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSModalFooter,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'has-three-buttons'
      })],
      key: "hasThreeButtons",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * `true` if this modal footer has more than two buttons.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange(event) {
        var _this$parentElement, _this$parentElement2;
        const {
          selectorButtons
        } = this.constructor;
        const length = event.target.assignedNodes().filter(node => node.nodeType === Node.ELEMENT_NODE && node.matches(selectorButtons)).length;
        this.hasThreeButtons = length > 2;
        length === 2 ? (_this$parentElement = this.parentElement) === null || _this$parentElement === void 0 ? void 0 : _this$parentElement.setAttribute('has-two-buttons', '') : (_this$parentElement2 = this.parentElement) === null || _this$parentElement2 === void 0 ? void 0 : _this$parentElement2.removeAttribute('has-two-buttons');
        this.requestUpdate();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <slot @slotchange="${0}"></slot> `), this._handleSlotChange);
      }

      /**
       * A selector that selects the child buttons.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorButtons",
      value: function selectorButtons() {
        return `${prefix}-button,${prefix}-modal-footer-button`;
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
export default CDSModalFooter;
//# sourceMappingURL=modal-footer.js.map
