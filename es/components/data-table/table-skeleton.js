import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _2 = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6;
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
import styles from "././data-table.css.js";

/**
 * Data table skeleton
 *
 * @element cds-table-skeleton
 */ /**
     * Data table skeleton
     *
     * @element cds-table-skeleton
     */
let CDSTableSkeleton = _decorate([customElement(`${prefix}-table-skeleton`)], function (_initialize, _LitElement) {
  class CDSTableSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTableSkeleton,
    d: [{
      kind: "field",
      decorators: [property()],
      key: "headers",
      value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "compact",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        reflect: true,
        attribute: 'column-count'
      })],
      key: "columnCount",
      value() {
        return 5;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        reflect: true,
        attribute: 'row-count'
      })],
      key: "rowCount",
      value() {
        return 5;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'show-header'
      })],
      key: "showHeader",
      value() {
        return true;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'show-toolbar'
      })],
      key: "showToolbar",
      value() {
        return true;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "zebra",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_renderHeader",
      value:
      /**
       * Optionally specify the displayed headers
       */

      /**
       * Optionally specify whether you want the Skeleton to be rendered as a compact DataTable
       */

      /**
       * Specify the number of columns that you want to render in the skeleton state
       */

      /**
       * Specify the number of rows that you want to render in the skeleton state
       */

      /**
       * Specify if the table header should be rendered as part of the skeleton.
       */

      /**
       * Specify if the table toolbar should be rendered as part of the skeleton.
       */

      /**
       *  true to add useZebraStyles striping.
       */

      /**
       * @returns The header
       */
      function _renderHeader() {
        const {
          showHeader
        } = this;
        return !showHeader ? undefined : html(_t || (_t = _2`
          <div class="${0}--skeleton ${0}--data-table-container">
            <div class="${0}--data-table-header">
              <div class="${0}--data-table-header__title"></div>
              <div class="${0}--data-table-header__description"></div>
            </div>
          </div>
        `), prefix, prefix, prefix, prefix, prefix);
      }

      /**
       * @returns The header
       */
    }, {
      kind: "method",
      key: "_renderToolbar",
      value: function _renderToolbar() {
        const {
          showToolbar
        } = this;
        return !showToolbar ? undefined : html(_t2 || (_t2 = _2`
          <section class="${0}--table-toolbar">
            <div class="${0}--toolbar-content">
              <span
                class="${0}--skeleton ${0}--btn ${0}--btn--sm"></span>
            </div>
          </section>
        `), prefix, prefix, prefix, prefix, prefix);
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'table');
        }
        _get(_getPrototypeOf(CDSTableSkeleton.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated() {
        if (this.headers.length) {
          this.columnCount = this.headers.length;
        } else {
          this.headers = Array(this.columnCount).fill('');
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          compact,
          columnCount,
          headers,
          rowCount,
          zebra
        } = this;
        const classes = classMap({
          [`${prefix}--skeleton`]: true,
          [`${prefix}--data-table`]: true,
          [`${prefix}--data-table--compact`]: compact,
          [`${prefix}--data-table--zebra`]: zebra
        });
        return html(_t3 || (_t3 = _2`
      ${0} ${0}

      <table class="${0}">
        <thead>
          <tr>
            ${0}
          </tr>
        </thead>
        <tbody>
          ${0}
        </tbody>
      </table>
    `), this._renderHeader(), this._renderToolbar(), classes, Array.from(new Array(columnCount)).map((_, index) => html(_t4 || (_t4 = _2`
                  <th>
                    <div class="${0}--table-header-label">
                      ${0}
                    </div>
                  </th>
                `), prefix, headers[index])), Array.from(new Array(rowCount)).map(() => html(_t5 || (_t5 = _2`
                <tr>
                  ${0}
                </tr>
              `), Array.from(new Array(columnCount)).map(() => html(_t6 || (_t6 = _2`
                        <td>
                          <span></span>
                        </td>
                      `))))));
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
export default CDSTableSkeleton;
//# sourceMappingURL=table-skeleton.js.map
