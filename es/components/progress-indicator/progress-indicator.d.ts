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
 * Progress indicator.
 *
 * @element cds-progress-indicator
 */
export default class CDSProgressIndicator extends LitElement {
    /**
     * Determines whether or not the progress indicator should be rendered
     * vertically.
     */
    vertical: boolean;
    /**
     * Specify whether the progress steps should be split equally in size in the
     * div
     */
    spaceEqually: boolean;
    connectedCallback(): void;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that will return progress steps.
     */
    static get selectorStep(): string;
    static styles: any;
}

//# sourceMappingURL=progress-indicator.d.ts.map
