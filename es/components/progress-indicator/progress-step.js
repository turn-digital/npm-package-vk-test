import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, svg } from 'lit';
import { property } from 'lit/decorators.js';
import CheckmarkOutline16 from "../../icons/checkmark--outline/16";
import CircleDash16 from "../../icons/circle-dash/16";
import Incomplete16 from "../../icons/incomplete/16";
import Warning16 from "../../icons/warning/16";
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import { PROGRESS_STEP_STAT } from './defs';
import styles from "././progress-indicator.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { PROGRESS_STEP_STAT };

/**
 * Icons, keyed by state.
 */
const icons = {
  [PROGRESS_STEP_STAT.COMPLETE]: CheckmarkOutline16,
  [PROGRESS_STEP_STAT.INCOMPLETE]: CircleDash16,
  [PROGRESS_STEP_STAT.INVALID]: Warning16,
  [PROGRESS_STEP_STAT.CURRENT]: Incomplete16
};

/**
 * Progress step.
 *
 * @element cds-progress-step
 * @slot secondary-label-text - The secondary progress label.
 */
let CDSProgressStep = _decorate([customElement(`${prefix}-progress-step`)], function (_initialize, _FocusMixin) {
  class CDSProgressStep extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSProgressStep,
    d: [{
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
        attribute: 'icon-label'
      })],
      key: "iconLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "description",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-text'
      })],
      key: "labelText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "label",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'secondary-label-text'
      })],
      key: "secondaryLabelText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'secondary-label'
      })],
      key: "secondaryLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "state",
      value() {
        return PROGRESS_STEP_STAT.INCOMPLETE;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "vertical",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "spaceEqually",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` if the progress step should be disabled.
       */

      /**
       * The a11y text for the icon.
       */

      /**
       * The primary progress label.
       */

      /**
       * The secondary progress label.
       */

      /**
       * The progress state.
       */

      /**
       * `true` if the progress step should be vertical.
       *
       * @private
       */

      /**
       * `true` if the progress step should be spaced equally.
       *
       * @private
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'listitem');
        }
        _get(_getPrototypeOf(CDSProgressStep.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('disabled')) {
          this.setAttribute('aria-disabled', String(Boolean(this.disabled)));
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          description,
          iconLabel,
          label,
          secondaryLabelText,
          secondaryLabel,
          state
        } = this;
        const svgLabel = iconLabel || description;
        const optionalLabel = secondaryLabelText || secondaryLabel;
        return html(_t || (_t = _`
      <div class="${0}--progress-step-button" tabindex="0">
        ${0}
        <slot name="label-text">
          <p
            role="button"
            class="${0}--progress-label"
            aria-describedby="label-tooltip"
            title="${0}">
            ${0}
          </p>
        </slot>
        <slot name="secondary-label-text">
          ${0}
        </slot>
        <span class="${0}--progress-line"></span>
      </div>
    `), prefix, icons[state]({
          class: {
            [PROGRESS_STEP_STAT.INVALID]: `${prefix}--progress__warning`
          }[state],
          children: svgLabel ? svg(_t2 || (_t2 = _`<title>${0}</title>`), svgLabel) : undefined
        }), prefix, label, label, !optionalLabel ? undefined : html(_t3 || (_t3 = _`<p class="${0}--progress-optional">
                ${0}
              </p>`), prefix, optionalLabel), prefix);
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
export { CDSProgressStep as default };
//# sourceMappingURL=progress-step.js.map
