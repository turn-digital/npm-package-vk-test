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

import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import Close16 from "../../icons/close/16";
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { TAG_SIZE, TAG_TYPE } from './defs';
import styles from "././tag.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { TAG_SIZE, TAG_TYPE };

/**
 * Tag.
 *
 * @fires cds-tag-beingclosed - The custom event fired as the element is being closed
 * @fires cds-tag-closed - The custom event fired after the element has been closed
 */
let CDSTag = _decorate([customElement(`${prefix}-tag`)], function (_initialize, _HostListenerMixin) {
  class CDSTag extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTag,
    d: [{
      kind: "field",
      decorators: [query('button')],
      key: "_buttonNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleSlugSlotChange",
      value:
      /**
       * Handles `slotchange` event.
       */
      function _handleSlugSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().filter(elem => elem.matches !== undefined ? elem.matches(this.constructor.slugItem) : false);
        if (hasContent.length > 0) {
          hasContent[0].setAttribute('tag', `${this.type}`);
          hasContent[0].setAttribute('size', 'sm');
          hasContent[0].setAttribute('kind', 'inline');
        }
        this.requestUpdate();
      }

      /**
       * Handles `click` event on this element.
       *
       * @param event The event.
       */
    }, {
      kind: "field",
      decorators: [HostListener('shadowRoot:click')],
      key: "_handleClick",
      value() {
        return event => {
          if (event.composedPath().indexOf(this._buttonNode) >= 0) {
            if (this.disabled) {
              event.stopPropagation();
            } else if (this.open) {
              const init = {
                bubbles: true,
                cancelable: true,
                composed: true,
                detail: {
                  triggeredBy: event.target
                }
              };
              if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose, init))) {
                this.open = false;
                this.dispatchEvent(new CustomEvent(this.constructor.eventClose, init));
              }
            }
          }
        };
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        reflect: true
      })],
      key: "title",
      value() {
        return 'Clear filter';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "hasCustomIcon",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "filter",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "open",
      value() {
        return true;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return TAG_SIZE.MEDIUM;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",
      value() {
        return TAG_TYPE.GRAY;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Text to show on filter tag "clear" buttons. Corresponds to the attribute with the same name
       */
      /**
       * `true` if the tag should be disabled
       */
      /**
       * Determine if is a filter/chip
       */
      /**
       * `true` if the tag should be open.
       */
      /**
       * The size of the tag.
       */
      /**
       * The type of the tag.
       */
      function render() {
        const {
          disabled,
          filter,
          _handleSlugSlotChange: handleSlugSlotChange,
          title
        } = this;
        return html(_t || (_t = _`
      <slot name="icon"></slot>
      <slot></slot>
      <slot name="slug" @slotchange="${0}"></slot>
      ${0}
    `), handleSlugSlotChange, filter ? html(_t2 || (_t2 = _`
            <button class="${0}--tag__close-icon" ?disabled=${0}>
              ${0}
            </button>
          `), prefix, disabled, Close16({
          'aria-label': title
        })) : ``);
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
       * The name of the custom event fired before this tag is being closed upon a user gesture.
       * Cancellation of this event stops the user-initiated action of closing this tag.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeClose",
      value: function eventBeforeClose() {
        return `${prefix}-tag-beingclosed`;
      }

      /**
       * The name of the custom event fired after this tag is closed upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventClose",
      value: function eventClose() {
        return `${prefix}-tag-closed`;
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
export default CDSTag;
//# sourceMappingURL=tag.js.map
