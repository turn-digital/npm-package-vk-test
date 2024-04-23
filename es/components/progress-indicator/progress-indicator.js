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

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { forEach } from '../../globals/internal/collection-helpers';
import styles from "././progress-indicator.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Progress indicator.
 *
 * @element cds-progress-indicator
 */
let CDSProgressIndicator = _decorate([customElement(`${prefix}-progress-indicator`)], function (_initialize, _LitElement) {
  class CDSProgressIndicator extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSProgressIndicator,
    d: [{
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
        reflect: true,
        attribute: 'space-equally'
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
       * Determines whether or not the progress indicator should be rendered
       * vertically.
       */

      /**
       * Specify whether the progress steps should be split equally in size in the
       * div
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'list');
        }
        _get(_getPrototypeOf(CDSProgressIndicator.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        const spacingValue = this.vertical ? false : this.spaceEqually;
        if (changedProperties.has('vertical')) {
          // Propagate `vertical` attribute to descendants until
          // `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorStep), item => {
            item.vertical = this.vertical;
            item.spaceEqually = spacingValue;
          });
        }
        if (changedProperties.has('spaceEqually')) {
          // Propagate `spaceEqually` attribute to descendants until
          // `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorStep), item => {
            item.spaceEqually = spacingValue;
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`<slot></slot>`));
      }

      /**
       * A selector that will return progress steps.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorStep",
      value: function selectorStep() {
        return `${prefix}-progress-step`;
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
export { CDSProgressIndicator as default };
//# sourceMappingURL=progress-indicator.js.map
