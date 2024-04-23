import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import CDSContentSwitcherItem from '../content-switcher/content-switcher-item';
import { TABS_TYPE } from './tabs';
import styles from "././tabs.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Basic tab.
 *
 * @element cds-tab
 */
let CDSTab = _decorate([customElement(`${prefix}-tab`)], function (_initialize, _CDSContentSwitcherIt) {
  class CDSTab extends _CDSContentSwitcherIt {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTab,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "highlighted",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",
      value() {
        return TABS_TYPE.REGULAR;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "tabTitle",
      value: void 0
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * `true` if this tab should be highlighted.
       * If `true`, parent `<cds-tabs>` selects/deselects this tab upon keyboard interaction.
       *
       * @private
       */

      /**
       * Tab type.
       */

      /**
       * The tab text content.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        // Retrieve content of the slot to use for aria-label.
        const content = target.assignedNodes();
        this.tabTitle = content[0].textContent;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'listitem');
        }
        _get(_getPrototypeOf(CDSTab.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          selected,
          tabTitle,
          _handleSlotChange: handleSlotChange
        } = this;
        // No `href`/`tabindex` to not to make this `<a>` click-focusable
        return html(_t || (_t = _`
      <a
        class="${0}--tabs__nav-link"
        role="tab"
        aria-label="${0}"
        tabindex="${0}"
        ?disabled="${0}"
        aria-selected="${0}">
        <slot @slotchange="${0}"></slot>
      </a>
    `), prefix, tabTitle, selected ? 0 : -1, disabled, Boolean(selected), handleSlotChange);
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
}, CDSContentSwitcherItem);
export { CDSTab as default };
//# sourceMappingURL=tab.js.map
