import _decorate from "@babel/runtime/helpers/esm/decorate";
let _2 = t => t,
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

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { SKELETON_TEXT_TYPE } from './defs';
import styles from "././skeleton-text.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { SKELETON_TEXT_TYPE };
function getRandomInt(min, max, n) {
  const randoms = [0.973051493507435, 0.15334737213558558, 0.5671034553053769];
  return Math.floor(randoms[n % 3] * (max - min + 1)) + min;
}

/**
 * Skeleton text.
 *
 * @element cds-skeleton-text
 */
let CDSSkeletonText = _decorate([customElement(`${prefix}-skeleton-text`)], function (_initialize, _LitElement) {
  class CDSSkeletonText extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSkeletonText,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",
      value() {
        return SKELETON_TEXT_TYPE.REGULAR;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "width",
      value() {
        return '100%';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "paragraph",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        reflect: true
      })],
      key: "lineCount",
      value() {
        return 3;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The type of skeleton text.
       */

      /**
       * width (in px or %) of single line of text or max-width of paragraph lines
       */

      /**
       * will generate multiple lines of text
       */

      /**
       * the number of lines in a paragraph
       */

      function render() {
        const {
          paragraph,
          lineCount,
          type,
          width
        } = this;
        const classes = classMap({
          [`${prefix}--skeleton__text`]: true,
          [`${prefix}--skeleton__heading`]: type === SKELETON_TEXT_TYPE.HEADING
        });
        if (paragraph) {
          const widthNum = parseInt(this.width, 10);
          const widthPx = this.width.includes('px');
          const widthPercent = this.width.includes('%');
          const lines = Array.apply(Array(lineCount));
          return html(_t || (_t = _2`${0}`), lines.map((_, i) => {
            const randomWidth = widthPercent && `${getRandomInt(0, 75, i)}px` || widthPx && `${getRandomInt(0, widthNum, i)}px`;
            const style = widthPercent && `width: calc(${width} - ${randomWidth})` || widthPx && `width: ${randomWidth}` || '';
            return html(_t2 || (_t2 = _2`<p class="${0}" style="${0}"></p>`), classes, style);
          }));
        }
        return html(_t3 || (_t3 = _2`<p class="${0}" style="width:${0}"></p>`), classes, width);
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
export default CDSSkeletonText;
//# sourceMappingURL=skeleton-text.js.map
