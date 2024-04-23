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
 * Skeleton of progress indicator.
 */
export default class CDSProgressIndicatorSkeleton extends LitElement {
    /**
     * `true` if the progress indicator should be vertical. Corresponds to the attribute with the same name.
     */
    vertical: boolean;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that will return progress steps.
     */
    static get selectorStep(): string;
    static styles: any;
}

//# sourceMappingURL=progress-indicator-skeleton.d.ts.map
