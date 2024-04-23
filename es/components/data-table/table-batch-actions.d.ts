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
 * Table batch actions.
 *
 * @element cds-table-batch-actions
 * @fires cds-table-batch-actions-cancel-clicked - The custom event fired after the Cancel button is clicked.
 */
declare class CDSTableBatchActions extends LitElement {
    /**
     * Handles `click` event on the Cancel button.
     */
    private _handleCancel;
    /**
     * `true` if this batch actions bar should be active.
     */
    active: boolean;
    /**
     * The formatter for selected items. Should be changed upon the locale the UI is rendered with.
     */
    formatSelectedItemsCount: ({ count }: {
        count: any;
    }) => string;
    /**
     * Numeric representation of the total number of items selected in a table.
     * This number is used to derive the selection message.
     */
    selectedRowsCount: number;
    firstUpdated(): void;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * The CSS selector to find the action buttons.
     */
    static get selectorButtons(): string;
    /**
     * The name of the custom event fired after the Cancel button is clicked.
     */
    static get eventClickCancel(): string;
    static styles: any;
}
export default CDSTableBatchActions;

//# sourceMappingURL=table-batch-actions.d.ts.map
