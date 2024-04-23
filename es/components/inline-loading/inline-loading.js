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
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import CheckmarkFilled16 from "../../icons/checkmark--filled/16";
import ErrorFilled16 from "../../icons/error--filled/16";
import { prefix } from '../../globals/settings';
import LOADING_TYPE from '../loading/types';
import getLoadingIcon from '../loading/loading-icon';
import { INLINE_LOADING_STATE } from './defs';
import styles from "././inline-loading.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { INLINE_LOADING_STATE };

/**
 * Lnline loading spinner.
 *
 * @element cds-inline-loading
 */
let CDSInlineLoading = _decorate([customElement(`${prefix}-inline-loading`)], function (_initialize, _LitElement) {
  class CDSInlineLoading extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSInlineLoading,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'assistive-text'
      })],
      key: "assistiveText",
      value() {
        return 'Loading';
      }
    }, {
      kind: "method",
      key: "_renderIcon",
      value:
      /**
       * The assistive text for the spinner icon.
       */

      /**
       * @returns The template for the status icon.
       */
      function _renderIcon() {
        const {
          assistiveText,
          status
        } = this;
        if (status === INLINE_LOADING_STATE.ERROR) {
          return ErrorFilled16({
            class: `${prefix}--inline-loading--error`
          });
        }
        if (status === INLINE_LOADING_STATE.FINISHED) {
          return CheckmarkFilled16({
            class: `${prefix}--inline-loading__checkmark-container`
          });
        }
        if (status === INLINE_LOADING_STATE.INACTIVE || status === INLINE_LOADING_STATE.ACTIVE) {
          const classes = classMap({
            [`${prefix}--loading`]: true,
            [`${prefix}--loading--small`]: true,
            [`${prefix}--loading--stop`]: status === INLINE_LOADING_STATE.INACTIVE
          });
          return html(_t || (_t = _`
        <div class="${0}">
          ${0}
        </div>
      `), classes, getLoadingIcon({
            assistiveText,
            type: LOADING_TYPE.SMALL
          }));
        }
        return undefined;
      }

      /**
       * The loading status.
       */
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "status",
      value() {
        return INLINE_LOADING_STATE.ACTIVE;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('aria-live')) {
          this.setAttribute('aria-live', 'assertive');
        }
        _get(_getPrototypeOf(CDSInlineLoading.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const statusIconResult = this._renderIcon();
        const statusIconWrapperResult = !statusIconResult ? undefined : html(_t2 || (_t2 = _`
          <div class="${0}--inline-loading__animation">
            ${0}
          </div>
        `), prefix, statusIconResult);
        return html(_t3 || (_t3 = _`
      ${0}
      <p class="${0}--inline-loading__text"><slot></slot></p>
    `), statusIconWrapperResult, prefix);
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
export default CDSInlineLoading;
//# sourceMappingURL=inline-loading.js.map
