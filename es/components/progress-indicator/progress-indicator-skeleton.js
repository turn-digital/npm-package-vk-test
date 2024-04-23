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
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { forEach } from '../../globals/internal/collection-helpers';
import styles from "././progress-indicator.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton of progress indicator.
 */
let CDSProgressIndicatorSkeleton = _decorate([customElement(`${prefix}-progress-indicator-skeleton`)], function (_initialize, _LitElement) {
  class CDSProgressIndicatorSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSProgressIndicatorSkeleton,
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
      kind: "method",
      key: "updated",
      value:
      /**
       * `true` if the progress indicator should be vertical. Corresponds to the attribute with the same name.
       */

      function updated(changedProperties) {
        if (changedProperties.has('vertical')) {
          // Propagate `vertical` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorStep), item => {
            item.vertical = this.vertical;
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
        return `${prefix}-progress-step-skeleton`;
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
export { CDSProgressIndicatorSkeleton as default };
//# sourceMappingURL=progress-indicator-skeleton.js.map
