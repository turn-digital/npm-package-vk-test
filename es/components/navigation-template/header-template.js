import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
import { prefix } from '../../globals/settings';
import { html, LitElement } from 'lit-element';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././header-template.css.js";
import Search20 from "../../icons/search/20";
import Notification20 from "../../icons/notification/20";
import SwitcherIcon20 from "../../icons/switcher/20";
export let HeaderTemplate = _decorate([customElement(`${prefix}-header-template`)], function (_initialize, _LitElement) {
  class HeaderTemplate extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: HeaderTemplate,
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
        return html(_t || (_t = _` <cds-header aria-label="IBM Platform Name"> <cds-header-menu-button button-label-active="Close menu" button-label-inactive="Open menu"></cds-header-menu-button> <cds-header-name href="javascript:void 0">Valsts kase</cds-header-name> <cds-header-nav menu-bar-label="IBM [Platform]"> <cds-header-nav-item href="javascript:void 0">Link 1</cds-header-nav-item> <cds-header-nav-item href="javascript:void 0">Link 2</cds-header-nav-item> <cds-header-nav-item href="javascript:void 0">Link 3</cds-header-nav-item> <cds-header-menu is-active menu-label="Link 4" trigger-content="Link 4"> <cds-header-menu-item href="javascript:void 0">Sub-link 1</cds-header-menu-item> <cds-header-menu-item href="javascript:void 0">Sub-link 2</cds-header-menu-item> <cds-header-menu-item href="javascript:void 0">Sub-link 3</cds-header-menu-item> </cds-header-menu> </cds-header-nav> <div class="cds--header__global"> <cds-header-global-action aria-label="Search" tooltip-text="Search"> ${0} </cds-header-global-action> <cds-header-global-action aria-label="Notification" tooltip-text="Notification"> ${0} </cds-header-global-action> <cds-header-global-action aria-label="App Switcher" tooltip-text="App Switcher" tooltip-alignment="right"> ${0} </cds-header-global-action> </div> <cds-side-nav is-not-persistent aria-label="Side navigation" collapse-mode=""> <cds-side-nav-items> <cds-side-nav-link href="javascript:void(0)"> Link 1 </cds-side-nav-link> <cds-side-nav-link href="javascript:void(0)"> Link 2 </cds-side-nav-link> <cds-side-nav-link href="javascript:void(0)"> Link 3 </cds-side-nav-link> <cds-side-nav-menu title="Link 4"> <cds-side-nav-menu-item href=""> Sub-link 1 </cds-side-nav-menu-item> <cds-side-nav-menu-item href=""> Sub-link 2 </cds-side-nav-menu-item> <cds-side-nav-menu-item href=""> Sub-link 3 </cds-side-nav-menu-item> </cds-side-nav-menu> </cds-side-nav-items> </cds-side-nav> </cds-header> `), Search20({
          slot: 'icon'
        }), Notification20({
          slot: 'icon'
        }), SwitcherIcon20({
          slot: 'icon'
        }));
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=header-template.js.map
