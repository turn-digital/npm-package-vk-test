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

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import on from '../../globals/mixins/on';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { forEach } from '../../globals/internal/collection-helpers';
import { SIDE_NAV_COLLAPSE_MODE, SIDE_NAV_USAGE_MODE } from './defs';
import styles from "././side-nav.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { SIDE_NAV_COLLAPSE_MODE, SIDE_NAV_USAGE_MODE };

/**
 * Side nav.
 *
 * @element cds-side-nav
 * @fires cds-header-menu-button-toggled
 *   The name of the custom event fired after the header menu button in the document is toggled upon a user gesture.
 */
let CDSSideNav = _decorate([customElement(`${prefix}-side-nav`)], function (_initialize, _HostListenerMixin) {
  class CDSSideNav extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSideNav,
    d: [{
      kind: "field",
      key: "_hovered",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "_hTransition",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "_transitionPromise",
      value() {
        return Promise.resolve();
      }
    }, {
      kind: "get",
      key: "_updateAndTransitionPromise",
      value:
      /**
       * `true` if this side nav is hovered.
       */

      /**
       * The handle for `transitionend` event listener.
       */

      /**
       * A promise that is resolved when the transition is complete.
       */

      /**
       * A promise that is resolved when the transition upon proprety update is complete.
       */
      function _updateAndTransitionPromise() {
        return this.updateComplete.then(() => this._transitionPromise);
      }

      /**
       * Cleans the handle for `transitionend` event listener.
       */
    }, {
      kind: "method",
      key: "_cleanHTransition",
      value: function _cleanHTransition() {
        if (this._hTransition) {
          this._hTransition = this._hTransition.release();
        }
      }

      /**
       * Handles `${prefix}-header-menu-button-toggle` event on the document.
       */
    }, {
      kind: "field",
      decorators: [HostListener('parentRoot:eventButtonToggle')],
      key: "_handleButtonToggle",
      value() {
        return async event => {
          this.expanded = event.detail.active;
          if (this.expanded) {
            await this._updateAndTransitionPromise;
            // Checks if the side nav is not collapsed during the animation
            if (this.expanded) {
              var _this$querySelector;
              (_this$querySelector = this.querySelector(this.constructor.selectorNavItems)) === null || _this$querySelector === void 0 || _this$querySelector.focus();
            }
          }
        };
      }
    }, {
      kind: "method",
      key: "_updatedSideNavMenuForceCollapsedState",
      value:
      /**
       * Force child side nav menus collapsed upon the hover/expanded state of this side nav.
       */
      function _updatedSideNavMenuForceCollapsedState() {
        const {
          expanded,
          _hovered: hovered
        } = this;
        forEach(this.querySelectorAll(this.constructor.selectorMenu), item => {
          item.forceCollapsed = !expanded && !hovered;
        });
      }

      /**
       * Collapse mode of the side nav.
       */
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'collapse-mode'
      })],
      key: "collapseMode",
      value() {
        return SIDE_NAV_COLLAPSE_MODE.RESPONSIVE;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "expanded",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'is-not-child-of-header'
      })],
      key: "isNotChildOfHeader",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'is-not-persistent'
      })],
      key: "isNotPersistent",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` to expand the side nav.
       */
      /**
       * If `true` will style the side nav to sit below the header
       */
      /**
       * Specify if the side-nav will be persistent above the lg breakpoint
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'navigation');
        }
        _get(_getPrototypeOf(CDSSideNav.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._cleanHTransition();
        _get(_getPrototypeOf(CDSSideNav.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        if (changedProperties.has('expanded')) {
          this._transitionPromise = new Promise(resolve => {
            this._cleanHTransition();
            this._hTransition = on(this, 'transitionend', () => {
              this._cleanHTransition();
              resolve();
            });
          });
        }
        return true;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        const doc = this.getRootNode();
        if (changedProperties.has('collapseMode')) {
          forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), item => {
            item.collapseMode = this.collapseMode;
          });
        }
        if (changedProperties.has('expanded')) {
          const headerItems = doc.querySelectorAll(this.constructor.selectorHeaderItems);
          forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), item => {
            item.active = this.expanded;
          });
          if (this.expanded) {
            forEach(headerItems, item => {
              item.setAttribute('tabindex', '-1');
            });
          } else {
            forEach(headerItems, item => {
              item.removeAttribute('tabindex');
            });
          }
        }
        if (changedProperties.has('isNotChildOfHeader')) {
          forEach(doc.querySelectorAll(this.constructor.selectorButtonToggle), item => {
            item.isNotChildOfHeader = this.isNotChildOfHeader;
          });
        }
      }

      /**
       * Handles `blur` event handler on this element.
       *
       * @param event The event.
       * @param event.relatedTarget The event relatedTarget.
       */
    }, {
      kind: "method",
      decorators: [HostListener('focusout')],
      key: "_handleFocusOut",
      value: function _handleFocusOut({
        relatedTarget
      }) {
        const {
          collapseMode
        } = this;
        if (collapseMode !== SIDE_NAV_COLLAPSE_MODE.FIXED) {
          if (!this.contains(relatedTarget)) {
            this.expanded = false;
          }
        }
      }

      /**
       * Handles `focus` event handler on this element.
       *
       */
    }, {
      kind: "method",
      decorators: [HostListener('focusin')],
      key: "_handleFocusIn",
      value: function _handleFocusIn() {
        const {
          collapseMode
        } = this;
        if (collapseMode !== SIDE_NAV_COLLAPSE_MODE.FIXED) {
          this.expanded = true;
        }
      }

      /**
       * Handles the `mouseover` event for the side nav in rail mode.
       *
       */
    }, {
      kind: "method",
      key: "_handleNavMouseOver",
      value: function _handleNavMouseOver() {
        const {
          collapseMode
        } = this;
        if (collapseMode === SIDE_NAV_COLLAPSE_MODE.RAIL) {
          this.expanded = true;
          this._hovered = true;
          this._updatedSideNavMenuForceCollapsedState();
        }
      }

      /**
       * Handles the `mouseout` event for the side nav in rail mode.
       *
       */
    }, {
      kind: "method",
      key: "_handleNavMouseOut",
      value: function _handleNavMouseOut() {
        const {
          collapseMode
        } = this;
        if (collapseMode === SIDE_NAV_COLLAPSE_MODE.RAIL) {
          this.expanded = false;
          this._hovered = false;
          this._updatedSideNavMenuForceCollapsedState();
        }
      }

      /**
       * Handles the `click` event for the side nav overlay.
       *
       */
    }, {
      kind: "method",
      key: "_onOverlayClick",
      value: function _onOverlayClick() {
        this.expanded = false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          collapseMode,
          expanded,
          isNotChildOfHeader,
          isNotPersistent
        } = this;
        const classes = classMap({
          [`${prefix}--side-nav__navigation`]: true,
          [`${prefix}--side-nav`]: true,
          [`${prefix}--side-nav--expanded`]: expanded,
          [`${prefix}--side-nav--collapsed`]: !expanded && collapseMode === SIDE_NAV_COLLAPSE_MODE.FIXED,
          [`${prefix}--side-nav--rail`]: collapseMode === SIDE_NAV_COLLAPSE_MODE.RAIL,
          [`${prefix}--side-nav--ux`]: !isNotChildOfHeader,
          [`${prefix}--side-nav--hidden`]: isNotPersistent
        });
        const overlayClasses = classMap({
          [`${prefix}--side-nav__overlay`]: true,
          [`${prefix}--side-nav__overlay-active`]: expanded
        });
        return html(_t || (_t = _`${0}
      <div
        class="${0}"
        @mouseover="${0}"
        @mouseout="${0}">
        <slot></slot>
      </div>`), this.collapseMode === SIDE_NAV_COLLAPSE_MODE.FIXED ? null : html(_t2 || (_t2 = _`<div
            class="${0}"
            @click=${0}></div>`), overlayClasses, this._onOverlayClick), classes, this._handleNavMouseOver, this._handleNavMouseOut);
      }

      /**
       * A selector that will return the toggle buttons.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorButtonToggle",
      value: function selectorButtonToggle() {
        return `${prefix}-header-menu-button`;
      }

      /**
       * A selector that will return the header name + global action elements.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorHeaderItems",
      value: function selectorHeaderItems() {
        return `${prefix}-header-name, ${prefix}-header-global-action`;
      }

      /**
       * A selector that will return side nav focusable items.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorNavItems",
      value: function selectorNavItems() {
        return `${prefix}-side-nav-menu, ${prefix}-side-nav-menu-item, ${prefix}-side-nav-link`;
      }

      /**
       * A selector that will return side nav menus.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorMenu",
      value: function selectorMenu() {
        return `${prefix}-side-nav-menu`;
      }

      /**
       * The name of the custom event fired after the header menu button in the document is toggled upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventButtonToggle",
      value: function eventButtonToggle() {
        return `${prefix}-header-menu-button-toggled`;
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
}, HostListenerMixin(LitElement));
export default CDSSideNav;
//# sourceMappingURL=side-nav.js.map
