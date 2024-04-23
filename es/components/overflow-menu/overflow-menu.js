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

import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import HostListener from '../../globals/decorators/host-listener';
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { find } from '../../globals/internal/collection-helpers';
import { OVERFLOW_MENU_SIZE } from './defs';
import styles from "././overflow-menu.css.js";
import CDSIconButton from '../icon-button/icon-button';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { OVERFLOW_MENU_SIZE };

/**
 * Overflow menu.
 *
 * @element cds-overflow-menu
 * @slot icon - The icon for the trigger button.
 */
let CDSOverflowMenu = _decorate([customElement(`${prefix}-overflow-menu`)], function (_initialize, _HostListenerMixin) {
  class CDSOverflowMenu extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSOverflowMenu,
    d: [{
      kind: "field",
      key: "_menuBody",
      value() {
        return null;
      }
    }, {
      kind: "method",
      key: "_handleUserInitiatedToggle",
      value:
      /**
       * The menu body.
       */

      /**
       * Handles user-initiated toggling of the menu.
       */
      async function _handleUserInitiatedToggle() {
        this.open = !this.open;
        const {
          index,
          open,
          updateComplete
        } = this;
        if (open) {
          await updateComplete;
          const {
            _menuBody: menuBody
          } = this;
          const menuItem = menuBody === null || menuBody === void 0 ? void 0 : menuBody.querySelector(`${prefix}-overflow-menu-item:nth-of-type(${index})`);
          menuItem === null || menuItem === void 0 || menuItem.focus();
        }
      }

      /**
       * Handles `click` event on the trigger button.
       */
    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_handleClickTrigger",
      value() {
        return async () => {
          this._handleUserInitiatedToggle();
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeydownTrigger",
      value() {
        return async event => {
          if (event.key === ' ' || event.key === 'Enter') {
            this._handleUserInitiatedToggle();
            event.preventDefault();
          }
        };
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
        type: Boolean,
        reflect: true
      })],
      key: "disabled",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "flipped",
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
      decorators: [property()],
      key: "index",
      value() {
        return 1;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return OVERFLOW_MENU_SIZE.MEDIUM;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'toolbar-action',
        reflect: true
      })],
      key: "toolbarAction",
      value() {
        return false;
      }
    }, {
      kind: "get",
      key: "triggerPosition",
      value:
      /**
       * Handles `keydown` event on the trigger button.
       */
      /**
       * `true` if this tooltip is in a data table row
       */
      /**
       * `true` if this overflow menu should be disabled.
       */
      /**
       * `true` if this overflow menu body should be flipped.
       */
      /**
       * `true` if the dropdown should be open.
       */
      /**
       * Index (starting at 1) of overflow menu item to focus on open.
       */
      /**
       * Overflow menu size.
       */
      /**
       * `true` if this menu is a toolbar action
       */
      /**
       * @returns The position of the trigger button in the viewport.
       */
      function triggerPosition() {
        return this.getBoundingClientRect();
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('aria-haspopup')) {
          this.setAttribute('aria-haspopup', 'true');
        }
        if (!this.shadowRoot) {
          this.attachShadow({
            mode: 'open'
          });
        }
        _get(_getPrototypeOf(CDSOverflowMenu.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        var _this$shadowRoot;
        const button = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector(`${prefix}-tooltip`)) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector('button');
        button === null || button === void 0 || button.classList.add(`${prefix}--btn--icon-only`, `${prefix}--overflow-menu`);
        if (changedProperties.has('open')) {
          const {
            open
          } = this;
          if (open && !this._menuBody) {
            this._menuBody = find(this.childNodes, elem => elem.constructor.FLOATING_MENU);
          }
          const {
            _menuBody: menuBody
          } = this;
          if (menuBody) {
            var _this$querySelector;
            menuBody.open = open;
            const tooltipContent = (_this$querySelector = this.querySelector('[slot=tooltip-content]')) === null || _this$querySelector === void 0 ? void 0 : _this$querySelector.textContent;
            button === null || button === void 0 || button.setAttribute('aria-expanded', String(Boolean(open)));
            button === null || button === void 0 || button.setAttribute('aria-label', String(tooltipContent));
          }
        }
        if (changedProperties.has('dataTable')) {
          var _this$shadowRoot2;
          const tooltip = (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 ? void 0 : _this$shadowRoot2.querySelector(`${prefix}-tooltip`);
          tooltip === null || tooltip === void 0 || tooltip.setAttribute('data-table', '');
        }
        if (changedProperties.has('size')) {
          var _this$shadowRoot3;
          const {
            size
          } = this;
          const {
            _menuBody: menuBody
          } = this;
          if (menuBody) {
            menuBody.size = size;
          }
          button === null || button === void 0 || button.classList.forEach(item => {
            if (item.startsWith(`${prefix}--overflow-menu--`)) {
              button === null || button === void 0 || button.classList.remove(item);
            }
          });
          button === null || button === void 0 || button.classList.add(`${prefix}--overflow-menu--${this.size}`);
          const tooltip = (_this$shadowRoot3 = this.shadowRoot) === null || _this$shadowRoot3 === void 0 ? void 0 : _this$shadowRoot3.querySelector(`${prefix}-tooltip`);
          tooltip === null || tooltip === void 0 || tooltip.setAttribute('size', this.size);
        }
        if (changedProperties.has('toolbarAction') && this.toolbarAction) {
          var _this$shadowRoot4;
          (_this$shadowRoot4 = this.shadowRoot) === null || _this$shadowRoot4 === void 0 || (_this$shadowRoot4 = _this$shadowRoot4.querySelector(`${prefix}-tooltip`)) === null || _this$shadowRoot4 === void 0 || _this$shadowRoot4.setAttribute('toolbar-action', '');
        }
        _get(_getPrototypeOf(CDSOverflowMenu.prototype), "updated", this).call(this, changedProperties);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` ${0} `), _get(_getPrototypeOf(CDSOverflowMenu.prototype), "render", this).call(this));
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
}, HostListenerMixin(FocusMixin(CDSIconButton)));
export default CDSOverflowMenu;
//# sourceMappingURL=overflow-menu.js.map
