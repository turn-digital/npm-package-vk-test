import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import Information16 from "../../icons/information/16";
import { prefix } from '../../globals/settings';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import FocusMixin from '../../globals/mixins/focus';
import { POPOVER_ALIGNMENT } from '../popover/defs';
import styles from "././toggletip.css.js";

/**
 * Definition tooltip.
 *
 * @element cds-toggletip
 */ /**
     * Definition tooltip.
     *
     * @element cds-toggletip
     */
let CDSToggletip = _decorate([customElement(`${prefix}-toggletip`)], function (_initialize, _HostListenerMixin) {
  class CDSToggletip extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSToggletip,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "alignment",
      value() {
        return POPOVER_ALIGNMENT.TOP;
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
      kind: "method",
      key: "_handleActionsSlotChange",
      value:
      /**
       * How the tooltip is aligned to the trigger button.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleActionsSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes();
        hasContent ? this.setAttribute('has-actions', '') : this.removeAttribute('has-actions');
      }
    }, {
      kind: "field",
      key: "_handleClick",
      value() {
        return () => {
          this.open = !this.open;
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeydown",
      value() {
        return async event => {
          if (event.key === 'Escape') {
            this.open = false;
          }
        };
      }
    }, {
      kind: "method",
      decorators: [HostListener('focusout')],
      key: "_handleFocusOut",
      value:
      /**
       * Handles `keydown` event on this element.
       */
      /**
       * Handles `blur` event handler on the document this element is in.
       *
       * @param event The event.
       */
      function _handleFocusOut(event) {
        if (!this.contains(event.relatedTarget)) {
          this.open = false;
        }
      }
    }, {
      kind: "field",
      key: "_renderToggleTipLabel",
      value() {
        return () => {
          return html(_t || (_t = _`
      <span class="${0}--toggletip-label">
        <slot></slot>
      </span>
    `), prefix);
        };
      }
    }, {
      kind: "field",
      key: "_renderTooltipButton",
      value() {
        return () => {
          return html(_t2 || (_t2 = _`
      <button
        aria-controls="${0}"
        class="${0}--toggletip-button"
        @click=${0}>
        ${0}
      </button>
    `), this.id, prefix, this._handleClick, Information16({
            id: 'trigger'
          }));
        };
      }
    }, {
      kind: "field",
      key: "_renderTooltipContent",
      value() {
        return () => {
          return html(_t3 || (_t3 = _`
      <span class="${0}--popover">
        <span class="${0}--popover-content">
          <div class="${0}--toggletip-content">
            <slot name="body-text"></slot>
            <div class="${0}--toggletip-actions">
              <slot
                name="actions"
                @slotchange="${0}"></slot>
            </div>
          </div>
        </span>
        <span class="${0}--popover-caret"></span>
      </span>
    `), prefix, prefix, prefix, prefix, this._handleActionsSlotChange, prefix);
        };
      }
    }, {
      kind: "field",
      key: "_renderInnerContent",
      value() {
        return () => {
          return html(_t4 || (_t4 = _`
      ${0} ${0}
    `), this._renderTooltipButton(), this._renderTooltipContent());
        };
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          alignment,
          open
        } = this;
        const classes = classMap({
          [`${prefix}--popover-container`]: true,
          [`${prefix}--popover--caret`]: true,
          [`${prefix}--popover--high-contrast`]: true,
          [`${prefix}--popover--open`]: open,
          [`${prefix}--popover--${alignment}`]: alignment,
          [`${prefix}--toggletip`]: true,
          [`${prefix}--toggletip--open`]: open
        });
        return html(_t5 || (_t5 = _`
      ${0}
      <span class="${0}">
        ${0}
      </span>
    </span>
    `), this._renderToggleTipLabel(), classes, this._renderInnerContent());
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
}, HostListenerMixin(FocusMixin(LitElement)));
export default CDSToggletip;
//# sourceMappingURL=toggletip.js.map
