import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t;
import { prefix } from '../../globals/settings';
import { html, LitElement } from 'lit-element';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././kase-header.css.js";
import Avatar16 from "../../icons/user--avatar--filled/16";
import Avatar20 from "../../icons/user--avatar--filled/20";
import Logout16 from "../../icons/logout/16";
import '../ui-shell';
import '../dropdown';
import '../turn-avatar';
export let GlobalHeader = _decorate([customElement(`${prefix}-kase-header`)], function (_initialize, _LitElement) {
  class GlobalHeader extends _LitElement {
    constructor() {
      super();
      _initialize(this);
      this.handleEscapeKey = this.handleEscapeKey.bind(this);
    }
  }
  return {
    F: GlobalHeader,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(GlobalHeader.prototype), "connectedCallback", this).call(this);
        document.addEventListener('keydown', this.handleEscapeKey);
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(GlobalHeader.prototype), "disconnectedCallback", this).call(this);
        document.removeEventListener('keydown', this.handleEscapeKey);
      }
    }, {
      kind: "method",
      key: "handleEscapeKey",
      value: function handleEscapeKey(event) {
        if (event.key === 'Escape') {
          //@ts-ignore
          const popovers = this.shadowRoot.querySelectorAll('cds-popover[tabTip][open]');
          popovers.forEach(popover => popover.removeAttribute('open'));
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const handleClick = id => {
          //@ts-ignore
          const popover = this.shadowRoot.querySelector(id);
          const open = popover === null || popover === void 0 ? void 0 : popover.hasAttribute('open');
          open ? popover === null || popover === void 0 ? void 0 : popover.removeAttribute('open') : popover === null || popover === void 0 ? void 0 : popover.setAttribute('open', '');
        };
        return html(_t || (_t = _` <link rel="stylesheet" href="https://demo.turn.lv/kase/dist/assets/css/themes.css"> <div> <cds-header aria-label="IBM Platform Name" role="banner" class="cds-theme-zone-kase-header"> <cds-header-menu-button button-label-active="Close menu" button-label-inactive="Open menu"></cds-header-menu-button> <cds-header-name href="#">Valsts Kase</cds-header-name> <span class="header-nav-menu-container"><slot name="header-nav-content"></slot></span> <div class="cds--header__global"> <slot name="global-action"></slot> <div class="popover-tabtip-story cds-theme-zone-kase-header-popover popover"> <cds-popover tabTip id="popover-two" align="bottom-right"> <cds-button class="popover__button" aria-label="Iziet" tooltip-text="Iziet" tooltip-position="bottom" @click="${0}"> <span class="popover__button--icon" slot="icon">${0}</span> </cds-button> <cds-popover-content> <cds-item-padding-container vertical="03"> <div class="popover__person"> <p><slot name="user-name-right-panel"></slot></p> <span>${0}</span> </div> <cds-item-padding-container vertical="03"> <cds-switcher-item>Maini Data</cds-switcher-item> </cds-item-padding-container> <cds-switcher-divider></cds-switcher-divider> <cds-switcher-item>Iziet <span class="popover__logout">${0}</span></cds-switcher-item> </cds-item-padding-container></cds-popover-content> </cds-popover> </div> </div> </cds-header> <cds-side-nav aria-label="Side navigation" collapse-mode="" class="cds-theme-zone-kase-header-sidebar"> <cds-side-nav-items> <slot name="sidebar-mobile-nav-content"></slot> <slot name="sidebar-content"></slot> </cds-side-nav-items> </cds-side-nav> </div> `), () => handleClick('#popover-two'), Avatar20({
          fill: 'white'
        }), Avatar16(), Logout16());
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=kase-header.js.map
