/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import './index';
import { BUTTON_SIZE } from '../button/button';
/**
 * A class to manage file uploading states, like sending file contents to server.
 * DEMONSTRATION-PURPOSE ONLY.
 * Data/state handling in file uploading tends to involve lots of application-specific logics
 * and thus abstracting everything in a library won't be a good return on investment
 * vs. letting users copy code here and implement features that fit their needs.
 */
export default class CDSCEDemoFileUploader extends LitElement {
    /**
     * The files being uploaded.
     */
    private _files;
    /**
     * Handles `cds-drop-container-changed` on `<cds-file-drop-container>`.
     *
     * @param event The event.
     */
    private _handleChange;
    /**
     * Handles `cds-file-uploader-item-deleted` on `<cds-file-uploader-item>`.
     *
     * @param event The event.
     */
    private _handleDelete;
    /**
     * Simulates updating file.
     *
     * @param data The data of the file being uploaded.
     */
    private _simulateUpload;
    /**
     * The file types the file input should accept, separated by space.
     */
    accept: string;
    /**
     * `true` if the drop container should be disabled.
     */
    button: boolean;
    /**
     * Button kind.
     */
    buttonKind: string;
    /**
     * Button label.
     */
    buttonLabel: string;
    /**
     * `true` if the drop container should be disabled.
     */
    disabled: boolean;
    /**
     * Icon description.
     */
    iconDescription: string;
    /**
     * The input name.
     */
    inputName: string;
    /**
     * The label description text.
     */
    labelDescription: string;
    /**
     * The label title.
     */
    labelTitle: string;
    /**
     * `true` if the drop container should accept more than one files at once.
     * Note that even with `false` set here, user _can_ select multiple files one by one.
     */
    multiple: boolean;
    /**
     * The size of the button item.
     */
    size: BUTTON_SIZE;
    /**
     * The state of this file uploader item.
     */
    inputState: string;
    render(): import("lit-html").TemplateResult<1>;
}

//# sourceMappingURL=demo-file-uploader.d.ts.map
