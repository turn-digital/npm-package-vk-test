/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Instance as FlatpickrInstance } from 'flatpickr/dist/types/instance';
import { Plugin } from 'flatpickr/dist/types/options';
import Handle from '../../globals/internal/handle';
import CDSDatePickerInput from './date-picker-input';
/**
 * The configuration for the Flatpickr plugin to set CSS classes specific to this design system.
 */
export interface DatePickerFocusPluginConfig {
    /**
     * The input box to enter starting date.
     */
    inputFrom: CDSDatePickerInput;
    /**
     * The input box to enter end date.
     */
    inputTo?: CDSDatePickerInput;
}
/**
 * `FlatpickrInstance` with additional properties used for `carbonFlatpickrFocusPlugin`.
 */
export interface ExtendedFlatpickrInstanceFocusPlugin extends FlatpickrInstance {
    /**
     * The handle for `blur` event handler in calendar dropdown.
     */
    _hCDSCEDatePickerFocusPluginBlur?: Handle | null;
    /**
     * The handle for `keydown` event handler in the `<input>` for the starting date.
     */
    _hCDSCEDatePickerFocusPluginKeydownFrom?: Handle | null;
    /**
     * The handle for `keydown` event handler in the `<input>` for the end date.
     */
    _hCDSCEDatePickerFocusPluginKeydownTo?: Handle | null;
    /**
     * The handle for `focus` event handler in the `<input>` for the starting date.
     */
    _hCDSCEDatePickerFocusPluginFocusFrom?: Handle | null;
    /**
     * The handle for `focus` event handler in the `<input>` for the end date.
     */
    _hCDSCEDatePickerFocusPluginFocusTo?: Handle | null;
    /**
     * Lastly focused `<input>` for starting/end date.
     */
    _lastFocusInput?: HTMLInputElement;
}
/**
 * @param config Plugin configuration.
 * @returns A Flatpickr plugin to manage focus to align with the UX pattern in our design system.
 */
declare const _default: (config: DatePickerFocusPluginConfig) => Plugin;
export default _default;

//# sourceMappingURL=focus-plugin.d.ts.map
