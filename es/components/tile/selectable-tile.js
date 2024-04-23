import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html, svg } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import Checkbox16 from "../../icons/checkbox/16";
import CheckboxCheckedFilled16 from "../../icons/checkbox--checked--filled/16";
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { TILE_COLOR_SCHEME } from './defs';
import styles from "././tile.css.js";
import HostListener from '../../globals/decorators/host-listener';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Multi-selectable tile.
 *
 * @element cds-selectable-tile
 * @fires cds-selectable-tile-changed - The custom event fired after this selectable tile changes its selected state.
 */
let CDSSelectableTile = _decorate([customElement(`${prefix}-selectable-tile`)], function (_initialize, _HostListenerMixin) {
  class CDSSelectableTile extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSelectableTile,
    d: [{
      kind: "field",
      decorators: [query('input')],
      key: "_inputNode",
      value: void 0
    }, {
      kind: "field",
      key: "_inputType",
      value() {
        return 'checkbox';
      }
    }, {
      kind: "field",
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * The `type` attribute of the `<input>`.
       */

      /**
       * `true` if there is a slug.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().filter(elem => {
          var _this$constructor;
          return elem.matches !== undefined ? elem.matches((_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.slugItem) : false;
        });
        if (hasContent.length > 0) {
          this._hasSlug = Boolean(hasContent);
          hasContent[0].setAttribute('size', 'xs');
        }
        this.requestUpdate();
      }

      /**
       * Handles `change` event on the `<input>` in the shadow DOM.
       */
    }, {
      kind: "method",
      key: "_handleChange",
      value: function _handleChange() {
        this.selected = this._inputNode.checked;
        const selected = this.selected;
        const {
          eventChange
        } = this.constructor;
        this.dispatchEvent(new CustomEvent(eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            selected
          }
        }));
      }

      /**
       * Handles the rendering of the icon.
       */
    }, {
      kind: "method",
      key: "_renderIcon",
      value: function _renderIcon() {
        const {
          selected,
          checkmarkLabel
        } = this;
        return html(_t || (_t = _` ${0}`), selected ? CheckboxCheckedFilled16({
          children: !checkmarkLabel ? undefined : svg(_t2 || (_t2 = _`<title>${0}</title>`), checkmarkLabel)
        }) : Checkbox16({
          children: !checkmarkLabel ? undefined : svg(_t3 || (_t3 = _`<title>${0}</title>`), checkmarkLabel)
        }));
      }

      /**
       * Listener function for keyboard interaction.
       *
       * @param event to get the key pressed
       */
    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeydown",
      value() {
        return event => {
          var _event$target;
          const {
            key
          } = event;
          if (key === ' ' || key === 'Enter' && !((_event$target = event.target) !== null && _event$target !== void 0 && _event$target.matches(this.constructor.slugItem))) {
            this.selected = !this.selected;
          }
        };
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'checkmark-label'
      })],
      key: "checkmarkLabel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'color-scheme',
        reflect: true
      })],
      key: "colorScheme",
      value() {
        return TILE_COLOR_SCHEME.REGULAR;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'has-rounded-corners'
      })],
      key: "hasRoundedCorners",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "name",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "selected",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "value",
      value: void 0
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * The a11y text for the checkmark icon of the selected state.
       */
      /**
       * The color scheme.
       */
      /**
       * Specify if the `SeletableTile` component should be rendered with rounded corners.
       * Only valid when `slug` prop is present
       */
      /**
       * The form name.
       */
      /**
       * `true` to show the selected state.
       */
      /**
       * The form value.
       */
      function updated() {
        if (this._hasSlug) {
          this.setAttribute('slug', '');
        } else {
          this.removeAttribute('slug');
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          colorScheme,
          hasRoundedCorners: hasRoundedCorners,
          name,
          selected,
          value,
          _inputType: inputType,
          _handleChange: handleChange,
          _hasSlug: hasSlug
        } = this;
        const classes = classMap({
          [`${prefix}--tile`]: true,
          [`${prefix}--tile--selectable`]: true,
          [`${prefix}--tile--is-selected`]: selected,
          [`${prefix}--tile--${colorScheme}`]: colorScheme,
          [`${prefix}--tile--slug-rounded`]: hasSlug && hasRoundedCorners
        });
        return html(_t4 || (_t4 = _`
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
        <div
          class="${0}--tile__checkmark ${0}--tile__checkmark--persistent">
          ${0}
        </div>
        <div class="${0}--tile-content"><slot></slot></div>
      </label>
      <slot name="slug" @slotchange="${0}"></slot>
    `), inputType, prefix, ifDefined(name), ifDefined(value), selected, handleChange, classes, prefix, prefix, this._renderIcon(), prefix, this._handleSlotChange);
      }

      /**
       * A selector that will return the slug item.
       */
    }, {
      kind: "get",
      static: true,
      key: "slugItem",
      value: function slugItem() {
        return `${prefix}-slug`;
      }

      /**
       * The name of the custom event fired after this selectable tile changes its selected state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-selectable-tile-changed`;
      }
    }, {
      kind: "field",
      static: true,
      key: "shadowRootOptions",
      value() {
        return _objectSpread(_objectSpread({}, LitElement.shadowRootOptions), {}, {
          delegatesFocus: true
        });
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
}, HostListenerMixin(FocusMixin(LitElement)));
export default CDSSelectableTile;
//# sourceMappingURL=selectable-tile.js.map
