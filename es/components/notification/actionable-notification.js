import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2,
  _t3;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
     * @license
     *
     * Copyright IBM Corp. 2019, 2023
     *
     * This source code is licensed under the Apache-2.0 license found in the
     * LICENSE file in the root directory of this source tree.
     */
import CheckmarkFilled20 from "../../icons/checkmark--filled/20";
import ErrorFilled20 from "../../icons/error--filled/20";
import InformationFilled20 from "../../icons/information--filled/20";
import InformationSquareFilled20 from "../../icons/information--square--filled/20";
import WarningFilled20 from "../../icons/warning--filled/20";
import WarningAltFilled20 from "../../icons/warning--alt--filled/20";
import { html, svg } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { NOTIFICATION_TYPE, NOTIFICATION_KIND } from './defs';
import CDSInlineNotification from './inline-notification';
import styles from "././actionable-notification.css.js";
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';

/**
 * The default icons, keyed by notification kind.
 */
const iconsForKinds = {
  [NOTIFICATION_KIND.SUCCESS]: CheckmarkFilled20,
  [NOTIFICATION_KIND.INFO]: InformationFilled20,
  [NOTIFICATION_KIND.INFO_SQUARE]: InformationSquareFilled20,
  [NOTIFICATION_KIND.WARNING]: WarningFilled20,
  [NOTIFICATION_KIND.WARNING_ALT]: WarningAltFilled20,
  [NOTIFICATION_KIND.ERROR]: ErrorFilled20
};

/**
 * Actionable notification.
 *
 * @element cds-actionable-notification
 * @slot subtitle - The subtitle.
 * @slot title - The title.
 * @fires cds-notification-beingclosed
 *   The custom event fired before this notification is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification.
 * @fires cds-notification-closed - The custom event fired after this notification is closed upon a user gesture.
 */
let CDSActionableNotification = _decorate([customElement(`${prefix}-actionable-notification`)], function (_initialize, _HostListenerMixin) {
  class CDSActionableNotification extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSActionableNotification,
    d: [{
      kind: "field",
      key: "_type",
      value() {
        return NOTIFICATION_TYPE.ACTIONABLE;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "inline",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true,
        attribute: 'action-button-label'
      })],
      key: "actionButtonLabel",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'close-on-escape'
      })],
      key: "closeOnEscape",
      value() {
        return true;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'has-focus'
      })],
      key: "hasFocus",
      value() {
        return true;
      }
    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeyDown",
      value() {
        return async event => {
          const {
            key
          } = event;
          if (this.closeOnEscape && key === 'Escape') {
            this.open = false;
          }
        };
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Inline notification type.
       */

      /**
       * Pass in the action button label that will be rendered within the ActionableNotification.
       */

      /**
       * Specify if pressing the escape key should close notifications
       */

      /**
       * Specify if focus should be moved to the component when the notification contains actions
       */

      /**
       * Handles `keydown` event on this event.
       * Escape will close the notification if `closeOnEscape` is true
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'alertdialog');
        }
        _get(_getPrototypeOf(CDSActionableNotification.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "_renderIcon",
      value: function _renderIcon() {
        const {
          statusIconDescription,
          kind,
          inline
        } = this;
        const {
          [kind]: icon
        } = iconsForKinds;
        return !icon ? undefined : icon({
          class: `${prefix}--${inline ? 'inline' : 'toast'}-notification__icon`,
          children: !statusIconDescription ? undefined : svg(_t || (_t = _`<title>${0}</title>`), statusIconDescription)
        });
      }
    }, {
      kind: "method",
      key: "_renderText",
      value: function _renderText() {
        const {
          subtitle,
          title,
          _type: type
        } = this;
        return html(_t2 || (_t2 = _`
      <div class="${0}--${0}-notification__text-wrapper">
        <div class="${0}--${0}-notification__content">
          <div class="${0}--${0}-notification__title">
            ${0}<slot name="title"></slot>
          </div>
          <div class="${0}--${0}-notification__subtitle">
            ${0}<slot name="subtitle"></slot>
          </div>
          <slot></slot>
        </div>
      </div>
    `), prefix, type, prefix, type, prefix, type, title, prefix, type, subtitle);
      }

      /**
       * The caption.
       */
    }, {
      kind: "field",
      decorators: [property()],
      key: "caption",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(CDSActionableNotification.prototype), "updated", this).call(this, changedProperties);
        const button = this.querySelector(this.constructor.selectorActionButton);
        if (changedProperties.has('inline')) {
          button === null || button === void 0 || button.setAttribute('kind', this.inline ? 'ghost' : 'tertiary');
        }
        if (changedProperties.has('lowContrast')) {
          if (this.lowContrast) {
            button === null || button === void 0 || button.setAttribute('low-contrast', 'true');
          } else {
            button === null || button === void 0 || button.removeAttribute('low-contrast');
          }
        }
        if (changedProperties.has('hideCloseButton')) {
          if (this.hideCloseButton) {
            button === null || button === void 0 || button.setAttribute('hide-close-button', 'true');
          } else {
            button === null || button === void 0 || button.removeAttribute('hide-close-button');
          }
        }
        if (changedProperties.has('hasFocus')) {
          if (this.hasFocus) {
            this.focus();
          }
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _type: type
        } = this;
        return html(_t3 || (_t3 = _`
      <div class="${0}--${0}-notification__details">
        ${0} ${0}
      </div>
      <slot name="action"></slot>
      ${0}
    `), prefix, type, this._renderIcon(), this._renderText(), this._renderButton());
      }

      /**
       * A selector that will return the action button element
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorActionButton",
      value: function selectorActionButton() {
        return `${prefix}-actionable-notification-button`;
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
}, HostListenerMixin(CDSInlineNotification));
export default CDSActionableNotification;
//# sourceMappingURL=actionable-notification.js.map
