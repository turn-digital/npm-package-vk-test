import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { NAVIGATION_DIRECTION } from '../../globals/internal/radio-group-manager';
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import styles from "././tile.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Map of navigation direction by key.
 */
const navigationDirectionForKey = {
  ArrowUp: NAVIGATION_DIRECTION.BACKWARD,
  Up: NAVIGATION_DIRECTION.BACKWARD,
  // IE
  ArrowDown: NAVIGATION_DIRECTION.FORWARD,
  Down: NAVIGATION_DIRECTION.FORWARD // IE
};

/**
 * Tile group.
 *
 * @element cds-tile-group
 * @fires cds-current-radio-tile-selection
 *   The name of the custom event fired after a radio tile changes its selected state.
 * @fires cds-current-selectable-tile-selections
 *   The name of the custom event fired after a selectable tile changes its selected state.
 */
let CDSTileGroup = _decorate([customElement(`${prefix}-tile-group`)], function (_initialize, _HostListenerMixin) {
  class CDSTileGroup extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTileGroup,
    d: [{
      kind: "method",
      key: "_handleRadioClick",
      value: function _handleRadioClick(event) {
        const {
          target
        } = event;
        const {
          currentRadioSelection
        } = this;
        const {
          eventCurrentRadioTileSelection
        } = this.constructor;
        if (!currentRadioSelection) {
          this.currentRadioSelection = target;
        } else if (currentRadioSelection !== target) {
          currentRadioSelection.toggleAttribute('selected');
          this.currentRadioSelection = target;
        }
        this.dispatchEvent(new CustomEvent(eventCurrentRadioTileSelection, {
          bubbles: true,
          composed: true,
          detail: {
            target
          }
        }));
      }
    }, {
      kind: "method",
      key: "_handleSelectableClick",
      value: function _handleSelectableClick(event) {
        const {
          target
        } = event;
        const {
          currentSelections
        } = this;
        const {
          eventCurrentSelectableTilesSelection
        } = this.constructor;
        if (!currentSelections.includes(target)) {
          currentSelections.push(target);
        } else {
          currentSelections.splice(currentSelections.indexOf(target), 1);
        }
        target.toggleAttribute('selected');
        this.dispatchEvent(new CustomEvent(eventCurrentSelectableTilesSelection, {
          bubbles: true,
          composed: true,
          detail: {
            currentSelections
          }
        }));
        event.stopPropagation();
        event.preventDefault();
      }

      /**
       * Click listener to ensure selectability.
       *
       * @param event click
       */
    }, {
      kind: "method",
      decorators: [HostListener('click')],
      key: "_handleTileSelect",
      value: function _handleTileSelect(event) {
        if (this.radioTiles.length) {
          this._handleRadioClick(event);
        } else {
          this._handleSelectableClick(event);
        }
      }

      /**
       * Handle keyboard navigation for radio tiles
       *
       * @param nextSibling to focus on
       */
    }, {
      kind: "method",
      key: "_handleKeydownRadio",
      value: function _handleKeydownRadio(nextSibling) {
        const {
          currentRadioSelection
        } = this;
        const {
          eventCurrentRadioTileSelection
        } = this.constructor;
        if (currentRadioSelection) {
          currentRadioSelection.toggleAttribute('selected');
        }
        nextSibling.focus();
        nextSibling.toggleAttribute('selected');
        this.currentRadioSelection = nextSibling;
        this.dispatchEvent(new CustomEvent(eventCurrentRadioTileSelection, {
          bubbles: true,
          composed: true,
          detail: {
            nextSibling
          }
        }));
      }

      /**
       * Handle keyboard navigation for selectable tiles
       *
       * @param event to get target
       * @param nextSibling to focus on
       */
    }, {
      kind: "method",
      key: "_handleKeydownSelectable",
      value: function _handleKeydownSelectable(event, nextSibling) {
        const {
          target
        } = event;
        const {
          currentSelections
        } = this;
        const {
          eventCurrentSelectableTilesSelection
        } = this.constructor;
        if (nextSibling) {
          nextSibling.focus();
        } else {
          if (!currentSelections.includes(target)) {
            currentSelections.push(target);
          } else {
            currentSelections.splice(currentSelections.indexOf(target), 1);
          }
          this.dispatchEvent(new CustomEvent(eventCurrentSelectableTilesSelection, {
            bubbles: true,
            composed: true,
            detail: {
              currentSelections
            }
          }));
        }
      }

      /**
       * Keyboard listener to ensure keyboard navigation.
       *
       * @param event to get key pressed
       */
    }, {
      kind: "field",
      decorators: [HostListener('keydown')],
      key: "_handleKeydown",
      value() {
        return event => {
          const {
            target,
            key
          } = event;
          const {
            radioTiles,
            selectableTiles
          } = this;
          const navigationDirection = navigationDirectionForKey[key];
          const tiles = radioTiles.length ? radioTiles : selectableTiles;
          const currentIndex = [...tiles].findIndex(e => e == target);
          const nextIndex = currentIndex + navigationDirection;
          const nextSibling = nextIndex !== -1 ? tiles[nextIndex % tiles.length] : tiles[tiles.length - 1];
          if (navigationDirection) {
            event.preventDefault(); // Prevent default (scrolling) behavior

            if (this.radioTiles.length) {
              this._handleKeydownRadio(nextSibling);
            } else {
              this._handleKeydownSelectable(event, nextSibling);
            }
          } else if (key === ' ' || key === 'Enter') {
            this._handleKeydownSelectable(event);
          }
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('focusin')],
      key: "_handleFocus",
      value() {
        return event => {
          const {
            relatedTarget,
            target
          } = event;
          if (this.radioTiles.length) {
            if (!this.currentRadioSelection) {
              target.toggleAttribute('selected');
              this.currentRadioSelection = target;
            } else if (!(relatedTarget !== null && relatedTarget !== void 0 && relatedTarget.matches(this.constructor.selectorRadioTile)) && target !== this.currentRadioSelection) {
              this.currentRadioSelection.focus();
            }
          }
        };
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'fieldset-class-name'
      })],
      key: "fieldsetClassName",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        type: Boolean
      })],
      key: "disabled",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "currentRadioSelection",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "currentSelections",
      value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "radioTiles",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "selectableTiles",
      value: void 0
    }, {
      kind: "method",
      key: "firstUpdated",
      value:
      /**
       * Focus listener to focus on selected element upon focusing
       *
       * @param event to get focused
       */
      /**
       * Provide an optional className to be applied to the component
       */
      /**
       * Specify whether the group is disabled
       */
      function firstUpdated() {
        if (!this.hasAttribute('role')) {
          this.setAttribute('role', 'group');
        }
        if (!this.radioTiles) {
          this.radioTiles = this.querySelectorAll(this.constructor.selectorRadioTile);
        }
        if (!this.selectableTiles) {
          this.selectableTiles = this.querySelectorAll(this.constructor.selectorSelectableTile);
        }
        if (this.disabled) {
          this.radioTiles.forEach(e => e.toggleAttribute('disabled'));
          this.selectableTiles.forEach(e => e.toggleAttribute('disabled'));
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          fieldsetClassName,
          disabled
        } = this;
        return html(_t || (_t = _`
      <fieldset class="${0}" ?disabled=${0}>
        <slot name="legend" class="${0}--label"></slot>
        <slot></slot>
      </fieldset>
    `), fieldsetClassName, disabled, prefix);
      }

      /**
       * A selector that selects a radio tile component.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorRadioTile",
      value: function selectorRadioTile() {
        return `${prefix}-radio-tile`;
      }

      /**
       * A selector that selects a selectable tile component.
       */
    }, {
      kind: "get",
      static: true,
      key: "selectorSelectableTile",
      value: function selectorSelectableTile() {
        return `${prefix}-selectable-tile`;
      }

      /**
       * The name of the custom event fired after a radio tile changes its selected state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventCurrentRadioTileSelection",
      value: function eventCurrentRadioTileSelection() {
        return `${prefix}-current-radio-tile-selection`;
      }

      /**
       * The name of the custom event fired after a radio tile changes its selected state.
       */
    }, {
      kind: "get",
      static: true,
      key: "eventCurrentSelectableTilesSelection",
      value: function eventCurrentSelectableTilesSelection() {
        return `${prefix}-current-selectable-tile-selections`;
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
export default CDSTileGroup;
//# sourceMappingURL=tile-group.js.map
