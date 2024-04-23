/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import on from '../../globals/mixins/on';

/**
 * The configuration for the Flatpickr plugin to set CSS classes specific to this design system.
 */

/**
 * `FlatpickrInstance` with additional properties used for `carbonFlatpickrFocusPlugin`.
 */

/**
 * @param config Plugin configuration.
 * @returns A Flatpickr plugin to manage focus to align with the UX pattern in our design system.
 */
export default (config => fp => {
  /**
   * Focuses on calendar dropdown.
   */
  const focusCalendar = () => {
    const {
      calendarContainer,
      selectedDateElem,
      todayDateElem
    } = fp;
    (selectedDateElem || todayDateElem || calendarContainer).focus();
  };

  /**
   * Handles `blur` event to move the focus back to the `<input>`.
   */
  const handleBlur = ({
    target,
    relatedTarget
  }) => {
    // Obtains `beingUpdated` up-front because it'll be flushed out shortly
    const {
      calendarContainer,
      isOpen
    } = fp;
    if (isOpen && calendarContainer.contains(target) && !calendarContainer.contains(relatedTarget) && relatedTarget !== config.inputFrom && relatedTarget !== config.inputTo) {
      Promise.resolve().then(() => {
        const rootNode = target.getRootNode();
        // This `blur` event handler can be called from Flatpickr's code,
        // cleaning up the calendar dropdowns DOM. Changing focus in such
        // condition causes removing an orphaned DOM node, because Flatpickr
        // redraws the calendar dropdown when the `<input>` gets focus.
        if (rootNode.nodeType === Node.DOCUMENT_NODE || rootNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          if (fp._lastFocusInput === config.inputTo) {
            config.inputTo.focus();
          } else {
            config.inputFrom.focus();
          }
          // Closing after moving focus. Reversing the order will cause re-opening calendar dropdown upon focusing
          fp.close();
        }
      });
    }
  };

  /**
   * Handles `keydown` event to move focus on calendar dropdown.
   */
  const handleInputKeydown = event => {
    const {
      key
    } = event;
    if (key === 'ArrowDown' || key === 'Down' || key === 'Enter') {
      event.preventDefault();
      fp.open();
      if (key !== 'Enter') {
        focusCalendar();
      } else {
        // Hitting Enter key blurs the `<input>`, causing any element to lose focus
        setTimeout(focusCalendar, 0);
      }
    }
  };

  /**
   * Handles `focus` event on `<input>` for starting/end date to track the lastly focused one.
   */
  const handleInputFocus = ({
    target
  }) => {
    fp._lastFocusInput = target;
  };

  /**
   * Releases event listeners used in this Flatpickr plugin.
   */
  const release = () => {
    if (fp._hCDSCEDatePickerFocusPluginBlur) {
      fp._hCDSCEDatePickerFocusPluginBlur = fp._hCDSCEDatePickerFocusPluginBlur.release();
    }
    if (fp._hCDSCEDatePickerFocusPluginFocusTo) {
      fp._hCDSCEDatePickerFocusPluginFocusTo = fp._hCDSCEDatePickerFocusPluginFocusTo.release();
    }
    if (fp._hCDSCEDatePickerFocusPluginFocusFrom) {
      fp._hCDSCEDatePickerFocusPluginFocusFrom = fp._hCDSCEDatePickerFocusPluginFocusFrom.release();
    }
    if (fp._hCDSCEDatePickerFocusPluginKeydownTo) {
      fp._hCDSCEDatePickerFocusPluginKeydownTo = fp._hCDSCEDatePickerFocusPluginKeydownTo.release();
    }
    if (fp._hCDSCEDatePickerFocusPluginKeydownFrom) {
      fp._hCDSCEDatePickerFocusPluginKeydownFrom = fp._hCDSCEDatePickerFocusPluginKeydownFrom.release();
    }
  };

  /**
   * Sets up event listeners used for this Flatpickr plugin.
   */
  const init = () => {
    release();
    const {
      inputFrom,
      inputTo
    } = config;
    fp._hCDSCEDatePickerFocusPluginBlur = on(fp.calendarContainer, 'blur', handleBlur, true);
    fp._hCDSCEDatePickerFocusPluginKeydownFrom = on(inputFrom, 'keydown', handleInputKeydown);
    if (inputTo) {
      fp._hCDSCEDatePickerFocusPluginKeydownTo = on(inputTo, 'keydown', handleInputKeydown);
    }
    fp._hCDSCEDatePickerFocusPluginFocusFrom = on(inputFrom, 'focus', handleInputFocus);
    if (inputTo) {
      fp._hCDSCEDatePickerFocusPluginFocusTo = on(inputTo, 'focus', handleInputFocus);
    }
  };

  /**
   * Registers this Flatpickr plugin.
   *
   */
  const register = () => {
    fp.loadedPlugins.push('carbonFlatpickrFocusPlugin');
  };
  return {
    onReady: [register, init],
    onDestroy: release
  };
});
//# sourceMappingURL=focus-plugin.js.map
