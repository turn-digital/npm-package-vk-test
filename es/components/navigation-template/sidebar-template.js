import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
import { prefix } from '../../globals/settings';
import { html, LitElement } from 'lit-element';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././sidebar-template.css.js";
import '../turn-avatar';
import List16 from "../../icons/list/16";
import Categories16 from "../../icons/categories/16";
import DocumentSigned16 from "../../icons/document--signed/16";
export let SidebarTemplate = _decorate([customElement(`${prefix}-sidebar-template`)], function (_initialize, _LitElement) {
  class SidebarTemplate extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: SidebarTemplate,
    d: [{
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
        return html(_t || (_t = _` <cds-side-nav aria-label="Side navigation" collapse-mode=""> <cds-side-nav-items> <cds-header-side-nav-items has-divider> <cds-side-nav-link href="javascript:void(0)">Maksājumi</cds-side-nav-link> <cds-side-nav-link href="javascript:void(0)">Pārskati</cds-side-nav-link> <cds-side-nav-link href="javascript:void(0)">Aizņēmumi</cds-side-nav-link> <cds-side-nav-link href="javascript:void(0)">Plāni un tāmes</cds-side-nav-link> <cds-side-nav-link href="javascript:void(0)">Pieteikumi</cds-side-nav-link> </cds-header-side-nav-items> <cds-dropdown value="foo"> <cds-dropdown-item value="foo">Organisation 1</cds-dropdown-item> <cds-dropdown-item value="bar">Organisation 2</cds-dropdown-item> <cds-dropdown-item value="baz">Organisation 3</cds-dropdown-item> </cds-dropdown> <div style="padding:12px 20px;display:flex;align-items:center"> <cds-avatar backgroundColor="green" symbols="MA"></cds-avatar> <p style="margin-left:15px;font-size:14px;font-weight:600"> Maksimum </p> </div> <cds-side-nav-link href="javascript:void(0)">${0}Pakalpojumu katalogs</cds-side-nav-link> <cds-side-nav-link href="javascript:void(0)">${0}Parakstīšana</cds-side-nav-link> <cds-side-nav-menu title="Pieteikumu saraksts">${0} <cds-side-nav-menu-item href="#">Link</cds-side-nav-menu-item> <cds-side-nav-menu-item active aria-current="page" href="#">Link</cds-side-nav-menu-item> <cds-side-nav-menu-item href="#">Link</cds-side-nav-menu-item> </cds-side-nav-menu> <cds-side-nav-link href="javascript:void(0)">${0}Pilnvarotie</cds-side-nav-link> <cds-side-nav-link href="javascript:void(0)">${0}Lietotāji</cds-side-nav-link> </cds-side-nav-items></cds-side-nav> `), Categories16({
          slot: 'title-icon'
        }), DocumentSigned16({
          slot: 'title-icon'
        }), List16({
          slot: 'title-icon'
        }), DocumentSigned16({
          slot: 'title-icon'
        }), List16({
          slot: 'title-icon'
        }));
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=sidebar-template.js.map
