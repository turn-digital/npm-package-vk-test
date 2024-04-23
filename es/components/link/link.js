import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
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

import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././link.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Link size.
 */
export const LINK_SIZE = {
  MEDIUM: '',
  SMALL: 'sm',
  LARGE: 'lg'
};

// Convert object key in a type
/**
 * Link.
 *
 * @element cds-link
 * @csspart link The link.
 */
let CDSLink = _decorate([customElement(`${prefix}-link`)], function (_initialize, _FocusMixin) {
  class CDSLink extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSLink,
    d: [{
      kind: "field",
      key: "_hasIcon",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * `true` if there is an icon.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        const {
          name
        } = target;
        const hasContent = target.assignedNodes().some(node => node.nodeType !== Node.TEXT_NODE || node.textContent.trim());
        this[name === 'icon' ? '_hasIcon' : ''] = hasContent;
        this.requestUpdate();
      }
    }, {
      kind: "field",
      decorators: [query('#link')],
      key: "_linkNode",
      value: void 0
    }, {
      kind: "get",
      key: "_classes",
      value:
      /**
       * The CSS class list for the link node.
       */
      function _classes() {
        const {
          disabled,
          size,
          inline,
          visited,
          _hasIcon
        } = this;
        return classMap({
          [`${prefix}--link`]: true,
          [`${prefix}--link--disabled`]: disabled,
          [`${prefix}--link--icon`]: _hasIcon,
          [`${prefix}--link--inline`]: inline,
          [`${prefix}--link--${size}`]: size,
          [`${prefix}--link--visited`]: visited
        });
      }

      /**
       * Handles `click` event on the `<a>`.
       */
      // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
    }, {
      kind: "method",
      key: "_handleClick",
      value: function _handleClick(_) {}

      /**
       * @returns The inner content.
       */
      // eslint-disable-next-line class-methods-use-this
    }, {
      kind: "method",
      key: "_renderInner",
      value: function _renderInner() {
        const {
          _hasIcon: hasIcon,
          _handleSlotChange: handleSlotChange
        } = this;
        return html(_t || (_t = _2`
      <slot @slotchange="${0}"></slot>
      <div ?hidden="${0}" class="${0}--link__icon">
        <slot name="icon" @slotchange="${0}"></slot>
      </div>
    `), handleSlotChange, !hasIcon, prefix, handleSlotChange);
      }

      /**
       * @returns The disabled link content.
       */
    }, {
      kind: "method",
      key: "_renderDisabledLink",
      value: function _renderDisabledLink() {
        const {
          _classes: classes
        } = this;
        return html(_t2 || (_t2 = _2`
      <p id="link" part="link" class="${0}">${0}</p>
    `), classes, this._renderInner());
      }

      /**
       * @returns The link content.
       */
    }, {
      kind: "method",
      key: "_renderLink",
      value: function _renderLink() {
        const {
          download,
          href,
          hreflang,
          linkRole,
          ping,
          rel,
          target,
          type,
          _classes: classes,
          _handleClick: handleClick
        } = this;
        return html(_t3 || (_t3 = _2`
      <a
        tabindex="0"
        id="link"
        role="${0}"
        class="${0}"
        part="link"
        download="${0}"
        href="${0}"
        hreflang="${0}"
        ping="${0}"
        rel="${0}"
        target="${0}"
        type="${0}"
        @click="${0}">
        ${0}
      </a>
    `), ifDefined(linkRole), classes, ifDefined(download), ifDefined(href), ifDefined(hreflang), ifDefined(ping), ifDefined(rel), ifDefined(target), ifDefined(type), handleClick, this._renderInner());
      }

      /**
       * `true` if the link should be disabled.
       */
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
        reflect: true
      })],
      key: "download",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "href",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "hreflang",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "inline",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'link-role'
      })],
      key: "linkRole",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "ping",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "rel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return LINK_SIZE.MEDIUM;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "target",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "visited",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The default file name.
       */
      /**
       * Link `href`.
       */
      /**
       * The language of what `href` points to.
       */
      /**
       * `true` if the link should be inline.
       */
      /**
       * The a11y role for `<a>`.
       */
      /**
       * URLs to ping.
       */
      /**
       * The link type.
       */
      /**
       * Link size.
       */
      /**
       * The link target.
       */
      /**
       * MIME type of the `target`.
       */
      /**
       * `true` if the link has been visited.
       */
      function render() {
        const {
          disabled
        } = this;
        return disabled ? this._renderDisabledLink() : this._renderLink();
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
export default CDSLink;
//# sourceMappingURL=link.js.map
