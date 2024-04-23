import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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
import { property, query } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { INPUT_SIZE } from '../text-input/text-input';
import CDSSearch from '../search/search';
import styles from "././data-table.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Table toolbar search.
 *
 * @element cds-table-toolbar-search
 * @fires cds-search-input - The custom event fired after the search content is changed upon a user gesture.
 */
let CDSTableToolbarSearch = _decorate([customElement(`${prefix}-table-toolbar-search`)], function (_initialize, _HostListenerMixin) {
  class CDSTableToolbarSearch extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTableToolbarSearch,
    d: [{
      kind: "field",
      decorators: [query('input')],
      key: "_inputNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleUserInitiatedExpand",
      value:
      /**
       * Handles user-initiated gestures for expanding the search box.
       */
      async function _handleUserInitiatedExpand() {
        this.expanded = true;
        await this.updateComplete;
        const {
          _inputNode: inputNode
        } = this;
        inputNode === null || inputNode === void 0 || inputNode.focus();
      }

      /**
       * Handles `focus` event handler on this element.
       */
    }, {
      kind: "method",
      decorators: [HostListener('focusin')],
      key: "_handleFocusIn",
      value: function _handleFocusIn() {
        this._handleUserInitiatedExpand();
      }

      /**
       * Handles `blur` event handler on this element.
       *
       * @param event The event.
       */
    }, {
      kind: "method",
      decorators: [HostListener('focusout')],
      key: "_handleFocusOut",
      value: function _handleFocusOut(event) {
        if (!this.contains(event.relatedTarget) && !this.value && !this.persistent) {
          this.expanded = false;
        }
      }

      /**
       * Handles `click` event handler on the search box.
       */
    }, {
      kind: "method",
      key: "_handleSearchClick",
      value: function _handleSearchClick() {
        this._handleUserInitiatedExpand();
      }

      /**
       * `true` if the search box should be expanded.
       */
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "expanded",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "persistent",
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
        return INPUT_SIZE.LARGE;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * `true` if the search box should be always be open.
       */
      /**
       * The search box size.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'search');
        }
        _get(_getPrototypeOf(CDSTableToolbarSearch.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const result = _get(_getPrototypeOf(CDSTableToolbarSearch.prototype), "render", this).call(this);
        const {
          persistent,
          expanded,
          size,
          _handleSearchClick: handleSearchClick
        } = this;
        const classes = classMap({
          [`${prefix}--search`]: true,
          [`${prefix}--search--${size}`]: size
        });
        if (persistent) {
          this.expanded = true;
        }
        return html(_t || (_t = _`
      <div
        class="${0}"
        tabindex="${0}"
        @click="${0}">
        ${0}
      </div>
    `), classes, expanded ? '-1' : '0', handleSearchClick, result);
      }

      /**
       * The name of the custom event fired after the search content is changed upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventInput",
      value: function eventInput() {
        // The code uses on in `<cds-search>`, but definition is done also here for React event generation
        return `${prefix}-search-input`;
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
}, HostListenerMixin(CDSSearch));
export default CDSTableToolbarSearch;
//# sourceMappingURL=table-toolbar-search.js.map
