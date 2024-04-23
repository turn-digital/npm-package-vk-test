/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import CDSUnorderedList from './unordered-list';
/**
 * Ordered list.
 */
declare class CDSOrderedList extends CDSUnorderedList {
    /**
     * Specify whether the ordered list should use native list styles instead of
     * custom counter
     */
    native: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
export default CDSOrderedList;

//# sourceMappingURL=ordered-list.d.ts.map
