import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import CDSToggleTip from '../toggle-tip/toggletip';
import styles from "././slug.css.js";
import Undo16 from "../../icons/undo/16";
import { SLUG_SIZE, SLUG_KIND, SLUG_DOT_TYPE } from './defs';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Basic slug.
 *
 * @element cds-slug
 */
let CDSSlug = _decorate([customElement(`${prefix}-slug`)], function (_initialize, _CDSToggleTip) {
  class CDSSlug extends _CDSToggleTip {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSlug,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "slot",
      value() {
        return 'slug';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'ai-text'
      })],
      key: "aiText",
      value() {
        return 'AI';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'ai-text-label'
      })],
      key: "aiTextLabel",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'dot-type'
      })],
      key: "dotType",
      value() {
        return SLUG_DOT_TYPE.DEFAULT;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "kind",
      value() {
        return SLUG_KIND.DEFAULT;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'revert-active'
      })],
      key: "revertActive",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'revert-label'
      })],
      key: "revertLabel",
      value() {
        return 'Revert to AI input';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return SLUG_SIZE.EXTRA_SMALL;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'slug-label'
      })],
      key: "slugLabel",
      value() {
        return 'Show information';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "previousValue",
      value: void 0
    }, {
      kind: "field",
      key: "_handleClick",
      value() {
        return () => {
          if (this.revertActive) {
            this.revertActive = false;
            this.removeAttribute('revert-active');
          } else {
            this.open = !this.open;
          }
        };
      }
    }, {
      kind: "field",
      key: "_renderToggleTipLabel",
      value() {
        return () => {
          return html(_t || (_t = _``));
        };
      }
    }, {
      kind: "field",
      key: "_renderTooltipButton",
      value() {
        return () => {
          const {
            size,
            kind,
            aiText,
            aiTextLabel,
            slugLabel
          } = this;
          const ariaLabel = `${aiText} - ${slugLabel}`;
          const classes = classMap({
            [`${prefix}--toggletip-button`]: true,
            [`${prefix}--slug__button`]: true,
            [`${prefix}--slug__button--${size}`]: size,
            [`${prefix}--slug__button--${kind}`]: kind,
            [`${prefix}--slug__button--inline-with-content`]: kind === SLUG_KIND.INLINE && aiTextLabel
          });
          return html(_t2 || (_t2 = _`
      <button
        aria-controls="${0}"
        @click="${0}"
        class=${0}
        aria-label="${0}">
        <span class="${0}--slug__text">${0}</span>
        ${0}
      </button>
    `), this.id, this._handleClick, classes, ariaLabel, prefix, aiText, aiTextLabel && kind === SLUG_KIND.INLINE ? html(_t3 || (_t3 = _`
              <span class="${0}--slug__additional-text">
                ${0}
              </span>
            `), prefix, aiTextLabel) : ``);
        };
      }
    }, {
      kind: "field",
      key: "_renderInnerContent",
      value() {
        return () => {
          const {
            revertActive,
            revertLabel
          } = this;
          return html(_t4 || (_t4 = _`
      ${0}
    `), revertActive ? html(_t5 || (_t5 = _`
            <cds-icon-button
              kind="ghost"
              size="sm"
              @click="${0}">
              <span slot="tooltip-content"> ${0} </span>
              ${0}
            </cds-icon-button>
          `), this._handleClick, revertLabel, Undo16({
            slot: 'icon'
          })) : html(_t6 || (_t6 = _`
            ${0} ${0}
          `), this._renderTooltipButton(), this._renderTooltipContent()));
        };
      }
    }, {
      kind: "method",
      key: "attributeChangedCallback",
      value:
      /**
       * Specify the correct translation of the AI text
       */

      /**
       * Specify additional text to be rendered next to the AI label in the inline variant
       */

      /**
       * Specify the type of dot that should be rendered in front of the inline variant: (default, hollow)
       */

      /**
       * Specify the type of Slug, from the following list of types: (default, hollow, inline)
       */

      /**
       * Specify whether the revert button should be visible
       */

      /**
       * Specify whether the revert button should be visible
       */

      /**
       * Slug size should be mini, 2xs, xs, sm, md, lg, xl.
       */

      /**
       * Specify the text that will be provided to the aria-label of the `Slug` button
       */

      function attributeChangedCallback(name, old, newValue) {
        var _this$parentElement;
        _get(_getPrototypeOf(CDSSlug.prototype), "attributeChangedCallback", this).call(this, name, old, newValue);

        //@ts-ignore typescript does not think requestUpdate() exists on parentElement
        name === 'revert-active' ? (_this$parentElement = this.parentElement) === null || _this$parentElement === void 0 ? void 0 : _this$parentElement.requestUpdate() : ``;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        _get(_getPrototypeOf(CDSSlug.prototype), "updated", this).call(this, changedProperties);
        if (this.kind !== SLUG_KIND.HOLLOW && this.dotType !== SLUG_DOT_TYPE.HOLLOW) {
          this.setAttribute('enabled', '');
        } else {
          this.removeAttribute('enabled');
        }
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
}, CDSToggleTip);
export { CDSSlug as default };
//# sourceMappingURL=slug.js.map
