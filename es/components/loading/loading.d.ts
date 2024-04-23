/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import { LOADING_TYPE } from './defs';
/**
 * Spinner indicating loading state.
 *
 * @element cds-loading
 */
declare class CDSLoading extends LitElement {
    /**
     * The assistive text for the spinner icon.
     */
    assistiveText: string;
    /**
     * Spinner type.
     */
    type: LOADING_TYPE;
    /**
     * `true` if overlay should be applied.
     */
    overlay: boolean;
    /**
     * `true` if spinner should stop.
     */
    inactive: boolean;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export { LOADING_TYPE };
export default CDSLoading;

//# sourceMappingURL=loading.d.ts.map
