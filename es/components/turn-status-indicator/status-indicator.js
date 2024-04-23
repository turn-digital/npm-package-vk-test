import _decorate from "@babel/runtime/helpers/esm/decorate";
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
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././status-indicator.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import { green, gray, red, yellow, blue, purple } from '@carbon/colors';

//icons import
//icons import
import CheckmarkFilled16 from "../../icons/checkmark--filled/16";
import CloseFilled16 from "../../icons/close--filled/16";
import WarningAltFilled16 from "../../icons/warning--alt--filled/16";
import InProgress16 from "../../icons/in-progress/16";
import WarningFilled16 from "../../icons/warning--filled/16";
import PendingFilled16 from "../../icons/pending--filled/16";
import CircleDash16 from "../../icons/circle-dash/16";
import ConditionWaitPoint16 from "../../icons/condition--wait-point/16";

/**
 * Status indicator.
 *
 * @element cds-status-indicator
 */ /**
     * Status indicator.
     *
     * @element cds-status-indicator
     */
let CDSTurnStatusIndicator = _decorate([customElement(`${prefix}-status-indicator`)], function (_initialize, _FocusMixin) {
  class CDSTurnStatusIndicator extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTurnStatusIndicator,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "statusIcon",
      value() {
        return "checkmark--filled-green";
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "statusText",
      value() {
        return "Ir aktīvs";
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "date",
      value() {
        return "";
      }
    }, {
      kind: "method",
      key: "renderStatusIcon",
      value:
      /**
       * Can be one of: checkmark--filled-green, checkmark--filled-blue, close--filled, warning--alt--filled, in-progress, warning--filled, pending--filled, circle-dash, condition--wait-point, 
       */

      function renderStatusIcon(statusIcon) {
        switch (statusIcon) {
          case "checkmark--filled-green":
            return CheckmarkFilled16({
              fill: green[50]
            });
          case "checkmark--filled-blue":
            return CheckmarkFilled16({
              fill: blue[70]
            });
          case "close--filled":
            return CloseFilled16({
              fill: red[60]
            });
          case "warning--alt--filled":
            return WarningAltFilled16({
              fill: yellow[30]
            });
          case "in-progress":
            return InProgress16({
              fill: blue[70]
            });
          case "warning--filled":
            return WarningFilled16({
              fill: red[60]
            });
          case "pending--filled":
            return PendingFilled16({
              fill: gray[60]
            });
          case "circle-dash":
            return CircleDash16({
              fill: blue[70]
            });
          case "condition--wait-point":
            return ConditionWaitPoint16({
              fill: purple[60]
            });
          default:
            return CheckmarkFilled16({
              fill: green[50]
            });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          statusIcon,
          statusText,
          date,
          renderStatusIcon
        } = this;
        //set const hideDate true if date is empty
        const hideDate = date === '';
        return html(_t || (_t = _`
      <div class="status-indicator">
        <div class="status-indicator__icon">${0}</div>
        <div class=status-indicator__content>
          <div class="status-indicator__status">${0}</div>
          ${0}
        </div>
      </div>
    `), renderStatusIcon(statusIcon), statusText, !hideDate ? html(_t2 || (_t2 = _`<div class="status-indicator__date">(${0})</div>`), date) : '');
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
export default CDSTurnStatusIndicator;
//# sourceMappingURL=status-indicator.js.map
