/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
/**
 * An option in select box.
 *
 * @element cds-select-item
 */
declare class CDSSelectItem extends LitElement {
    /**
     * `true` to disable this option.
     */
    disabled: boolean;
    /**
     * The label. If this is not specified, the child text content is used.
     */
    label: string;
    /**
     * `true` to select this option.
     */
    selected: boolean;
    /**
     * The value.
     */
    value: string;
}
export default CDSSelectItem;

//# sourceMappingURL=select-item.d.ts.map
