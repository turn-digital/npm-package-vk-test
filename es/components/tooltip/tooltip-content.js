import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import CDSPopoverContent from '../popover/popover-content';
import styles from "././tooltip.css.js";

/**
 * Tooltip content.
 */ /**
     * Tooltip content.
     */
let CDSTooltipContent = _decorate([customElement(`${prefix}-tooltip-content`)], function (_initialize, _CDSPopoverContent) {
  class CDSTooltipContent extends _CDSPopoverContent {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTooltipContent,
    d: [{
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('aria-hidden')) {
          this.setAttribute('aria-hidden', 'true');
        }
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'tooltip');
        }
        _get(_getPrototypeOf(CDSTooltipContent.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated() {
        var _this$shadowRoot;
        (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector(`.${prefix}--popover-content`)) === null || _this$shadowRoot === void 0 || _this$shadowRoot.classList.add(`${prefix}--tooltip-content`);
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
}, CDSPopoverContent);
export default CDSTooltipContent;
//# sourceMappingURL=tooltip-content.js.map
