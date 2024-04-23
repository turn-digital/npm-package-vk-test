/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import { ACCORDION_ALIGNMENT } from './accordion';
import './accordion-item-skeleton';
import '../skeleton-text/index';
/**
 * Skeleton of code snippet.
 */
declare class CDSAccordionSkeleton extends LitElement {
    /**
     * Specify the alignment of the accordion heading title and chevron
     */
    alignment: ACCORDION_ALIGNMENT;
    /**
     * Set number of items to render
     */
    count: number;
    /**
     * Specify whether Accordion text should be flush, default is false, does not work with align="start"
     */
    isFlush: boolean;
    /**
     * `true` if the first accordion item should be open.
     */
    open: boolean;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    static get selectorAccordionItemSkeletons(): string;
    static styles: any;
}
export default CDSAccordionSkeleton;

//# sourceMappingURL=accordion-skeleton.d.ts.map
