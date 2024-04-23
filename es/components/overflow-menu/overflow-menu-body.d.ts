/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import CDSFloatingMenu, { FLOATING_MENU_DIRECTION } from '../floating-menu/floating-menu';
import { OVERFLOW_MENU_SIZE } from './defs';
import CDSOverflowMenuItem from './overflow-menu-item';
/**
 * Overflow menu body.
 *
 * @element cds-overflow-menu-body
 */
declare class CDSOverflowMenuBody extends CDSFloatingMenu {
    /**
     * The menu direction.
     */
    direction: FLOATING_MENU_DIRECTION;
    /**
     * How the menu is aligned to the trigger button.
     */
    flipped: boolean;
    /**
     * `true` if the menu should be open.
     *
     * @private
     */
    open: boolean;
    selected: CDSOverflowMenuItem | null;
    /**
     * The overflow menu size.
     */
    size: OVERFLOW_MENU_SIZE;
    /**
     * @param currentItem The currently selected item.
     * @param direction The navigation direction.
     * @returns The item to be selected.
     */
    protected _getNextItem(currentItem: CDSOverflowMenuItem, direction: number): Element | null;
    /**
     * Navigates through overflow menu items.
     *
     * @param direction `-1` to navigate backward, `1` to navigate forward.
     */
    protected _navigate(direction: number): void;
    /**
     * Handles `keydown` event on the menu body.
     */
    protected _handleKeydown: (event: KeyboardEvent) => Promise<void>;
    connectedCallback(): void;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that will return menu items.
     */
    static get selectorMenuItem(): string;
    /**
     * A selector that will return enabled menu items.
     */
    static get selectorItemEnabled(): string;
    static styles: any;
}
export default CDSOverflowMenuBody;

//# sourceMappingURL=overflow-menu-body.d.ts.map
