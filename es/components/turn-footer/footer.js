import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
import { prefix } from '../../globals/settings';
import { html, LitElement } from 'lit-element';
import { property } from 'lit/decorators.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././footer.css.js";

/**
 * Section Title.
 *
 * @element cds-footer
 */ /**
     * Section Title.
     *
     * @element cds-footer
     */

export let CDSFooter = _decorate([customElement(`${prefix}-footer`)], function (_initialize, _LitElement) {
  class CDSFooter extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSFooter,
    d: [{
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "companyName",
      value() {
        return 'Valsts Kase';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "copyrightText",
      value() {
        return '© kase.gov.lv';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "copyrightYear",
      value() {
        return 2023;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "allRightsResserved",
      value() {
        return 'Visas tiesības aizsargātas';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "servicePortal",
      value() {
        return 'Pakalpojumu portāls';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "phoneNumberSectionText",
      value() {
        return 'Atbalsta dienesta tālrunis';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "phoneNumber",
      value() {
        return '67094368';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "emailSectionText",
      value() {
        return 'e-pasts';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "email",
      value() {
        return 'ekase@kase.gov.lv';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "workTimeSectionText",
      value() {
        return 'Darba laiks';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "workTime",
      value() {
        return 'P - Pk. 08.30 - 17.00';
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
        const {
          allRightsResserved,
          companyName,
          copyrightText,
          copyrightYear,
          servicePortal,
          phoneNumberSectionText,
          phoneNumber,
          emailSectionText,
          email,
          workTimeSectionText,
          workTime
        } = this;
        return html(_t || (_t = _` <link rel="stylesheet" href="https://demo.turn.lv/cfla_dist/assets/css/turn-carbon-grid.css"> <div class="footer cds--css-grid cds--css-grid--full-width"> <div class="footer--mobile-title cds--css-grid-column cds--sm:col-span-4"> ${0} </div> <div class="footer__section cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-4"> ${0} </div> <div class="footer__section footer__section--divider cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-4"> ${0}: <span>${0}</span> </div> <div class="footer__section footer__section--divider cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-4"> ${0}: <span>${0}</span> </div> <div class="footer__section footer__section--divider cds--css-grid-column cds--sm:col-span-4 cds--md:col-span-8 cds--lg:col-span-4"> ${0}: <span>${0}</span> </div> <div class="footer--mobile-info cds--css-grid-column cds--sm:col-span-4"> ${0}, ${0}. <span>${0}</span> </div> </div>`), companyName, servicePortal, phoneNumberSectionText, phoneNumber, emailSectionText, email, workTimeSectionText, workTime, copyrightText, copyrightYear, allRightsResserved);
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=footer.js.map
