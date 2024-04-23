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
 * Structured list header row.
 *
 * @element cds-structured-list-header-row
 */
declare class CDSStructuredListHeaderRow extends LitElement {
    /**
     * The `name` attribute for the `<input>` for selection.
     * If present, this structured list header row will show its selectable version of the UI.
     */
    selectionName: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSStructuredListHeaderRow;

//# sourceMappingURL=structured-list-header-row.d.ts.map
