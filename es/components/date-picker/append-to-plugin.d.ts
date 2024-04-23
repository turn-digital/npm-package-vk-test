/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Plugin } from 'flatpickr/dist/types/options';
/**
 * The configuration for the Flatpickr plugin to put the calendar dropdown in shadow DOM.
 */
export interface DatePickerAppendToPluginConfig {
    /**
     * The floating menu container.
     */
    appendTo: HTMLElement;
}
/**
 * @param config Plugin configuration.
 * @returns A Flatpickr plugin to put the calendar dropdown in shadow DOM.
 */
declare const _default: (config: DatePickerAppendToPluginConfig) => Plugin;
export default _default;

//# sourceMappingURL=append-to-plugin.d.ts.map
