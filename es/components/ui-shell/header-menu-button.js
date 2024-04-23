import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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
import { property } from 'lit/decorators.js';
import Close20 from "../../icons/close/20";
import Menu20 from "../../icons/menu/20";
import { ifDefined } from 'lit/directives/if-defined.js';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import { SIDE_NAV_COLLAPSE_MODE } from './side-nav';
import styles from "././header.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * The trigger button for side nav in header nav.
 *
 * @element cds-header-menu-button
 * @csspart button The button.
 * @csspart toggle-icon The toggle icon.
 * @fires cds-header-menu-button-toggled - The custom event fired after this header menu button is toggled upon a user gesture.
 */
let CDSHeaderMenuButton = _decorate([customElement(`${prefix}-header-menu-button`)], function (_initialize, _FocusMixin) {
  class CDSHeaderMenuButton extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSHeaderMenuButton,
    d: [{
      kind: "method",
      key: "_handleClick",
      value: function _handleClick() {
        const active = !this.active;
        this.active = active;
        this.dispatchEvent(new CustomEvent(this.constructor.eventToggle, {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            active
          }
        }));
      }

      /**
       * `true` if the button should represent its active state.
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
      decorators: [property({
        attribute: 'button-label-active'
      })],
      key: "buttonLabelActive",
      value() {
        return 'Close navigation menu';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'button-label-inactive'
      })],
      key: "buttonLabelInactive",
      value() {
        return 'Open navigation menu';
      }
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
      key: "disabled",
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
      kind: "method",
      key: "render",
      value:
      /**
       * The `aria-label` attribute for the button in its active state.
       */
      /**
       * The `aria-label` attribute for the button in its inactive state.
       */
      /**
       * Collapse mode of the side nav.
       */
      /**
       * `true` if the button should be disabled.
       */
      /**
       * If `true` will style the side nav to sit below the header
       */
      function render() {
        const {
          active,
          buttonLabelActive,
          buttonLabelInactive,
          disabled,
          _handleClick: handleClick
        } = this;
        const buttonLabel = active ? buttonLabelActive : buttonLabelInactive;
        const classes = classMap({
          [`${prefix}--header__action`]: true,
          [`${prefix}--header__menu-trigger`]: true,
          [`${prefix}--header__menu-toggle`]: true,
          [`${prefix}--header__action--active`]: active
        });
        return html(_t || (_t = _`
      <button
        part="button"
        class="${0}"
        ?disabled=${0}
        aria-label="${0}"
        @click=${0}>
        ${0}
      </button>
    `), classes, disabled, ifDefined(buttonLabel), handleClick, (active ? Close20 : Menu20)({
          slot: 'toggle-icon'
        }));
      }

      /**
       * The name of the custom event fired after this header menu button is toggled upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-header-menu-button-toggled`;
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
export default CDSHeaderMenuButton;
//# sourceMappingURL=header-menu-button.js.map
