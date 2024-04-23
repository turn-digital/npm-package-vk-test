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

import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import Copy16 from "../../icons/copy/16";
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././copy-button.css.js";
import '../copy/copy';

/**
 * Copy button.
 *
 * @element cds-copy-button
 */
let CDSCopyButton = _decorate([customElement(`${prefix}-copy-button`)], function (_initialize, _FocusMixin) {
  class CDSCopyButton extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSCopyButton,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'button-class-name'
      })],
      key: "buttonClassName",
      value: void 0
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
      decorators: [property()],
      key: "feedback",
      value() {
        return 'Copied!';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        attribute: 'feedback-timeout'
      })],
      key: "feedbackTimeout",
      value() {
        return 2000;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Specify an optional className to be added to your Button
       */

      /**
       * `true` if the button should be disabled.
       */

      /**
       * Specify the string that is displayed when the button is clicked and the content is copi
       */

      /**
       * The number in milliseconds to determine how long the tooltip should remain.
       */

      function render() {
        const {
          buttonClassName,
          disabled,
          feedback,
          feedbackTimeout
        } = this;
        let classes = `${prefix}--copy-btn`;
        if (buttonClassName) {
          classes += ` ${buttonClassName}`;
        }
        return html(_t || (_t = _`
      <cds-copy
        ?disabled=${0}
        feedback=${0}
        feedback-timeout=${0}
        button-class-name=${0}>
        ${0}
        <slot slot="tooltip-content"></slot>
      </cds-copy>
    `), disabled, feedback, feedbackTimeout, classes, Copy16({
          slot: 'icon',
          class: `${prefix}--snippet__icon`
        }));
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
export default CDSCopyButton;
//# sourceMappingURL=copy-button.js.map
