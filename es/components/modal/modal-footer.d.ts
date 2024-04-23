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
 * Modal footer.
 *
 * @element cds-modal-footer
 */
declare class CDSModalFooter extends LitElement {
    /**
     * `true` if this modal footer has more than two buttons.
     */
    hasThreeButtons: boolean;
    /**
     * Handles `slotchange` event.
     */
    private _handleSlotChange;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that selects the child buttons.
     */
    static get selectorButtons(): string;
    static styles: any;
}
export default CDSModalFooter;

//# sourceMappingURL=modal-footer.d.ts.map
