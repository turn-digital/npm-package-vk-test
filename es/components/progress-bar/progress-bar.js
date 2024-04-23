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
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import ErrorFilled16 from "../../icons/error--filled/16";
import CheckmarkFilled16 from "../../icons/checkmark--filled/16";
import { PROGRESS_BAR_SIZE, PROGRESS_BAR_STATUS, PROGRESS_BAR_TYPE } from './defs';
import { prefix } from '../../globals/settings';
import styles from "././progress-bar.css.js";
export { PROGRESS_BAR_SIZE, PROGRESS_BAR_STATUS, PROGRESS_BAR_TYPE };

/**
 * Progress bar.
 *
 * @element cds-progress-bar
 */
let CDSProgressBar = _decorate([customElement(`${prefix}-progress-bar`)], function (_initialize, _LitElement) {
  class CDSProgressBar extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSProgressBar,
    d: [{
      kind: "field",
      decorators: [property({
        type: String,
        attribute: 'helper-text',
        reflect: true
      })],
      key: "helperText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'hide-label',
        reflect: true
      })],
      key: "hideLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "max",
      value() {
        return 100;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true
      })],
      key: "size",
      value() {
        return PROGRESS_BAR_SIZE.BIG;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true
      })],
      key: "status",
      value() {
        return PROGRESS_BAR_STATUS.ACTIVE;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true
      })],
      key: "type",
      value() {
        return PROGRESS_BAR_TYPE.DEFAULT;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "value",
      value: void 0
    }, {
      kind: "get",
      key: "_cappedValue",
      value:
      /**
       * The current progress as a textual representation.
       */

      /**
       * Whether the label should be visually hidden.
       */

      /**
       * A label describing the progress bar.
       */

      /**
       * The maximum value.
       */

      /**
       * Specify the size of the ProgressBar.
       */

      /**
       * Specify the status.
       */

      /**
       * Defines the alignment variant of the progress bar.
       */

      /**
       * The current value.
       */

      function _cappedValue() {
        const {
          value,
          max,
          status
        } = this;
        let cappedValue = value;
        if (cappedValue > max) {
          cappedValue = max;
        }
        if (cappedValue < 0) {
          cappedValue = 0;
        }
        if (status === PROGRESS_BAR_STATUS.ERROR) {
          cappedValue = 0;
        } else if (status === PROGRESS_BAR_STATUS.FINISHED) {
          cappedValue = max;
        }
        return cappedValue;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('value') || changedProperties.has('max') || changedProperties.has('status')) {
          const {
            _cappedValue: cappedValue,
            max,
            status
          } = this;
          const percentage = cappedValue / max;
          const bar = this.shadowRoot.querySelector(`.${prefix}--progress-bar__bar`);
          if (status != PROGRESS_BAR_STATUS.ERROR && status != PROGRESS_BAR_STATUS.FINISHED) {
            bar.style.transform = `scaleX(${percentage})`;
          } else {
            bar.style.transform = 'none';
          }
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _cappedValue: cappedValue,
          helperText,
          hideLabel,
          label,
          max,
          size,
          status,
          type,
          value
        } = this;
        const isFinished = status === PROGRESS_BAR_STATUS.FINISHED;
        const isError = status === PROGRESS_BAR_STATUS.ERROR;
        const indeterminate = !isFinished && !isError && (value === null || value === undefined);
        let statusIcon = null;
        if (isError) {
          statusIcon = ErrorFilled16({
            class: `${prefix}--progress-bar__status-icon`
          });
        } else if (isFinished) {
          statusIcon = CheckmarkFilled16({
            class: `${prefix}--progress-bar__status-icon`
          });
        }
        const wrapperClasses = classMap({
          [`${prefix}--progress-bar`]: true,
          [`${prefix}--progress-bar--${size}`]: true,
          [`${prefix}--progress-bar--${type}`]: true,
          [`${prefix}--progress-bar--indeterminate`]: indeterminate,
          [`${prefix}--progress-bar--finished`]: isFinished,
          [`${prefix}--progress-bar--error`]: isError
        });
        const labelClasses = classMap({
          [`${prefix}--progress-bar__label`]: true,
          [`${prefix}--visually-hidden`]: hideLabel
        });
        return html(_t || (_t = _` <div class="${0}">
      <div class="${0}">
        <span class="${0}--progress-bar__label-text">${0}</span>
        ${0}
      </div>
      <div
        class="${0}--progress-bar__track"
        role="progressbar"
        aria-busy="${0}"
        aria-invalid="${0}"
        aria-valuemin="${0}"
        aria-valuemax="${0}"
        aria-valuenow="${0}">
        <div class="${0}--progress-bar__bar"></div>
      </div>
      ${0}
    </div>`), wrapperClasses, labelClasses, prefix, label, statusIcon, prefix, !isFinished, isError, !indeterminate ? 0 : null, !indeterminate ? max : null, !indeterminate ? cappedValue : null, prefix, helperText ? html(_t2 || (_t2 = _`<div class="${0}--progress-bar__helper-text">
            ${0}
            <div class="${0}--visually-hidden" aria-live="polite">
              ${0}
            </div>
          </div>`), prefix, helperText, prefix, isFinished ? 'Done' : 'Loading') : null);
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
}, LitElement);
export default CDSProgressBar;
//# sourceMappingURL=progress-bar.js.map
