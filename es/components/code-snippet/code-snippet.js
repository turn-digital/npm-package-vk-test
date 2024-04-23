import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { styleMap } from 'lit/directives/style-map.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import ChevronDown16 from "../../icons/chevron--down/16";
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import { CODE_SNIPPET_COLOR_SCHEME, CODE_SNIPPET_TYPE } from './defs';
import styles from "././code-snippet.css.js";
import '../copy-button/index';
import '../copy/copy';
import '../button/button';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { CODE_SNIPPET_COLOR_SCHEME, CODE_SNIPPET_TYPE };

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
 * Basic code snippet.
 *
 * @element cds-code-snippet
 */
let CDSCodeSnippet = _decorate([customElement(`${prefix}-code-snippet`)], function (_initialize, _FocusMixin) {
  class CDSCodeSnippet extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSCodeSnippet,
    d: [{
      kind: "field",
      key: "_expandedCode",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "_hObserveResize",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "_rowHeightInPixels",
      value() {
        return 16;
      }
    }, {
      kind: "field",
      key: "_hasRightOverflow",
      value() {
        return true;
      }
    }, {
      kind: "field",
      key: "_hasLeftOverflow",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "_shouldShowMoreLessBtn",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleCopyClick",
      value:
      /**
       * `true` to expand multi-line variant of code snippet.
       */

      /**
       * The handle for observing resize of the parent element of this element.
       */

      /**
       * Row height in pixels
       */

      /**
       * `true` if code-snippet has right overflow
       */

      /**
       * `true` if code-snippet has left overflow
       */

      /**
       * `true` if show more or show less btn is visible
       */

      /**
       * Handles `click` event on the copy button.
       */
      function _handleCopyClick() {
        const {
          ownerDocument: doc
        } = this;
        const selection = doc.defaultView.getSelection();
        selection.removeAllRanges();
        const code = doc.createElement('code');
        code.className = `${prefix}--visually-hidden`;
        const pre = doc.createElement('pre');
        const text = Array.from(this.childNodes).filter(node => node.nodeType === Node.TEXT_NODE);
        pre.textContent = this.copyText || text[0].textContent;
        code.appendChild(pre);
        // Using `<code>` in shadow DOM seems to lose the LFs in some browsers
        doc.body.appendChild(code);
        const range = doc.createRange();
        range.selectNodeContents(code);
        selection.addRange(range);
        doc.execCommand('copy');
        doc.body.removeChild(code);
        selection.removeAllRanges();
      }

      // eslint-disable-next-line class-methods-use-this
    }, {
      kind: "method",
      key: "_getCodeRefDimensions",
      value: function _getCodeRefDimensions(ref) {
        const {
          clientWidth: codeClientWidth,
          scrollLeft: codeScrollLeft,
          scrollWidth: codeScrollWidth
        } = ref;
        return {
          horizontalOverflow: codeScrollWidth > codeClientWidth,
          codeClientWidth,
          codeScrollWidth,
          codeScrollLeft
        };
      }
      /**
       * Handles `scroll` event.
       */
    }, {
      kind: "method",
      key: "_handleScroll",
      value: function _handleScroll() {
        if (this) {
          var _this$shadowRoot;
          const codeContainerRef = this === null || this === void 0 || (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector(`.${prefix}--snippet-container`);
          const codeContentRef = codeContainerRef === null || codeContainerRef === void 0 ? void 0 : codeContainerRef.querySelector('pre');
          if (this.type === CODE_SNIPPET_TYPE.INLINE || this.type === CODE_SNIPPET_TYPE.SINGLE && !codeContainerRef || this.type === CODE_SNIPPET_TYPE.MULTI && !codeContentRef) {
            return;
          }
          const {
            horizontalOverflow,
            codeClientWidth,
            codeScrollWidth,
            codeScrollLeft
          } = this.type === CODE_SNIPPET_TYPE.SINGLE ? this._getCodeRefDimensions(codeContainerRef) : this._getCodeRefDimensions(codeContentRef);
          this._hasLeftOverflow = horizontalOverflow && !!codeScrollLeft;
          this._hasRightOverflow = horizontalOverflow && codeScrollLeft + codeClientWidth !== codeScrollWidth;
          this.requestUpdate();
        }
      }

      /**
       * Handles `click` event on the show more or show less button.
       */
    }, {
      kind: "method",
      key: "_handleClickExpanded",
      value: function _handleClickExpanded() {
        this._expandedCode = !this._expandedCode;
        this.requestUpdate();
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
          var _this$shadowRoot2;
          const codeContainerRef = (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 ? void 0 : _this$shadowRoot2.querySelector(`.${prefix}--snippet-container`);
          const codeContentRef = codeContainerRef === null || codeContainerRef === void 0 ? void 0 : codeContainerRef.querySelector('code'); // PRE?
          const {
            type,
            maxCollapsedNumberOfRows,
            maxExpandedNumberOfRows,
            minExpandedNumberOfRows,
            _rowHeightInPixels: rowHeightInPixels,
            _handleScroll: handleScroll
          } = this;
          if (codeContentRef && type === CODE_SNIPPET_TYPE.MULTI) {
            const {
              height
            } = codeContentRef.getBoundingClientRect();
            if (maxCollapsedNumberOfRows > 0 && (maxExpandedNumberOfRows <= 0 || maxExpandedNumberOfRows > maxCollapsedNumberOfRows) && height > maxCollapsedNumberOfRows * rowHeightInPixels) {
              this._shouldShowMoreLessBtn = true;
            } else {
              this._shouldShowMoreLessBtn = false;
            }
            if (this._expandedCode && minExpandedNumberOfRows > 0 && height <= minExpandedNumberOfRows * rowHeightInPixels) {
              this._expandedCode = false;
            }
          }
          if (codeContentRef && type === CODE_SNIPPET_TYPE.MULTI || codeContainerRef && type === CODE_SNIPPET_TYPE.SINGLE) {
            handleScroll();
          }
          this.requestUpdate();
        });
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'copy-text'
      })],
      key: "copyText",
      value() {
        return '';
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
      decorators: [property()],
      key: "feedback",
      value() {
        return 'Copied!';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Number,
        attribute: 'feedback-timeout'
      })],
      key: "feedbackTimeout",
      value() {
        return 2000;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'hide-copy-button'
      })],
      key: "hideCopyButton",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "maxCollapsedNumberOfRows",
      value() {
        return 15;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "maxExpandedNumberOfRows",
      value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "minCollapsedNumberOfRows",
      value() {
        return 3;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "minExpandedNumberOfRows",
      value() {
        return 16;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'show-less-text'
      })],
      key: "showLessText",
      value() {
        return 'Show less';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'show-more-text'
      })],
      key: "showMoreText",
      value() {
        return 'Show more';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'tooltip-content'
      })],
      key: "tooltipContent",
      value() {
        return 'Copy to clipboard';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'wrap-text'
      })],
      key: "wrapText",
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
        return CODE_SNIPPET_TYPE.SINGLE;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * Optional text to copy. If not specified, the `children` node's `innerText`
       * will be used as the copy value.
       */
      /**
       * `true` if the button should be disabled.
       */
      /**
       * Specify the string displayed when the snippet is copied
       */
      /**
       * Specify the time it takes for the feedback message to timeout
       */
      /**
       * Specify whether or not a copy button should be used/rendered.
       */
      /**
       * Specify the maximum number of rows to be shown when in collapsed view
       */
      /**
       * Specify the maximum number of rows to be shown when in expanded view
       */
      /**
       * Specify the minimum number of rows to be shown when in collapsed view
       */
      /**
       * Specify the minimum number of rows to be shown when in expanded view
       */
      /**
       * Specify a string that is displayed when the Code Snippet has been
       * interacted with to show less lines
       */
      /**
       * Specify a string that is displayed when the Code Snippet text is more
       * than 15 lines
       */
      /**
       * Tooltip content for the copy button.
       */
      /**
       * `true` if the button should be disabled.
       */
      /**
       * The type of code snippet.
       */
      function connectedCallback() {
        _get(_getPrototypeOf(CDSCodeSnippet.prototype), "connectedCallback", this).call(this);
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
      key: "updated",
      value: function updated() {
        if (this._expandedCode) {
          this.setAttribute('expanded-code', '');
        } else {
          this.removeAttribute('expanded-code');
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          feedback,
          feedbackTimeout,
          hideCopyButton,
          maxExpandedNumberOfRows,
          minExpandedNumberOfRows,
          maxCollapsedNumberOfRows,
          minCollapsedNumberOfRows,
          type,
          wrapText,
          tooltipContent,
          showMoreText,
          showLessText,
          _expandedCode: expandedCode,
          _handleCopyClick: handleCopyClick,
          _handleScroll: handleScroll,
          _hasRightOverflow: hasRightOverflow,
          _hasLeftOverflow: hasLeftOverflow,
          _rowHeightInPixels: rowHeightInPixels,
          _shouldShowMoreLessBtn: shouldShowMoreLessBtn
        } = this;
        let classes = `${prefix}--snippet`;
        type ? classes += ` ${prefix}--snippet--${type}` : '';
        type !== 'inline' && disabled ? classes += ` ${prefix}--snippet--disabled` : '';
        hideCopyButton ? classes += ` ${prefix}--snippet--no-copy` : '';
        wrapText ? classes += ` ${prefix}--snippet--wraptext` : '';
        type == 'multi' && hasRightOverflow ? classes += ` ${prefix}--snippet--has-right-overflow` : '';
        const expandButtonClass = `${prefix}--snippet-btn--expand`;
        const disabledCopyButtonClasses = disabled ? `${prefix}--snippet--disabled` : '';
        const expandCodeBtnText = expandedCode ? showLessText : showMoreText;
        if (type === CODE_SNIPPET_TYPE.INLINE) {
          // Ensures no extra whitespace text node
          // prettier-ignore
          return html(_t || (_t = _`
        <cds-copy button-class-name="${0}" @click="${0}">
          <code slot="icon"><slot></slot></code>
          <span slot="tooltip-content">${0}</span>
        </cds-copy>
      `), classes, handleCopyClick, tooltipContent);
        }
        const styles = {};
        if (type === 'multi') {
          if (expandedCode) {
            if (maxExpandedNumberOfRows > 0) {
              styles['max-height'] = maxExpandedNumberOfRows * rowHeightInPixels + 'px';
            }
            if (minExpandedNumberOfRows > 0) {
              styles['min-height'] = minExpandedNumberOfRows * rowHeightInPixels + 'px';
            }
          } else {
            if (maxCollapsedNumberOfRows > 0) {
              styles['max-height'] = maxCollapsedNumberOfRows * rowHeightInPixels + 'px';
            }
            if (minCollapsedNumberOfRows > 0) {
              styles['min-height'] = minCollapsedNumberOfRows * rowHeightInPixels + 'px';
            }
          }
        }
        return html(_t2 || (_t2 = _`
      <div
        role="${0}"
        tabindex="${0}"
        class="${0}--snippet-container"
        aria-label="${0}"
        aria-readonly="${0}"
        aria-multiline="${0}"
        @scroll="${0}"
        style=${0}>
        <pre
          @scroll="${0}"><code><slot></slot></code></pre>
      </div>

      ${0}
      ${0}
      ${0}
      ${0}
    `), type === CODE_SNIPPET_TYPE.SINGLE || type === CODE_SNIPPET_TYPE.MULTI ? 'textbox' : null, (type === CODE_SNIPPET_TYPE.SINGLE || type === CODE_SNIPPET_TYPE.MULTI) && !disabled ? 0 : null, prefix, 'code-snippet', type === CODE_SNIPPET_TYPE.SINGLE || type === CODE_SNIPPET_TYPE.MULTI ? true : null, type === CODE_SNIPPET_TYPE.MULTI ? true : null, type === CODE_SNIPPET_TYPE.SINGLE && handleScroll || null, styleMap(styles), type === CODE_SNIPPET_TYPE.MULTI && handleScroll || null, hasLeftOverflow ? html(_t3 || (_t3 = _`
            <div class="${0}--snippet__overflow-indicator--left"></div>
          `), prefix) : ``, hasRightOverflow && type !== CODE_SNIPPET_TYPE.MULTI ? html(_t4 || (_t4 = _`
            <div class="${0}--snippet__overflow-indicator--right"></div>
          `), prefix) : ``, hideCopyButton ? `` : html(_t5 || (_t5 = _`
            <cds-copy-button
              ?disabled=${0}
              button-class-name=${0}
              feedback=${0}
              feedback-timeout=${0}
              @click="${0}">
              ${0}
            </cds-copy-button>
          `), disabled, disabledCopyButtonClasses, feedback, feedbackTimeout, handleCopyClick, tooltipContent), shouldShowMoreLessBtn ? html(_t6 || (_t6 = _`
            <cds-button
              kind="ghost"
              size="sm"
              button-class-name=${0}
              ?disabled=${0}
              @click=${0}>
              <span class="${0}--snippet-btn--text">
                ${0}
              </span>
              ${0}
            </cds-button>
          `), expandButtonClass, disabled, () => this._handleClickExpanded(), prefix, expandCodeBtnText, ChevronDown16({
          class: `${prefix}--icon-chevron--down ${prefix}--snippet__icon`,
          name: 'cheveron--down',
          role: 'img',
          slot: 'icon'
        })) : ``);
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
}, FocusMixin(LitElement));
export default CDSCodeSnippet;
//# sourceMappingURL=code-snippet.js.map
