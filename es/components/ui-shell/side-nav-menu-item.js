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

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././side-nav.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Side nav menu item.
 *
 * @element cds-side-nav-menu-item
 * @csspart link The link.
 * @csspart title The title.
 */
let CDSSideNavMenuItem = _decorate([customElement(`${prefix}-side-nav-menu-item`)], function (_initialize, _FocusMixin) {
  class CDSSideNavMenuItem extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSideNavMenuItem,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "active",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "href",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "title",
      value: void 0
    }, {
      kind: "method",
      key: "shouldUpdate",
      value:
      /**
       * `true` if the menu item should be active.
       */

      /**
       * Link `href`.
       */

      /**
       * The title.
       */

      function shouldUpdate(changedProperties) {
        if (changedProperties.has('active') && this.active) {
          const {
            selectorMenu
          } = this.constructor;
          const parent = this.closest(selectorMenu);
          if (parent) {
            parent.active = true;
          }
        }
        return true;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'button');
        }
        _get(_getPrototypeOf(CDSSideNavMenuItem.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          active,
          href,
          title
        } = this;
        const classes = classMap({
          [`${prefix}--side-nav__link`]: true,
          [`${prefix}--side-nav__link--current`]: active
        });
        return html(_t || (_t = _`
      <a part="link" class="${0}" href="${0}">
        <span part="title" class="${0}--side-nav__link-text">
          <slot>${0}</slot>
        </span>
      </a>
    `), classes, href, prefix, title);
      }

      /**
       * A selector that will return the parent menu.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorMenu",
      value: function selectorMenu() {
        return `${prefix}-side-nav-menu`;
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
}, FocusMixin(LitElement));
export default CDSSideNavMenuItem;
//# sourceMappingURL=side-nav-menu-item.js.map
