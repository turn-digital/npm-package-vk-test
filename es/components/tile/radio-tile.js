import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, svg } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { prefix } from '../../globals/settings';
import SelectableTile from './selectable-tile';
import CheckmarkFilled16 from "../../icons/checkmark--filled/16";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Single-selectable tile.
 *
 * @element cds-radio-tile
 * @fires cds-radio-tile-selected
 *   The name of the custom event fired after this selectable tile changes its selected state.
 */
let CDSRadioTile = _decorate([customElement(`${prefix}-radio-tile`)], function (_initialize, _SelectableTile) {
  class CDSRadioTile extends _SelectableTile {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSRadioTile,
    d: [{
      kind: "field",
      key: "_inputType",
      value() {
        return 'radio';
      }
    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * The `type` attribute of the `<input>`.
       */

      /**
       * Handles `change` event on the `<input>` in the shadow DOM.
       */
      function _handleChange() {
        this.selected = true;
        const {
          selected,
          name
        } = this;
        const {
          eventRadioChange
        } = this.constructor;
        this.dispatchEvent(new CustomEvent(eventRadioChange, {
          bubbles: true,
          composed: true,
          detail: {
            selected,
            name
          }
        }));
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          colorScheme,
          checkmarkLabel,
          name,
          selected,
          value,
          _inputType: inputType,
          _handleChange: handleChange
        } = this;
        const classes = classMap({
          [`${prefix}--tile`]: true,
          [`${prefix}--tile--selectable`]: true,
          [`${prefix}--tile--is-selected`]: selected,
          [`${prefix}--tile--${colorScheme}`]: colorScheme
        });
        return html(_t || (_t = _`
      <input
        type="${0}"
        id="input"
        class="${0}--tile-input"
        tabindex="-1"
        name="${0}"
        value="${0}"
        .checked=${0}
        @change=${0} />
      <label for="input" class="${0}" tabindex="0">
        <div class="${0}--tile__checkmark">
          ${0}
        </div>
        <div class="${0}--tile-content"><slot></slot></div>
      </label>
    `), inputType, prefix, ifDefined(name), ifDefined(value), selected, handleChange, classes, prefix, CheckmarkFilled16({
          children: !checkmarkLabel ? undefined : svg(_t2 || (_t2 = _`<title>${0}</title>`), checkmarkLabel)
        }), prefix);
      }

      /**
       * The name of the custom event fired after this selectable tile changes its selected state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventRadioChange",
      value: function eventRadioChange() {
        return `${prefix}-radio-tile-selected`;
      }
    }]
  };
}, SelectableTile);
export default CDSRadioTile;
//# sourceMappingURL=radio-tile.js.map
