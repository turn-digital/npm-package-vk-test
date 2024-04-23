/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import { NAVIGATION_DIRECTION, CONTENT_SWITCHER_SIZE } from './defs';
import CDSContentSwitcherItem from './content-switcher-item';
export { NAVIGATION_DIRECTION, CONTENT_SWITCHER_SIZE };
/**
 * Content switcher.
 *
 * @element cds-content-switcher
 * @fires cds-content-switcher-beingselected
 *   The custom event fired before a content switcher item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires cds-content-switcher-selected - The custom event fired after a a content switcher item is selected upon a user gesture.
 */
export default class CDSContentSwitcher extends LitElement {
    /**
     * Handles `mouseover`/`mouseout` events on `<slot>`.
     *
     * @param event The event.
     * @param event.target The event target.
     * @param event.type The event type.
     */
    private _handleHover;
    /**
     * @param currentItem The currently selected item.
     * @param direction The navigation direction.
     * @returns The item to be selected.
     */
    protected _getNextItem(currentItem: CDSContentSwitcherItem, direction: number): Element | null;
    /**
     * Handles `click` event on the top-level element in the shadow DOM.
     *
     * @param event The event.
     * @param event.target The event target.
     */
    protected _handleClick({ target }: MouseEvent): void;
    /**
     * Handles `keydown` event on the top-level element in the shadow DOM.
     *
     * @param event The event.
     * @param event.key The event key.
     */
    protected _handleKeydown({ key }: KeyboardEvent): void;
    /**
     * Handles user-initiated selection of a content switcher item.
     *
     * @param [item] The content switcher item user wants to select.
     */
    protected _handleUserInitiatedSelectItem(item: CDSContentSwitcherItem): void;
    /**
     * Navigates through content switcher items.
     *
     * @param direction `-1` to navigate backward, `1` to navigate forward.
     */
    protected _navigate(direction: number): void;
    /**
     * A callback that runs after change in content switcher selection upon user interaction is confirmed.
     *
     * @param itemToSelect A content switcher item.
     */
    protected _selectionDidChange(itemToSelect: CDSContentSwitcherItem): void;
    /**
     * The value of the selected item.
     */
    value: string;
    /**
     * Content switcher size.
     */
    size: CONTENT_SWITCHER_SIZE;
    /**
     * Icon only.
     */
    iconOnly: boolean;
    shouldUpdate(changedProperties: any): boolean;
    _handleSlotchange(): void;
    /**
     * A selector that will return content switcher items.
     */
    static get selectorItem(): string;
    /**
     * A selector that will return content switcher icon items.
     */
    static get selectorIconItem(): string;
    /**
     * A selector that will return enabled content switcher items.
     */
    static get selectorItemEnabled(): string;
    /**
     * A selector that will return selected items.
     */
    static get selectorItemSelected(): string;
    /**
     * The name of the custom event fired before a content switcher item is selected upon a user gesture.
     * Cancellation of this event stops changing the user-initiated selection.
     */
    static get eventBeforeSelect(): string;
    /**
     * The name of the custom event fired after a a content switcher item is selected upon a user gesture.
     */
    static get eventSelect(): string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}

//# sourceMappingURL=content-switcher.d.ts.map
