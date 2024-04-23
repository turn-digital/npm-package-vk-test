import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
import { prefix } from '../../globals/settings';
import { html, LitElement, property } from 'lit-element';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././item-padding-container.css.js";

/**
 * Section Title.
 *
 * @element cds-item-padding-container
 */ /**
     * Section Title.
     *
     * @element cds-item-padding-container
     */

export let CDSItemPaddingContainer = _decorate([customElement(`${prefix}-item-padding-container`)], function (_initialize, _LitElement) {
  class CDSItemPaddingContainer extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSItemPaddingContainer,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "vertical",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "horizontal",
      value() {
        return '';
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <div class="item-padding-container__vertical--${0} item-padding-container__horizontal--${0}"> <slot></slot> </div>`), this.vertical, this.horizontal);
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=item-padding-container.js.map
