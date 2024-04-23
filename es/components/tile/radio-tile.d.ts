/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import SelectableTile from './selectable-tile';
/**
 * Single-selectable tile.
 *
 * @element cds-radio-tile
 * @fires cds-radio-tile-selected
 *   The name of the custom event fired after this selectable tile changes its selected state.
 */
declare class CDSRadioTile extends SelectableTile {
    /**
     * The `type` attribute of the `<input>`.
     */
    protected _inputType: string;
    /**
     * Handles `change` event on the `<input>` in the shadow DOM.
     */
    protected _handleChange(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * The name of the custom event fired after this selectable tile changes its selected state.
     */
    static get eventRadioChange(): string;
}
export default CDSRadioTile;

//# sourceMappingURL=radio-tile.d.ts.map
