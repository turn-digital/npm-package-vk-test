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

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././list.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Ordered list.
 */
let CDSUnorderedList = _decorate([customElement(`${prefix}-unordered-list`)], function (_initialize, _LitElement) {
  class CDSUnorderedList extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSUnorderedList,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "isExpressive",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` if expressive theme enabled.
       */

      function connectedCallback() {
        // Uses attribute for lookup from child
        if (this.closest(this.constructor.selectorListItem)) {
          this.setAttribute('slot', 'nested');
        } else {
          this.removeAttribute('slot');
        }
        _get(_getPrototypeOf(CDSUnorderedList.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const classes = classMap({
          [`${prefix}--list--unordered`]: true,
          [`${prefix}--list--nested`]: this.getAttribute('slot') === 'nested',
          [`${prefix}--list--expressive`]: this.isExpressive
        });
        return html(_t || (_t = _`
      <ul class="${0}">
        <slot></slot>
      </ul>
    `), classes);
      }

      /**
       * A selector that will return list item.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorListItem",
      value: function selectorListItem() {
        return `${prefix}-list-item`;
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
export default CDSUnorderedList;
//# sourceMappingURL=unordered-list.js.map
