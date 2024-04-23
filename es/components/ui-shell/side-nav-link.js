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
import { ifDefined } from 'lit/directives/if-defined.js';
import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././side-nav.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Side nav menu item.
 *
 * @element cds-side-nav-link
 * @slot link - The link.
 * @slot title - The title.
 * @slot title-icon-container - The title icon container.
 */
let CDSSideNavLink = _decorate([customElement(`${prefix}-side-nav-link`)], function (_initialize, _FocusMixin) {
  class CDSSideNavLink extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSideNavLink,
    d: [{
      kind: "field",
      decorators: [query('#title-icon-container')],
      key: "_titleIconContainerNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleSlotChangeTitleIcon",
      value:
      /**
       * The container for the title icon.
       */

      /**
       * Handles `slotchange` event on the `<slot>` for the title icon.
       */
      function _handleSlotChangeTitleIcon({
        target
      }) {
        var _this$_titleIconConta;
        (_this$_titleIconConta = this._titleIconContainerNode) === null || _this$_titleIconConta === void 0 || _this$_titleIconConta.toggleAttribute('hidden', target.assignedNodes().length === 0);
      }

      /**
       * `true` if the menu item should be active.
       */
    }, {
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
      decorators: [property({
        reflect: true
      })],
      key: "rel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "target",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "large",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "title",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Link `href`.
       */
      /**
       * The link type.
       */
      /**
       * The link target.
       */
      /**
       * Specify if this is a large variation of the side nav link
       */
      /**
       * The title.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'listitem');
        }
        _get(_getPrototypeOf(CDSSideNavLink.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          active,
          href,
          rel,
          target,
          title,
          _handleSlotChangeTitleIcon: handleSlotChangeTitleIcon
        } = this;
        const classes = classMap({
          [`${prefix}--side-nav__link`]: true,
          [`${prefix}--side-nav__link--current`]: active
        });
        return html(_t || (_t = _`
      <a
        part="link"
        class="${0}"
        href="${0}"
        rel="${0}"
        target="${0}">
        <div
          id="title-icon-container"
          part="title-icon-container"
          hidden
          class="${0}--side-nav__icon">
          <slot
            name="title-icon"
            @slotchange=${0}></slot>
        </div>
        <span part="title" class="${0}--side-nav__link-text">
          <slot>${0}</slot>
        </span>
      </a>
    `), classes, href, ifDefined(rel), ifDefined(target), prefix, handleSlotChangeTitleIcon, prefix, title);
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
export default CDSSideNavLink;
//# sourceMappingURL=side-nav-link.js.map
