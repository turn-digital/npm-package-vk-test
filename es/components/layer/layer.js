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
import { prefix } from '../../globals/settings';
import styles from "././layer.css.js";

/**
 * Basic layer
 *
 * @element cds-layer
 * @fires cds-use-layer
 *   The name of the custom event fired when the "use layer" action occurs.
 * @slot children - The elements contained within the component.
 */ /**
     * Basic layer
     *
     * @element cds-layer
     * @fires cds-use-layer
     *   The name of the custom event fired when the "use layer" action occurs.
     * @slot children - The elements contained within the component.
     */
let CDSLayer = _decorate([customElement(`${prefix}-layer`)], function (_initialize, _LitElement) {
  class CDSLayer extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSLayer,
    d: [{
      kind: "field",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "level",
      value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "layers",
      value: void 0
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * Specify the layer level and override any existing levels based on hierarchy
       */

      function updated() {
        if (!this.layers) {
          this.layers = this.querySelectorAll(this.constructor.selectorLayer);
        }
        this.layers.forEach(item => {
          item.setAttribute('level', ((this.level + 1) % 3).toString());
        });
        this.dispatchEvent(new CustomEvent(this.constructor.eventUseLayer, {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            layer: this,
            level: this.level
          }
        }));
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <slot></slot> `));
      }

      /**
       * A selector that selects a layer component.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorLayer",
      value: function selectorLayer() {
        return `${prefix}-layer`;
      }

      /**
       * A selector that selects a layer component.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventUseLayer",
      value: function eventUseLayer() {
        return `${prefix}-use-layer`;
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
export default CDSLayer;
//# sourceMappingURL=layer.js.map
