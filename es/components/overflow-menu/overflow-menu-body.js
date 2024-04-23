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
import CDSFloatingMenu, { FLOATING_MENU_DIRECTION } from '../floating-menu/floating-menu';
import { NAVIGATION_DIRECTION, OVERFLOW_MENU_SIZE } from './defs';
import HostListener from '../../globals/decorators/host-listener';
import { indexOf } from '../../globals/internal/collection-helpers';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././overflow-menu.css.js";

/**
 * @param index The index
 * @param length The length of the array.
 * @returns The new index, adjusting overflow/underflow.
 */ /**
     * @param index The index
     * @param length The length of the array.
     * @returns The new index, adjusting overflow/underflow.
     */
const capIndex = (index, length) => {
  if (index < 0) {
    return length - 1;
  }
  if (index >= length) {
    return 0;
  }
  return index;
};

/**
 * Overflow menu body.
 *
 * @element cds-overflow-menu-body
 */
let CDSOverflowMenuBody = _decorate([customElement(`${prefix}-overflow-menu-body`)], function (_initialize, _CDSFloatingMenu) {
  class CDSOverflowMenuBody extends _CDSFloatingMenu {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSOverflowMenuBody,
    d: [{
      kind: "field",
      decorators: [property()],
      key: "direction",
      value() {
        return FLOATING_MENU_DIRECTION.BOTTOM;
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
      key: "selected",
      value() {
        return null;
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
      kind: "method",
      key: "_getNextItem",
      value:
      /**
       * The menu direction.
       */

      /**
       * How the menu is aligned to the trigger button.
       */

      /**
       * `true` if the menu should be open.
       *
       * @private
       */

      /**
       * The overflow menu size.
       */

      /**
       * @param currentItem The currently selected item.
       * @param direction The navigation direction.
       * @returns The item to be selected.
       */
      function _getNextItem(currentItem, direction) {
        const {
          selectorItemEnabled
        } = this.constructor;
        const menuItems = this.querySelectorAll(selectorItemEnabled);
        const currentIndex = indexOf(menuItems, currentItem);
        const nextIndex = capIndex(currentIndex + direction, menuItems.length);
        return nextIndex === currentIndex ? null : menuItems[nextIndex];
      }

      /**
       * Navigates through overflow menu items.
       *
       * @param direction `-1` to navigate backward, `1` to navigate forward.
       */
    }, {
      kind: "method",
      key: "_navigate",
      value: function _navigate(direction) {
        if (this.selected) {
          const nextItem = this._getNextItem(this.selected, direction);
          nextItem === null || nextItem === void 0 || nextItem.focus();
        }
      }

      /**
       * Handles `keydown` event on the menu body.
       */
    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeydown",
      value() {
        return async event => {
          const {
            key
          } = event;
          if (this.open) {
            /**
             * sets this.selected to focused menu item. the menu item is focused
             * automatically due to FocusMixin
             */
            if (this.contains(document.activeElement)) {
              this.selected = document.activeElement;
            }
            if (key in NAVIGATION_DIRECTION) {
              this._navigate(NAVIGATION_DIRECTION[key]);
            }
            if (key === 'Escape') {
              this.open = false;
            }
          }
        };
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'menu');
        }
        if (!this.hasAttribute('tabindex')) {
          // TODO: Should we use a property?
          this.setAttribute('tabindex', '-1');
        }
        _get(_getPrototypeOf(CDSOverflowMenuBody.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('size')) {
          const {
            selectorMenuItem
          } = this.constructor;
          const menuItems = this.querySelectorAll(selectorMenuItem);
          menuItems.forEach(item => {
            item.setAttribute('size', this.size);
          });
        }
        _get(_getPrototypeOf(CDSOverflowMenuBody.prototype), "updated", this).call(this, changedProperties);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <slot></slot> `));
      }

      /**
       * A selector that will return menu items.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorMenuItem",
      value: function selectorMenuItem() {
        return `${prefix}-overflow-menu-item`;
      }

      /**
       * A selector that will return enabled menu items.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItemEnabled",
      value: function selectorItemEnabled() {
        return `${prefix}-overflow-menu-item:not([disabled])`;
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
}, CDSFloatingMenu);
export default CDSOverflowMenuBody;
//# sourceMappingURL=overflow-menu-body.js.map
