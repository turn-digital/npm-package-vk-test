import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
import _get from "@babel/runtime/helpers/esm/get";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { ifDefined } from 'lit/directives/if-defined.js';
import HostListener from '../../globals/decorators/host-listener';
import FocusMixin from '../../globals/mixins/focus';
import HostListenerMixin from '../../globals/mixins/host-listener';
import RadioGroupManager, { NAVIGATION_DIRECTION } from '../../globals/internal/radio-group-manager';
import { RADIO_BUTTON_LABEL_POSITION, RADIO_BUTTON_ORIENTATION } from './defs';
import styles from "././radio-button.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { RADIO_BUTTON_LABEL_POSITION };

/**
 * Map of navigation direction by key for horizontal alignment.
 */
const navigationDirectionForKeyHorizontal = {
  ArrowLeft: NAVIGATION_DIRECTION.BACKWARD,
  Left: NAVIGATION_DIRECTION.BACKWARD,
  // IE
  ArrowRight: NAVIGATION_DIRECTION.FORWARD,
  Right: NAVIGATION_DIRECTION.FORWARD // IE
};

/**
 * Map of navigation direction by key for vertical alignment.
 */
const navigationDirectionForKeyVertical = {
  ArrowUp: NAVIGATION_DIRECTION.BACKWARD,
  Up: NAVIGATION_DIRECTION.BACKWARD,
  // IE
  ArrowDown: NAVIGATION_DIRECTION.FORWARD,
  Down: NAVIGATION_DIRECTION.FORWARD // IE
};

/**
 * The interface for `RadioGroupManager` for radio button.
 */
class RadioButtonDelegate {
  /**
   * The radio button to target.
   */

  constructor(radio) {
    this._radio = radio;
  }
  get checked() {
    return this._radio.checked;
  }
  set checked(checked) {
    const {
      host
    } = this._radio.getRootNode();
    const {
      eventChange
    } = host.constructor; // eslint-disable-line no-use-before-define
    host.checked = checked;
    this._radio.tabIndex = checked ? 0 : -1;
    host.dispatchEvent(new CustomEvent(eventChange, {
      bubbles: true,
      composed: true,
      detail: {
        checked
      }
    }));
  }
  get tabIndex() {
    return this._radio.tabIndex;
  }
  set tabIndex(tabIndex) {
    this._radio.tabIndex = tabIndex;
  }
  get name() {
    return this._radio.name;
  }
  compareDocumentPosition(other) {
    return this._radio.compareDocumentPosition(other._radio);
  }
  focus() {
    this._radio.focus();
  }
}

/**
 * Radio button.
 *
 * @element cds-radio-button
 * @fires cds-radio-button-changed - The custom event fired after this radio button changes its checked state.
 */
let CDSRadioButton = _decorate([customElement(`${prefix}-radio-button`)], function (_initialize, _HostListenerMixin) {
  class CDSRadioButton extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSRadioButton,
    d: [{
      kind: "field",
      key: "_manager",
      value() {
        return null;
      }
    }, {
      kind: "field",
      decorators: [query('input')],
      key: "_inputNode",
      value: void 0
    }, {
      kind: "field",
      decorators: [HostListener('click')],
      key: "_handleClick",
      value() {
        return event => {
          var _this$constructor;
          if (!event.target.matches((_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor.slugItem)) {
            const {
              disabled,
              _radioButtonDelegate: radioButtonDelegate
            } = this;
            if (radioButtonDelegate && !disabled && !this.disabledItem) {
              this.checked = true;
              if (this._manager) {
                this._manager.select(radioButtonDelegate, this.readOnly);
              }
              this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
                bubbles: true,
                composed: true,
                detail: {
                  checked: this.checked
                }
              }));
            }
            this.dispatchEvent(new CustomEvent(this.constructor.eventChange, {
              bubbles: true,
              composed: true,
              detail: {
                checked: this.checked
              }
            }));
          }
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeydown",
      value() {
        return event => {
          var _this$constructor2;
          if (!event.target.matches((_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2.slugItem)) {
            const {
              orientation,
              _radioButtonDelegate: radioButtonDelegate
            } = this;
            const manager = this._manager;
            if (radioButtonDelegate && manager) {
              const navigationDirectionForKey = orientation === RADIO_BUTTON_ORIENTATION.HORIZONTAL ? navigationDirectionForKeyHorizontal : navigationDirectionForKeyVertical;
              const navigationDirection = navigationDirectionForKey[event.key];
              if (navigationDirection) {
                manager.select(manager.navigate(radioButtonDelegate, navigationDirection), this.readOnly);
              }
              if (event.key === ' ' || event.key === 'Enter') {
                manager.select(radioButtonDelegate, this.readOnly);
              }
            }
          }
        };
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * The radio group manager associated with the radio button.
       */

      /**
       * The interface for `RadioGroupManager` for radio button.
       */

      /**
       * The hidden radio button.
       */

      /**
       * Handles `click` event on this element.
       */

      /**
       * Handles `keydown` event on this element.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        const hasContent = target.assignedNodes().filter(elem => elem.matches !== undefined ? elem.matches(this.constructor.slugItem) : false);
        this._hasSlug = Boolean(hasContent);
        const type = hasContent[0].getAttribute('kind');
        hasContent[0].setAttribute('size', type === 'inline' ? 'md' : 'mini');
        this.requestUpdate();
      }

      /**
       * `true` if there is a slug.
       */
    }, {
      kind: "field",
      key: "_hasSlug",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "checked",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'data-table'
      })],
      key: "dataTable",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabledItem",
      value() {
        return false;
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
        reflect: true,
        attribute: 'hide-label'
      })],
      key: "hideLabel",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "invalid",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'label-position'
      })],
      key: "labelPosition",
      value() {
        return RADIO_BUTTON_LABEL_POSITION.RIGHT;
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
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "orientation",
      value() {
        return RADIO_BUTTON_ORIENTATION.HORIZONTAL;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "readOnly",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "value",
      value: void 0
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value:
      /**
       * `true` if this radio button should be checked.
       */
      /**
       * `true` if the radio button is used in a data table
       */
      /**
       * `true` if the radio button item should be disabled.
       */
      /**
       * `true` if the radio button group should be disabled.
       */
      /**
       * `true` if the label should be hidden.
       */
      /**
       * Specify if the currently value is invalid.
       */
      /**
       * The label position.
       */
      /**
       * The label text.
       */
      /**
       * The `name` attribute for the `<input>` for selection.
       */
      /**
       * The orientation to lay out radio buttons.
       */
      /**
       * `true` if the radio button group should be disabled.
       */
      /**
       * The `value` attribute for the `<input>` for selection.
       */
      function disconnectedCallback() {
        if (this._manager) {
          this._manager.delete(this._radioButtonDelegate);
        }
        _get(_getPrototypeOf(CDSRadioButton.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this._radioButtonDelegate = new RadioButtonDelegate(this._inputNode);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        const {
          _hasSlug: hasSlug,
          _inputNode: inputNode,
          _radioButtonDelegate: radioButtonDelegate,
          name
        } = this;
        if (changedProperties.has('checked') || changedProperties.has('name')) {
          if (this.readOnly) {
            this.checked = false;
          }
          if (!this._manager) {
            this._manager = RadioGroupManager.get(this.getRootNode({
              composed: true
            }));
          }
          const {
            _manager: manager
          } = this;
          if (changedProperties.has('name')) {
            manager.delete(radioButtonDelegate, changedProperties.get('name'));
            if (name) {
              manager.add(radioButtonDelegate);
            }
          }
          inputNode.setAttribute('tabindex', !name || !manager || !manager.shouldBeFocusable(radioButtonDelegate) ? '-1' : '0');
        }
        hasSlug ? this.setAttribute('slug', '') : this.removeAttribute('slug');
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          checked,
          hideLabel,
          labelText,
          name,
          value,
          disabled,
          disabledItem
        } = this;
        const innerLabelClasses = classMap({
          [`${prefix}--radio-button__label-text`]: true,
          [`${prefix}--visually-hidden`]: hideLabel
        });
        return html(_t || (_t = _`
      <input
        id="radio"
        type="radio"
        class="${0}--radio-button"
        .checked=${0}
        ?disabled="${0}"
        name=${0}
        value=${0} />
      <label for="input" class="${0}--radio-button__label">
        <span class="${0}--radio-button__appearance"></span>
        <span class="${0}"
          ><slot>${0}</slot>
          <slot name="slug" @slotchange="${0}"></slot
        ></span>
      </label>
    `), prefix, checked, disabledItem || disabled, ifDefined(name), ifDefined(value), prefix, prefix, innerLabelClasses, labelText, this._handleSlotChange);
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
       * The name of the custom event fired after this radio button changes its checked state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-radio-button-changed`;
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
}, HostListenerMixin(FocusMixin(LitElement)));
export default CDSRadioButton;
//# sourceMappingURL=radio-button.js.map
