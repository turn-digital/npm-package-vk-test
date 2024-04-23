import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _2 = t => t,
  _t,
  _t2,
  _t3;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { prefix } from '../../globals/settings';
import HostListenerMixin from '../../globals/mixins/host-listener';
import HostListener from '../../globals/decorators/host-listener';
import { forEach } from '../../globals/internal/collection-helpers';
import ChevronRight16 from "../../icons/chevron--right/16";
import ChevronLeft16 from "../../icons/chevron--left/16";
import CDSContentSwitcher, { NAVIGATION_DIRECTION } from '../content-switcher/content-switcher';
import { TABS_KEYBOARD_ACTION, TABS_TYPE } from './defs';
import styles from "././tabs.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { NAVIGATION_DIRECTION, TABS_KEYBOARD_ACTION, TABS_TYPE };

/**
 * Tabs.
 *
 * @element cds-tabs
 * @fires cds-tabs-beingselected
 *   The custom event fired before a tab is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires cds-tabs-selected - The custom event fired after a a tab is selected upon a user gesture.
 */
let CDSTabs = _decorate([customElement(`${prefix}-tabs`)], function (_initialize, _HostListenerMixin) {
  class CDSTabs extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTabs,
    d: [{
      kind: "field",
      key: "_currentIndex",
      value() {
        return 0;
      }
    }, {
      kind: "field",
      key: "_totalTabs",
      value() {
        return 0;
      }
    }, {
      kind: "field",
      key: "_isScrollable",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "tablist",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "BUTTON_WIDTH",
      value() {
        return 44;
      }
    }, {
      kind: "method",
      key: "_navigate",
      value:
      /**
       * The latest status of this dropdown, for screen reader to accounce.
       */

      /**
       * The currently selected index
       */
      // @ts-ignore: TS thinks this method is not referred to

      /**
       * Total number of tabs in the component
       */

      /**
       * `true` if the tablist is scrollable
       */
      // @ts-ignore: TS thinks this method is not referred to

      /**
       * The DOM element for the tablist.
       */

      /**
       * The width of the overflow scroll buttons.
       */

      /**
       * Navigates through tabs.
       *
       * @param direction `-1` to navigate backward, `1` to navigate forward.
       * @param [options] The options.
       * @param [options.immediate]
       *   Defaults to `true`
       *   `true` to make it "immediate selection change" mode, which does:
       *
       *   Starts with the selected item
       *   Going prev/next item immediately changes the selection
       */
      function _navigate(direction, {
        immediate = true
      } = {}) {
        const {
          selectorItem,
          selectorItemHighlighted,
          selectorItemSelected
        } = this.constructor;
        const nextItem = this._getNextItem(this.querySelector(immediate ? selectorItemSelected : selectorItemHighlighted), direction);
        if (!nextItem) {
          return;
        }
        if (immediate) {
          this._handleUserInitiatedSelectItem(nextItem);
        } else {
          forEach(this.querySelectorAll(selectorItem), item => {
            item[immediate ? 'selected' : 'highlighted'] = nextItem === item;
          });
        }

        // Using `{ block: 'nearest' }` to prevent scrolling unless scrolling is absolutely necessary.
        // `scrollIntoViewOptions` seems to work in latest Safari despite of MDN/caniuse table.
        // IE falls back to the old behavior.
        nextItem.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
        const nextItemText = nextItem.textContent;
        if (nextItemText) {
          this._assistiveStatusText = nextItemText;
        }
        this._currentIndex += direction;
        this.requestUpdate();
      }
    }, {
      kind: "method",
      decorators: [HostListener('click')],
      key: "_handleClick",
      value: function _handleClick(event) {
        _get(_getPrototypeOf(CDSTabs.prototype), "_handleClick", this).call(this, event);
      }
    }, {
      kind: "method",
      decorators: [HostListener('keydown')],
      key: "_handleKeydown",
      value: function _handleKeydown(event) {
        const {
          key
        } = event;
        const action = this.constructor.getAction(key);
        const enabledTabs = this.querySelectorAll(`${prefix}-tab:not([disabled])`);
        switch (action) {
          case TABS_KEYBOARD_ACTION.HOME:
            {
              const [firstEnabledTab] = enabledTabs;
              firstEnabledTab.scrollIntoView({
                block: 'nearest',
                inline: 'nearest'
              });
              this._handleUserInitiatedSelectItem(firstEnabledTab);
              this.requestUpdate();
            }
            break;
          case TABS_KEYBOARD_ACTION.END:
            {
              const lastEnabledTab = enabledTabs[enabledTabs.length - 1];
              lastEnabledTab.scrollIntoView({
                block: 'nearest',
                inline: 'nearest'
              });
              this._handleUserInitiatedSelectItem(lastEnabledTab);
              this.requestUpdate();
            }
            break;
          case TABS_KEYBOARD_ACTION.NAVIGATING:
            {
              const direction = NAVIGATION_DIRECTION[key];
              if (direction) {
                this._navigate(direction);
              }
            }
            break;
          default:
            break;
        }
      }

      /**
       * Handles click on overflow scroll buttons.
       *
       * @param _ Event object
       * @param [options] The options.
       * @param [options.direction] `-1` to scroll forward, `1` to scroll backward.
       */
    }, {
      kind: "method",
      key: "_handleScrollButtonClick",
      value: function _handleScrollButtonClick(_, {
        direction
      }) {
        if (!this.tablist) {
          return;
        }
        const {
          scrollLeft,
          clientWidth,
          scrollWidth
        } = this._contentContainerNode;
        switch (direction) {
          case -1:
            this._contentContainerNode.scrollLeft = Math.max(scrollLeft - scrollWidth / this._totalTabs * 1.5, 0);
            break;
          case 1:
            this._contentContainerNode.scrollLeft = Math.min(scrollLeft + scrollWidth / this._totalTabs * 1.5, scrollWidth - clientWidth) + 1;
            break;
          default:
            break;
        }
      }
    }, {
      kind: "method",
      key: "_handleSlotchange",
      value: function _handleSlotchange() {
        const {
          selectorItemSelected
        } = this.constructor;
        const selectedItem = this.querySelector(selectorItemSelected);
        const nextItem = this._getNextItem(selectedItem, 1);

        // Specifies child `<cds-tab>` to hide its divider instead of using CSS,
        // until `:host-context()` gets supported in all major browsers
        nextItem.hideDivider = true;
      }
    }, {
      kind: "method",
      key: "_selectionDidChange",
      value: function _selectionDidChange(itemToSelect) {
        _get(_getPrototypeOf(CDSTabs.prototype), "_selectionDidChange", this).call(this, itemToSelect);
        this._assistiveStatusText = this.selectedItemAssistiveText;
      }

      /**
       * The scrolling container.
       */
    }, {
      kind: "field",
      decorators: [query(`.${prefix}--tabs-nav-content-container`)],
      key: "_contentContainerNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${prefix}--tabs-nav-content`)],
      key: "_contentNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [state()],
      key: "_currentScrollPosition",
      value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [query(`.${prefix}--sub-content-left`)],
      key: "_intersectionLeftSentinelNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${prefix}--sub-content-right`)],
      key: "_intersectionRightSentinelNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selecting-items-assistive-text'
      })],
      key: "selectingItemsAssistiveText",
      value() {
        return 'Selecting items. Use up and down arrow keys to navigate.';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'selected-item-assistive-text'
      })],
      key: "selectedItemAssistiveText",
      value() {
        return 'Selected an item.';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'trigger-content'
      })],
      key: "triggerContent",
      value() {
        return '';
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
      decorators: [state()],
      key: "_isIntersectionLeftTrackerInContent",
      value() {
        return true;
      }
    }, {
      kind: "field",
      decorators: [state()],
      key: "_isIntersectionRightTrackerInContent",
      value() {
        return true;
      }
    }, {
      kind: "field",
      key: "_observerIntersection",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "_observeIntersectionContainer",
      value() {
        return records => {
          const {
            _intersectionLeftSentinelNode: intersectionLeftSentinelNode,
            _intersectionRightSentinelNode: intersectionRightSentinelNode
          } = this;
          records.forEach(({
            isIntersecting,
            target
          }) => {
            if (target === intersectionLeftSentinelNode) {
              this._isIntersectionLeftTrackerInContent = isIntersecting;
            }
            if (target === intersectionRightSentinelNode) {
              this._isIntersectionRightTrackerInContent = isIntersecting;
            }
          });
        };
      }
    }, {
      kind: "method",
      key: "_cleanAndCreateIntersectionObserverContainer",
      value:
      /**
       * The scrolling content.
       */
      /**
       * The current scroll position.
       */
      /**
       * The left-hand sentinel to track intersection with the host element.
       * If they intersect, the left-hand paginator button should be hidden.
       */
      /**
       * The right-hand sentinel to track intersection with the host element.
       * If they intersect, the right-hand paginator button should be hidden.
       */
      /**
       * An assistive text for screen reader to announce, telling the open state.
       */
      /**
       * An assistive text for screen reader to announce, telling that an item is selected.
       */
      /**
       * The content of the trigger button for narrow mode.
       */
      /**
       * Tabs type.
       */
      /**
       * `true` if left-hand scroll intersection sentinel intersects with the host element.
       * In this condition, the left-hand paginator button should be hidden.
       */
      /**
       * `true` if right-hand scroll intersection sentinel intersects with the host element.
       * In this condition, the right-hand paginator button should be hidden.
       */
      /**
       * The observer for the intersection of left-side content edge.
       */
      /**
       * The intersection observer callback for the scrolling container.
       *
       * @param records The intersection observer records.
       */
      /**
       * Cleans-up and creates the intersection observer for the scrolling container.
       *
       * @param [options] The options.
       * @param [options.create] `true` to create the new intersection observer.
       */
      function _cleanAndCreateIntersectionObserverContainer({
        create
      } = {}) {
        const {
          _intersectionLeftSentinelNode: intersectionLeftSentinelNode,
          _intersectionRightSentinelNode: intersectionRightSentinelNode
        } = this;
        if (this._observerIntersection) {
          this._observerIntersection.disconnect();
          this._observerIntersection = null;
        }
        if (create) {
          this._observerIntersection = new IntersectionObserver(this._observeIntersectionContainer, {
            root: this,
            threshold: 0
          });
          if (intersectionLeftSentinelNode) {
            this._observerIntersection.observe(intersectionLeftSentinelNode);
          }
          if (intersectionRightSentinelNode) {
            this._observerIntersection.observe(intersectionRightSentinelNode);
          }
        }
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this._cleanAndCreateIntersectionObserverContainer();
        _get(_getPrototypeOf(CDSTabs.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        _get(_getPrototypeOf(CDSTabs.prototype), "shouldUpdate", this).call(this, changedProperties);
        if (this.tablist) {
          const {
            clientWidth,
            scrollWidth
          } = this.tablist;
          this._isScrollable = scrollWidth > clientWidth;
        }
        const {
          selectorItem
        } = this.constructor;
        if (changedProperties.has('type')) {
          forEach(this.querySelectorAll(selectorItem), elem => {
            this._totalTabs++;
            elem.type = this.type;
          });
        }
        return true;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        const {
          selectorTablist
        } = this.constructor;
        const tablist = this.shadowRoot.querySelector(selectorTablist);
        this.tablist = tablist;
        this._cleanAndCreateIntersectionObserverContainer({
          create: true
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('value')) {
          const tab = this.querySelector(`${prefix}-tab[value="${this.value}"]`);
          if (tab) {
            var _tab$getBoundingClien, _tab$offsetLeft;
            const {
              width: tabWidth
            } = (_tab$getBoundingClien = tab === null || tab === void 0 ? void 0 : tab.getBoundingClientRect()) !== null && _tab$getBoundingClien !== void 0 ? _tab$getBoundingClien : {};
            const start = (_tab$offsetLeft = tab.offsetLeft) !== null && _tab$offsetLeft !== void 0 ? _tab$offsetLeft : 0;
            const end = tab.offsetLeft + tabWidth;

            // The start and end of the visible area of the tablist
            const visibleStart = this.tablist.scrollLeft + this.BUTTON_WIDTH;
            const visibleEnd = this.tablist.scrollLeft + this.tablist.clientWidth - this.BUTTON_WIDTH;

            // The beginning of the tab is clipped and not visible
            if (start < visibleStart) {
              this.tablist.scrollLeft = start - this.BUTTON_WIDTH;
            }

            // The end of the tab is clipped and not visible
            if (end > visibleEnd) {
              this.tablist.scrollLeft = end + this.BUTTON_WIDTH - this.tablist.clientWidth;
            }
          }
        }
        if (changedProperties.has('_currentScrollPosition')) {
          if (this._contentNode) {
            this._contentNode.style.insetInlineStart = `-${this._currentScrollPosition}px`;
          }
        }
      }

      /**
       * Render the previous button if tablist is wider than container.
       */
    }, {
      kind: "method",
      key: "renderPreviousButton",
      value: function renderPreviousButton() {
        const {
          _isIntersectionLeftTrackerInContent: isIntersectionLeftTrackerInContent
        } = this;
        const previousButtonClasses = classMap({
          [`${prefix}--tab--overflow-nav-button`]: true,
          [`${prefix}--tabs__nav-caret-left`]: true,
          [`${prefix}--tab--overflow-nav-button--previous`]: true,
          [`${prefix}--tab--overflow-nav-button--hidden`]: isIntersectionLeftTrackerInContent
        });
        return html(_t || (_t = _2`
      <button
        part="prev-button"
        tabindex="-1"
        aria-hidden="true"
        class="${0}"
        @click=${0}>
        ${0}
      </button>
    `), previousButtonClasses, _ => this._handleScrollButtonClick(_, {
          direction: NAVIGATION_DIRECTION.Left
        }), ChevronLeft16());
      }

      /**
       * Render the next button if tablist is wider than container.
       */
    }, {
      kind: "method",
      key: "renderNextButton",
      value: function renderNextButton() {
        const {
          _isIntersectionRightTrackerInContent: isIntersectionRightTrackerInContent
        } = this;
        const nextButtonClasses = classMap({
          [`${prefix}--tab--overflow-nav-button`]: true,
          [`${prefix}--tabs__nav-caret-right`]: true,
          [`${prefix}--tab--overflow-nav-button--next`]: true,
          [`${prefix}--tab--overflow-nav-button--hidden`]: isIntersectionRightTrackerInContent
        });
        return html(_t2 || (_t2 = _2`
      <button
        part="next-button"
        tabindex="-1"
        aria-hidden="true"
        class="${0}"
        @click=${0}>
        ${0}
      </button>
    `), nextButtonClasses, _ => this._handleScrollButtonClick(_, {
          direction: NAVIGATION_DIRECTION.Right
        }), ChevronRight16());
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _assistiveStatusText: assistiveStatusText,
          _handleSlotchange: handleSlotchange
        } = this;
        return html(_t3 || (_t3 = _2`
      ${0}
      <div class="${0}--tabs-nav-content-container">
        <div class="${0}--tabs-nav-content">
          <div class="${0}--tabs-nav">
            <div id="tablist" role="tablist" class="${0}--tab--list">
              <div class="${0}--sub-content-left"></div>
              <slot @slotchange=${0}></slot>
              <div class="${0}--sub-content-right"></div>
            </div>
          </div>
        </div>
      </div>
      ${0}
      <div
        class="${0}--assistive-text"
        role="status"
        aria-live="assertive"
        aria-relevant="additions text">
        ${0}
      </div>
    `), this.renderPreviousButton(), prefix, prefix, prefix, prefix, prefix, handleSlotchange, prefix, this.renderNextButton(), prefix, assistiveStatusText);
      }

      /**
       * Symbols of keys that triggers opening/closing menu and selecting/deselecting menu item.
       */
    }, {
      kind: "field",
      static: true,
      key: "TRIGGER_KEYS",
      value() {
        return new Set([' ', 'Enter']);
      }
    }, {
      kind: "get",
      static: true,
      key: "selectorItem",
      value:
      /**
       * A selector that will return tabs.
       */
      function selectorItem() {
        return `${prefix}-tab`;
      }

      /**
       * A selector that will return enabled tabs.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItemEnabled",
      value: function selectorItemEnabled() {
        return `${prefix}-tab:not([disabled])`;
      }

      /**
       * A selector that will return highlighted tabs.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItemHighlighted",
      value: function selectorItemHighlighted() {
        return `${prefix}-tab[highlighted]`;
      }

      /**
       * A selector that will return selected tabs.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorItemSelected",
      value: function selectorItemSelected() {
        return `${prefix}-tab[selected]`;
      }

      /**
       * A selector that returns the tablist
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorTablist",
      value: function selectorTablist() {
        return `.${prefix}--tab--list`;
      }

      /**
       * The name of the custom event fired before a tab is selected upon a user gesture.
       * Cancellation of this event stops changing the user-initiated selection.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeSelect",
      value: function eventBeforeSelect() {
        return `${prefix}-tabs-beingselected`;
      }

      /**
       * The name of the custom event fired after a a tab is selected upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventSelect",
      value: function eventSelect() {
        return `${prefix}-tabs-selected`;
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "method",
      static: true,
      key: "getAction",
      value:
      /**
       * @param key The key symbol.
       * @returns A action for dropdown for the given key symbol.
       */
      function getAction(key) {
        if (key === 'Home') {
          return TABS_KEYBOARD_ACTION.HOME;
        }
        if (key === 'End') {
          return TABS_KEYBOARD_ACTION.END;
        }
        if (key in NAVIGATION_DIRECTION) {
          return TABS_KEYBOARD_ACTION.NAVIGATING;
        }
        return TABS_KEYBOARD_ACTION.NONE;
      }
    }]
  };
}, HostListenerMixin(CDSContentSwitcher));
export { CDSTabs as default };
//# sourceMappingURL=tabs.js.map
