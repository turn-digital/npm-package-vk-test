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
import { customElement, property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././stack.css.js";
import { STACK_ORIENTATION, SPACING_STEPS } from './defs';
export { STACK_ORIENTATION, SPACING_STEPS };

/**
 * The Stack component is a useful layout utility in a component-based model.
 * This allows components to not use margin and instead delegate the
 * responsibility of positioning and layout to parent components.
 *
 * In the case of the Stack component, it uses the spacing scale from the
 * Design Language in order to determine how much space there should be between
 * items rendered by the Stack component. It also supports a custom `gap` prop
 * which will allow a user to provide a custom value for the gap of the layout.
 *
 * This component supports both horizontal and vertical orientations.
 *
 * @element cds-stack
 */
let CDSStack = _decorate([customElement(`${prefix}-stack`)], function (_initialize, _LitElement) {
  class CDSStack extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSStack,
    d: [{
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true
      })],
      key: "orientation",
      value() {
        return STACK_ORIENTATION.VERTICAL;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: SPACING_STEPS || String,
        reflect: true
      })],
      key: "gap",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'use-custom-gap-value'
      })],
      key: "useCustomGapValue",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * Specify the orientation of them items in the Stack
       */

      /**
       * Provide either a custom value or a step from the spacing scale to be used
       * as the gap in the layout
       */

      /**
       * Turn on when passing in custom value to 'gap' attribute (ie. gap="2rem")
       */

      function updated(changedProperties) {
        if (changedProperties.has('gap')) {
          if (this.useCustomGapValue) {
            this.style.setProperty(`--${prefix}-stack-gap`, `${this.gap}`);
          } else {
            var _this$shadowRoot, _this$shadowRoot2;
            const oldGapValue = changedProperties.get('gap');
            (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector('div')) === null || _this$shadowRoot === void 0 || _this$shadowRoot.classList.remove(`${prefix}--stack-scale-${oldGapValue}`);
            (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 || (_this$shadowRoot2 = _this$shadowRoot2.querySelector('div')) === null || _this$shadowRoot2 === void 0 || _this$shadowRoot2.classList.add(`${prefix}--stack-scale-${this.gap}`);
          }
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`<div><slot></slot></div>`));
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
export default CDSStack;
//# sourceMappingURL=stack.js.map
