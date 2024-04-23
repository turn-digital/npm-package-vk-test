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

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { TILE_COLOR_SCHEME } from './defs';
import styles from "././tile.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { TILE_COLOR_SCHEME };

/**
 * Basic tile.
 *
 * @element cds-tile
 */
let CDSTile = _decorate([customElement(`${prefix}-tile`)], function (_initialize, _LitElement) {
  class CDSTile extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTile,
    d: [{
      kind: "field",
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * `true` if there is a slug.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().filter(elem => elem.matches !== undefined ? elem.matches(this.constructor.slugItem) : false);
        if (hasContent.length > 0) {
          this._hasSlug = Boolean(hasContent);
          hasContent[0].setAttribute('size', 'xs');
        }
        this.requestUpdate();
      }

      /**
       * The color scheme.
       */
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",
      value() {
        return TILE_COLOR_SCHEME.REGULAR;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'has-rounded-corners'
      })],
      key: "hasRoundedCorners",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * Specify if the `Tile` component should be rendered with rounded corners.
       * Only valid when `slug` prop is present
       */
      function updated() {
        const anchorTag = this.querySelector('a');
        if (anchorTag) {
          anchorTag === null || anchorTag === void 0 || anchorTag.classList.add(`${prefix}--link`);
          anchorTag.before(document.createElement('br'));
          anchorTag.before(document.createElement('br'));
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
        return html(_t || (_t = _` <slot></slot
      ><slot name="slug" @slotchange="${0}"></slot>`), this._handleSlotChange);
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
export default CDSTile;
//# sourceMappingURL=tile.js.map
