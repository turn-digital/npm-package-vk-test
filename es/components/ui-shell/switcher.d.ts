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
 * Switcher
 *
 * @element cds-switcher
 */
declare class CDSSwitcher extends LitElement {
    /**
     * Required props for accessibility label on the underlying menu
     */
    ariaLabel: any;
    /**
     * Prop for accessibility labelled by on the underlying menu
     */
    ariaLabelledBy: any;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    static styles: any;
}
export default CDSSwitcher;

//# sourceMappingURL=switcher.d.ts.map
