/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import { ACCORDION_SIZE, ACCORDION_ALIGNMENT } from './defs';
export { ACCORDION_SIZE, ACCORDION_ALIGNMENT };
/**
 * Accordion container.
 *
 * @element cds-accordion
 */
declare class CDSAccordion extends LitElement {
    /**
     * Accordion size should be sm, md, lg.
     */
    size: ACCORDION_SIZE;
    /**
     * Specify the alignment of the accordion heading title and chevron
     */
    alignment: ACCORDION_ALIGNMENT;
    /**
     * Specify whether Accordion text should be flush, default is false, does not work with align="start"
     */
    isFlush: boolean;
    connectedCallback(): void;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    static get selectorAccordionItems(): string;
    static styles: any;
}
export default CDSAccordion;

//# sourceMappingURL=accordion.d.ts.map
