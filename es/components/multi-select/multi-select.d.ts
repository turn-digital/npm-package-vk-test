/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { TemplateResult } from 'lit';
import CDSDropdown from '../dropdown/dropdown';
import { SELECTION_FEEDBACK_OPTION } from './defs';
import CDSMultiSelectItem from './multi-select-item';
export { DROPDOWN_SIZE, DROPDOWN_TYPE, DROPDOWN_DIRECTION, } from '../dropdown/dropdown';
export { SELECTION_FEEDBACK_OPTION };
/**
 * Multi select.
 *
 * @element cds-multi-select
 * @fires cds-multi-select-beingselected
 *   The custom event fired before a multi select item is selected upon a user gesture.
 *   Cancellation of this event stops changing the user-initiated selection.
 * @fires cds-multi-select-selected - The custom event fired after a multi select item is selected upon a user gesture.
 * @fires cds-multi-select-beingtoggled
 *   The custom event fired before the open state of this multi select is toggled upon a user gesture.
 *   Cancellation of this event stops the user-initiated toggling.
 * @fires cds-multi-select-toggled
 *   The custom event fired after the open state of this multi select is toggled upon a user gesture.
 */
declare class CDSMultiSelect extends CDSDropdown {
    filterable: any;
    /**
     * The count of selected items.
     */
    private _selectedItemsCount;
    /**
     * The clear button.
     */
    private _clearButtonNode;
    /**
     * The selection button.
     */
    private _selectionButtonNode;
    /**
     * The menu body.
     */
    private _menuBodyNode;
    /**
     * The `<input>` for filtering.
     */
    private _filterInputNode;
    /**
     * The trigger button.
     */
    private _triggerNode;
    protected _selectionShouldChange(itemToSelect?: CDSMultiSelectItem): boolean;
    protected _selectionDidChange(itemToSelect?: CDSMultiSelectItem): void;
    protected _handleClickInner(event: MouseEvent): void;
    /**
     * Handler for the `keypress` event, ensures filter still works upon entering space
     */
    protected _handleKeypressInner(event: KeyboardEvent): void;
    /**
     * Special andler for the `keypress` event, ensures space selection for filterable
     * variation is disabled
     */
    protected _handleKeypressInnerFlterable(event: KeyboardEvent): void;
    protected _renderTitleLabel(): TemplateResult<1>;
    protected _renderPrecedingLabel(): TemplateResult<1> | undefined;
    /**
      @returns The main content of the trigger button.
     */
    protected _renderLabel(): TemplateResult;
    protected _renderFollowingLabel(): TemplateResult | void;
    /**
     * Handles `input` event on the `<input>` for filtering.
     */
    protected _handleInput(): void;
    /**
     * Navigate through dropdown items.
     *
     * @param direction `-1` to navigate backward, `1` to navigate forward.
     */
    protected _navigate(direction: number): void;
    /**
     * Handles user-initiated clearing the `<input>` for filtering.
     */
    protected _handleUserInitiatedClearInput(): void;
    /**
     * The `aria-label` attribute for the icon to clear selection.
     */
    clearSelectionLabel: string;
    /**
     * Specify the text that should be read for screen readers that describes total items selected
     */
    clearSelectionDescription: string;
    /**
     * Specify the text that should be read for screen readers to clear selection.
     */
    clearSelectionText: string;
    /**
     * Specify the locale of the control. Used for the default compareItems used for sorting the list of items in the control.
     */
    locale: string;
    /**
     * An assistive text for screen reader to announce, telling that an item is unselected.
     */
    unselectedItemAssistiveText: string;
    /**
     * An assistive text for screen reader to announce, telling that all items are unselected.
     */
    unselectedAllAssistiveText: string;
    /**
     * Specify feedback (mode) of the selection.
     * `top`: selected item jumps to top
     * `fixed`: selected item stays at it's position
     * `top-after-reopen`: selected item jump to top after reopen dropdown
     */
    selectionFeedback: SELECTION_FEEDBACK_OPTION;
    /**
     * The CSS class list for multi-select listbox
     */
    protected get _classes(): import("lit-html/directive").DirectiveResult<typeof import("lit-html/directives/class-map").ClassMapDirective>;
    protected compareItems: (itemA: any, itemB: any, { locale }: {
        locale: any;
    }) => void;
    protected sortItems: (menuItems: NodeList, { values, compareItems, locale }: {
        values: any;
        compareItems: any;
        locale?: string | undefined;
    }) => Node[];
    shouldUpdate(changedProperties: any): boolean;
    updated(changedProperties: any): void;
    connectedCallback(): void;
    /**
     * A selector that will return menu body.
     */
    static get selectorMenuBody(): string;
    /**
     * A selector that will return highlighted items.
     */
    static get selectorItemHighlighted(): string;
    /**
     * A selector that will return multi select items.
     * We use a separate property from `.itemTagName` due to the nature in difference of tag name vs. selector.
     */
    static get selectorItem(): string;
    /**
     * A selector that will return remaining items after a filter.
     */
    static get selectorItemFiltered(): string;
    /**
     * A selector that will return remaining items after a filter.
     */
    static get selectorItemResults(): string;
    /**
     * A selector that will return selected items.
     */
    static get selectorItemSelected(): string;
    /**
     * The name of the custom event fired before this multi select item is being toggled upon a user gesture.
     * Cancellation of this event stops the user-initiated action of toggling this multi select item.
     */
    static get eventBeforeToggle(): string;
    /**
     * The name of the custom event fired after this multi select item is toggled upon a user gesture.
     */
    static get eventToggle(): string;
    /**
     * The name of the custom event fired before a multi select item is selected upon a user gesture.
     * Cancellation of this event stops changing the user-initiated selection.
     */
    static get eventBeforeSelect(): string;
    /**
     * The name of the custom event fired after a a multi select item is selected upon a user gesture.
     */
    static get eventSelect(): string;
    static styles: any;
}
export default CDSMultiSelect;

//# sourceMappingURL=multi-select.d.ts.map
