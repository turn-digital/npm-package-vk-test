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
 * Table toolbar.
 *
 * @element cds-table-toolbar
 */
declare class CDSTableToolbar extends LitElement {
    /**
     * Toolbar size
     */
    size: any;
    connectedCallback(): void;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * The CSS selector to find the toolbar contents
     */
    static get selectorToolbarContent(): string;
    static styles: any;
}
export default CDSTableToolbar;

//# sourceMappingURL=table-toolbar.d.ts.map
