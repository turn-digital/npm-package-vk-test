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

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import ChevronRight16 from "../../icons/chevron--right/16";
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import { ACCORDION_ITEM_BREAKPOINT } from './defs';
import styles from "././accordion.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { ACCORDION_ITEM_BREAKPOINT };

/**
 * Observes resize of the given element with the given resize observer.
 *
 * @param observer The resize observer.
 * @param elem The element to observe the resize.
 */
const observeResize = (observer, elem) => {
  if (!elem) {
    return null;
  }
  observer.observe(elem);
  return {
    release() {
      observer.unobserve(elem);
      return null;
    }
  };
};

/**
 * Accordion item.
 *
 * @element cds-accordion-item
 * @fires cds-accordion-item-beingtoggled
 *   The custom event fired before this accordion item is being toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of toggling this accordion item.
 * @fires cds-accordion-item-toggled - The custom event fired after this accordion item is toggled upon a user gesture.
 * @csspart expando The expando button.
 * @csspart expando-icon The expando icon.
 * @csspart title The title.
 * @csspart content The content.
 */
let CDSAccordionItem = _decorate([customElement(`${prefix}-accordion-item`)], function (_initialize, _FocusMixin) {
  class CDSAccordionItem extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSAccordionItem,
    d: [{
      kind: "field",
      key: "_hObserveResize",
      value() {
        return null;
      }
    }, {
      kind: "method",
      key: "_handleUserInitiatedToggle",
      value:
      /**
       * The current breakpoint.
       */

      /**
       * The handle for observing resize of the parent element of this element.
       */

      /**
       * Handles user-initiated toggle request of this accordion item.
       *
       * @param open The new open state.
       */
      function _handleUserInitiatedToggle(open = !this.open) {
        const init = {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: {
            open
          }
        };
        if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeToggle, init))) {
          const {
            selectorAccordionContent
          } = this.constructor;
          !this.open ? this.setAttribute('expanding', '') : this.setAttribute('collapsing', '');
          this.shadowRoot.querySelector(selectorAccordionContent).addEventListener('animationend', () => {
            this.removeAttribute('expanding');
            this.removeAttribute('collapsing');
          });
          this.open = open;
          this.dispatchEvent(new CustomEvent(this.constructor.eventToggle, init));
        }
        const content = this.shadowRoot.querySelector(`.${prefix}--accordion__wrapper`);
        if (this.open) {
          // accordion opens
          content.style.maxBlockSize = content.scrollHeight + 15 + 'px';
        } else {
          // accordion closes
          content.style.maxBlockSize = '';
        }
      }

      /**
       * Handler for the `click` event on the expando button.
       */
    }, {
      kind: "method",
      key: "_handleClickExpando",
      value: function _handleClickExpando() {
        this._handleUserInitiatedToggle();
      }

      /**
       * Handler for the `keydown` event on the expando button.
       */
    }, {
      kind: "field",
      key: "_handleKeydownExpando",
      value() {
        return ({
          key
        }) => {
          if (this.open && (key === 'Esc' || key === 'Escape')) {
            this._handleUserInitiatedToggle(false);
          }
        };
      }
    }, {
      kind: "field",
      key: "_resizeObserver",
      value() {
        return new ResizeObserver(records => {
          const {
            width
          } = records[records.length - 1].contentRect;
          const {
            _sizesBreakpoints: sizesBreakpoints
          } = this.constructor;
          this._currentBreakpoint = Object.keys(sizesBreakpoints).sort((lhs, rhs) => sizesBreakpoints[rhs] - sizesBreakpoints[lhs]).find(size => width >= sizesBreakpoints[size]);
          this.requestUpdate();
        });
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
        type: Boolean,
        reflect: true
      })],
      key: "open",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'title'
      })],
      key: "title",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * The `ResizeObserver` instance for observing element resizes for re-positioning floating menu position.
       */
      // TODO: Wait for `.d.ts` update to support `ResizeObserver`
      // @ts-ignore
      /**
       * `true` if the accordion item should be disabled.
       */
      /**
       * `true` if the accordion item should be open.
       */
      /**
       * The title text.
       */
      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'listitem');
        }
        _get(_getPrototypeOf(CDSAccordionItem.prototype), "connectedCallback", this).call(this);
        if (this._hObserveResize) {
          this._hObserveResize = this._hObserveResize.release();
        }
        this._hObserveResize = observeResize(this._resizeObserver, this);
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._hObserveResize) {
          this._hObserveResize = this._hObserveResize.release();
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          title,
          open,
          _currentBreakpoint: currentBreakpoint,
          _handleClickExpando: handleClickExpando,
          _handleKeydownExpando: handleKeydownExpando
        } = this;
        const {
          _classesBreakpoints: classesBreakpoints
        } = this.constructor;
        const {
          [currentBreakpoint]: classBreakpoint
        } = classesBreakpoints;
        const contentClasses = classMap({
          [classBreakpoint]: classBreakpoint,
          [`${prefix}--accordion__content`]: true
        });
        return html(_t || (_t = _`
      <button
        ?disabled="${0}"
        type="button"
        part="expando"
        class="${0}--accordion__heading"
        aria-controls="content"
        aria-expanded="${0}"
        @click="${0}"
        @keydown="${0}">
        ${0}
        <div part="title" class="${0}--accordion__title">
          <slot name="title">${0}</slot>
        </div>
      </button>
      <div class="${0}--accordion__wrapper">
        <div id="content" part="content" class="${0}">
          <slot></slot>
        </div>
      </div>
    `), disabled, prefix, open, handleClickExpando, handleKeydownExpando, ChevronRight16({
          part: 'expando-icon',
          class: `${prefix}--accordion__arrow`
        }), prefix, title, prefix, contentClasses);
      }

      /**
       * The CSS classes for breakpoints.
       *
       * @private
       */
    }, {
      kind: "get",
      static: true,
      key: "_classesBreakpoints",
      value: function _classesBreakpoints() {
        return {
          [ACCORDION_ITEM_BREAKPOINT.SMALL]: `${prefix}-ce--accordion__content--${ACCORDION_ITEM_BREAKPOINT.SMALL}`,
          [ACCORDION_ITEM_BREAKPOINT.MEDIUM]: `${prefix}-ce--accordion__content--${ACCORDION_ITEM_BREAKPOINT.MEDIUM}`
        };
      }

      /**
       * The breakpoints.
       *
       * @private
       */
    }, {
      kind: "get",
      static: true,
      key: "_sizesBreakpoints",
      value: function _sizesBreakpoints() {
        return {
          [ACCORDION_ITEM_BREAKPOINT.SMALL]: 480,
          [ACCORDION_ITEM_BREAKPOINT.MEDIUM]: 640
        };
      }

      /**
       * The name of the custom event fired before this accordion item is being toggled upon a user gesture.
       * Cancellation of this event stops the user-initiated action of toggling this accordion item.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeToggle",
      value: function eventBeforeToggle() {
        return `${prefix}-accordion-item-beingtoggled`;
      }

      /**
       * The name of the custom event fired after this accordion item is toggled upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventToggle",
      value: function eventToggle() {
        return `${prefix}-accordion-item-toggled`;
      }
    }, {
      kind: "get",
      static: true,
      key: "selectorAccordionContent",
      value: function selectorAccordionContent() {
        return `.${prefix}--accordion__content`;
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
}, FocusMixin(LitElement));
export default CDSAccordionItem;
//# sourceMappingURL=accordion-item.js.map
