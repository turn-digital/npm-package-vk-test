import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
import { prefix } from '../../globals/settings';
import { html, LitElement } from 'lit-element';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import styles from "././page-hero.css.js";

/**
 * Section Title.
 *
 * @element cds-page-hero
 */ /**
     * Section Title.
     *
     * @element cds-page-hero
     */

export let CDSPageHero = _decorate([customElement(`${prefix}-page-hero`)], function (_initialize, _LitElement) {
  class CDSPageHero extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSPageHero,
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
        return html(_t || (_t = _`<div class="main-content"> <div class="navigation"> <cds-breadcrumb> <cds-breadcrumb-item> <cds-breadcrumb-link href="/#">Breadcrumb 1</cds-breadcrumb-link> </cds-breadcrumb-item> <cds-breadcrumb-item> <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link> </cds-breadcrumb-item> <cds-breadcrumb-item> <cds-breadcrumb-link href="#">Breadcrumb 3</cds-breadcrumb-link> </cds-breadcrumb-item> <cds-breadcrumb-item> <cds-breadcrumb-link>Breadcrumb 4</cds-breadcrumb-link> </cds-breadcrumb-item> </cds-breadcrumb> </div> <div class="info"> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> </div> <div class="tabs"> <cds-tabs trigger-content="Select an item" value="staging"> <cds-tab id="tab-all" target="panel-all" value="all">Option 1</cds-tab> <cds-tab id="tab-cloudFoundry" target="panel-cloudFoundry" disabled="disabled" value="cloudFoundry">Option 2</cds-tab> <cds-tab id="tab-staging" target="panel-staging" value="staging">Option 3</cds-tab> <cds-tab id="tab-dea" target="panel-dea" value="dea">Option 4</cds-tab> <cds-tab id="tab-router" target="panel-router" value="router">Option 5</cds-tab> </cds-tabs> <div class="cds-ce-demo-devenv--tab-panels"> <div id="panel-all" role="tabpanel" aria-labelledby="tab-all" hidden> <h4>Content for option 1</h4> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> </div> <div id="panel-cloudFoundry" role="tabpanel" aria-labelledby="tab-cloudFoundry" hidden> <h4>Content for option 2</h4> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> </div> <div id="panel-staging" role="tabpanel" aria-labelledby="tab-staging" hidden> <h4>Content for option 3</h4> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> </div> <div id="panel-dea" role="tabpanel" aria-labelledby="tab-dea" hidden> <h4>Content for option 4</h4> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> </div> <div id="panel-router" role="tabpanel" aria-labelledby="tab-router" hidden> <h4>Content for option 5</h4> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> </div> </div> </div> </div>`));
      }
    }]
  };
}, LitElement);
//# sourceMappingURL=page-hero.js.map
