import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import CDSButton from '../button/button';
import styles from "././actionable-notification.css.js";

/**
 * Actionable notification action button.
 *
 * @element cds-actionable-notification-button
 */ /**
     * Actionable notification action button.
     *
     * @element cds-actionable-notification-button
     */
let CDSActionableNotificationButton = _decorate([customElement(`${prefix}-actionable-notification-button`)], function (_initialize, _CDSButton) {
  class CDSActionableNotificationButton extends _CDSButton {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSActionableNotificationButton,
    d: [{
      kind: "method",
      key: "update",
      value: function update(changedProperties) {
        var _getElementById;
        _get(_getPrototypeOf(CDSActionableNotificationButton.prototype), "update", this).call(this, changedProperties);
        (_getElementById = this.shadowRoot.getElementById('button')) === null || _getElementById === void 0 || _getElementById.classList.add(`${prefix}--actionable-notification__action-button`);
        this.setAttribute('size', 'sm');
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
export default CDSActionableNotificationButton;
//# sourceMappingURL=actionable-notification-button.js.map
