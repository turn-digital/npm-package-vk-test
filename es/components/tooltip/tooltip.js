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

import { css } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import CDSPopover from '../popover/popover';
import '../popover/popover-content';
import _styles from "././tooltip.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Trigger button of tooltip.
 *
 * @element cds-tooltip
 */
let CDSTooltip = _decorate([customElement(`${prefix}-tooltip`)], function (_initialize, _HostListenerMixin) {
  class CDSTooltip extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTooltip,
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
        type: Boolean,
        reflect: true,
        attribute: 'data-table'
      })],
      key: "dataTable",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        type: Boolean
      })],
      key: "closeOnActivation",
      value() {
        return false;
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
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "timeoutId",
      value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'toolbar-action',
        type: Boolean
      })],
      key: "toolbarAction",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "_handleHover",
      value() {
        return async () => {
          window.clearTimeout(this.timeoutId);
          this.timeoutId = window.setTimeout(async () => {
            this.open = true;
            const {
              open,
              updateComplete
            } = this;
            if (open) {
              var _this$querySelector;
              await updateComplete;
              const {
                selectorTooltipContent
              } = this.constructor;
              (_this$querySelector = this.querySelector(selectorTooltipContent)) === null || _this$querySelector === void 0 || _this$querySelector.focus();
            }
          }, this.enterDelayMs);
        };
      }
    }, {
      kind: "field",
      key: "_handleHoverOut",
      value() {
        return async () => {
          window.clearTimeout(this.timeoutId);
          this.timeoutId = window.setTimeout(async () => {
            const {
              open
            } = this;
            if (open) {
              this.open = false;
            }
          }, this.leaveDelayMs);
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_handleClick",
      value() {
        return async () => {
          if (this.closeOnActivation) {
            this._handleHoverOut();
          }
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_handleKeydown",
      value() {
        return async event => {
          if (event.key === ' ' || event.key === 'Enter' || event.key === 'Escape') {
            this._handleHoverOut();
          }
        };
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * Specify how the trigger should align with the tooltip
       */

      /**
       * `true` if this tooltip is in a data table row
       */

      /**
       * Specify whether the tooltip should be closed when clicked
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
       * Specify the size of the tooltip
       */

      /**
       * Specify the timeout reference for the tooltip
       */

      /**
       * Specify whether the tooltip should be open when it first renders
       */

      /**
       * Handles `mouseover` event on this element.
       */

      /**
       * Handles `mouseleave` event on this element.
       */

      /**
       * Handles `click` event on this element.
       */

      /**
       * Handles `keydown` event on this element.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        const component = target.assignedNodes().filter(node => node.nodeType !== Node.TEXT_NODE || node.textContent.trim());
        if (!component[0]) {
          return;
        }
        component[0].addEventListener('focus', this._handleHover);
        component[0].addEventListener('focusout', this._handleHoverOut);
        component[0].addEventListener('mouseover', this._handleHover);
        component[0].addEventListener('mouseleave', this._handleHoverOut);
        this.requestUpdate();
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('highContrast')) {
          this.setAttribute('highContrast', '');
        }
        if (!this.shadowRoot) {
          this.attachShadow({
            mode: 'open'
          });
        }
        _get(_getPrototypeOf(CDSTooltip.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        var _this$shadowRoot;
        const {
          selectorTooltipContent
        } = this.constructor;
        const toolTipContent = this.querySelector(selectorTooltipContent);
        if (changedProperties.has('defaultOpen')) {
          this.open = this.defaultOpen;
        }
        if (changedProperties.has('open')) {
          this.open ? toolTipContent === null || toolTipContent === void 0 ? void 0 : toolTipContent.setAttribute('open', '') : toolTipContent === null || toolTipContent === void 0 ? void 0 : toolTipContent.removeAttribute('open');
        }
        ['align', 'caret'].forEach(name => {
          if (changedProperties.has(name)) {
            const {
              [name]: value
            } = this;
            toolTipContent[name] = value;
          }
        });
        (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector(`.${prefix}--popover-container`)) === null || _this$shadowRoot === void 0 || _this$shadowRoot.classList.add(`${prefix}--tooltip`);
      }

      /**
       * A selector that will return the CDSTooltipContent.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTooltipContent",
      value: function selectorTooltipContent() {
        return `${prefix}-tooltip-content`;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return css(_t || (_t = _`
      ${0}${0}
    `), _get(_getPrototypeOf(CDSTooltip), "styles", this), _styles);
      } // `styles` here is a `CSSResult` generated by custom WebPack loader
    }]
  };
}, HostListenerMixin(CDSPopover));
export default CDSTooltip;
//# sourceMappingURL=tooltip.js.map
