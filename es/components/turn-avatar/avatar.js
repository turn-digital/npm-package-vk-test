import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2;
import { prefix } from '../../globals/settings';
import { html, LitElement, property } from 'lit-element';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././avatar.css.js";

/**
 * Section Title.
 *
 * @element cds-avatar
 */ /**
     * Section Title.
     *
     * @element cds-avatar
     */

export let CDSAvatar = _decorate([customElement(`${prefix}-avatar`)], function (_initialize, _LitElement) {
  class CDSAvatar extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSAvatar,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "symbols",
      value() {
        return 'VK';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "backgroundColor",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "avatarText",
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
        return html(_t || (_t = _` <div class="container"> <div class="avatar">${0}</div> ${0} </div>`), this.symbols, this.avatarText ? html(_t2 || (_t2 = _`<p class="avatar-text">${0}</p>`), this.avatarText) : ``);
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=avatar.js.map
