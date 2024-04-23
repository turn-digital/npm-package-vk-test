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
import { ACCORDION_SIZE, ACCORDION_ALIGNMENT } from './defs';
import styles from "././accordion.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { ACCORDION_SIZE, ACCORDION_ALIGNMENT };

/**
 * Accordion container.
 *
 * @element cds-accordion
 */
let CDSAccordion = _decorate([customElement(`${prefix}-accordion`)], function (_initialize, _LitElement) {
  class CDSAccordion extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSAccordion,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return ACCORDION_SIZE.MEDIUM;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "alignment",
      value() {
        return ACCORDION_ALIGNMENT.END;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "isFlush",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Accordion size should be sm, md, lg.
       */

      /**
       * Specify the alignment of the accordion heading title and chevron
       */

      /**
       * Specify whether Accordion text should be flush, default is false, does not work with align="start"
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'list');
        }
        _get(_getPrototypeOf(CDSAccordion.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('size')) {
          // Propagate `size` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorAccordionItems), elem => {
            elem.setAttribute('size', this.size);
          });
        }
        if (changedProperties.has('alignment')) {
          // Propagate `alignment` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorAccordionItems), elem => {
            elem.setAttribute('alignment', this.alignment);
          });
        }
        if (changedProperties.has('isFlush') || changedProperties.has('alignment')) {
          // Propagate `isFlush` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorAccordionItems), elem => {
            this.isFlush && this.alignment !== 'start' ? elem.setAttribute('isFlush', '') : elem.removeAttribute('isFlush');
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <slot></slot> `));
      }
    }, {
      kind: "get",
      static: true,
      key: "selectorAccordionItems",
      value: function selectorAccordionItems() {
        return `${prefix}-accordion-item`;
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
export default CDSAccordion;
//# sourceMappingURL=accordion.js.map
