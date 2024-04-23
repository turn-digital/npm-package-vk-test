/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import { INLINE_LOADING_STATE } from './defs';
export { INLINE_LOADING_STATE };
/**
 * Lnline loading spinner.
 *
 * @element cds-inline-loading
 */
declare class CDSInlineLoading extends LitElement {
    /**
     * The assistive text for the spinner icon.
     */
    assistiveText: string;
    /**
     * @returns The template for the status icon.
     */
    private _renderIcon;
    /**
     * The loading status.
     */
    status: INLINE_LOADING_STATE;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSInlineLoading;

//# sourceMappingURL=inline-loading.d.ts.map
