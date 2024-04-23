import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6,
  _t7,
  _t8;
/**
 * @license
 *
 * Copyright IBM Corp. 2023, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { SIDE_PANEL_SIZE, SIDE_PANEL_PLACEMENT } from './defs';
import styles from "././side-panel.css.js";
import { selectorTabbable as _selectorTabbable } from '../../globals/settings';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import ArrowLeft16 from "../../icons/arrow--left/16";
import Close20 from "../../icons/close/20";
import { moderate02 } from '@carbon/motion';
import '../button/index';
import '../layer/index';
import './side-panel-button-set';
export { SIDE_PANEL_SIZE };

// eslint-disable-next-line no-bitwise
const PRECEDING = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINS;
// eslint-disable-next-line no-bitwise
const FOLLOWING = Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY;
const blockClass = `${prefix}--side-panel`;
const blockClassActionSet = `${prefix}--action-set`;

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
 * Tries to focus on the given elements and bails out if one of them is successful.
 *
 * @param elems The elements.
 * @param reverse `true` to go through the list in reverse order.
 * @returns `true` if one of the attempts is successful, `false` otherwise.
 */
function tryFocusElems(elems, reverse) {
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
 * SidePanel.
 *
 * @element cds-side-panel
 * @csspart dialog The dialog.
 * @fires cds-side-panel-beingclosed
 *   The custom event fired before this side-panel is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this side-panel.
 * @fires cds-side-panel-closed - The custom event fired after this side-panel is closed upon a user gesture.
 */
let CDSSidePanel = _decorate([customElement(`${prefix}-side-panel`)], function (_initialize, _HostListenerMixin) {
  class CDSSidePanel extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSidePanel,
    d: [{
      kind: "field",
      key: "_hObserveResize",
      value() {
        return null;
      }
    }, {
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
      decorators: [query(`.${blockClass}`)],
      key: "_sidePanel",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${blockClass}__actions`)],
      key: "_actions",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${blockClass}__label`)],
      key: "_label",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${blockClass}__title-container`)],
      key: "_titleContainer",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${blockClass}__title`)],
      key: "_title",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${blockClass}__subtitle`)],
      key: "_subtitle",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${blockClass}__action-toolbar`)],
      key: "_actionToolbar",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${blockClass}__inner-content`)],
      key: "_innerContent",
      value: void 0
    }, {
      kind: "field",
      decorators: [query(`.${blockClass}__body-content`)],
      key: "_bodyContent",
      value: void 0
    }, {
      kind: "field",
      decorators: [state()],
      key: "_isOpen",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [state()],
      key: "_containerScrollTop",
      value() {
        return -16;
      }
    }, {
      kind: "field",
      decorators: [state()],
      key: "_hasSubtitle",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [state()],
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [state()],
      key: "_hasActionToolbar",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [state()],
      key: "_actionsCount",
      value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [state()],
      key: "_slugCloseSize",
      value() {
        return 'sm';
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
            // condensedActions,
            open,
            _startSentinelNode: startSentinelNode,
            _endSentinelNode: endSentinelNode
          } = this;
          const oldContains = target !== this && this.contains(target);
          const currentContains = relatedTarget !== this && (this.contains(relatedTarget) || ((_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.contains(relatedTarget)) && relatedTarget !== startSentinelNode && relatedTarget !== endSentinelNode);

          // Performs focus wrapping if _all_ of the following is met:
          // * This side-panel is open
          // * The viewport still has focus
          // * SidePanel body used to have focus but no longer has focus
          const {
            selectorTabbable: selectorTabbableForSidePanel
          } = this.constructor;
          if (open && relatedTarget && oldContains && !currentContains) {
            const comparisonResult = target.compareDocumentPosition(relatedTarget);
            // eslint-disable-next-line no-bitwise
            if (relatedTarget === startSentinelNode || comparisonResult & PRECEDING) {
              await this.constructor._delay();
              if (!tryFocusElems(this.querySelectorAll(selectorTabbableForSidePanel), true) && relatedTarget !== this) {
                this.focus();
              }
            }
            // eslint-disable-next-line no-bitwise
            else if (relatedTarget === endSentinelNode || comparisonResult & FOLLOWING) {
              await this.constructor._delay();
              if (!tryFocusElems(this.querySelectorAll(selectorTabbableForSidePanel), true)) {
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
      kind: "field",
      key: "_reducedMotion",
      value() {
        var _window;
        return typeof window !== 'undefined' && (_window = window) !== null && _window !== void 0 && _window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : {
          matches: true
        };
      }
    }, {
      kind: "method",
      key: "_handleClickOnOverlay",
      value:
      /**
       * The handle for observing resize of the parent element of this element.
       */

      /**
       * The element that had focus before this side-panel gets open.
       */

      /**
       * Node to track focus going outside of side-panel content.
       */

      /**
       * Node to track focus going outside of side-panel content.
       */

      /**
       * Node to track side panel.
       */

      /**
       * Node to track size of actions
       */

      /**
       * Handles `blur` event on this element.
       *
       * @param event The event.
       * @param event.target The event target.
       * @param event.relatedTarget The event relatedTarget.
       */

      /**
       * Handles `click` event on the side-panel container.
       *
       * @param event The event.
       */
      function _handleClickOnOverlay(event) {
        if (!this.preventCloseOnClickOutside) {
          this._handleUserInitiatedClose(event.target);
        }
      }

      /**
       * Handles `click` event on the side-panel container.
       *
       * @param event The event.
       */
    }, {
      kind: "method",
      key: "_handleCloseClick",
      value: function _handleCloseClick(event) {
        this._handleUserInitiatedClose(event.target);
      }

      /**
       * Handles user-initiated close request of this side-panel.
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
    }, {
      kind: "method",
      key: "_handleNavigateBack",
      value: function _handleNavigateBack(triggeredBy) {
        this.dispatchEvent(new CustomEvent(this.constructor.eventNavigateBack, {
          composed: true,
          detail: {
            triggeredBy
          }
        }));
      }
    }, {
      kind: "field",
      key: "_checkUpdateIconButtonSizes",
      value() {
        return () => {
          var _this$shadowRoot2;
          const slug = this.querySelector('cds-slug');
          const otherButtons = this === null || this === void 0 || (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 ? void 0 : _this$shadowRoot2.querySelectorAll('#nav-back-button, #close-button');
          let iconButtonSize = 'sm';
          if (slug || otherButtons !== null && otherButtons !== void 0 && otherButtons.length) {
            var _this$querySelectorAl;
            const actions = this === null || this === void 0 || (_this$querySelectorAl = this.querySelectorAll) === null || _this$querySelectorAl === void 0 ? void 0 : _this$querySelectorAl.call(this, 'cds-button[slot="actions"]');
            if (actions !== null && actions !== void 0 && actions.length && /l/.test(this.size)) {
              iconButtonSize = 'md';
            }
          }
          if (slug) {
            slug === null || slug === void 0 || slug.setAttribute('size', iconButtonSize);
          }
          if (otherButtons) {
            [...otherButtons].forEach(btn => {
              btn.setAttribute('size', iconButtonSize);
            });
          }
        };
      }
    }, {
      kind: "method",
      key: "_handleSlugChange",
      value: function _handleSlugChange(e) {
        this._checkUpdateIconButtonSizes();
        const childItems = e.target.assignedNodes();
        this._hasSlug = childItems.length > 0;
      }
    }, {
      kind: "method",
      key: "_handleSubtitleChange",
      value: function _handleSubtitleChange(e) {
        const target = e.target;
        const subtitle = target === null || target === void 0 ? void 0 : target.assignedNodes();
        this._hasSubtitle = subtitle.length > 0;
      }

      // eslint-disable-next-line class-methods-use-this
    }, {
      kind: "method",
      key: "_handleActionToolbarChange",
      value: function _handleActionToolbarChange(e) {
        const target = e.target;
        const toolbarActions = target === null || target === void 0 ? void 0 : target.assignedElements();
        this._hasActionToolbar = toolbarActions && toolbarActions.length > 0;
        if (this._hasActionToolbar) {
          for (const toolbarAction of toolbarActions) {
            // toolbar actions size should always be sm
            toolbarAction.setAttribute('size', 'sm');
          }
        }
      }
    }, {
      kind: "field",
      key: "_checkUpdateBottomPadding",
      value() {
        return () => {
          var _this$_actions, _this$_sidePanel$styl;
          const actionHeightPx = ((_this$_actions = this._actions) === null || _this$_actions === void 0 ? void 0 : _this$_actions.offsetHeight) + 16; // add additional 1rem spacing to bottom padding
          const actionsHeight = `${Math.round(actionHeightPx / 16)}rem`;
          (_this$_sidePanel$styl = this._sidePanel.style) === null || _this$_sidePanel$styl === void 0 || _this$_sidePanel$styl.setProperty(`--${blockClass}--content-bottom-padding`, actionsHeight);
        };
      }
    }, {
      kind: "method",
      key: "_handleActionsChange",
      value: function _handleActionsChange(e) {
        var _actions$length;
        const target = e.target;
        const actions = target === null || target === void 0 ? void 0 : target.assignedElements();

        // update slug size
        this._checkUpdateIconButtonSizes();
        const actionsCount = (_actions$length = actions === null || actions === void 0 ? void 0 : actions.length) !== null && _actions$length !== void 0 ? _actions$length : 0;
        if (actionsCount === 0) {
          return;
        } else if (actionsCount > 3) {
          this._actionsCount = 3;
          console.warn(`Too many side-panel actions, max 3.`);
        } else {
          this._actionsCount = actionsCount;
        }
        for (let i = 0; i < actionsCount; i++) {
          if (i > 3) {
            // hide excessive side panel actions
            actions[i].setAttribute('hidden', '');
            actions[i].setAttribute('data-actions-limit-3-exceeded', `${actions.length}`);
          } else {
            actions[i].setAttribute('size', this.condensedActions ? 'lg' : 'xl');
            actions[i].classList.add(`${blockClassActionSet}__action-button`);
          }
        }
        setTimeout(() => {
          // update after the updates above are applied
          this._checkUpdateBottomPadding();
        }, 1);
      }

      /**
       * The `ResizeObserver` instance for observing element resizes for re-positioning floating menu position.
       */
      // TODO: Wait for `.d.ts` update to support `ResizeObserver`
      // @ts-ignore
    }, {
      kind: "field",
      key: "_resizeObserver",
      value() {
        return new ResizeObserver(() => {
          if (this._sidePanel) {
            this._checkUpdateBottomPadding();
          }
        });
      }
    }, {
      kind: "field",
      key: "_measurements",
      value() {
        return {};
      }
    }, {
      kind: "field",
      key: "_setMeasuredCustomProperties",
      value() {
        return async (reason, scrollY = 0) => {
          var _this$_subtitle, _this$_sidePanel;
          await this.updateComplete;
          if (!this._sidePanel || !this.open && !this._innerContent) {
            return;
          }
          await this.constructor._delay(); // measure after brief delay for render
          this._measurements.subtitleHeight = ((_this$_subtitle = this._subtitle) === null || _this$_subtitle === void 0 ? void 0 : _this$_subtitle.offsetHeight) || 0; // set default subtitle height if a subtitle is not provided to enable scrolling animation
          (_this$_sidePanel = this._sidePanel) === null || _this$_sidePanel === void 0 || _this$_sidePanel.style.setProperty(`--${blockClass}--subtitle-container-height`, `${this._measurements.subtitleHeight}px`);
          if (reason !== 'scroll') {
            var _this$_sidePanel2, _this$_bodyContent, _this$_titleContainer, _this$_title, _this$_label, _this$_actionToolbar, _this$_sidePanel3;
            this._measurements.panelHeight = ((_this$_sidePanel2 = this._sidePanel) === null || _this$_sidePanel2 === void 0 ? void 0 : _this$_sidePanel2.offsetHeight) || 0;
            this._measurements.scrollSectionHeight = ((_this$_bodyContent = this._bodyContent) === null || _this$_bodyContent === void 0 ? void 0 : _this$_bodyContent.offsetHeight) || 0;
            this._measurements.titleContainerHeight = ((_this$_titleContainer = this._titleContainer) === null || _this$_titleContainer === void 0 ? void 0 : _this$_titleContainer.offsetHeight) || 0;
            this._measurements.titleHeight = ((_this$_title = this._title) === null || _this$_title === void 0 ? void 0 : _this$_title.offsetHeight) || 0;
            this._measurements.labelHeight = ((_this$_label = this._label) === null || _this$_label === void 0 ? void 0 : _this$_label.offsetHeight) || 0;
            this._measurements.totalScrollingHeight = this._measurements.titleContainerHeight + this._measurements.subtitleHeight + this._measurements.scrollSectionHeight;
            this._measurements.actionToolbarHeight = (this === null || this === void 0 || (_this$_actionToolbar = this._actionToolbar) === null || _this$_actionToolbar === void 0 ? void 0 : _this$_actionToolbar.offsetHeight) || 0;
            (_this$_sidePanel3 = this._sidePanel) === null || _this$_sidePanel3 === void 0 || _this$_sidePanel3.style.setProperty(`--${blockClass}--title-text-height`, this.animateTitle ? '0' : `${this._measurements.titleHeight + 24}px`);
            this._sidePanel.style.setProperty(`--${blockClass}--action-bar-container-height`, this.animateTitle ? '0' : `${this._measurements.actionToolbarHeight}px`);
            this._sidePanel.style.setProperty(`--${blockClass}--label-text-height`, `${this._measurements.labelHeight}px`);
            if (this.animateTitle) {
              var _ref, _window2, _window2$getComputedS, _this$_innerContent, _this$_innerContent2, _this$_innerContent3, _this$_innerContent4;
              this._measurements.titlePaddingTop = parseInt((_ref = this._titleContainer && window && ((_window2 = window) === null || _window2 === void 0 || (_window2$getComputedS = _window2.getComputedStyle) === null || _window2$getComputedS === void 0 || (_window2$getComputedS = _window2$getComputedS.call(_window2, this._titleContainer)) === null || _window2$getComputedS === void 0 ? void 0 : _window2$getComputedS['padding-top'])) !== null && _ref !== void 0 ? _ref : '0', 10);
              this._measurements.transitionDistance = -1 * Math.max(this._measurements.titleHeight + this._measurements.actionToolbarHeight + this._measurements.titlePaddingTop - this._measurements.titleContainerHeight, ((_this$_innerContent = this._innerContent) === null || _this$_innerContent === void 0 ? void 0 : _this$_innerContent.offsetHeight) - ((_this$_innerContent2 = this._innerContent) === null || _this$_innerContent2 === void 0 ? void 0 : _this$_innerContent2.scrollHeight));

              // if the difference between the total scrolling height and the panel height is less than
              // the subtitleElement height OR if the subtitle element height is 0, use that difference
              // as the length of the scroll animation (otherwise the animation will not be able to complete
              // because there is not enough scrolling distance to complete it).
              this._measurements.subtitleHeight = this._measurements.totalScrollingHeight - this._measurements.panelHeight < this._measurements.subtitleHeight ? this._measurements.totalScrollingHeight - this._measurements.panelHeight : this._measurements.subtitleHeight === 0 ? 16 : this._measurements.subtitleHeight;
              this._measurements.subtitleHeight = this._measurements.subtitleHeight < 0 ? ((_this$_innerContent3 = this._innerContent) === null || _this$_innerContent3 === void 0 ? void 0 : _this$_innerContent3.scrollHeight) - ((_this$_innerContent4 = this._innerContent) === null || _this$_innerContent4 === void 0 ? void 0 : _this$_innerContent4.clientHeight) : this._measurements.subtitleHeight;
              this._sidePanel.style.setProperty(`--${blockClass}--action-bar-container-height`, `${this._measurements.actionToolbarHeight || 0}px`);
              this._sidePanel.style.setProperty(`--${blockClass}--title-height`, `${this._measurements.titleHeight + 16}px`);
            }
          } else {
            if (this.animateTitle) {
              const scrollAnimationProgress = this._measurements.transitionDistance && this._measurements.transitionDistance > scrollY ? scrollY / this._measurements.transitionDistance : 1;
              this._sidePanel.style.setProperty(`--${blockClass}--scroll-y`, `${scrollY}px`);
              const scrolled = scrollY > 0;
              this._sidePanel.style.setProperty(`--${blockClass}--subtitle-opacity`, !scrolled ? '1' : `${1 - Math.min(this._measurements.transitionDistance, scrollY) / this._measurements.transitionDistance}`);
              this._sidePanel.style.setProperty(`--${blockClass}--divider-opacity`, !scrolled ? '0' : `${scrollAnimationProgress}`);
              this._sidePanel.style.setProperty(`--${blockClass}--title-y-position`, !scrolled ? '0rem' : `${-Math.abs(Math.min(1, scrollY / this._measurements.subtitleHeight))}rem`);
              this._sidePanel.style.setProperty(`--${blockClass}--collapsed-title-y-position`, !scrolled ? '1rem' : `${Math.max(0, this._measurements.subtitleHeight - scrollY) / this._measurements.subtitleHeight}rem`);
              this._sidePanel.style.setProperty(`--${blockClass}--title-container-height`, !scrolled ? '0px' : `${this._measurements.titleContainerHeight}px`);
              const reduceTitleContainerHeightAmount = this._measurements.labelHeight * scrollAnimationProgress / this._measurements.titleContainerHeight * 100;
              this._sidePanel.style.setProperty(`--${blockClass}--reduce-titles-by`, !scrolled && !this.animateTitle ? '0px' : `${Math.trunc(reduceTitleContainerHeightAmount)}px`);
            } else {
              this._sidePanel.style.setProperty(`--${blockClass}--reduce-titles-by`, '0px');
            }
          }
        };
      }
    }, {
      kind: "field",
      key: "_scrollObserver",
      value() {
        return event => {
          this._setMeasuredCustomProperties('scroll', event.target.scrollTop);
        };
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'animate-title',
        type: Boolean
      })],
      key: "animateTitle",
      value() {
        return true;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'close-icon-description'
      })],
      key: "closeIconDescription",
      value() {
        return 'Close';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'condensed-actions'
      })],
      key: "condensedActions",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'current-step',
        type: Number
      })],
      key: "currentStep",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'include-overlay',
        type: Boolean,
        reflect: true
      })],
      key: "includeOverlay",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'label-text'
      })],
      key: "labelText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'navigation-back-icon-description'
      })],
      key: "navigationBackIconDescription",
      value() {
        return 'Back';
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
        reflect: true,
        type: String
      })],
      key: "placement",
      value() {
        return SIDE_PANEL_PLACEMENT.RIGHT;
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
        reflect: true,
        attribute: 'selector-initial-focus',
        type: String
      })],
      key: "selectorInitialFocus",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'selector-page-content'
      })],
      key: "selectorPageContent",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        type: String
      })],
      key: "size",
      value() {
        return SIDE_PANEL_SIZE.MEDIUM;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'slide-in',
        type: Boolean,
        reflect: true
      })],
      key: "slideIn",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: false,
        type: String
      })],
      key: "title",
      value: void 0
    }, {
      kind: "method",
      key: "connectObservers",
      value:
      /**
       * Determines if the title will animate on scroll
       */
      /**
       * Sets the close button icon description
       */
      /**
       * Determines whether the side panel should render the condensed version (affects action buttons primarily)
       */
      /**
       * Sets the current step of the side panel
       */
      /**
       * Determines whether the side panel should render with an overlay
       */
      /**
       * Sets the label text which will display above the title text
       */
      /**
       * Sets the icon description for the navigation back icon button
       */
      /**
       * `true` if the side-panel should be open.
       */
      /**
       * SidePanel placement.
       */
      /**
       * Prevent closing on click outside of side-panel
       */
      /**
       * The initial location of focus in the side panel
       */
      /**
       * Selector for page content, used to push content to side except
       */
      /**
       * SidePanel size.
       */
      /**
       * Determines if this panel slides in
       */
      /**
       * Sets the title text
       */
      async function connectObservers() {
        await this.updateComplete;
        this._hObserveResize = observeResize(this._resizeObserver, this._sidePanel);
      }
    }, {
      kind: "method",
      key: "disconnectObservers",
      value: function disconnectObservers() {
        if (this._hObserveResize) {
          this._hObserveResize = this._hObserveResize.release();
        }
        if (this._innerContent) {
          this._innerContent.removeEventListener('scroll', this._scrollObserver);
        }
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(CDSSidePanel.prototype), "connectedCallback", this).call(this);
        this.disconnectObservers();
        this.connectObservers();
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(CDSSidePanel.prototype), "disconnectedCallback", this).call(this);
        this.disconnectObservers();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          animateTitle,
          closeIconDescription,
          condensedActions,
          currentStep,
          includeOverlay,
          labelText,
          navigationBackIconDescription,
          open,
          placement,
          size,
          slideIn,
          title
        } = this;
        if (!open && !this._isOpen) {
          return html(_t || (_t = _``));
        }
        const actionsMultiple = ['', 'single', 'double', 'triple'][this._actionsCount];
        const titleTemplate = html(_t2 || (_t2 = _`
      <div
        class=${0}
        ?detail-step=${0}
        ?has-title=${0}
        ?no-title-animation=${0}
        ?reduced-motion=${0}
        ?has-action-toolbar=${0}>
        <!-- render back button -->
        ${0}

        <!-- render title label -->
        ${0}

        <!-- render collapsed title -->
        ${0}

        <!-- render title -->
        ${0}
      </div>

      <!-- render close button area -->
      <div class=${0}>
        <slot name="slug" @slotchange=${0}></slot>
        <!-- {normalizedSlug} -->
        <cds-icon-button
          aria-label=${0}
          kind="ghost"
          size="sm"
          tooltip-text=${0}
          class=${0}
          @click=${0}>
          ${0}
        </cds-icon-button>
      </div>

      <!-- render sub title -->
      <p
        class=${0}
        ?hidden=${0}
        ?no-title-animation=${0}
        ?no-action-toolbar=${0}
        ?no-title=${0}>
        <slot name="subtitle" @slotchange=${0}></slot>
      </p>

      <div
        class=${0}
        ?hidden=${0}
        ?no-title-animation=${0}>
        <slot
          name="action-toolbar"
          @slotchange=${0}></slot>
      </div>
    `), `${blockClass}__title-container`, currentStep > 0, !!title, !animateTitle, this._reducedMotion.matches, this._hasActionToolbar, currentStep > 0 ? html(_t3 || (_t3 = _`<cds-icon-button
              aria-label=${0}
              kind="ghost"
              size="sm"
              tooltip-text=${0}
              class=${0}
              @click=${0}>
              ${0}
            </cds-icon-button>`), navigationBackIconDescription, navigationBackIconDescription, `${blockClass}__nav-back-button`, this._handleNavigateBack, ArrowLeft16({
          slot: 'icon'
        })) : '', title !== null && title !== void 0 && title.length && labelText !== null && labelText !== void 0 && labelText.length ? html(_t4 || (_t4 = _` <p class=${0}>${0}</p>`), `${blockClass}__label`, labelText) : '', animateTitle && title !== null && title !== void 0 && title.length && !this._reducedMotion.matches ? html(_t5 || (_t5 = _`<h2
              class=${0}
              title=${0}
              aria-hidden="true">
              ${0}
            </h2>`), `${blockClass}__collapsed-title`, title, title) : '', title !== null && title !== void 0 && title.length ? html(_t6 || (_t6 = _`<h2 class=${0} title=${0}>
              ${0}
            </h2>`), `${blockClass}__title`, title, title) : '', `${blockClass}__slug-and-close`, this._handleSlugChange, closeIconDescription, closeIconDescription, `${blockClass}__close-button`, this._handleCloseClick, Close20({
          slot: 'icon'
        }), `${blockClass}__subtitle`, !this._hasSubtitle, !animateTitle, !this._hasActionToolbar, !title, this._handleSubtitleChange, `${blockClass}__action-toolbar`, !this._hasActionToolbar, !animateTitle, this._handleActionToolbarChange);
        return html(_t7 || (_t7 = _`
      <div
        class=${0}
        part="dialog"
        role="complementary"
        placement="${0}"
        ?has-slug=${0}
        ?open=${0}
        ?opening=${0}
        ?closing=${0}
        ?overlay=${0}
        size=${0}>
        <cds-layer level="1">
          <a
            id="start-sentinel"
            class="sentinel"
            hidden
            href="javascript:void 0"
            role="navigation"></a>

          ${0}

          <div
            class=${0}
            ?no-title-animation=${0}
            ?has-actions=${0}>
            ${0}
            <div class=${0}>
              <slot></slot>
            </div>

            <cds-side-panel-button-set
              class=${0}
              ?hidden=${0}
              ?condensed=${0}
              actions-multiple=${0}
              size=${0}>
              <slot
                name="actions"
                @slotchange=${0}></slot>
            </cds-side-panel-button-set>
          </div>

          <a
            id="end-sentinel"
            class="sentinel"
            hidden
            href="javascript:void 0"
            role="navigation"></a>
        </cds-layer>
      </div>

      ${0}
    `), blockClass, placement, this._hasSlug, this._isOpen, open && !this._isOpen, !open && this._isOpen, includeOverlay || slideIn, size, !animateTitle ? titleTemplate : '', `${blockClass}__inner-content`, !animateTitle, this._actionsCount > 0, animateTitle ? titleTemplate : '', `${blockClass}__body-content`, `${blockClass}__actions`, this._actionsCount === 0, condensedActions, actionsMultiple, size, this._handleActionsChange, includeOverlay ? html(_t8 || (_t8 = _`<div
            ?slide-in=${0}
            class=${0}
            ?open=${0}
            ?opening=${0}
            ?closing=${0}
            tabindex="-1"
            @click=${0}></div>`), slideIn, `${blockClass}__overlay`, this.open, open && !this._isOpen, !open && this._isOpen, this._handleClickOnOverlay) : '');
      }
    }, {
      kind: "field",
      key: "checkSetOpen",
      value() {
        return () => {
          const {
            _sidePanel: sidePanel
          } = this;
          if (sidePanel && this._isOpen) {
            // wait until the side panel has transitioned off the screen to remove
            sidePanel.addEventListener('transitionend', () => {
              this._isOpen = false;
            });
          } else {
            // allow the html to render before animating in the side panel
            window.requestAnimationFrame(() => {
              this._isOpen = this.open;
            });
          }
        };
      }
    }, {
      kind: "field",
      key: "adjustPageContent",
      value() {
        return () => {
          // sets/resets styles based on slideIn property and selectorPageContent;
          if (this.selectorPageContent) {
            const pageContentEl = document.querySelector(this.selectorPageContent);
            if (pageContentEl) {
              const newValues = {
                marginInlineStart: '',
                marginInlineEnd: '',
                inlineSize: '',
                transition: this._reducedMotion.matches ? 'none' : `all ${moderate02}`,
                transitionProperty: 'margin-inline-start, margin-inline-end'
              };
              if (this.open) {
                newValues.inlineSize = 'auto';
                if (this.placement === 'left') {
                  newValues.marginInlineStart = `${this._sidePanel.offsetWidth}px`;
                } else {
                  newValues.marginInlineEnd = `${this._sidePanel.offsetWidth}px`;
                }
              }
              Object.keys(newValues).forEach(key => {
                pageContentEl.style[key] = newValues[key];
              });
            }
          }
        };
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this.checkSetOpen();
        this.adjustPageContent();
        this._setMeasuredCustomProperties('first update');
      }
    }, {
      kind: "method",
      key: "updated",
      value: async function updated(changedProperties) {
        this.checkSetOpen();
        if (changedProperties.has('slide-in') || changedProperties.has('open') || changedProperties.has('include-overlay')) {
          this.adjustPageContent();
        }
        if (changedProperties.has('open')) {
          this.disconnectObservers();
          if (this.open) {
            this.connectObservers();
            this._setMeasuredCustomProperties('update');
            this._launcher = this.ownerDocument.activeElement;
            const focusNode = this.selectorInitialFocus && this.querySelector(this.selectorInitialFocus);
            await this.constructor._delay();
            if (focusNode) {
              // For cases where a `carbon-web-components` component (e.g. `<cds-button>`) being `primaryFocusNode`,
              // where its first update/render cycle that makes it focusable happens after `<cds-side-panel>`'s first update/render cycle
              focusNode.focus();
            } else if (!tryFocusElems(this.querySelectorAll(this.constructor.selectorTabbable), true)) {
              this.focus();
            }
          } else if (this._launcher && typeof this._launcher.focus === 'function') {
            this._launcher.focus();
            this._launcher = null;
          }

          // monitor scroll
          if (this._innerContent) {
            this._innerContent.addEventListener('scroll', this._scrollObserver);
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
       * The name of the custom event fired before this side-panel is being closed upon a user gesture.
       * Cancellation of this event stops the user-initiated action of closing this side-panel.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventBeforeClose",
      value: function eventBeforeClose() {
        return `${prefix}-side-panel-beingclosed`;
      }

      /**
       * The name of the custom event fired after this side-panel is closed upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventClose",
      value: function eventClose() {
        return `${prefix}-side-panel-closed`;
      }

      /**
       * The name of the custom event fired on clicking the navigate back button
       */
    }, {
      kind: "get",
      static: true,
      key: "eventNavigateBack",
      value: function eventNavigateBack() {
        return `${prefix}-side-panel-header-navigate-back`;
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
export default CDSSidePanel;
//# sourceMappingURL=side-panel.js.map
