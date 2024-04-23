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
 * Data table cell.
 *
 * @element cds-table-cell
 */
declare class CDSTableCell extends LitElement {
    /**
     * Specify whether the overflow menu (if it exists) should be shown always, or only on hover
     */
    overflowMenuOnHover: boolean;
    /**
     * The table size.
     */
    size: any;
    /**
     * TODO: Uncomment when Carbon fully implements sticky header
     * Specify whether the header should be sticky.
     * Still experimental: may not work with every combination of table props
     */
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSTableCell;

//# sourceMappingURL=table-cell.d.ts.map
