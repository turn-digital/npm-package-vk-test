import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2,
  _t3;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { forEach } from '../../globals/internal/collection-helpers';
import { TABLE_SIZE, TABLE_SORT_DIRECTION } from './defs';
import styles from "././data-table.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
export { TABLE_SIZE };

/**
 * Data table.
 *
 * @element cds-table
 * @fires cds-table-header-cell-sort
 *   The name of the custom event fired before a new sort direction is set upon a user gesture.
 *   Cancellation of this event stops the user-initiated change in sort direction.
 * @fires cds-search input
 *   The name of the custom event fired during search bar input
 * @fires cds-table-change-selection-all
 *   The name of the custom event fired before header row is selected/unselected upon a user gesture.
 * @fires cds-table-row-change-selection
 *   The name of the custom event fired before a row is selected/unselected upon a user gesture.
 * @fires cds-table-batch-actions-cancel-clicked
 *   The name of the custom event fired after the Cancel button is clicked.
 * @fires cds-table-row-expando-toggled
 *   The name of the custom event fired after the expanded state of a row is toggled upon a user gesture.
 * @fires cds-table-row-selected
 *   The name of the custom event fired after a row has been selected.
 * @fires cds-table-row-all-selected
 *   The name of the custom event fired after all rows have been selected.
 * @fires cds-table-sorted
 *   The name of the custom event fired after the table has been sorted.
 * @fires cds-table-filtered
 *   The name of the custom event fired after the table has been filtered containing remaining rows.
 */
let CDSTable = _decorate([customElement(`${prefix}-table`)], function (_initialize, _HostListenerMixin) {
  class CDSTable extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTable,
    d: [{
      kind: "field",
      key: "collationFactors",
      value() {
        return {
          [TABLE_SORT_DIRECTION.ASCENDING]: 1,
          [TABLE_SORT_DIRECTION.DESCENDING]: -1
        };
      }
    }, {
      kind: "field",
      decorators: [state()],
      key: "_downloadButton",
      value: void 0
    }, {
      kind: "field",
      decorators: [state()],
      key: "_searchValue",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [state()],
      key: "_tableHeaderRow",
      value: void 0
    }, {
      kind: "field",
      decorators: [state()],
      key: "_tableBody",
      value: void 0
    }, {
      kind: "field",
      decorators: [state()],
      key: "_tableExpandedRows",
      value: void 0
    }, {
      kind: "field",
      decorators: [state()],
      key: "_tableRows",
      value: void 0
    }, {
      kind: "field",
      decorators: [state()],
      key: "_tableBatchActions",
      value: void 0
    }, {
      kind: "field",
      decorators: [state()],
      key: "_tableToolbar",
      value: void 0
    }, {
      kind: "field",
      decorators: [state()],
      key: "_tableToolbarContent",
      value: void 0
    }, {
      kind: "field",
      decorators: [state()],
      key: "_selectedRows",
      value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'batch-expansion'
      })],
      key: "batchExpansion",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "collator",
      value: void 0
    }, {
      kind: "method",
      key: "customSortRow",
      value:
      /**
       * The map of how sorting direction affects sorting order.
       */

      /**
       * Reference to download button
       */

      /**
       * Current search value for filtering
       */

      /**
       * Table header row within component
       */

      /**
       * Table body
       */

      /**
       * Table expanded row within component
       */

      /**
       * Table rows within component
       */

      /**
       * Reference to the component containing batch actions
       */

      /**
       * Reference to the table toolbar
       */

      /**
       * Reference to the table toolbar content
       */

      /**
       * `true` if this table should support batch expansion
       */

      /**
       * The g11n collator to use.
       */

      /**
       * @param lhs A value.
       * @param rhs Another value.
       * @param collator A custom collator.
       * @returns
       *   `0` if the given two values are equal
       *   A negative value to sort `lhs` to an index lower than `rhs`
       *   A positive value to sort `rhs` to an index lower than `lhs`
       */
      // eslint-disable-next-line class-methods-use-this
      function customSortRow(lhs, rhs, collator) {
        if (typeof lhs === 'number' && typeof rhs === 'number') {
          return lhs - rhs;
        }
        return collator.compare(lhs, rhs);
      }

      /**
       * Specify whether the rows should be able to be expandable
       */
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "expandable",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "filterRows",
      value() {
        return (rowText, searchString) => rowText.toLowerCase().indexOf(searchString.toLowerCase()) < 0;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "headerCount",
      value() {
        return 0;
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
        reflect: true
      })],
      key: "locale",
      value() {
        return 'en';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'overflow-menu-on-hover'
      })],
      key: "overflowMenuOnHover",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "radio",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return TABLE_SIZE.LG;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'use-static-width',
        reflect: true
      })],
      key: "useStaticWidth",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'use-zebra-styles',
        reflect: true
      })],
      key: "useZebraStyles",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'with-header',
        reflect: true
      })],
      key: "withHeader",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'with-row-slugs'
      })],
      key: "withRowSlugs",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * The method used when filtering the table with the search bar.
       * Can be replaced with custom method.
       *
       * @param rowText A table row.
       * @param searchString A search string.
       * @returns `false` if the given table row matches the given search string.
       */
      /**
       * The total headers
       */
      /**
       * `true` if this table contains selectable rows
       */
      /**
       * `true` if this table should support sorting.
       */
      /**
       * The table size.
       */
      /**
       * Specify whether the overflow menu (if it exists) should be shown always, or only on hover
       */
      /**
       * Specify whether the control should be a radio button or inline checkbox
       */
      /**
       * The table size.
       */
      /**
       * TODO: Uncomment when Carbon fully implements sticky header
       * Specify whether the header should be sticky.
       * Still experimental: may not work with every combination of table props
       */
      // @property({ type: Boolean, attribute: 'sticky-header', reflect: true })
      // stickyHeader = false;
      /**
       *  If true, will use a width of 'auto' instead of 100%
       */
      /**
       *  true to add useZebraStyles striping.
       */
      /**
       *  true if slugs are added in the rows
       */
      function _handleSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().some(node => node.nodeType !== Node.TEXT_NODE || node.textContent.trim());
        this.withHeader = hasContent;
      }
    }, {
      kind: "method",
      key: "_handleSortAction",
      value: function _handleSortAction(columnIndex, sortDirection) {
        const rows = [...this._tableRows];

        // regular row sorting
        rows.sort((a, b) => {
          const cellA = a.querySelectorAll(this.constructor.selectorTableRowCells)[columnIndex].textContent;
          const cellB = b.querySelectorAll(this.constructor.selectorTableRowCells)[columnIndex].textContent;
          return this.collationFactors[sortDirection] * this.customSortRow(cellA, cellB, this.collator);
        });

        // take into account the expanded rows, mapping each expandable row to its original for proper reinsertion
        if (this.expandable) {
          const originalRows = [...this._tableRows];
          const expandedRows = [...this._tableExpandedRows];
          const mapping = originalRows.reduce((acc, element, index) => {
            const sortId = element.getAttribute('sort-id');
            acc[sortId] = expandedRows[index];
            return acc;
          }, {});
          const sortedWithExpanded = [];
          rows.forEach(e => {
            const sortId = e.getAttribute('sort-id');
            sortedWithExpanded.push(e);
            sortedWithExpanded.push(mapping[sortId]);
          });
          sortedWithExpanded.forEach(e => {
            this._tableBody.insertBefore(e, null);
          });
        } else {
          rows.forEach(e => {
            this._tableBody.insertBefore(e, null);
          });
        }
      }
    }, {
      kind: "method",
      key: "_handleFilterRows",
      value: function _handleFilterRows() {
        const unfilteredRows = [];
        forEach(this._tableRows, elem => {
          var _elem$textContent;
          let rowText = (_elem$textContent = elem.textContent) === null || _elem$textContent === void 0 ? void 0 : _elem$textContent.trim();
          let filtered = this.filterRows(rowText, this._searchValue);
          elem.filtered = filtered;
          if (filtered && this.expandable) {
            var _nextElementSibling$t;
            rowText = (_nextElementSibling$t = elem.nextElementSibling.textContent) === null || _nextElementSibling$t === void 0 ? void 0 : _nextElementSibling$t.trim();
            filtered = this.filterRows(rowText, this._searchValue);
            elem.filtered = filtered;
          }
          if (!filtered) {
            unfilteredRows.push(elem);
          }
          if (this.expandable) {
            elem.nextElementSibling.filtered = filtered;
          }
        });
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            unfilteredRows
          }
        };
        this.dispatchEvent(new CustomEvent(this.constructor.eventTableFiltered, init));
      }

      /**
       * Download manager for selected rows.
       */
    }, {
      kind: "method",
      key: "_handleDownload",
      value: function _handleDownload({
        target
      }) {
        const data = [];
        const elementsToArray = elements => Array.from(elements, element => element.textContent);
        const headerCells = this.querySelectorAll(this.constructor.selectorHeaderCell);
        const rows = this._selectedRows;
        const headerTitleArray = elementsToArray(headerCells);
        rows.forEach(row => {
          const rowData = {};
          const cells = elementsToArray(row.querySelectorAll(this.constructor.selectorTableRowCells));
          cells.forEach((cellText, index) => {
            const headerTitle = headerTitleArray[index];
            rowData[headerTitle] = cellText;
          });
          data.push(rowData);
        });
        const blob = new Blob([JSON.stringify(data)], {
          type: 'application/json'
        });
        target.href = URL.createObjectURL(blob);
      }

      /**
       * Handles batch expansion
       */
    }, {
      kind: "field",
      decorators: [HostListener('eventExpandoToggle')],
      key: "_handleBatchExpansion",
      value() {
        return async event => {
          const {
            detail,
            target
          } = event;
          const {
            expanded
          } = detail;
          if (target === this._tableHeaderRow) {
            this._tableRows.forEach(e => e.expanded = expanded);
          }
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('eventBeforeSort')],
      key: "_handleSort",
      value() {
        return async event => {
          const {
            detail,
            target
          } = event;
          const {
            sortDirection
          } = detail;
          if (!this.contains(target)) {
            return;
          }
          const columns = [...this._tableHeaderRow.children];
          const columnIndex = columns.indexOf(target);
          columns.forEach(e => {
            if (e !== target && this.isSortable) {
              e.setAttribute('sort-direction', 'none');
            } else if (e.hasAttribute('is-sortable')) {
              e.setAttribute('sort-direction', 'none');
            }
          });
          this._handleSortAction(columnIndex, sortDirection);
          const init = {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
              sortedHeader: columns[columnIndex]
            }
          };
          this.dispatchEvent(new CustomEvent(this.constructor.eventTableSorted, init));
          this._handleFilterRows();
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('eventSearchInput')],
      key: "_handleSearchInput",
      value() {
        return async event => {
          const {
            detail,
            target
          } = event;
          if (this.contains(target)) {
            const {
              value
            } = detail;
            this._searchValue = value;
            this._handleFilterRows();
          }
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('eventBeforeChangeSelection')],
      key: "_handleRowSelect",
      value() {
        return async event => {
          var _tableHeaderRow$shado;
          const {
            detail,
            target
          } = event;
          const {
            selected
          } = detail;
          const {
            _tableBatchActions: tableBatchActions,
            _tableToolbarContent: tableToolbarContent,
            _tableHeaderRow: tableHeaderRow,
            _selectedRows: selectedRows
          } = this;
          if (!this.contains(target)) {
            return;
          }
          if (this.radio) {
            this._tableRows.forEach(e => {
              if (e !== target) {
                e.removeAttribute('selected');
                e.shadowRoot.querySelector(`${prefix}-radio-button`).checked = false;
              }
            });
            this._selectedRows.push(...[target]);
          } else {
            if (selectedRows.includes(target)) {
              this._selectedRows = selectedRows.filter(e => e !== target);
            } else {
              selectedRows.push(target);
            }
            if (tableBatchActions) {
              var _this$_selectedRows;
              tableBatchActions.active = (_this$_selectedRows = this._selectedRows) === null || _this$_selectedRows === void 0 ? void 0 : _this$_selectedRows.length;
              tableBatchActions.selectedRowsCount += selected ? 1 : -1;
            }
            if (tableToolbarContent) {
              tableToolbarContent.hasBatchActions = this._selectedRows.length;
            }
          }
          const totalRows = [...this._tableRows].filter(elem => !elem.hasAttribute('filtered')).length;

          // selected header checkbox upon all rows being selected
          const headerCheckbox = (_tableHeaderRow$shado = tableHeaderRow.shadowRoot) === null || _tableHeaderRow$shado === void 0 ? void 0 : _tableHeaderRow$shado.querySelector(`${prefix}-checkbox`).shadowRoot.querySelector(`.${prefix}--checkbox`);
          const allRowsSelected = this._selectedRows.length === totalRows;
          headerCheckbox.checked = !this._selectedRows.length ? false : true;
          headerCheckbox.indeterminate = !allRowsSelected && this._selectedRows.length > 0;
          const init = {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
              selectedRow: target,
              selectedRows: selectedRows
            }
          };
          this.dispatchEvent(new CustomEvent(this.constructor.eventTableRowSelect, init));
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('eventBeforeChangeSelectionAll')],
      key: "_handleAllRowsSelect",
      value() {
        return async event => {
          const {
            detail,
            target
          } = event;
          const {
            selected
          } = detail;
          const {
            _tableBatchActions: tableBatchActions,
            _tableToolbarContent: tableToolbarContent,
            _tableRows: tableRows
          } = this;
          if (!this.contains(target)) {
            return;
          }
          let totalRows = 0;
          forEach(tableRows, elem => {
            if (!elem.filtered) {
              elem.selected = selected;
              this.radio ? elem.shadowRoot.querySelector(`${prefix}-radio-button`).checked = selected : null;
              this._selectedRows.push(elem);
              totalRows++;
              const {
                selectorTableExpandedRows
              } = this.constructor;
              const {
                nextElementSibling
              } = elem;

              // selecting the expanded row as well
              if (nextElementSibling !== null && nextElementSibling !== void 0 && nextElementSibling.matches(selectorTableExpandedRows)) {
                elem.nextElementSibling.selected = selected;
              }
            }
          });
          if (!selected) {
            this._selectedRows = [];
          }
          if (tableBatchActions) {
            tableBatchActions.selectedRowsCount = selected ? totalRows : 0;
            tableBatchActions.active = selected;
          }
          if (tableToolbarContent) {
            tableToolbarContent.hasBatchActions = selected;
          }
          const init = {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
              selectedRows: this._selectedRows
            }
          };
          this.dispatchEvent(new CustomEvent(this.constructor.eventTableRowSelectAll, init));
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('eventClickCancel')],
      key: "_handleCancelSelection",
      value() {
        return async event => {
          const {
            target
          } = event;
          const {
            _tableHeaderRow: tableHeaderRow
          } = this;
          if (this.contains(target)) {
            var _tableHeaderRow$shado2;
            (_tableHeaderRow$shado2 = tableHeaderRow.shadowRoot) === null || _tableHeaderRow$shado2 === void 0 || _tableHeaderRow$shado2.querySelector(`${prefix}-checkbox`).shadowRoot.querySelector(`.${prefix}--checkbox`).click();
          }
        };
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Handles sorting the table depending on the column selected
       */
      /**
       * Handles search input within the toolbar actions
       */
      /**
       * Handles row selection
       */
      /**
       * Handles header row selection, selecting/unselecting all rows
       */
      /**
       * Handles cancel button within the toolbar actions
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'table');
        }
        _get(_getPrototypeOf(CDSTable.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this._tableBatchActions = this.querySelector(this.constructor.selectorTableBatchActions);
        this._tableToolbar = this.querySelector(this.constructor.selectorTableToolbar);
        this._tableToolbarContent = this.querySelector(this.constructor.selectorTableToolbarContent);
        this._tableBody = this.querySelector(this.constructor.selectorTableBody);
        this._tableHeaderRow = this.querySelector(this.constructor.selectorRowsWithHeader);
        this._tableExpandedRows = this.querySelectorAll(this.constructor.selectorTableExpandedRows);
        this._tableRows = this.querySelectorAll(this.constructor.selectorTableRow);
        this._downloadButton = this.querySelector(this.constructor.selectorToolbarDownload);
        if (this._downloadButton) {
          this._downloadButton.onclick = this._handleDownload.bind(this);
        }
        this.headerCount = this._tableHeaderRow.children.length;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('expandable')) {
          this._tableRows.forEach((e, index) => {
            e.expandable = this.expandable;
            e.setAttribute('sort-id', index);
          });
          this._tableHeaderRow.expandable = this.expandable;
          this._tableHeaderRow.batchExpansion = this.batchExpansion;
          this.headerCount += this.expandable ? 1 : -1;
        }
        if (changedProperties.has('headerCount')) {
          this._tableExpandedRows.forEach(e => {
            e.setAttribute('colspan', this.headerCount);
          });
        }
        if (changedProperties.has('isSelectable')) {
          if (this.isSelectable) {
            this._tableHeaderRow.setAttribute('selection-name', 'header');
            this._tableRows.forEach((e, index) => {
              if (!e.hasAttribute('selection-name')) {
                e.setAttribute('selection-name', index);
              }
            });
          }
          this.headerCount++;
        }
        if (changedProperties.has('locale')) {
          this.collator = new Intl.Collator(this.locale);
        }
        if (changedProperties.has('isSortable')) {
          if (this.isSortable) {
            this._enableSortAction();
          }
        }
        if (changedProperties.has('overflowMenuOnHover') || changedProperties.has('size')) {
          forEach(this.querySelectorAll(this.constructor.selectorTableCellOverflowMenu), elem => {
            const cell = elem.parentNode;
            const row = cell.parentNode;
            cell.overflowMenuOnHover = this.overflowMenuOnHover;
            row.overflowMenuOnHover = this.overflowMenuOnHover;
            cell.setAttribute('size', this.size);
            elem.setAttribute('size', this.size);
            elem.setAttribute('data-table', '');
          });
        }
        if (changedProperties.has('radio')) {
          // Propagate `size` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorTableRow), elem => {
            elem.radio = this.radio;
          });
        }
        if (changedProperties.has('size')) {
          var _this$_tableToolbar;
          // Propagate `size` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorAllRows), elem => {
            elem.setAttribute('size', this.size);
          });
          (_this$_tableToolbar = this._tableToolbar) === null || _this$_tableToolbar === void 0 || _this$_tableToolbar.setAttribute('size', this.size);
        }

        // TODO: Uncomment when Carbon fully implements Sticky header feature
        // if (changedProperties.has('stickyHeader')) {
        //   const tableBody = this.querySelector(
        //     (this.constructor as typeof CDSTable).selectorTableBody
        //   );
        //   const tableHead = this.querySelector(
        //     (this.constructor as typeof CDSTable).selectorTableHead
        //   );
        //   (tableBody as any).stickyHeader = this.stickyHeader;
        //   (tableHead as any).stickyHeader = this.stickyHeader;
        //   forEach(
        //     this.querySelectorAll(
        //       (this.constructor as typeof CDSTable).selectorRowsWithHeader
        //     ),
        //     (elem) => {
        //       (elem as any).stickyHeader = this.stickyHeader;
        //     }
        //   );
        //   forEach(
        //     this.querySelectorAll(
        //       (this.constructor as typeof CDSTable).selectorTableCells
        //     ),
        //     (elem) => {
        //       (elem as any).stickyHeader = this.stickyHeader;
        //     }
        //   );
        // }

        if (changedProperties.has('useZebraStyles')) {
          const tableBody = this.querySelector(this.constructor.selectorTableBody);
          tableBody.useZebraStyles = this.useZebraStyles;
        }
        if (this.withRowSlugs) {
          this._tableHeaderRow.setAttribute('rows-with-slug', '');
          this._tableRows.forEach(row => {
            row.setAttribute('rows-with-slug', '');
          });
        } else {
          this._tableHeaderRow.removeAttribute('rows-with-slug');
          this._tableRows.forEach(row => {
            row.removeAttribute('rows-with-slug');
          });
        }
      }

      /* eslint-disable no-constant-condition */
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div class="${0}--data-table-header-container">
        <div ?hidden="${0}" class="${0}--data-table-header">
          <slot @slotchange="${0}" name="title"></slot>
          <slot
            @slotchange="${0}"
            name="description"></slot>
        </div>
        <slot name="toolbar"></slot>
      </div>

      ${0}
    `), prefix, !this.withHeader, prefix, this._handleSlotChange, this._handleSlotChange, false // TODO: replace with this.stickyHeader when feature is fully implemented
        ? html(_t2 || (_t2 = _` <div class="${0}--data-table_inner-container">
            <div class="${0}--data-table-content">
              <slot></slot>
            </div>
          </div>`), prefix, prefix) : html(_t3 || (_t3 = _`<slot></slot>`)));
      }

      /**
       * Adds isSortable value for table header cells.
       */
    }, {
      kind: "method",
      key: "_enableSortAction",
      value: function _enableSortAction() {
        const headerCells = this.querySelectorAll(this.constructor.selectorHeaderCell);
        headerCells.forEach(e => {
          e.isSortable = this.isSortable;
          e.isSelectable = this.isSelectable;
          e.isExpandable = this.expandable;
        });
        const columns = [...this._tableHeaderRow.children];
        let sortDirection;
        let columnIndex = -1;
        columns.forEach((column, index) => {
          if (column.hasAttribute('sort-direction') && column.getAttribute('sort-direction') !== 'none') {
            sortDirection = column.getAttribute('sort-direction');
            columnIndex = index;
          }
        });
        columns.forEach((e, index) => {
          if (index !== columnIndex && this.isSortable) {
            e.setAttribute('sort-direction', 'none');
          } else if (e.hasAttribute('is-sortable')) {
            e.setAttribute('sort-direction', 'none');
          }
        });
        this._handleSortAction(columnIndex, sortDirection);
      }

      /* eslint-enable no-constant-condition */

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

      /**
       * The name of the custom event fired during search bar input
       */
    }, {
      kind: "get",
      static: true,
      key: "eventSearchInput",
      value: function eventSearchInput() {
        return `${prefix}-search-input`;
      }

      /**
       * The name of the custom event fired before header row is selected/unselected upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeChangeSelectionAll",
      value: function eventBeforeChangeSelectionAll() {
        return `${prefix}-table-change-selection-all`;
      }

      /**
       * The name of the custom event fired before a row is selected/unselected upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeChangeSelection",
      value: function eventBeforeChangeSelection() {
        return `${prefix}-table-row-change-selection`;
      }

      /**
       * The name of the custom event fired after the Cancel button is clicked.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventClickCancel",
      value: function eventClickCancel() {
        return `${prefix}-table-batch-actions-cancel-clicked`;
      }

      /**
       * The name of the custom event fired after the expanded state a row is toggled upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventExpandoToggle",
      value: function eventExpandoToggle() {
        return `${prefix}-table-row-expando-toggled`;
      }

      /**
       * The name of the custom event fired after a row has been selected
       */
    }, {
      kind: "get",
      static: true,
      key: "eventTableRowSelect",
      value: function eventTableRowSelect() {
        return `${prefix}-table-row-selected`;
      }

      /**
       * The name of the custom event fired after all rows have been selected
       */
    }, {
      kind: "get",
      static: true,
      key: "eventTableRowSelectAll",
      value: function eventTableRowSelectAll() {
        return `${prefix}-table-row-all-selected`;
      }

      /**
       * The name of the custom event fired after the table has been sorted
       */
    }, {
      kind: "get",
      static: true,
      key: "eventTableSorted",
      value: function eventTableSorted() {
        return `${prefix}-table-sorted`;
      }

      /**
       * The name of the custom event fired after the table has been filtered containing remaining rows.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventTableFiltered",
      value: function eventTableFiltered() {
        return `${prefix}-table-filtered`;
      }

      /**
       * The CSS selector to find the overflow menu on the table cell
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableCellOverflowMenu",
      value: function selectorTableCellOverflowMenu() {
        return `${prefix}-table-cell ${prefix}-overflow-menu`;
      }

      /**
       * The CSS selector to find the download button
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorToolbarDownload",
      value: function selectorToolbarDownload() {
        return `${prefix}-button[download]`;
      }

      /**
       * The CSS selector to find the table batch actions
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableBatchActions",
      value: function selectorTableBatchActions() {
        return `${prefix}-table-batch-actions`;
      }

      /**
       * The CSS selector to find the table toolbar
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableToolbar",
      value: function selectorTableToolbar() {
        return `${prefix}-table-toolbar`;
      }

      /**
       * The CSS selector to find the table toolbar content
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableToolbarContent",
      value: function selectorTableToolbarContent() {
        return `${prefix}-table-toolbar-content`;
      }

      /**
       * The CSS selector to find the table toolbar search
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableToolbarSearch",
      value: function selectorTableToolbarSearch() {
        return `${prefix}-table-toolbar-search`;
      }

      /**
       * The CSS selector to find the table head
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableHead",
      value: function selectorTableHead() {
        return `${prefix}-table-head`;
      }

      /**
       * The CSS selector to find the table body
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableBody",
      value: function selectorTableBody() {
        return `${prefix}-table-body`;
      }

      /**
       * The CSS selector to find the table expanded rows
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableExpandedRows",
      value: function selectorTableExpandedRows() {
        return `${prefix}-table-expanded-row`;
      }

      /**
       * The CSS selector to find the table rows
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableRow",
      value: function selectorTableRow() {
        return `${prefix}-table-row`;
      }

      /**
       * The CSS selector to find the rows cells.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableRowCells",
      value: function selectorTableRowCells() {
        return `${prefix}-table-cell`;
      }

      /**
       * The CSS selector to find the rows cells, including header cells.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTableCells",
      value: function selectorTableCells() {
        return `${prefix}-table-cell, ${prefix}-table-header-cell`;
      }

      /**
       * The CSS selector to find the header cell
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorHeaderCell",
      value: function selectorHeaderCell() {
        return `${prefix}-table-header-cell`;
      }

      /**
       * The CSS selector to find the rows, including header rows.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorRowsWithHeader",
      value: function selectorRowsWithHeader() {
        return `${prefix}-table-header-row,${prefix}-table-row`;
      }

      /**
       * The CSS selector to find all rows
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorAllRows",
      value: function selectorAllRows() {
        return `${prefix}-table-header-row,${prefix}-table-row,${prefix}-table-expanded-row`;
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
}, HostListenerMixin(LitElement));
export default CDSTable;
//# sourceMappingURL=table.js.map
