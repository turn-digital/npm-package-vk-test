/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
/**
 * Button set.
 *
 * @element cds-button-set
 */
declare class CDSButtonSet extends LitElement {
    /**
     * Handler for @slotchange, set the first cds-button to kind secondary and primary for the remaining ones
     *
     * @private
     */
    protected _handleSlotChange(event: Event): void;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    /**
     * A selector that will return the child items.
     */
    static get selectorItem(): string;
    static styles: any;
}
export default CDSButtonSet;

//# sourceMappingURL=button-set.d.ts.map
