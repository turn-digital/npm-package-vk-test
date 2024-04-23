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
import styles from "././modal.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Modal header.
 *
 * @element cds-modal-header
 */
let CDSModalHeader = _decorate([customElement(`${prefix}-modal-header`)], function (_initialize, _LitElement) {
  class CDSModalHeader extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSModalHeader,
    d: [{
      kind: "field",
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * `true` if there is a slug.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().filter(elem => elem.matches !== undefined ? elem.matches(this.constructor.slugItem) : false);
        if (hasContent.length > 0) {
          this._hasSlug = Boolean(hasContent);
          hasContent[0].setAttribute('size', 'lg');
        }
        this.requestUpdate();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated() {
        if (this._hasSlug) {
          var _this$parentElement;
          (_this$parentElement = this.parentElement) === null || _this$parentElement === void 0 || _this$parentElement.setAttribute('slug', '');
        } else {
          var _this$parentElement2;
          (_this$parentElement2 = this.parentElement) === null || _this$parentElement2 === void 0 || _this$parentElement2.removeAttribute('slug');
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <slot></slot>
      <slot name="slug" @slotchange="${0}"></slot>`), this._handleSlotChange);
      }

      /**
       * A selector that will return the slug item.
       */
    }, {
      kind: "get",
      static: true,
      key: "slugItem",
      value: function slugItem() {
        return `${prefix}-slug`;
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
export default CDSModalHeader;
//# sourceMappingURL=modal-header.js.map
