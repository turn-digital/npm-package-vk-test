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

import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { prefix } from '../../globals/settings';
import CDSDropdownItem from '../dropdown/dropdown-item';
import styles from "././multi-select.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Multi select item.
 *
 * @element cds-multi-select-item
 */
let CDSMultiSelectItem = _decorate([customElement(`${prefix}-multi-select-item`)], function (_initialize, _CDSDropdownItem) {
  class CDSMultiSelectItem extends _CDSDropdownItem {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSMultiSelectItem,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "filtered",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selection-name'
      })],
      key: "selectionName",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The property to hide when item is filtered from input
       */

      /**
       * The `name` attribute for the `<input>` for selection.
       */

      function render() {
        const {
          disabled,
          selected,
          selectionName,
          value
        } = this;
        return html(_t || (_t = _`
      <div class="${0}--list-box__menu-item__option">
        <div class="${0}--form-item ${0}--checkbox-wrapper">
          <span
            value="${0}"
            name="${0}"
            class="${0}--checkbox-label"
            ?disabled=${0}
            data-contained-checkbox-state=${0}
            ><slot></slot
          ></span>
        </div>
      </div>
    `), prefix, prefix, prefix, value, ifDefined(selectionName || undefined), prefix, disabled, selected);
      }

      /**
       * A selector that will return multi select.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorList",
      value: function selectorList() {
        return `${prefix}-multi-select`;
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
}, CDSDropdownItem);
export default CDSMultiSelectItem;
//# sourceMappingURL=multi-select-item.js.map
