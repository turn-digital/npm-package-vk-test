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
 * Table toolbar content.
 *
 * @element cds-table-toolbar-content
 */
declare class CDSTableToolbarContent extends LitElement {
    /**
     * `true` if this batch actions bar is active.
     */
    hasBatchActions: boolean;
    /**
     * Table toolbar contents size
     */
    size: any;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSTableToolbarContent;

//# sourceMappingURL=table-toolbar-content.d.ts.map
