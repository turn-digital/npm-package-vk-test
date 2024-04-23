import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import CaretLeft16 from "../../icons/caret--left/16";
import CaretRight16 from "../../icons/caret--right/16";
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import styles from "././pagination.css.js";
import { PAGINATION_SIZE } from './defs';
import '../button/index';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Pagination UI.
 *
 * @element cds-pagination
 * @slot page-sizes-select - Where to put in the `<page-sizes-select>`.
 * @fires cds-pages-select-changed - The custom event fired after the current page is changed from `<cds-pages-select>`.
 * @fires cds-page-sizes-select-changed
 *   The custom event fired after the number of rows per page is changed from `<cds-page-sizes-select>`.
 */
let CDSPagination = _decorate([customElement(`${prefix}-pagination`)], function (_initialize, _FocusMixin) {
  class CDSPagination extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSPagination,
    d: [{
      kind: "field",
      decorators: [query(`${prefix}-select`)],
      key: "_pageSizeSelect",
      value: void 0
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value: function _handleSlotChange({
        target
      }) {
        const content = target.assignedNodes().filter(node => node.nodeType !== Node.TEXT_NODE || node.textContent.trim());
        content.forEach(item => {
          this._pageSizeSelect.appendChild(item);
        });
      }

      /**
       * @returns Page status text.
       */
    }, {
      kind: "method",
      key: "_renderStatusText",
      value: function _renderStatusText() {
        const {
          start,
          pageSize,
          totalItems,
          pagesUnknown,
          formatStatusWithDeterminateTotal,
          formatStatusWithIndeterminateTotal
        } = this;
        // * Regular: `1-10 of 100 items`
        // * Indeterminate total: `Item 1-10` (`Item 11-` at the last page)
        const end = Math.min(start + pageSize, totalItems == null ? Infinity : totalItems);
        const format = totalItems == null || pagesUnknown ? formatStatusWithIndeterminateTotal : formatStatusWithDeterminateTotal;

        // `start`/`end` properties starts with zero, whereas we want to show number starting with 1
        return format({
          start: start + 1,
          end,
          count: totalItems
        });
      }

      /**
       * Handles user-initiated change in the row number the current page starts with.
       *
       * @param start The new current row number, index that starts with zero.
       */
    }, {
      kind: "method",
      key: "_handleUserInitiatedChangeStart",
      value: function _handleUserInitiatedChangeStart(start) {
        this.start = start;
        this.dispatchEvent(new CustomEvent(this.constructor.eventChangeCurrent, {
          bubbles: true,
          composed: true,
          detail: {
            page: this.page,
            pageSize: this.pageSize
          }
        }));
      }

      /**
       * Handles `click` event on the previous button.
       */
    }, {
      kind: "method",
      key: "_handleClickPrevButton",
      value: function _handleClickPrevButton() {
        const {
          start: oldStart,
          pageSize
        } = this;
        this.page--;
        const newStart = Math.max(oldStart - pageSize, 0);
        if (newStart !== oldStart) {
          this._handleUserInitiatedChangeStart(newStart);
        }
      }

      /**
       * Handles `click` event on the next button.
       */
    }, {
      kind: "method",
      key: "_handleClickNextButton",
      value: function _handleClickNextButton() {
        const {
          start: oldStart,
          pageSize,
          totalItems
        } = this;
        this.page++;
        const newStart = oldStart + pageSize;
        if (newStart < (totalItems == null ? Infinity : totalItems)) {
          this._handleUserInitiatedChangeStart(newStart);
        }
      }

      /**
       * Handles user-initiated change in number of rows per page.
       *
       * @param event The event.
       */
    }, {
      kind: "method",
      decorators: [HostListener('eventChangeSelect')],
      key: "_handleChangeSelector",
      value: function _handleChangeSelector(event) {
        const {
          value
        } = event.detail;
        const {
          totalItems,
          pageSize
        } = this;
        if (event.composedPath()[0] === this._pageSizeSelect) {
          this.pageSize = parseInt(value);
          // Default pageSize to effectively be 1 when we have a value of 0 to avoid
          // division by 0.
          this.totalPages = pageSize > 0 ? Math.ceil(totalItems / pageSize) : totalItems;
          this.page = 1;
          this.start = 0;
        } else {
          this.page = value;
          this._handleUserInitiatedChangeStart((value - 1) * pageSize);
        }
      }

      /**
       * The assistive text for the button to go to previous page.
       */
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'backward-text'
      })],
      key: "backwardText",
      value() {
        return 'Previous page';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "page",
      value() {
        return 1;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatLabelText",
      value() {
        return ({
          count
        }) => `Page number, of ${count} page${count <= 1 ? '' : 's'}`;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatStatusWithDeterminateTotal",
      value() {
        return ({
          start,
          end,
          count
        }) => `${start}–${end} of ${count} item${count <= 1 ? '' : 's'}`;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatStatusWithIndeterminateTotal",
      value() {
        return ({
          start,
          end,
          count
        }) => end == null ? `Item ${start}–` : `${start}–${end} item${count <= 1 ? '' : 's'}`;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: false
      })],
      key: "formatSupplementalText",
      value() {
        return ({
          count
        }) => this.pagesUnknown || !this.totalItems ? `page` : `of ${count} page${count <= 1 ? '' : 's'}`;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'is-last-page'
      })],
      key: "isLastPage",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'items-per-page-text'
      })],
      key: "itemsPerPageText",
      value() {
        return 'Items per page:';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'forward-text'
      })],
      key: "forwardText",
      value() {
        return 'Next page';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'page-input-disabled'
      })],
      key: "pageInputDisabled",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        attribute: 'page-size',
        reflect: true
      })],
      key: "pageSize",
      value() {
        return 10;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'page-size-input-disabled'
      })],
      key: "pageSizeInputDisabled",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'page-size-label-text'
      })],
      key: "pageSizeLabelText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'pages-unknown'
      })],
      key: "pagesUnknown",
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
        return PAGINATION_SIZE.MEDIUM;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "start",
      value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        attribute: 'total-items'
      })],
      key: "totalItems",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "totalPages",
      value() {
        return 1;
      }
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * The current page
       */
      /**
       * The formatter for the assistive text for screen readers to announce.
       * Should be changed upon the locale the UI is rendered with.
       */
      /**
       * The formatter, used with determinate the total pages. Should be changed upon the locale the UI is rendered with.
       */
      /**
       * The formatter, used with indeterminate the total pages. Should be changed upon the locale the UI is rendered with.
       */
      /**
       * The formatter for the text next to the select box. Should be changed upon the locale the UI is rendered with.
       */
      /**
       * `true` to explicitly state that user is at the last page.
       */
      /**
       * The translatable text indicating the number of items per page.
       */
      /**
       * `true` if the pagination UI should be disabled.
       */
      /**
       * The assistive text for the button to go to next page.
       */
      /**
       * true if the select box to change the page should be disabled.
       */
      /**
       * Number of items per page.
       */
      /**
       * true if the select box to change the items per page should be disabled.
       */
      /**
       * The label text for the UI to select page size.
       */
      /**
       * true if the total number of items is unknown.
       */
      /**
       * Specify the size of the Pagination.
       */
      /**
       * The row number where current page start with, index that starts with zero.
       */
      /**
       * The number of total items.
       */
      /**
       * The number of total pages.
       */
      function updated(changedProperties) {
        const {
          page,
          pageSize,
          totalItems
        } = this;
        const {
          selectorPageSizesSelect,
          selectorPagesSelect
        } = this.constructor;
        if (changedProperties.has('pageSize')) {
          this.shadowRoot.querySelector(selectorPageSizesSelect).value = pageSize;
        }
        if (changedProperties.has('pageSize') || changedProperties.has('start')) {
          // Default pageSize to effectively be 1 when we have a value of 0 to avoid
          // division by 0.
          this.totalPages = pageSize > 0 ? Math.ceil(totalItems / pageSize) : totalItems;
          this.shadowRoot.querySelector(selectorPagesSelect).value = this.page.toString();
        }
        if (changedProperties.has('page')) {
          this._handleUserInitiatedChangeStart((page - 1) * pageSize);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          page,
          disabled,
          forwardText,
          backwardText,
          itemsPerPageText,
          pageInputDisabled,
          pageSize,
          pageSizeInputDisabled,
          pagesUnknown,
          size,
          start,
          totalItems,
          totalPages,
          _handleClickPrevButton: handleClickPrevButton,
          _handleClickNextButton: handleClickNextButton,
          _handleSlotChange: handleSlotChange,
          formatLabelText,
          formatSupplementalText
        } = this;
        const {
          isLastPage = start + pageSize >= totalItems
        } = this;
        const prevButtonDisabled = disabled || start === 0;
        const nextButtonDisabled = disabled || isLastPage;
        const prevButtonClassMap = {
          [`${prefix}--btn`]: true,
          [`${prefix}--btn--icon-only`]: true,
          [`${prefix}--pagination__button`]: true,
          [`${prefix}--pagination__button--backward`]: true,
          [`${prefix}--pagination__button--no-index`]: prevButtonDisabled,
          [`${prefix}--btn--${size}`]: true,
          [`${prefix}--btn--ghost`]: true
        };
        const nextButtonClassMap = {
          [`${prefix}--btn`]: true,
          [`${prefix}--btn--icon-only`]: true,
          [`${prefix}--pagination__button`]: true,
          [`${prefix}--pagination__button--forward`]: true,
          [`${prefix}--pagination__button--no-index`]: nextButtonDisabled,
          [`${prefix}--btn--${size}`]: true,
          [`${prefix}--btn--ghost`]: true
        };
        const prevButtonClasses = Object.entries(prevButtonClassMap).filter(([, value]) => value === true).map(([key]) => key).join(' ');
        const nextButtonClasses = Object.entries(nextButtonClassMap).filter(([, value]) => value === true).map(([key]) => key).join(' ');
        return html(_t || (_t = _`
      <div class="${0}--pagination__left">
        <label for="select" class="${0}--pagination__text"
          ><slot name="label-text">${0}</slot></label
        >
        <cds-select
          ?disabled=${0}
          id="page-size-select"
          left-select
          pagination
          size="${0}"
          inline
          value="${0}">
          <slot @slotchange=${0}></slot>
        </cds-select>
        <span
          class="${0}--pagination__text ${0}--pagination__items-count"
          >${0}</span
        >
      </div>
      <div class="${0}--pagination__right">
        <label for="select" class="${0}--label ${0}--visually-hidden">
          ${0}
        </label>
        ${0}

        <div class="${0}--pagination__control-buttons">
          <cds-button
            pagination
            size="${0}"
            ?disabled="${0}"
            button-class-name="${0}"
            tooltip-text="${0}"
            @click="${0}">
            ${0}
          </cds-button>
          <cds-button
            tooltip-position="top-right"
            pagination
            size="${0}"
            ?disabled="${0}"
            button-class-name="${0}"
            tooltip-text="${0}"
            @click="${0}">
            ${0}
          </cds-button>
        </div>
      </div>
    `), prefix, prefix, itemsPerPageText, disabled || pageSizeInputDisabled, size, pageSize, handleSlotChange, prefix, prefix, this._renderStatusText(), prefix, prefix, prefix, formatLabelText({
          count: totalPages
        }), pagesUnknown || !totalItems ? html(_t2 || (_t2 = _`
              <span
                class="${0}--pagination__text ${0}--pagination__page-text"
                >${0}</span
              >

              <cds-select
                ?disabled=${0}
                id="pages-select"
                pagination
                size="${0}"
                inline
                value="${0}">
                ${0}
              </cds-select>
            `), prefix, prefix, formatSupplementalText({
          count: totalPages
        }), disabled || pageInputDisabled, size, page, Array.from(new Array(totalPages)).map((_item, index) => html(_t3 || (_t3 = _`
                      <cds-select-item value="${0}">
                        ${0}
                      </cds-select-item>
                    `), index + 1, index + 1))) : html(_t4 || (_t4 = _`
              <cds-select
                ?disabled=${0}
                id="pages-select"
                pagination
                size="${0}"
                inline
                value="${0}">
                ${0}
              </cds-select>
              <span class="${0}--pagination__text"
                >${0}</span
              >
            `), disabled || pageInputDisabled, size, page, Array.from(new Array(totalPages)).map((_item, index) => html(_t5 || (_t5 = _`
                      <cds-select-item value="${0}">
                        ${0}
                      </cds-select-item>
                    `), index + 1, index + 1)), prefix, formatSupplementalText({
          count: totalPages
        })), prefix, size, prevButtonDisabled, prevButtonClasses, backwardText, handleClickPrevButton, CaretLeft16({
          slot: 'icon'
        }), size, nextButtonDisabled, nextButtonClasses, forwardText, handleClickNextButton, CaretRight16({
          slot: 'icon'
        }));
      }

      /**
       * A selector that will return the select box for the current page.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorPagesSelect",
      value: function selectorPagesSelect() {
        return `${prefix}-select#pages-select`;
      }

      /**
       * A selector that will return the select box for page sizes.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorPageSizesSelect",
      value: function selectorPageSizesSelect() {
        return `${prefix}-select`;
      }

      /**
       * The name of the custom event fired after the current row number is changed.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChangeCurrent",
      value: function eventChangeCurrent() {
        return `${prefix}-pagination-changed-current`;
      }

      /**
       * The name of the custom event fired after the number of rows per page is changed from `<cds-page-sizes-select>`.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChangeSelect",
      value: function eventChangeSelect() {
        return `${prefix}-select-selected`;
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
    }]
  };
}, FocusMixin(HostListenerMixin(LitElement)));
export default CDSPagination;
//# sourceMappingURL=pagination.js.map
