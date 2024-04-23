/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { NUMBER_INPUT_VALIDATION_STATUS } from './defs';
import CDSTextInput, { INPUT_SIZE } from '../text-input/text-input';
export { NUMBER_INPUT_VALIDATION_STATUS };
/**
 * Number input.
 *
 * @element cds-number-input
 * @fires cds-number-input
 *   The name of the custom event fired after the value is changed upon a user gesture.
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */
declare class CDSNumberInput extends CDSTextInput {
    /**
     * Handles `input` event on the `<input>` in the shadow DOM.
     */
    protected _handleInput(event: Event): void;
    /**
     * Handles `click` event on the up button in the shadow DOM.
     */
    protected _handleUserInitiatedStepDown(_: Event): void;
    /**
     * Handles `click` event on the down button in the shadow DOM.
     */
    protected _handleUserInitiatedStepUp(_: Event): void;
    /**
     * The underlying input element
     */
    protected _input: HTMLInputElement;
    _getInputValidity(): boolean;
    protected _min: string;
    protected _max: string;
    protected _step: string;
    /**
     * The minimum value allowed in the input
     */
    get min(): string;
    set min(value: string);
    /**
     * The maximum value allowed in the input
     */
    get max(): string;
    set max(value: string);
    /**
     * The amount the value should increase or decrease by
     */
    get step(): string;
    set step(value: string);
    /**
     * Aria text for the button that increments the value
     */
    incrementButtonAssistiveText: string;
    /**
     * Aria text for the button that decrements the value
     */
    decrementButtonAssistiveText: string;
    /**
     * Specify whether you want the steppers to be hidden
     */
    hideSteppers: boolean;
    /**
     * `true` to allow empty string.
     */
    allowEmpty: boolean;
    /**
     * The input box size.
     */
    size: INPUT_SIZE;
    /**
     * Handles incrementing the value in the input
     */
    stepUp(): void;
    /**
     * Handles decrementing the value in the input
     */
    stepDown(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * The name of the custom event fired after the value is changed upon a user gesture.
     */
    static get eventInput(): string;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    static styles: any;
}
export default CDSNumberInput;

//# sourceMappingURL=number-input.d.ts.map
