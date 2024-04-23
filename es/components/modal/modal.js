import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { MODAL_SIZE } from './defs';
import styles from "././modal.css.js";
import { selectorTabbable as _selectorTabbable } from '../../globals/settings';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { MODAL_SIZE };

// eslint-disable-next-line no-bitwise
const PRECEDING = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINS;
// eslint-disable-next-line no-bitwise
const FOLLOWING = Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY;

/**
 * Tries to focus on the given elements and bails out if one of them is successful.
 *
 * @param elems The elements.
 * @param reverse `true` to go through the list in reverse order.
 * @returns `true` if one of the attempts is successful, `false` otherwise.
 */
function tryFocusElems(elems, reverse = false) {
  if (!reverse) {
    for (let i = 0; i < elems.length; ++i) {
      const elem = elems[i];
      elem.focus();
      if (elem.ownerDocument.activeElement === elem) {
        return true;
      }
    }
  } else {
    for (let i = elems.length - 1; i >= 0; --i) {
      const elem = elems[i];
      elem.focus();
      if (elem.ownerDocument.activeElement === elem) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Modal.
 *
 * @element cds-modal
 * @csspart dialog The dialog.
 * @fires cds-modal-beingclosed
 *   The custom event fired before this modal is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this modal.
 * @fires cds-modal-closed - The custom event fired after this modal is closed upon a user gesture.
 */
let CDSModal = _decorate([customElement(`${prefix}-modal`)], function (_initialize, _HostListenerMixin) {
  class CDSModal extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSModal,
    d: [{
      kind: "field",
      key: "_launcher",
      value() {
        return null;
      }
    }, {
      kind: "field",
      decorators: [query('#start-sentinel')],
      key: "_startSentinelNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query('#end-sentinel')],
      key: "_endSentinelNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_handleClick",
      value() {
        return event => {
          if (event.composedPath().indexOf(this.shadowRoot) < 0 && !this.preventCloseOnClickOutside) {
            this._handleUserInitiatedClose(event.target);
          }
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('shadowRoot:focusout')],
      key: "_handleBlur",
      value() {
        return async ({
          target,
          relatedTarget
        }) => {
          var _this$shadowRoot;
          const {
            open,
            _startSentinelNode: startSentinelNode,
            _endSentinelNode: endSentinelNode
          } = this;
          const oldContains = target !== this && this.contains(target);
          const currentContains = relatedTarget !== this && (this.contains(relatedTarget) || ((_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.contains(relatedTarget)) && relatedTarget !== endSentinelNode);

          // Performs focus wrapping if _all_ of the following is met:
          // * This modal is open
          // * The viewport still has focus
          // * Modal body used to have focus but no longer has focus
          const {
            selectorTabbable: selectorTabbableForModal
          } = this.constructor;
          if (open && relatedTarget && oldContains && !currentContains) {
            const comparisonResult = target.compareDocumentPosition(relatedTarget);
            // eslint-disable-next-line no-bitwise
            if (relatedTarget === startSentinelNode || comparisonResult & PRECEDING) {
              await this.constructor._delay();
              if (!tryFocusElems(this.querySelectorAll(selectorTabbableForModal), true) && relatedTarget !== this) {
                this.focus();
              }
            }
            // eslint-disable-next-line no-bitwise
            else if (relatedTarget === endSentinelNode || comparisonResult & FOLLOWING) {
              await this.constructor._delay();
              if (!tryFocusElems(this.querySelectorAll(selectorTabbableForModal))) {
                this.focus();
              }
            }
          }
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('document:keydown')],
      key: "_handleKeydown",
      value() {
        return ({
          key,
          target
        }) => {
          if (key === 'Esc' || key === 'Escape') {
            this._handleUserInitiatedClose(target);
          }
        };
      }
    }, {
      kind: "method",
      key: "_handleClickContainer",
      value:
      /**
       * The element that had focus before this modal gets open.
       */

      /**
       * Node to track focus going outside of modal content.
       */

      /**
       * Node to track focus going outside of modal content.
       */

      /**
       * Handles `click` event on this element.
       *
       * @param event The event.
       */

      /**
       * Handles `blur` event on this element.
       *
       * @param event The event.
       * @param event.target The event target.
       * @param event.relatedTarget The event relatedTarget.
       */

      /**
       * Handles `click` event on the modal container.
       *
       * @param event The event.
       */
      function _handleClickContainer(event) {
        if (event.target.matches(this.constructor.selectorCloseButton) && !this.preventClose) {
          this._handleUserInitiatedClose(event.target);
        }
      }

      /**
       * Handles user-initiated close request of this modal.
       *
       * @param triggeredBy The element that triggered this close request.
       */
    }, {
      kind: "method",
      key: "_handleUserInitiatedClose",
      value: function _handleUserInitiatedClose(triggeredBy) {
        if (this.open) {
          const init = {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: {
              triggeredBy
            }
          };
          if (this.dispatchEvent(new CustomEvent(this.constructor.eventBeforeClose, init))) {
            this.open = false;
            this.dispatchEvent(new CustomEvent(this.constructor.eventClose, init));
          }
        }
      }

      /**
       * Specify whether the Modal is displaying an alert, error or warning.
       * Should go hand in hand with the danger prop.
       */
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "alert",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'aria-label'
      })],
      key: "ariaLabel",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'container-class'
      })],
      key: "containerClass",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'full-width'
      })],
      key: "fullWidth",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'has-scrolling-content'
      })],
      key: "hasScrollingContent",
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
        reflect: true
      })],
      key: "size",
      value() {
        return MODAL_SIZE.MEDIUM;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'prevent-close-on-click-outside'
      })],
      key: "preventCloseOnClickOutside",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'prevent-close'
      })],
      key: "preventClose",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value:
      /**
       * Specify text for the accessibility label of the header
       */
      /**
       * The additional CSS class names for the container <div> of the element.
       */
      /**
       * Specify whether or not the Modal content should have any inner padding.
       */
      /**
       * Specify whether the modal contains scrolling content
       */
      /**
       * `true` if the modal should be open.
       */
      /**
       * Modal size.
       */
      /**
       * Prevent closing on click outside of modal
       */
      /**
       * Prevent the modal from closing after clicking the close button
       */
      function firstUpdated() {
        const body = this.querySelector(this.constructor.selectorModalBody);
        if (!body) {
          const bodyElement = document.createElement(this.constructor.selectorModalBody);
          this.appendChild(bodyElement);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          alert,
          ariaLabel,
          size,
          hasScrollingContent
        } = this;
        const containerClass = this.containerClass.split(' ').filter(Boolean).reduce((acc, item) => _objectSpread(_objectSpread({}, acc), {}, {
          [item]: true
        }), {});
        const containerClasses = classMap(_objectSpread({
          [`${prefix}--modal-container`]: true,
          [`${prefix}--modal-container--${size}`]: size
        }, containerClass));
        return html(_t || (_t = _`
      <a
        id="start-sentinel"
        class="${0}--visually-hidden"
        href="javascript:void 0"
        role="navigation"></a>
      <div
        aria-label=${0}
        part="dialog"
        class=${0}
        role="${0}"
        tabindex="-1"
        @click=${0}>
        <slot></slot>
        ${0}
      </div>
      <a
        id="end-sentinel"
        class="${0}--visually-hidden"
        href="javascript:void 0"
        role="navigation"></a>
    `), prefix, ariaLabel, containerClasses, alert ? 'alert' : 'dialog', this._handleClickContainer, hasScrollingContent ? html(_t2 || (_t2 = _` <div class="cds--modal-content--overflow-indicator"></div> `)) : ``, prefix);
      }
    }, {
      kind: "method",
      key: "updated",
      value: async function updated(changedProperties) {
        if (changedProperties.has('open')) {
          if (this.open) {
            this._launcher = this.ownerDocument.activeElement;
            const primaryFocusNode = this.querySelector(this.constructor.selectorPrimaryFocus);
            await this.constructor._delay();
            if (primaryFocusNode) {
              // For cases where a `carbon-web-components` component (e.g. `<cds-button>`) being `primaryFocusNode`,
              // where its first update/render cycle that makes it focusable happens after `<cds-modal>`'s first update/render cycle
              primaryFocusNode.focus();
            } else if (!tryFocusElems(this.querySelectorAll(this.constructor.selectorTabbable), true)) {
              this.focus();
            }
          } else if (this._launcher && typeof this._launcher.focus === 'function') {
            this._launcher.focus();
            this._launcher = null;
          }
        }
      }

      /**
       * @param ms The number of milliseconds.
       * @returns A promise that is resolves after the given milliseconds.
       */
    }, {
      kind: "method",
      static: true,
      key: "_delay",
      value: function _delay(ms = 0) {
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      }

      /**
       * A selector selecting buttons that should close this modal.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorCloseButton",
      value: function selectorCloseButton() {
        return `[data-modal-close],${prefix}-modal-close-button`;
      }

      /**
       * A selector selecting tabbable nodes.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTabbable",
      value: function selectorTabbable() {
        return _selectorTabbable;
      }

      /**
       * A selector selecting the nodes that should be focused when modal gets open.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorPrimaryFocus",
      value: function selectorPrimaryFocus() {
        return `[data-modal-primary-focus],${prefix}-modal-footer ${prefix}-button[kind="primary"]`;
      }

      /**
       * A selector selecting the modal body component
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorModalBody",
      value: function selectorModalBody() {
        return `${prefix}-modal-body`;
      }

      /**
       * The name of the custom event fired before this modal is being closed upon a user gesture.
       * Cancellation of this event stops the user-initiated action of closing this modal.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeClose",
      value: function eventBeforeClose() {
        return `${prefix}-modal-beingclosed`;
      }

      /**
       * The name of the custom event fired after this modal is closed upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventClose",
      value: function eventClose() {
        return `${prefix}-modal-closed`;
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
}, HostListenerMixin(LitElement));
export default CDSModal;
//# sourceMappingURL=modal.js.map
