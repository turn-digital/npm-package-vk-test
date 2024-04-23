/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import CDSToggleTip from '../toggle-tip/toggletip';
import { SLUG_SIZE, SLUG_KIND, SLUG_DOT_TYPE } from './defs';
/**
 * Basic slug.
 *
 * @element cds-slug
 */
export default class CDSSlug extends CDSToggleTip {
    slot: string;
    /**
     * Specify the correct translation of the AI text
     */
    aiText: string;
    /**
     * Specify additional text to be rendered next to the AI label in the inline variant
     */
    aiTextLabel: string;
    /**
     * Specify the type of dot that should be rendered in front of the inline variant: (default, hollow)
     */
    dotType: SLUG_DOT_TYPE;
    /**
     * Specify the type of Slug, from the following list of types: (default, hollow, inline)
     */
    kind: SLUG_KIND;
    /**
     * Specify whether the revert button should be visible
     */
    revertActive: boolean;
    /**
     * Specify whether the revert button should be visible
     */
    revertLabel: string;
    /**
     * Slug size should be mini, 2xs, xs, sm, md, lg, xl.
     */
    size: SLUG_SIZE;
    /**
     * Specify the text that will be provided to the aria-label of the `Slug` button
     */
    slugLabel: string;
    previousValue: any;
    protected _handleClick: () => void;
    protected _renderToggleTipLabel: () => import("lit-html").TemplateResult<1>;
    protected _renderTooltipButton: () => import("lit-html").TemplateResult<1>;
    protected _renderInnerContent: () => import("lit-html").TemplateResult<1>;
    attributeChangedCallback(name: any, old: any, newValue: any): void;
    updated(changedProperties: any): void;
    static styles: any;
}

//# sourceMappingURL=slug.d.ts.map
