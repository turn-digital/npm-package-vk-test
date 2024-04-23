/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import CDSTextInput from '../text-input/text-input';
/**
 * Text area.
 *
 * @element cds-textarea
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */
declare class CDSTextarea extends CDSTextInput {
    /**
     * Handles `oninput` event on the `<input>`.
     *
     * @param event The event.
     * @param event.target The event target.
     */
    protected _handleInput({ target }: Event): void;
    /**
     * The number of columns for the stextarea to show by default
     */
    cols: any;
    /**
     * ID to link the `label` and `textarea`
     */
    id: string;
    /**
     * Pattern to validate the textarea against for HTML validity checking
     */
    pattern: string;
    /**
     * Boolean property to set the required status
     */
    required: boolean;
    /**
     * The number of rows for the textarea to show by default
     */
    rows: number;
    /**
     * Get a reference to the underlying textarea so we can directly apply values.
     * This lets us fixe a bug where after a user would clear text, the value wouldn't update programmatically
     */
    protected _textarea: HTMLTextAreaElement;
    render(): import("lit-html").TemplateResult<1>;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    static styles: any;
}
export default CDSTextarea;

//# sourceMappingURL=textarea.d.ts.map
