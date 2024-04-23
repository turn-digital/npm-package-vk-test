import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import ArrowsVertical32 from "../../icons/arrows--vertical/32";
import ArrowDown32 from "../../icons/arrow--down/32";
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import { TABLE_SORT_CYCLE, TABLE_SORT_CYCLES, TABLE_SORT_DIRECTION } from './defs';
import styles from "././data-table.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { TABLE_SORT_CYCLE, TABLE_SORT_CYCLES, TABLE_SORT_DIRECTION };

/**
 * Data table header cell.
 *
 * @element cds-table-header-cell
 * @fires cds-table-header-cell-sort
 *   The custom event fired before a new sort direction is set upon a user gesture.
 *   Cancellation of this event stops the user-initiated change in sort direction.
 */
let CDSTableHeaderCell = _decorate([customElement(`${prefix}-table-header-cell`)], function (_initialize, _FocusMixin) {
  class CDSTableHeaderCell extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTableHeaderCell,
    d: [{
      kind: "method",
      key: "_handleClickSortButton",
      value:
      /**
       * Handles `click` event on the sort button.
       *
       */
      function _handleClickSortButton(event) {
        if (!event.target.matches(this.constructor.slugItem)) {
          const nextSortDirection = this._getNextSort();
          const init = {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
              oldSortDirection: this.sortDirection,
              sortDirection: nextSortDirection
            }
          };
          const constructor = this.constructor;
          if (this.dispatchEvent(new CustomEvent(constructor.eventBeforeSort, init))) {
            this.sortActive = true;
            this.sortDirection = nextSortDirection;
          }
        }
      }

      /**
       * Handles `slotchange` event.
       *
       */
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value: function _handleSlotChange() {
        this.requestUpdate();
      }

      /**
       * Handles `slotchange` event.
       */
    }, {
      kind: "method",
      key: "_handleSlugSlotChange",
      value: function _handleSlugSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().filter(elem => elem.matches !== undefined ? elem.matches(this.constructor.slugItem) : false);
        if (hasContent.length > 0) {
          this._hasSlug = Boolean(hasContent);
          hasContent[0].setAttribute('size', 'mini');
        }
        this.requestUpdate();
      }

      /**
       * @returns The next sort direction.
       */
    }, {
      kind: "method",
      key: "_getNextSort",
      value: function _getNextSort() {
        const {
          sortCycle = TABLE_SORT_CYCLE.TRI_STATES_FROM_ASCENDING,
          sortDirection
        } = this;
        if (!sortDirection) {
          throw new TypeError('Table sort direction is not defined. ' + 'Likely that `_getNextSort()` is called with non-sorted table column, which should not happen in regular condition.');
        }
        const directions = this.constructor.TABLE_SORT_CYCLES[sortCycle];
        const index = directions.indexOf(sortDirection);
        if (index < 0) {
          if (sortDirection === TABLE_SORT_DIRECTION.NONE) {
            // If the current sort direction is `none` in bi-state sort cycle, returns the first one in the cycle
            return directions[0];
          }
          throw new RangeError(`The given sort state (${sortDirection}) is not found in the given table sort cycle: ${sortCycle}`);
        }
        return directions[(index + 1) % directions.length];
      }

      /**
       * `true` if there is a slug.
       */
    }, {
      kind: "field",
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'expandable'
      })],
      key: "isExpandable",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'is-selectable'
      })],
      key: "isSelectable",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'is-sortable'
      })],
      key: "isSortable",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'sort-active'
      })],
      key: "sortActive",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'sort-cycle'
      })],
      key: "sortCycle",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'sort-direction'
      })],
      key: "sortDirection",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` if the table has expandable rows
       */
      /**
       * `true` if this table has selectable rows
       */
      /**
       * `true` if this table header column should be sortable
       */
      /**
       * `true` if this table header cell is of a primary sorting column.
       */
      /**
       * The table sort cycle in use.
       */
      /**
       * The table sort direction.
       * If present, this table header cell will have a sorting UI. Choose between `ascending` or `descending`.
       */
      /**
       * TODO: Uncomment when Carbon fully implements sticky header
       * Specify whether the header should be sticky.
       * Still experimental: may not work with every combination of table props
       */
      // @property({ type: Boolean, reflect: true, attribute: 'sticky-header' })
      // stickyHeader = false;
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'columnheader');
        }
        _get(_getPrototypeOf(CDSTableHeaderCell.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (this.isSortable && !changedProperties.has('sortDirection') && !this.sortDirection) {
          this.sortDirection = TABLE_SORT_DIRECTION.NONE;
        }
        if (this._hasSlug) {
          this.setAttribute('slug', '');
        } else {
          this.removeAttribute('slug');
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          sortDirection
        } = this;
        const labelClasses = classMap({
          [`${prefix}--table-header-label`]: true,
          [`${prefix}--table-header-label--slug`]: this._hasSlug
        });
        if (sortDirection) {
          const sortIcon = sortDirection === TABLE_SORT_DIRECTION.NONE ? ArrowsVertical32({
            part: 'sort-icon',
            class: `${prefix}--table-sort__icon-unsorted`
          }) : ArrowDown32({
            part: 'sort-icon',
            class: `${prefix}--table-sort__icon`
          });
          return html(_t || (_t = _`
        <button
          part="sort-button"
          class="${0}--table-sort"
          title="${0}"
          @click=${0}>
          <span class="${0}--table-sort__flex">
            <span part="label-text" class="${0}--table-header-label"
              ><slot @slotchange=${0}></slot
            ></span>
            <slot
              name="slug"
              @slotchange="${0}"></slot>
            ${0}
          </span>
        </button>
      `), prefix, this.textContent, this._handleClickSortButton, prefix, prefix, this._handleSlotChange, this._handleSlugSlotChange, sortIcon);
        }
        return html(_t2 || (_t2 = _`<span part="label-text" class="${0}">
      <slot></slot
      ><slot name="slug" @slotchange="${0}"></slot
    ></span> `), labelClasses, this._handleSlugSlotChange);
      }
      /**
       * A selector that will return the slug item.
       */
    }, {
      kind: "get",
      static: true,
      key: "slugItem",
      value: function slugItem() {
        return `${prefix}-slug`;
      }

      /**
       * The name of the custom event fired before a new sort direction is set upon a user gesture.
       * Cancellation of this event stops the user-initiated change in sort direction.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeSort",
      value: function eventBeforeSort() {
        return `${prefix}-table-header-cell-sort`;
      }
    }, {
      kind: "field",
      static: true,
      key: "shadowRootOptions",
      value() {
        return _objectSpread(_objectSpread({}, LitElement.shadowRootOptions), {}, {
          delegatesFocus: true
        });
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "field",
      static: true,
      key: "TABLE_SORT_CYCLES",
      value() {
        return TABLE_SORT_CYCLES;
      }
    }]
  };
}, FocusMixin(LitElement));
export default CDSTableHeaderCell;
//# sourceMappingURL=table-header-cell.js.map
