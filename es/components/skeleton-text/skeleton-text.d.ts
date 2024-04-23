/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import { SKELETON_TEXT_TYPE } from './defs';
export { SKELETON_TEXT_TYPE };
/**
 * Skeleton text.
 *
 * @element cds-skeleton-text
 */
declare class CDSSkeletonText extends LitElement {
    /**
     * The type of skeleton text.
     */
    type: SKELETON_TEXT_TYPE;
    /**
     * width (in px or %) of single line of text or max-width of paragraph lines
     */
    width: string;
    /**
     * will generate multiple lines of text
     */
    paragraph: boolean;
    /**
     * the number of lines in a paragraph
     */
    lineCount: number;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSSkeletonText;

//# sourceMappingURL=skeleton-text.d.ts.map
