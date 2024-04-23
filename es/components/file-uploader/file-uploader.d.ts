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
 * @element cds-file-uploader
 * @slot label-title.
 * @slot lebel-description.
 */
declare class CDSFileUploader extends LitElement {
    /**
     * `true` if the file uploader should disabled.
     */
    disabled: boolean;
    /**
     * The description text.
     */
    labelDescription: string;
    /**
     * The label title.
     */
    labelTitle: string;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that will return the `<input>` to enter starting date.
     */
    static get selectorUploaderItem(): string;
    static styles: any;
}
export default CDSFileUploader;

//# sourceMappingURL=file-uploader.d.ts.map
