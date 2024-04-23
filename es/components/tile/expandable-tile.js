import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
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

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import ChevronDown16 from "../../icons/chevron--down/16";
import { prefix } from '../../globals/settings';
import HostListener from '../../globals/decorators/host-listener';
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { TILE_COLOR_SCHEME } from './defs';
import styles from "././tile.css.js";
import { classMap } from 'lit/directives/class-map.js';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Expandable tile.
 *
 * @element cds-expandable-tile
 * @fires cds-expandable-tile-beingtoggled
 *   The custom event fired before the expanded state is changed upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated change in expanded state.
 * @fires cds-expandable-tile-toggled - The custom event fired after a the expanded state is changed upon a user gesture.
 */
let CDSExpandableTile = _decorate([customElement(`${prefix}-expandable-tile`)], function (_initialize, _HostListenerMixin) {
  class CDSExpandableTile extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSExpandableTile,
    d: [{
      kind: "field",
      key: "_belowTheContentHeight",
      value() {
        return 0;
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
       * The computed height of the below-the-fold content.
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
       * Handles `slotchange` event on the below-the-fold content.
       *
       * @param event The event.
       */
    }, {
      kind: "method",
      key: "_handleSlotChangeBelowTheFoldContent",
      value: function _handleSlotChangeBelowTheFoldContent(event) {
        this._belowTheContentHeight = event.target.assignedNodes().reduce((acc, item) => {
          var _offsetHeight;
          return acc + ((_offsetHeight = item.offsetHeight) !== null && _offsetHeight !== void 0 ? _offsetHeight : 0);
        }, 0);
        if (!this._belowTheContentHeight) {
          const element = getComputedStyle(this.querySelector('cds-tile-below-the-fold-content'));
          this._belowTheContentHeight = parseInt(element.height, 10);
        }
        this.requestUpdate();
      }
    }, {
      kind: "method",
      key: "_handleExpand",
      value: function _handleExpand() {
        const expanded = !this.expanded;
        this.focus();
        const init = {
          bubbles: true,
          composed: true,
          detail: {
            expanded
          }
        };
        const constructor = this.constructor;
        const beforeChangeEvent = new CustomEvent(constructor.eventBeforeToggle, _objectSpread(_objectSpread({}, init), {}, {
          cancelable: true
        }));
        if (this.dispatchEvent(beforeChangeEvent)) {
          this.expanded = expanded;
          const afterChangeEvent = new CustomEvent(constructor.eventToggle, init);
          this.dispatchEvent(afterChangeEvent);
        }
      }
    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_handleClick",
      value() {
        return () => {
          if (!this.withInteractive) {
            this._handleExpand();
          }
        };
      }
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
        reflect: true
      })],
      key: "expanded",
      value() {
        return false;
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
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'with-interactive'
      })],
      key: "withInteractive",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * The color scheme.
       */
      /**
       * `true` to expand this expandable tile.
       */
      /**
       * Specify if the `ExpandableTile` component should be rendered with rounded corners.
       * Only valid when `slug` prop is present
       */
      /**
       * `true` to expand this expandable tile.
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
          expanded,
          withInteractive,
          _belowTheContentHeight: belowTheContentHeight,
          _handleSlotChangeBelowTheFoldContent: handleSlotChangeBelowTheFoldContent
        } = this;
        const classes = classMap({
          [`${prefix}--tile__chevron`]: true,
          [`${prefix}--tile__chevron--interactive`]: withInteractive
        });
        return html(_t || (_t = _`
      <button
        class="${0}"
        aria-labelledby="above-the-fold-content"
        aria-controls="below-the-fold-content"
        tabindex="0"
        @click="${0}"
        aria-expanded="${0}">
        ${0}
      </button>
      <slot name="slug" @slotchange="${0}"></slot>
      <div id="content" class="${0}--tile-content">
        <div><slot name="above-the-fold-content"></slot></div>
        <div
          class="${0}-ce--expandable-tile--below-the-fold-content"
          style="${0}">
          <slot @slotchange="${0}"></slot>
        </div>
      </div>
    `), classes, withInteractive ? this._handleExpand : '', String(Boolean(expanded)), ChevronDown16({
          id: 'icon'
        }), this._handleSlotChange, prefix, prefix, ifDefined(!expanded ? undefined : `max-height: ${belowTheContentHeight}px`), handleSlotChangeBelowTheFoldContent);
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
       * The name of the custom event fired before the expanded state is changed upon a user gesture.
       * Cancellation of this event stops changing the user-initiated change in expanded state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeToggle",
      value: function eventBeforeToggle() {
        return `${prefix}-expandable-tile-beingtoggled`;
      }

      /**
       * The name of the custom event fired after a the expanded state is changed upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-expandable-tile-toggled`;
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
export default CDSExpandableTile;
//# sourceMappingURL=expandable-tile.js.map
