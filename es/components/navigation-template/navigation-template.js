import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
import { prefix } from '../../globals/settings';
import { html, LitElement } from 'lit-element';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././navigation-template.css.js";
import '../turn-kase-header';
export let NavigationTemplate = _decorate([customElement(`${prefix}-navigation-template`)], function (_initialize, _LitElement) {
  class NavigationTemplate extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: NavigationTemplate,
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
        return html(_t || (_t = _` <cds-header aria-label="Valst Kasse" role="banner"> <cds-global-header></cds-global-header> <cds-side-nav aria-label="Side navigation" collapse-mode=""> <cds-side-nav-items> <cds-header-side-nav-items has-divider> <cds-side-nav-link href="javascript:void(0)"> Link 1 </cds-side-nav-link> <cds-side-nav-link href="javascript:void(0)"> Link 2 </cds-side-nav-link> <cds-side-nav-link href="javascript:void(0)"> Link 3 </cds-side-nav-link> <cds-side-nav-menu title="Link 4"> <cds-side-nav-menu-item href="#"> Sub-link 1 </cds-side-nav-menu-item> <cds-side-nav-menu-item href="#"> Sub-link 2 </cds-side-nav-menu-item> <cds-side-nav-menu-item href="#"> Sub-link 3 </cds-side-nav-menu-item> </cds-side-nav-menu> </cds-header-side-nav-items> <cds-dropdown value="foo"> <cds-dropdown-item value="foo"> Organisation 1 </cds-dropdown-item> <cds-dropdown-item value="bar"> Organisation 2 </cds-dropdown-item> <cds-dropdown-item value="baz"> Organisation 3 </cds-dropdown-item> </cds-dropdown> <hr> <cds-side-nav-menu title="Category title"> <cds-side-nav-menu-item href="#"> Link </cds-side-nav-menu-item> <cds-side-nav-menu-item href="#"> Link </cds-side-nav-menu-item> <cds-side-nav-menu-item href="#"> Link </cds-side-nav-menu-item> </cds-side-nav-menu> <cds-side-nav-menu title="Category title"> <cds-side-nav-menu-item href="#"> Link </cds-side-nav-menu-item> <cds-side-nav-menu-item aria-current="page" href="#"> Link </cds-side-nav-menu-item> <cds-side-nav-menu-item href="#"> Link </cds-side-nav-menu-item> </cds-side-nav-menu> <cds-side-nav-menu title="Category title"> <cds-side-nav-menu-item href="#"> Link </cds-side-nav-menu-item> <cds-side-nav-menu-item active href="#"> Link </cds-side-nav-menu-item> <cds-side-nav-menu-item href="#"> Link </cds-side-nav-menu-item> </cds-side-nav-menu> <hr> <cds-side-nav-link href="javascript:void(0)"> Link </cds-side-nav-link> <cds-side-nav-link href="javascript:void(0)"> Link </cds-side-nav-link> </cds-side-nav-items> </cds-side-nav> </cds-header> `));
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=navigation-template.js.map
