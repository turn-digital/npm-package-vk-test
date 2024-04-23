import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2;
import { prefix } from '../../globals/settings';
import { html, LitElement } from 'lit-element';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././section-title.css.js";
import Information16 from "../../icons/information/16";
import '../tooltip/tooltip';

/**
 * Section Title.
 *
 * @element cds-section-title
 */

export let CDSSectionTitle = _decorate([customElement(`${prefix}-section-title`)], function (_initialize, _LitElement) {
  class CDSSectionTitle extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSectionTitle,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "title",
      value() {
        return 'Default Title';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "tooltipText",
      value() {
        return 'Default tooltip text';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "tooltipAlignment",
      value() {
        return 'bottom';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "showTooltip",
      value() {
        return true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          title,
          tooltipText,
          showTooltip,
          tooltipAlignment
        } = this;
        return html(_t || (_t = _` <div> <div class="section-title"> <div class="section-title__title">${0}</div> ${0} </div> <div class="underline"></div> </div> `), title, showTooltip ? html(_t2 || (_t2 = _`<div class="section-title__tooltip"> <cds-tooltip align="${0}"> <div class="sb-tooltip-trigger" aria-labelledby="content"> ${0} </div> <cds-tooltip-content id="content"> ${0} </cds-tooltip-content> </cds-tooltip> </div> `), tooltipAlignment, Information16(), tooltipText) : '');
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=section-title.js.map
