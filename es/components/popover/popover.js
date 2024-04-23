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

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././popover.css.js";
/**
 * Popover.
 *
 * @element cds-popover
 */
let CDSPopover = _decorate([customElement(`${prefix}-popover`)], function (_initialize, _LitElement) {
  class CDSPopover extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSPopover,
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
      value() {
        return true;
      }
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
      key: "highContrast",
      value() {
        return false;
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
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * Specify direction of alignment
       */

      /**
       * Specify whether a caret should be rendered
       */

      /**
       * Specify whether a dropShadow should be rendered
       */

      /**
       * Render the component using the high-contrast variant
       */

      /**
       * Specify whether the component is currently open or closed
       */

      /**
       * Render the component using the tab tip variant
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        if (this.tabTip) {
          const component = target.assignedNodes().filter(node => node.nodeType !== Node.TEXT_NODE || node.textContent.trim());
          component[0].classList.add(`${prefix}--popover--tab-tip__button`);
        }
        this.requestUpdate();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        const {
          selectorPopoverContent
        } = this.constructor;
        ['open', 'align', 'caret', 'dropShadow', 'tabTip'].forEach(name => {
          if (changedProperties.has(name)) {
            const {
              [name]: value
            } = this;
            this.querySelector(selectorPopoverContent)[name] = value;
          }
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          dropShadow,
          highContrast,
          open,
          tabTip,
          _handleSlotChange: handleSlotChange
        } = this;
        if (tabTip) {
          this.caret = tabTip ? false : true;
        }
        this.align = this.align ? this.align : tabTip ? 'bottom-left' : 'bottom';
        const classes = classMap({
          [`${prefix}--popover-container`]: true,
          [`${prefix}--popover--caret`]: this.caret,
          [`${prefix}--popover--drop-shadow`]: dropShadow,
          [`${prefix}--popover--high-contrast`]: highContrast,
          [`${prefix}--popover--open`]: open,
          [`${prefix}--popover--${this.align}`]: true,
          [`${prefix}--popover--tab-tip`]: tabTip
        });
        return html(_t || (_t = _`
    <span class="${0}">
      <slot @slotchange="${0}"></slot>
      <slot name="content"><slot>
    </span>
    `), classes, handleSlotChange);
      }

      /**
       * A selector that will return the CDSPopoverContent.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorPopoverContent",
      value: function selectorPopoverContent() {
        return `${prefix}-popover-content`;
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
export default CDSPopover;
//# sourceMappingURL=popover.js.map
