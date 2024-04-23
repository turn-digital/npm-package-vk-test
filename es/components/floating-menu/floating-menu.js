import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement } from 'lit';
import HostListener from '../../globals/decorators/host-listener';
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { FLOATING_MENU_DIRECTION, FLOATING_MENU_POSITION_DIRECTION } from './defs';
import { prefix } from '../../globals/settings';
export { FLOATING_MENU_DIRECTION, FLOATING_MENU_POSITION_DIRECTION };

/**
 * Position of floating menu, or trigger button of floating menu.
 */

/**
 * Observes resize of the given element with the given resize observer.
 *
 * @param observer The resize observer.
 * @param elem The element to observe the resize.
 */
const observeResize = (observer, elem) => {
  observer.observe(elem);
  return {
    release() {
      observer.unobserve(elem);
      return null;
    }
  };
};

/**
 * @param elem The starting element.
 * @param selector The CSS selector.
 * @returns {Element}
 *   The closest ancestor node of the given element that matches the given selector, crossing Shadow DOM boundary.
 */
const closestComposed = (elem, selector) => {
  const found = elem.closest(selector);
  if (found) {
    return found;
  }
  const {
    host
  } = elem.getRootNode();
  if (host) {
    return closestComposed(host, selector);
  }
  return null;
};

/**
 * Floating menu.
 */
let CDSFloatingMenu = _decorate(null, function (_initialize, _HostListenerMixin) {
  class CDSFloatingMenu extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSFloatingMenu,
    d: [{
      kind: "field",
      key: "_hObserveResizeParent",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "_hObserveResizeContainer",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "_resizeObserver",
      value() {
        return new ResizeObserver(() => {
          const {
            container,
            open,
            parent,
            position
          } = this;
          if (container && open && parent) {
            const {
              direction,
              start,
              top
            } = position;
            this.style[direction !== FLOATING_MENU_POSITION_DIRECTION.RTL ? 'left' : 'right'] = `${start}px`;
            this.style.top = `${top}px`;
          }
        });
      }
    }, {
      kind: "field",
      decorators: [HostListener('focusout')],
      key: "_handleBlur",
      value() {
        return ({
          relatedTarget
        }) => {
          if (!this.contains(relatedTarget)) {
            const {
              parent
            } = this;
            if (parent && parent !== relatedTarget) {
              parent.open = false;
              HTMLElement.prototype.focus.call(this.parent); // SVGElement in IE11 does not have `.focus()` method
            }
          }
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_click",
      value() {
        return () => {
          const {
            parent
          } = this;
          if (parent) {
            parent.open = false;
          }
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeyDown",
      value() {
        return event => {
          if (event.key === 'Tab') {
            if (event.shiftKey) {
              const {
                parent
              } = this;
              if (parent) {
                parent.open = false;
              }
            }
          }
        };
      }
    }, {
      kind: "field",
      key: "parent",
      value() {
        return null;
      }
    }, {
      kind: "get",
      key: "container",
      value:
      /**
       * The handle for observing resize of the element containing the trigger button.
       */

      /**
       * The handle for observing resize of the floating menu container.
       */

      /**
       * The `ResizeObserver` instance for observing element resizes for re-positioning floating menu position.
       */
      // TODO: Wait for `.d.ts` update to support `ResizeObserver`
      // @ts-ignore

      /**
       * The DOM element, typically a custom element in this library, launching this floating menu.
       */

      /**
       * The menu direction.
       */

      /**
       * `true` if the menu should be open.
       */

      /**
       * `true` if the menu alignment should be flipped.
       */

      /**
       * The DOM element to put this menu into.
       */
      function container() {
        return closestComposed(this, this.constructor.selectorContainer) || this.ownerDocument.body;
      }

      /**
       * The position of this floating menu.
       */
    }, {
      kind: "get",
      key: "position",
      value: function position() {
        const {
          triggerPosition
        } = this.parent;
        if (!triggerPosition) {
          throw new TypeError('Missing information of trigger button position.');
        }
        const {
          container
        } = this;
        const {
          left: refLeft = 0,
          top: refTop = 0,
          right: refRight = 0
        } = triggerPosition;
        let {
          bottom: refBottom = 0
        } = triggerPosition;
        const {
          width,
          height
        } = this.getBoundingClientRect();
        const {
          left: containerLeft = 0,
          right: containerRight = 0,
          top: containerTop = 0
        } = container.getBoundingClientRect();
        refBottom = refBottom - containerTop;
        const containerComputedStyle = container.ownerDocument.defaultView.getComputedStyle(container);
        const positionDirection = containerComputedStyle.getPropertyValue('direction');
        const isRtl = positionDirection === FLOATING_MENU_POSITION_DIRECTION.RTL;
        const containerStartFromViewport = !isRtl ? containerLeft : container.ownerDocument.defaultView.innerWidth - containerRight;
        const refStartFromContainer = !isRtl ? refLeft - containerLeft : containerRight - refRight;
        const refEndFromContainer = !isRtl ? refRight - containerLeft : containerRight - refLeft;
        const refTopFromContainer = refTop - containerTop;
        if ((container !== this.ownerDocument.body || containerStartFromViewport !== 0 || containerTop !== 0) && containerComputedStyle.getPropertyValue('position') === 'static') {
          throw new Error('Floating menu container must not have `position:static`.');
        }
        const {
          flipped,
          direction
        } = this;
        if (Object.values(FLOATING_MENU_DIRECTION).indexOf(direction) < 0) {
          throw new Error(`Wrong menu position direction: ${direction}`);
        }
        const alignmentStart = flipped ? refEndFromContainer - width : refStartFromContainer;
        const {
          start,
          top
        } = {
          [FLOATING_MENU_DIRECTION.TOP]: () => ({
            start: alignmentStart,
            top: refTopFromContainer - height
          }),
          [FLOATING_MENU_DIRECTION.BOTTOM]: () => ({
            start: alignmentStart,
            top: refBottom
          })
        }[direction]();
        return {
          direction: positionDirection,
          start,
          top
        };
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this._hObserveResizeContainer) {
          this._hObserveResizeContainer = this._hObserveResizeContainer.release();
        }
        if (this._hObserveResizeParent) {
          this._hObserveResizeParent = this._hObserveResizeParent.release();
        }
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        const {
          container,
          open,
          parent
        } = this;
        if ((changedProperties.has('flipped') || changedProperties.has('direction') || changedProperties.has('open')) && open) {
          if (!parent) {
            this.parent = this.parentElement;
            container.appendChild(this);
          }
          // Note: `this.position` cannot be referenced until `this.parent` is set
          const {
            direction,
            start,
            top
          } = this.position;
          this.style[direction !== FLOATING_MENU_POSITION_DIRECTION.RTL ? 'left' : 'right'] = `${start}px`;
          this.style.top = `${top}px`;
        }
        if (changedProperties.has('open')) {
          if (this._hObserveResizeContainer) {
            this._hObserveResizeContainer = this._hObserveResizeContainer.release();
          }
          if (this._hObserveResizeParent) {
            this._hObserveResizeParent = this._hObserveResizeParent.release();
          }
          if (open) {
            var _this$parent;
            const {
              parentElement
            } = (_this$parent = this.parent) !== null && _this$parent !== void 0 ? _this$parent : {};
            this._hObserveResizeContainer = observeResize(this._resizeObserver, container);
            if (parentElement) {
              this._hObserveResizeParent = observeResize(this._resizeObserver, parentElement);
            }
          }
        }
      }

      /**
       * A constant indicating that this class is a floating menu.
       */
    }, {
      kind: "field",
      static: true,
      key: "FLOATING_MENU",
      value() {
        return true;
      }
    }, {
      kind: "get",
      static: true,
      key: "selectorContainer",
      value:
      /**
       * The CSS selector to find the element to put this floating menu in.
       */
      function selectorContainer() {
        return `[data-floating-menu-container],${prefix}-modal`;
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
    }]
  };
}, HostListenerMixin(FocusMixin(LitElement)));
export default CDSFloatingMenu;
//# sourceMappingURL=floating-menu.js.map
