import _decorate from "@babel/runtime/helpers/esm/decorate";
let _2 = t => t,
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
 */

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { ACCORDION_ALIGNMENT } from './accordion';
import { forEach } from '../../globals/internal/collection-helpers';
import ChevronRight16 from "../../icons/chevron--right/16";
import './accordion-item-skeleton';
import '../skeleton-text/index';
import styles from "././accordion.css.js";

/**
 * Skeleton of code snippet.
 */ /**
     * Skeleton of code snippet.
     */
let CDSAccordionSkeleton = _decorate([customElement(`${prefix}-accordion-skeleton`)], function (_initialize, _LitElement) {
  class CDSAccordionSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSAccordionSkeleton,
    d: [{
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
        type: Number,
        attribute: 'count'
      })],
      key: "count",
      value() {
        return 4;
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
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "open",
      value() {
        return true;
      }
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * Specify the alignment of the accordion heading title and chevron
       */

      /**
       * Set number of items to render
       */

      /**
       * Specify whether Accordion text should be flush, default is false, does not work with align="start"
       */

      /**
       * `true` if the first accordion item should be open.
       */

      function updated(changedProperties) {
        if (changedProperties.has('alignment')) {
          // Propagate `alignment` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.shadowRoot.querySelectorAll(this.constructor.selectorAccordionItemSkeletons), elem => {
            elem.setAttribute('alignment', this.alignment);
          });
        }
        if (changedProperties.has('isFlush') || changedProperties.has('alignment')) {
          // Propagate `isFlush` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.shadowRoot.querySelectorAll(this.constructor.selectorAccordionItemSkeletons), elem => {
            this.isFlush && this.alignment !== 'start' ? elem.setAttribute('isFlush', '') : elem.removeAttribute('isFlush');
          });
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const classes = classMap({
          [`${prefix}--accordion__item`]: true,
          [`${prefix}--accordion__item--active`]: true,
          [`${prefix}--accordion--${this.alignment}`]: this.alignment,
          [`${prefix}--accordion--flush`]: this.isFlush && this.alignment !== 'start'
        });
        const numSkeletonItems = this.open ? this.count - 1 : this.count;
        return html(_t || (_t = _2`
      ${0}
      ${0}
    `), this.open ? html(_t2 || (_t2 = _2`
            <li class="${0}">
              <span class="${0}--accordion__heading">
                ${0}
                <cds-skeleton-text
                  class="${0}--accordion__title"></cds-skeleton-text>
              </span>
              <div class="${0}--accordion__content">
                <cds-skeleton-text width="90%"></cds-skeleton-text>
                <cds-skeleton-text width="80%"></cds-skeleton-text>
                <cds-skeleton-text width="85%"></cds-skeleton-text>
              </div>
            </li>
          `), classes, prefix, ChevronRight16({
          part: 'expando-icon',
          class: `${prefix}--accordion__arrow`
        }), prefix, prefix) : ``, Array.from(new Array(numSkeletonItems)).map((_, index) => html(_t3 || (_t3 = _2`
            <cds-accordion-item-skeleton
              key=${0}></cds-accordion-item-skeleton>
          `), index)));
      }
    }, {
      kind: "get",
      static: true,
      key: "selectorAccordionItemSkeletons",
      value: function selectorAccordionItemSkeletons() {
        return `${prefix}-accordion-item-skeleton`;
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
export default CDSAccordionSkeleton;
//# sourceMappingURL=accordion-skeleton.js.map
