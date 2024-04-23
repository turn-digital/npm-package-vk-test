/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import CDSDropdownItem from '../dropdown/dropdown-item';
/**
 * Multi select item.
 *
 * @element cds-multi-select-item
 */
declare class CDSMultiSelectItem extends CDSDropdownItem {
    /**
     * The property to hide when item is filtered from input
     */
    filtered: any;
    /**
     * The `name` attribute for the `<input>` for selection.
     */
    selectionName: string;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that will return multi select.
     */
    static get selectorList(): string;
    static styles: any;
}
export default CDSMultiSelectItem;

//# sourceMappingURL=multi-select-item.d.ts.map
