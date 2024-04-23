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
 * Data table body.
 *
 * @element cds-table-body
 */
declare class CDSTableBody extends LitElement {
    /**
     * The `<slot>` element in the shadow DOM.
     */
    private _slotNode;
    /**
     * Updates `even`/`odd` properties of the child `<cds-table-row>`s.
     */
    private _updateZebra;
    /**
     * Handles `slotchange` event in the `<slot>` element in the shadow DOM.
     */
    private _handleSlotChange;
    /**
     * TODO: Uncomment when Carbon fully implements sticky header
     * Specify whether the header should be sticky.
     * Still experimental: may not work with every combination of table props
     */
    /**
     * The color scheme.
     */
    useZebraStyles: boolean;
    connectedCallback(): void;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSTableBody;

//# sourceMappingURL=table-body.d.ts.map
