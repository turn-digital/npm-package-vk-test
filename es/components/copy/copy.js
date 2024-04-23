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
import styles from "./../copy-button/copy-button.css.js";
import CDSIconButton from '../icon-button/icon-button';

/**
 * Copy.
 *
 * @element cds-copy
 */
let CDSCopy = _decorate([customElement(`${prefix}-copy`)], function (_initialize, _CDSIconButton) {
  class CDSCopy extends _CDSIconButton {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSCopy,
    d: [{
      kind: "field",
      key: "_showFeedback",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "_animation",
      value() {
        return '';
      }
    }, {
      kind: "field",
      key: "_createHandleFeedbackTooltip",
      value() {
        return () => {
          let timeoutId;
          return timeout => {
            var _this$shadowRoot;
            const buttonClasses = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector('button')) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.classList;
            if (timeoutId) {
              clearTimeout(timeoutId);
              timeoutId = undefined;
            }
            this._showFeedback = true;
            buttonClasses === null || buttonClasses === void 0 || buttonClasses.add(`${prefix}--copy-btn--animating`);
            this._animation = 'fade-in';
            buttonClasses === null || buttonClasses === void 0 || buttonClasses.add(`${prefix}--copy-btn--${this._animation}`);
            this.requestUpdate();
            timeoutId = setTimeout(() => {
              this._showFeedback = false;
              this._animation = 'fade-out';
              buttonClasses === null || buttonClasses === void 0 || buttonClasses.remove(`${prefix}--copy-btn--fade-in`);
              buttonClasses === null || buttonClasses === void 0 || buttonClasses.add(`${prefix}--copy-btn--${this._animation}`);
              this.requestUpdate();
            }, timeout);
          };
        };
      }
    }, {
      kind: "field",
      key: "_handleFeedbackTooltip",
      value() {
        return this._createHandleFeedbackTooltip();
      }
    }, {
      kind: "method",
      key: "_handleClickButton",
      value:
      /**
       * `true` to show the feedback tooltip.
       */

      /**
       * `true` to show the feedback tooltip.
       */

      /**
       * Handles showing/hiding the feedback tooltip.
       */

      /**
       * Handles `click` event on the copy button.
       */
      function _handleClickButton() {
        this._handleFeedbackTooltip(this.feedbackTimeout);
      }

      /**
       * Specify the string that is displayed when the button is clicked and the content is copi
       */
    }, {
      kind: "field",
      decorators: [property()],
      key: "feedback",
      value() {
        return 'Copied!';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        attribute: 'feedback-timeout'
      })],
      key: "feedbackTimeout",
      value() {
        return 2000;
      }
    }, {
      kind: "method",
      key: "_renderTooltipContent",
      value:
      /**
       * The number in milliseconds to determine how long the tooltip should remain.
       */
      // eslint-disable-next-line class-methods-use-this
      function _renderTooltipContent() {
        return html(_t || (_t = _`
      <cds-tooltip-content>
        ${0}
      </cds-tooltip-content>
    `), this._showFeedback ? this.feedback : html(_t2 || (_t2 = _`<slot name="tooltip-content"></slot>`)));
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        this.closeOnActivation = false;
        this.align = 'bottom';
        this.addEventListener('click', this._handleClickButton);
        _get(_getPrototypeOf(CDSCopy.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        var _this$shadowRoot2, _this$shadowRoot4, _this$parentNode;
        (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 || (_this$shadowRoot2 = _this$shadowRoot2.querySelector('button')) === null || _this$shadowRoot2 === void 0 || _this$shadowRoot2.addEventListener('animationend', () => {
          if (this._animation === 'fade-out') {
            var _this$shadowRoot3;
            const buttonClasses = (_this$shadowRoot3 = this.shadowRoot) === null || _this$shadowRoot3 === void 0 || (_this$shadowRoot3 = _this$shadowRoot3.querySelector('button')) === null || _this$shadowRoot3 === void 0 ? void 0 : _this$shadowRoot3.classList;
            buttonClasses === null || buttonClasses === void 0 || buttonClasses.remove(`${prefix}--copy-btn--animating`);
            buttonClasses === null || buttonClasses === void 0 || buttonClasses.remove(`${prefix}--copy-btn--${this._animation}`);
            this._animation = '';
          }
        });
        _get(_getPrototypeOf(CDSCopy.prototype), "updated", this).call(this, changedProperties);
        (_this$shadowRoot4 = this.shadowRoot) === null || _this$shadowRoot4 === void 0 || (_this$shadowRoot4 = _this$shadowRoot4.querySelector('button') // @ts-ignore: TS thinks `host` doesn't exist on `parentNode`
        ) === null || _this$shadowRoot4 === void 0 || _this$shadowRoot4.setAttribute('aria-label', (_this$parentNode = this.parentNode) === null || _this$parentNode === void 0 ? void 0 : _this$parentNode.host.textContent);
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
}, CDSIconButton);
export default CDSCopy;
//# sourceMappingURL=copy.js.map
