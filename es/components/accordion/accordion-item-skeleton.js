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
import ChevronRight16 from "../../icons/chevron--right/16";
import { customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import '../skeleton-text/index';
import styles from "././accordion.css.js";

/**
 * Skeleton of accordion item.
 */ /**
     * Skeleton of accordion item.
     */
let CDSAccordionItemSkeleton = _decorate([customElement(`${prefix}-accordion-item-skeleton`)], function (_initialize, _LitElement) {
  class CDSAccordionItemSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSAccordionItemSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <span class="${0}--accordion__heading">
        ${0}
        <cds-skeleton-text
          class="${0}--accordion__title"></cds-skeleton-text>
      </span>
    `), prefix, ChevronRight16({
          part: 'expando-icon',
          class: `${prefix}--accordion__arrow`
        }), prefix);
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
export default CDSAccordionItemSkeleton;
//# sourceMappingURL=accordion-item-skeleton.js.map
