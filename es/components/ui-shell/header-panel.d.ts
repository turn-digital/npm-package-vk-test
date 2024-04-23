/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
/**
 * Header panel
 *
 * @element cds-header-panel
 */
declare class CDSHeaderPanel extends LitElement {
    /**
     * Specify whether the panel is expanded
     */
    expanded: any;
    render(): import("lit-html").TemplateResult<1>;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    static styles: any;
}
export default CDSHeaderPanel;

//# sourceMappingURL=header-panel.d.ts.map
