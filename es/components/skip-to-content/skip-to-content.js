import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { ifDefined } from 'lit/directives/if-defined.js';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././skip-to-content.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skip-to-content link.
 *
 * @element cds-skip-to-content
 */
let CDSSkipToContent = _decorate([customElement(`${prefix}-skip-to-content`)], function (_initialize, _FocusMixin) {
  class CDSSkipToContent extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSkipToContent,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'link-assistive-text'
      })],
      key: "linkAssisstiveText",
      value() {
        return 'Skip to main content';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "href",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value:
      /**
       * The assistive text for the link,
       */

      /**
       * The skip link href.
       */

      function connectedCallback() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'navigation');
        }
        _get(_getPrototypeOf(CDSSkipToContent.prototype), "connectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          linkAssisstiveText
        } = this;
        return html(_t || (_t = _`
      <a class="${0}--skip-to-content" href="${0}"
        ><slot>${0}</slot></a
      >
    `), prefix, ifDefined(this.href), linkAssisstiveText);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('linkAssisstiveText')) {
          const {
            linkAssisstiveText
          } = this;
          this.setAttribute('aria-label', linkAssisstiveText);
        }
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
export default CDSSkipToContent;
//# sourceMappingURL=skip-to-content.js.map
