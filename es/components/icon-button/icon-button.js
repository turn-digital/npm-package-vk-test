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
import { property, customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import '../tooltip/index';
import '../button/index';
import CDSButton from '../button/button';
import { ICON_BUTTON_SIZE, ICON_BUTTON_TOOLTIP_ALIGNMENT } from './defs';
import styles from "././icon-button.css.js";
export { ICON_BUTTON_SIZE, ICON_BUTTON_TOOLTIP_ALIGNMENT };

/**
 * Icon Button
 *
 */
let CDSIconButton = _decorate([customElement(`${prefix}-icon-button`)], function (_initialize, _CDSButton) {
  class CDSIconButton extends _CDSButton {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSIconButton,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true,
        type: String
      })],
      key: "align",
      value() {
        return 'top';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'close-on-activation',
        reflect: true,
        type: Boolean
      })],
      key: "closeOnActivation",
      value() {
        return true;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        type: Boolean
      })],
      key: "defaultOpen",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'enter-delay-ms',
        type: Number
      })],
      key: "enterDelayMs",
      value() {
        return 100;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'leave-delay-ms',
        type: Number
      })],
      key: "leaveDelayMs",
      value() {
        return 300;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return 'md';
      }
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * Specify how the trigger should align with the tooltip
       */

      /**
       * Determines whether the tooltip should close when inner content is activated (click, Enter or Space)
       */

      /**
       * Specify whether the tooltip should be open when it first renders
       */

      /**
       * Specify the duration in milliseconds to delay before displaying the tooltip
       */

      /**
       * Specify the duration in milliseconds to delay before hiding the tooltip
       */

      /**
       * Specify the size of the Button. Defaults to `md`.
       */

      function updated(changedProperties) {
        if (changedProperties) {
          var _this$shadowRoot, _this$querySelector, _this$shadowRoot2;
          (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector(`${prefix}-tooltip`)) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector(`.${prefix}--tooltip`)) === null || _this$shadowRoot === void 0 || _this$shadowRoot.classList.add(`${prefix}--icon-tooltip`);
          const tooltipContent = (_this$querySelector = this.querySelector('[slot=tooltip-content]')) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.textContent;
          (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 || (_this$shadowRoot2 = _this$shadowRoot2.querySelector(`${prefix}-tooltip`)) === null || _this$shadowRoot2 === void 0 || (_this$shadowRoot2 = _this$shadowRoot2.querySelector(`button`)) === null || _this$shadowRoot2 === void 0 || _this$shadowRoot2.setAttribute('aria-label', String(tooltipContent));
        }
      }

      // eslint-disable-next-line class-methods-use-this
    }, {
      kind: "method",
      key: "_renderTooltipContent",
      value: function _renderTooltipContent() {
        return html(_t || (_t = _`
      <cds-tooltip-content>
        <slot name="tooltip-content"></slot>
      </cds-tooltip-content>
    `));
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          align,
          closeOnActivation,
          defaultOpen,
          enterDelayMs,
          leaveDelayMs
        } = this;
        return html(_t2 || (_t2 = _`
      <cds-tooltip
        align=${0}
        ?defaultOpen=${0}
        close-on-activation="${0}"
        enter-delay-ms=${0}
        leave-delay-ms=${0}>
        ${0} ${0}
      </cds-tooltip>
    `), align, defaultOpen, closeOnActivation, enterDelayMs, leaveDelayMs, _get(_getPrototypeOf(CDSIconButton.prototype), "render", this).call(this), this._renderTooltipContent());
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
}, CDSButton);
export default CDSIconButton;
//# sourceMappingURL=icon-button.js.map
