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
/**
 * `FlatpickrInstance` with additional properties used for `carbonFlatpickrShadowDOMEventsPlugin`.
 */
export interface ExtendedFlatpickrInstanceShadowDOMEventsPlugin extends FlatpickrInstance {
    /**
     * The handle for `keydown` event handler in calendar dropdown.
     */
    _hCDSCEDatePickerShadowDOMEventsPluginKeydown?: Handle | null;
}
/**
 * @returns
 *   A Flatpickr plugin to handle events.
 *   Some event handlers in Flatpickr won't work is the calendar dropdown is put in shadow DOM, due to event retargetting.
 */
declare const _default: () => Plugin;
export default _default;

//# sourceMappingURL=shadow-dom-events-plugin.d.ts.map
