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
declare class CDSPopoverContent extends LitElement {
    /**
     * Specify the popover alignment
     */
    align: string;
    /**
     * Specify whether a caret should be rendered
     */
    caret: any;
    /**
     * Specify whether a dropShadow should be rendered
     */
    dropShadow: boolean;
    /**
     * Specify whether the component is currently open or closed
     */
    open: boolean;
    /**
     * Render the component using the tab tip variant
     */
    tabTip: boolean;
    /**
     * The shadow slot this popover content should be in.
     */
    slot: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSPopoverContent;

//# sourceMappingURL=popover-content.d.ts.map
