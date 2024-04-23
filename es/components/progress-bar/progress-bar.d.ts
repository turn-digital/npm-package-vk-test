/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import { PROGRESS_BAR_SIZE, PROGRESS_BAR_STATUS, PROGRESS_BAR_TYPE } from './defs';
export { PROGRESS_BAR_SIZE, PROGRESS_BAR_STATUS, PROGRESS_BAR_TYPE };
/**
 * Progress bar.
 *
 * @element cds-progress-bar
 */
declare class CDSProgressBar extends LitElement {
    /**
     * The current progress as a textual representation.
     */
    helperText: any;
    /**
     * Whether the label should be visually hidden.
     */
    hideLabel: any;
    /**
     * A label describing the progress bar.
     */
    label: any;
    /**
     * The maximum value.
     */
    max: number;
    /**
     * Specify the size of the ProgressBar.
     */
    size: PROGRESS_BAR_SIZE;
    /**
     * Specify the status.
     */
    status: PROGRESS_BAR_STATUS;
    /**
     * Defines the alignment variant of the progress bar.
     */
    type: PROGRESS_BAR_TYPE;
    /**
     * The current value.
     */
    value: any;
    protected get _cappedValue(): any;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSProgressBar;

//# sourceMappingURL=progress-bar.d.ts.map
