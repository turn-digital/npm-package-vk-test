/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import CDSButton from '../button/button';
/**
 * Header global action button
 *
 * @element cds-header-global-action
 */
declare class CDSHeaderGlobalAction extends CDSButton {
    protected _buttonNode: HTMLButtonElement;
    /**
     * Specify whether the action is currently active
     */
    active: any;
    /**
     * Specify which header panel the button is associated with.
     */
    panelId: any;
    /**
     * The `aria-label` attribute for the button in its active state.
     */
    buttonLabelActive: any;
    /**
     * The `aria-label` attribute for the button in its inactive state.
     */
    buttonLabelInactive: any;
    connectedCallback(): void;
    private _handleClick;
    updated(): void;
    shouldUpdate(changedProperties: any): boolean;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    static styles: any;
}
export default CDSHeaderGlobalAction;

//# sourceMappingURL=header-global-action.d.ts.map
