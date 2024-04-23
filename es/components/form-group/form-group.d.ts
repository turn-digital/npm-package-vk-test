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
 * The shell UI for file uploader.
 *
 * @element cds-form-group
 * @slot label-title.
 * @slot lebel-description.
 */
declare class CDSFormGroup extends LitElement {
    /**
     * Specify whether the Form Group is invalid
     */
    invalid: boolean;
    /**
     * Provide id for the fieldset <legend> which corresponds to the fieldset
     * `aria-labelledby`
     */
    legendId: any;
    /**
     * Provide the text to be rendered inside of the fieldset <legend>
     */
    legendText: string;
    /**
     * Specify whether the message should be displayed in the Form Group
     */
    message: boolean;
    /**
     * Provide the text for the message in the Form Group
     */
    messageText: any;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSFormGroup;

//# sourceMappingURL=form-group.d.ts.map
