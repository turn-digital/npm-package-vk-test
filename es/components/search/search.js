import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
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
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import Close16 from "../../icons/close/16";
import Search16 from "../../icons/search/16";
import { prefix } from '../../globals/settings';
import ifNonEmpty from '../../globals/directives/if-non-empty';
import FocusMixin from '../../globals/mixins/focus';
import FormMixin from '../../globals/mixins/form';
import { INPUT_SIZE } from '../text-input/text-input';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import styles from "././search.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Search box.
 *
 * @element cds-search
 * @csspart search-icon The search icon.
 * @csspart label-text The label text.
 * @csspart input The input box.
 * @csspart close-button The close button.
 * @csspart close-icon The close icon.
 * @fires cds-search-input - The custom event fired after the search content is changed upon a user gesture.
 */
let CDSSearch = _decorate([customElement(`${prefix}-search`)], function (_initialize, _HostListenerMixin) {
  class CDSSearch extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSearch,
    d: [{
      kind: "method",
      key: "_handleInput",
      value:
      /**
       * Handles `input` event on the `<input>` in the shadow DOM.
       */
      function _handleInput(event) {
        const {
          target
        } = event;
        const {
          value
        } = target;
        this.dispatchEvent(new CustomEvent(this.constructor.eventInput, {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            value
          }
        }));
        this.value = value;
      }

      /**
       * Handles `click` event on the button to clear search box content.
       */
    }, {
      kind: "method",
      key: "_handleClearInputButtonClick",
      value: function _handleClearInputButtonClick() {
        if (this.value) {
          this.dispatchEvent(new CustomEvent(this.constructor.eventInput, {
            bubbles: true,
            composed: true,
            cancelable: false,
            detail: {
              value: ''
            }
          }));
          this.value = '';

          // set focus on back to input once search is cleared
          const input = this.shadowRoot.querySelector('input');
          input.focus();
        }
      }

      /**
       * Handles `focus` event on the button when the button can be expanded
       */
    }, {
      kind: "method",
      decorators: [HostListener('focus')],
      key: "_handleExpand",
      value: function _handleExpand() {
        if (this.expandable && !this.expanded) {
          this.setAttribute('expanded', '');
        }
      }

      /**
       * Handles `focusout` event on the component to be closed after being expanded
       * Will not close if there is a value typed within.
       */
    }, {
      kind: "method",
      decorators: [HostListener('focusout')],
      key: "_handleClose",
      value: function _handleClose() {
        if (this.expandable && this.expanded && !this.value) {
          this.removeAttribute('expanded');
        }
      }

      /**
       * Handler for @slotchange, will only be ran if user sets an element under the "icon" slot.
       *
       * @private
       */
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value: function _handleSlotChange() {
        const icon = this.querySelector('svg');
        icon === null || icon === void 0 || icon.setAttribute('part', 'search-icon');
        icon === null || icon === void 0 || icon.setAttribute('class', `${prefix}--search-magnifier-icon`);
        icon === null || icon === void 0 || icon.setAttribute('role', `img`);
        this.hasCustomIcon = true;
      }
    }, {
      kind: "method",
      key: "_handleFormdata",
      value: function _handleFormdata(event) {
        const {
          formData
        } = event; // TODO: Wait for `FormDataEvent` being available in `lib.dom.d.ts`
        const {
          disabled,
          name,
          value
        } = this;
        if (!disabled) {
          formData.append(name, value);
        }
      }

      /**
       * Specify an optional value for the autocomplete property on the underlying <input>,
       * defaults to "off"
       */
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'autocomplete'
      })],
      key: "autoComplete",
      value() {
        return 'off';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'close-button-label-text'
      })],
      key: "closeButtonLabelText",
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
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "expandable",
      value() {
        return false;
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
        type: Boolean
      })],
      key: "hasCustomIcon",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-text'
      })],
      key: "labelText",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "name",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "role",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "placeholder",
      value() {
        return 'Search';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return INPUT_SIZE.MEDIUM;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "type",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String
      })],
      key: "value",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Specify a label to be read by screen readers on the "close" button
       */
      /**
       * `true` if the search box should be disabled.
       */
      /**
       * `true` if the search bar can be expandable
       */
      /**
       * `true` if the expandable search has been expanded
       */
      /**
       * The label text.
       */
      /**
       * The form name in `FormData`.
       */
      /**
       * Specify the role for the underlying <input>, defaults to searchbox
       */
      /**
       * The placeholder text.
       */
      /**
       * The search box size.
       */
      /**
       * The `<input>` name.
       */
      /**
       * The value.
       */
      function render() {
        const {
          autoComplete,
          closeButtonLabelText,
          disabled,
          hasCustomIcon,
          labelText,
          name,
          placeholder,
          role,
          type,
          value = '',
          _handleInput: handleInput,
          _handleClearInputButtonClick: handleClearInputButtonClick,
          _handleSlotChange: handleSlotChange
        } = this;
        const clearClasses = classMap({
          [`${prefix}--search-close`]: true,
          [`${prefix}--search-close--hidden`]: !this.value
        });
        return html(_t || (_t = _`
      <div class="${0}--search-magnifier">
        <slot name="icon" @slotchange=${0}>
          ${0}
        </slot>
      </div>
      <label for="input" part="label-text" class="${0}--label">
        <slot>${0}</slot>
      </label>
      <input
        autocomplete="${0}"
        id="input"
        part="input"
        type="${0}"
        class="${0}--search-input"
        ?disabled="${0}"
        name="${0}"
        placeholder="${0}"
        role="${0}"
        .value="${0}"
        @input="${0}" />
      <button
        part="close-button"
        class="${0}"
        @click="${0}"
        type="button"
        aria-label="${0}">
        ${0}
      </button>
    `), prefix, handleSlotChange, hasCustomIcon ? html(_t2 || (_t2 = _``)) : html(_t3 || (_t3 = _`${0}`), Search16({
          part: 'search-icon',
          class: `${prefix}--search-magnifier-icon`,
          role: 'img'
        })), prefix, labelText, autoComplete, ifNonEmpty(type), prefix, disabled, ifNonEmpty(name), ifNonEmpty(placeholder), role, value, handleInput, clearClasses, handleClearInputButtonClick, closeButtonLabelText, Close16({
          part: 'close-icon',
          'aria-label': closeButtonLabelText,
          role: 'img'
        }));
      }

      /**
       * The name of the custom event fired after the search content is changed upon a user gesture.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventInput",
      value: function eventInput() {
        return `${prefix}-search-input`;
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
}, HostListenerMixin(FocusMixin(FormMixin(LitElement))));
export default CDSSearch;
//# sourceMappingURL=search.js.map
