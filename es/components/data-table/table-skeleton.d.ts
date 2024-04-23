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
 * Data table skeleton
 *
 * @element cds-table-skeleton
 */
declare class CDSTableSkeleton extends LitElement {
    /**
     * Optionally specify the displayed headers
     */
    private headers;
    /**
     * Optionally specify whether you want the Skeleton to be rendered as a compact DataTable
     */
    compact: boolean;
    /**
     * Specify the number of columns that you want to render in the skeleton state
     */
    columnCount: number;
    /**
     * Specify the number of rows that you want to render in the skeleton state
     */
    rowCount: number;
    /**
     * Specify if the table header should be rendered as part of the skeleton.
     */
    showHeader: boolean;
    /**
     * Specify if the table toolbar should be rendered as part of the skeleton.
     */
    showToolbar: boolean;
    /**
     *  true to add useZebraStyles striping.
     */
    zebra: boolean;
    /**
     * @returns The header
     */
    protected _renderHeader(): import("lit-html").TemplateResult<1> | undefined;
    /**
     * @returns The header
     */
    protected _renderToolbar(): import("lit-html").TemplateResult<1> | undefined;
    connectedCallback(): void;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSTableSkeleton;

//# sourceMappingURL=table-skeleton.d.ts.map
