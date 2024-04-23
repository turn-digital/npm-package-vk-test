import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement } from 'lit';
import { property, customElement, query } from 'lit/decorators.js';
import { BUTTON_TOOLTIP_POSITION } from '../button/button';
import CDSButton from '../button/button';
import HostListener from '../../globals/decorators/host-listener';
import styles from "././header.css.js";
import { prefix } from '../../globals/settings';

/**
 * Header global action button
 *
 * @element cds-header-global-action
 */
let CDSHeaderGlobalAction = _decorate([customElement(`${prefix}-header-global-action`)], function (_initialize, _CDSButton) {
  class CDSHeaderGlobalAction extends _CDSButton {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSHeaderGlobalAction,
    d: [{
      kind: "field",
      decorators: [query('button')],
      key: "_buttonNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "active",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        attribute: 'panel-id',
        reflect: true
      })],
      key: "panelId",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'button-label-active'
      })],
      key: "buttonLabelActive",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'button-label-inactive'
      })],
      key: "buttonLabelInactive",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Specify whether the action is currently active
       */

      /**
       * Specify which header panel the button is associated with.
       */

      /**
       * The `aria-label` attribute for the button in its active state.
       */

      /**
       * The `aria-label` attribute for the button in its inactive state.
       */

      function connectedCallback() {
        this.tooltipPosition = BUTTON_TOOLTIP_POSITION.BOTTOM;
        _get(_getPrototypeOf(CDSHeaderGlobalAction.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      decorators: [HostListener('click', {
        capture: true
      })],
      key: "_handleClick",
      value: function _handleClick(event) {
        const {
          disabled
        } = this;
        if (disabled) {
          event.stopPropagation();
        } else {
          const panel = document.querySelector(`#${this.panelId}`);

          // see if there is related panel for header-global-action button first
          // and then set the expanded attr of it accordingly
          if (panel) {
            const expanded = panel.getAttribute('expanded');
            if (expanded) {
              panel.removeAttribute('expanded');
            } else {
              panel.setAttribute('expanded', 'true');
            }
            const active = !this.active;
            this.active = active;
          }
        }
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated() {
        if (this._buttonNode) {
          this._buttonNode.classList.add(`${prefix}--header__action`);
        }
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        if (changedProperties.has('active')) {
          if (this.active) {
            this._buttonNode.classList.add(`${prefix}--header__action--active`);
            if (this.buttonLabelActive) {
              this.tooltipText = this.buttonLabelActive;
            }
          } else {
            this._buttonNode.classList.remove(`${prefix}--header__action--active`);
            if (this.buttonLabelInactive) {
              this.tooltipText = this.buttonLabelInactive;
            }
          }
        }
        return true;
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
}, CDSButton);
export default CDSHeaderGlobalAction;
//# sourceMappingURL=header-global-action.js.map
