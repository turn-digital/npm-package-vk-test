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
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { forEach } from '../../globals/internal/collection-helpers';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././structured-list.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Structured list wrapper.
 *
 * @element cds-structured-list
 */
let CDSStructuredList = _decorate([customElement(`${prefix}-structured-list`)], function (_initialize, _FocusMixin) {
  class CDSStructuredList extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSStructuredList,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'selection-name'
      })],
      key: "selectionName",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "condensed",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "flush",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * The `name` attribute for the `<input>` for selection.
       * If present, this structured list will be a selectable one.
       */

      /**
       * Specify if structured list is condensed, default is false
       */

      /**
       * Specify if structured list is flush, default is false
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'table');
        }
        _get(_getPrototypeOf(CDSStructuredList.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        if (changedProperties.has('selectionName')) {
          // Propagate `selectionName` attribute to descendants until `:host-context()` gets supported in all major browsers
          forEach(this.querySelectorAll(this.constructor.selectorRowsWithHeader), elem => {
            elem.selectionName = this.selectionName;
          });
        }
        return true;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        const attributes = ['condensed', 'flush'];
        attributes.forEach(attr => {
          if (changedProperties.has(attr)) {
            // Propagate watched attribute to descendants until `:host-context()` gets supported in all major browsers
            forEach(this.querySelectorAll(this.constructor.selectorRowsWithHeader), elem => {
              this[`${attr}`] ? elem.setAttribute(attr, '') : elem.removeAttribute(attr);
            });
          }
        });
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          condensed,
          flush,
          selectionName
        } = this;
        const classes = classMap({
          [`${prefix}--structured-list`]: true,
          [`${prefix}--structured-list--selection`]: Boolean(selectionName),
          [`${prefix}--structured-list--condensed`]: condensed,
          [`${prefix}--structured-list--flush`]: flush
        });
        return html(_t || (_t = _`
      <section id="section" class=${0}><slot></slot></section>
    `), classes);
      }

      /**
       * The CSS selector to find the rows, including header rows.
       */
    }, {
      kind: "field",
      static: true,
      key: "selectorRowsWithHeader",
      value() {
        return `${prefix}-structured-list-row,${prefix}-structured-list-header-row`;
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
}, FocusMixin(LitElement));
export default CDSStructuredList;
//# sourceMappingURL=structured-list.js.map
