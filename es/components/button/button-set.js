import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BUTTON_KIND } from './defs';
import styles from "././button.css.js";
import { prefix } from '../../globals/settings';

/**
 * Button set.
 *
 * @element cds-button-set
 */
let CDSButtonSet = _decorate([customElement(`${prefix}-button-set`)], function (_initialize, _LitElement) {
  class CDSButtonSet extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSButtonSet,
    d: [{
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * Handler for @slotchange, set the first cds-button to kind secondary and primary for the remaining ones
       *
       * @private
       */
      function _handleSlotChange(event) {
        const childItems = event.target.assignedNodes().filter(elem => elem.matches !== undefined ? elem.matches(this.constructor.selectorItem) : false);
        childItems.forEach((elem, index) => {
          elem.setAttribute('kind', index === 0 ? BUTTON_KIND.SECONDARY : BUTTON_KIND.PRIMARY);
        });
        const update = new CustomEvent(`${prefix}-btn-set-update`, {
          bubbles: true,
          cancelable: true,
          composed: true
        });
        this.dispatchEvent(update);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <slot @slotchange="${0}"></slot> `), this._handleSlotChange);
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(CDSButtonSet.prototype), "connectedCallback", this).call(this);
        this.setAttribute('role', 'list');
      }

      /**
       * A selector that will return the child items.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value: function selectorItem() {
        return `${prefix}-button`;
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
/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default CDSButtonSet;
//# sourceMappingURL=button-set.js.map
