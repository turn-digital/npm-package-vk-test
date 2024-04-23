/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
/**
 * List item.
 *
 * @element cds-list-item
 * @slot nested - The nested child list.
 */
declare class CDSListItem extends LitElement {
    /**
     * `true` if there is slotted nested child list.
     */
    private _hasNestedChild;
    /**
     * Handles `slotchange` event for the `<slot>` for the nested child list.
     *
     * @param event The event.
     * @param event.target The event target.
     */
    private _handleSlotChangeNested;
    /**
     * `true` if this list item is a child of a nested list.
     * `<cds-ordered-list>` or `<cds-unordered-list>` automatically sets this property.
     */
    nested: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that will return nested list.
     */
    static get selectorNestedList(): string;
    static styles: any;
}
export default CDSListItem;

//# sourceMappingURL=list-item.d.ts.map
