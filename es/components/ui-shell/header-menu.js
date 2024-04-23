import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import { ifDefined } from 'lit/directives/if-defined.js';
import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import ChevronDownGlyph from "../../icons/chevron--down/16";
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { forEach } from '../../globals/internal/collection-helpers';
import styles from "././header.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Header menu.
 *
 * @element cds-header-menu
 * @csspart trigger The trigger button.
 * @csspart trigger-icon The trigger button icon.
 * @csspart menu-body The menu body.
 */
let CDSHeaderMenu = _decorate([customElement(`${prefix}-header-menu`)], function (_initialize, _HostListenerMixin) {
  class CDSHeaderMenu extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSHeaderMenu,
    d: [{
      kind: "field",
      decorators: [query('[part="trigger"]')],
      key: "_topMenuItem",
      value: void 0
    }, {
      kind: "field",
      key: "_hasActiveChildren",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleClick",
      value:
      /**
       * The trigger button.
       */

      /**
       * keeps track if header menu has any active submenus
       */

      /**
       * Handles `click` event handler on this element.
       */
      function _handleClick() {
        this._handleUserInitiatedToggle();
      }

      /**
       * Handler for the `keydown` event on the trigger button.
       */
    }, {
      kind: "method",
      decorators: [HostListener('keydown')],
      key: "_handleKeydownTrigger",
      value: function _handleKeydownTrigger({
        key
      }) {
        if (key === 'Esc' || key === 'Escape') {
          this._handleUserInitiatedToggle(false);
        }
      }

      /**
       * Handles user-initiated toggling the open state.
       *
       * @param [force] If specified, forces the open state to the given one.
       */
    }, {
      kind: "method",
      key: "_handleUserInitiatedToggle",
      value: function _handleUserInitiatedToggle(force = !this.expanded) {
        this.expanded = force;
        if (!force) {
          this._topMenuItem.focus();
        }
      }

      /**
       * Handles `blur` event handler on this element.
       */
    }, {
      kind: "method",
      decorators: [HostListener('focusout')],
      key: "_handleBlur",
      value: function _handleBlur({
        relatedTarget
      }) {
        if (!this.contains(relatedTarget)) {
          this.expanded = false;
        }
      }

      /**
       * `true` if the menu should be expanded.
       */
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
        attribute: 'is-active',
        reflect: true
      })],
      key: "isActive",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'trigger-content'
      })],
      key: "triggerContent",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'menu-label'
      })],
      key: "menuLabel",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Applies selected styles to the item if a user sets this to true and `aria-current !== 'page'`.
       */
      /**
       * The content of the trigger button.
       */
      /**
       * The `aria-label` attribute for the menu UI.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'listitem');
        }
        const {
          selectorItem
        } = this.constructor;
        forEach(this.querySelectorAll(selectorItem), elem => {
          if (elem.isActive === true) {
            this._hasActiveChildren = true;
          }
        });
        _get(_getPrototypeOf(CDSHeaderMenu.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('expanded')) {
          const {
            selectorItem
          } = this.constructor;
          const {
            expanded
          } = this;
          forEach(this.querySelectorAll(selectorItem), elem => {
            elem.tabIndex = expanded ? 0 : -1;
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          expanded,
          isActive,
          triggerContent,
          menuLabel,
          _hasActiveChildren,
          _handleClick: handleClick
        } = this;
        const linkClasses = classMap({
          [`${prefix}--header__menu-item`]: true,
          [`${prefix}--header__menu-title`]: true,
          [`${prefix}--header__menu-item--current`]: isActive || _hasActiveChildren && !expanded
        });
        return html(_t || (_t = _`
      <a
        part="trigger"
        role="button"
        tabindex="0"
        class="${0}"
        href="javascript:void 0"
        aria-haspopup="menu"
        aria-expanded="${0}"
        @click=${0}>
        ${0}${0}
      </a>
      <ul
        part="menu-body"
        class="${0}--header__menu"
        aria-label="${0}">
        <slot></slot>
      </ul>
    `), linkClasses, String(Boolean(expanded)), handleClick, triggerContent, ChevronDownGlyph({
          part: 'trigger-icon',
          class: `${prefix}--header__menu-arrow`
        }), prefix, ifDefined(menuLabel));
      }

      /**
       * A selector that will return the menu items.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value: function selectorItem() {
        return `${prefix}-header-menu-item`;
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
export default CDSHeaderMenu;
//# sourceMappingURL=header-menu.js.map
