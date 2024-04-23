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
 * Check box.
 *
 * @element cds-checkbox
 * @fires cds-checkbox-changed - The custom event fired after this changebox changes its checked state.
 * @csspart input The checkbox.
 * @csspart label The label.
 */
declare class CDSCheckboxGroup extends LitElement {
    /**
     * fieldset `aria-labelledby`
     */
    ariaLabelledBy: any;
    /**
     * Specify whether the form group is currently disabled
     */
    disabled: any;
    /**
     * Provide text for the form group for additional help
     */
    helperText: any;
    /**
     * Specify whether the form group is currently invalid
     */
    invalid: any;
    /**
     * Provide the text that is displayed when the form group is in an invalid state
     */
    invalidText: any;
    /**
     * Provide id for the fieldset <legend> which corresponds to the fieldset
     * `aria-labelledby`
     */
    legendId: any;
    /**
     * Provide the text to be rendered inside of the fieldset <legend>
     */
    legendText: any;
    /**
     * Whether the CheckboxGroup should be read-only
     */
    readonly: boolean;
    /**
     * Specify whether the form group is currently in warning state
     */
    warn: boolean;
    /**
     * Provide the text that is displayed when the form group is in warning state
     */
    warnText: string;
    protected _handleSlotChange({ target }: Event): void;
    /**
     * `true` if there is a slug.
     */
    protected _hasSlug: boolean;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that will return the checkboxes.
     */
    static get selectorCheckbox(): string;
    /**
     * A selector that will return the slug item.
     */
    static get slugItem(): string;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    static styles: any;
}
export default CDSCheckboxGroup;

//# sourceMappingURL=checkbox-group.d.ts.map
