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
 * Popover.
 *
 * @element cds-popover
 */
declare class CDSPopover extends LitElement {
    /**
     * Specify direction of alignment
     */
    align: string;
    /**
     * Specify whether a caret should be rendered
     */
    caret: boolean;
    /**
     * Specify whether a dropShadow should be rendered
     */
    dropShadow: boolean;
    /**
     * Render the component using the high-contrast variant
     */
    highContrast: boolean;
    /**
     * Specify whether the component is currently open or closed
     */
    open: boolean;
    /**
     * Render the component using the tab tip variant
     */
    tabTip: boolean;
    /**
     * Handles `slotchange` event.
     */
    protected _handleSlotChange({ target }: Event): void;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that will return the CDSPopoverContent.
     */
    static get selectorPopoverContent(): string;
    static styles: any;
}
export default CDSPopover;

//# sourceMappingURL=popover.d.ts.map
