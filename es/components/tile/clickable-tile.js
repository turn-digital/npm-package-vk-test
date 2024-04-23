import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import CDSLink from '../link/link';
import { TILE_COLOR_SCHEME } from './defs';
import styles from "././tile.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

// To Do: Replace with an an icon from `@carbon/icons`
// since the hollow slug in `ClickableTile` is not interactive
const hollowSlugIcon = html(_t || (_t = _` <svg
  class="${0}--tile--slug-icon"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" y="0.5" width="23" height="23" />
  <path
    d="M13.2436 16H11.5996L10.9276 13.864H7.95164L7.29164 16H5.68364L8.49164 7.624H10.4596L13.2436 16ZM10.5436 12.508L9.46364 9.064H9.40364L8.33564 12.508H10.5436ZM17.9341 16H14.1301V14.728H15.2341V8.896H14.1301V7.624H17.9341V8.896H16.8181V14.728H17.9341V16Z"
    fill="#161616" />
</svg>`), prefix);
/**
 * Clickable tile.
 *
 * @element cds-clickable-tile
 */
let CDSClickableTile = _decorate([customElement(`${prefix}-clickable-tile`)], function (_initialize, _CDSLink) {
  class CDSClickableTile extends _CDSLink {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSClickableTile,
    d: [{
      kind: "get",
      key: "_classes",
      value: function _classes() {
        const {
          colorScheme,
          disabled,
          hasRoundedCorners,
          slug
        } = this;
        return classMap({
          [`${prefix}--link`]: true,
          [`${prefix}--link--disabled`]: disabled,
          [`${prefix}--tile`]: true,
          [`${prefix}--tile--clickable`]: true,
          [`${prefix}--tile--${colorScheme}`]: colorScheme,
          [`${prefix}--tile--slug-rounded`]: slug && hasRoundedCorners
        });
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
        attribute: 'link-role'
      })],
      key: "linkRole",
      value() {
        return 'button';
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
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "slug",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_renderInner",
      value:
      /**
       * The a11y role for `<a>`.
       */
      /**
       * Specify if the `ClickableTile` component should be rendered with rounded corners.
       * Only valid when `slug` prop is present
       */
      /**
       * @returns The inner content.
       */
      function _renderInner() {
        return html(_t2 || (_t2 = _` ${0} ${0} `), _get(_getPrototypeOf(CDSClickableTile.prototype), "_renderInner", this).call(this), this.slug ? hollowSlugIcon : '');
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
}, CDSLink);
export default CDSClickableTile;
//# sourceMappingURL=clickable-tile.js.map
