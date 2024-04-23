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
import { html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { prefix } from '../../globals/settings';
import CDSCheckbox from '../checkbox/checkbox';
import { TOGGLE_SIZE } from './defs';
import styles from "././toggle.css.js";
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { TOGGLE_SIZE };

/**
 * Basic toggle.
 *
 * @element cds-toggle
 * @slot label-text - The label text.
 * @slot checked-text - The text for the checked state.
 * @slot unchecked-text - The text for the unchecked state.
 * @fires cds-toggle-changed - The custom event fired after this changebox changes its checked state.
 */
let CDSToggle = _decorate([customElement(`${prefix}-toggle`)], function (_initialize, _HostListenerMixin) {
  class CDSToggle extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSToggle,
    d: [{
      kind: "field",
      decorators: [query('button')],
      key: "_checkboxNode",
      value: void 0
    }, {
      kind: "method",
      key: "_handleChange",
      value:
      /**
       * Handles `click` event on the `<button>` in the shadow DOM.
       */
      function _handleChange() {
        const {
          checked,
          indeterminate
        } = this._checkboxNode;
        if (this.disabled || this.readOnly) {
          return;
        }
        this.checked = !checked;
        this.indeterminate = indeterminate;
        const {
          eventChange
        } = this.constructor;
        this.dispatchEvent(new CustomEvent(eventChange, {
          bubbles: true,
          composed: true,
          detail: {
            indeterminate
          }
        }));
      }

      /**
       * Handles `keydown` event on the toggle button.
       */
    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeydown",
      value() {
        return async event => {
          const {
            key
          } = event;
          if (key === ' ') {
            this._handleChange();
          }
        };
      }
    }, {
      kind: "method",
      key: "_renderCheckmark",
      value: function _renderCheckmark() {
        if (this.size !== TOGGLE_SIZE.SMALL) {
          return undefined;
        }
        return html(_t || (_t = _`
      <svg
        class="${0}--toggle__check"
        width="6px"
        height="5px"
        viewBox="0 0 6 5">
        <path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
      </svg>
    `), prefix);
      }

      /**
       * The text for the checked state.
       */
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-a'
      })],
      key: "labelA",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        type: Boolean
      })],
      key: "hideLabel",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'read-only',
        type: Boolean
      })],
      key: "readOnly",
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
        return TOGGLE_SIZE.REGULAR;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'label-b'
      })],
      key: "labelB",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Hide label text.
       */
      /**
       * Read only boolean.
       */
      /**
       * Toggle size.
       */
      /**
       * The text for the unchecked state.
       */
      function render() {
        const {
          checked,
          disabled,
          labelText,
          hideLabel,
          id,
          name,
          size,
          labelA,
          labelB,
          value,
          _handleChange: handleChange
        } = this;
        const inputClasses = classMap({
          [`${prefix}--toggle__appearance`]: true,
          [`${prefix}--toggle__appearance--${size}`]: size
        });
        const toggleClasses = classMap({
          [`${prefix}--toggle__switch`]: true,
          [`${prefix}--toggle__switch--checked`]: checked
        });
        const stateText = checked ? labelA : labelB;
        return html(_t2 || (_t2 = _`
      <button
        class="${0}--toggle__button"
        role="switch"
        type="button"
        aria-checked=${0}
        aria-lable=${0}
        .checked="${0}"
        name="${0}"
        value="${0}"
        ?disabled=${0}
        id="${0}"></button>
      <label for="${0}" class="${0}--toggle__label">
        <span class="${0}--toggle__label-text">${0}</span>
        <div class="${0}">
          <div class="${0}" @click=${0}>
            ${0}
          </div>
          <span
            ?hidden="${0}"
            class="${0}--toggle__text"
            aria-hidden="true"
            >${0}</span
          >
        </div>
      </label>
    `), prefix, checked, labelText, checked, ifDefined(name), ifDefined(value), disabled, id, id, prefix, prefix, labelText, inputClasses, toggleClasses, handleChange, this._renderCheckmark(), hideLabel, prefix, stateText);
      }

      /**
       * The name of the custom event fired after this changebox changes its checked state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventChange",
      value: function eventChange() {
        return `${prefix}-toggle-changed`;
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
}, HostListenerMixin(CDSCheckbox));
export default CDSToggle;
//# sourceMappingURL=toggle.js.map
