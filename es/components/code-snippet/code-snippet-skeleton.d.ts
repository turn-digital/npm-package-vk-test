/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import { CODE_SNIPPET_TYPE } from './code-snippet';
/**
 * Skeleton of code snippet.
 */
declare class CDSCodeSnippetSkeleton extends LitElement {
    /**
     * The type of code snippet. Corresponds to the attribute with the same name.
     */
    type: CODE_SNIPPET_TYPE;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSCodeSnippetSkeleton;

//# sourceMappingURL=code-snippet-skeleton.d.ts.map
