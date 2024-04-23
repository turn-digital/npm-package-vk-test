import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import on from './on';
/**
 * @param Base The base class.
 * @returns A mix-in to handle `formdata` event on the containing form.
 */
const FormMixin = Base => {
  /**
   * A mix-in class to handle `formdata` event on the containing form.
   */
  class FormMixinImpl extends Base {
    constructor(...args) {
      super(...args);
      /**
       * The handle for `formdata` event listener on the containing form.
       *
       * @private
       */
      _defineProperty(this, "_hFormdata", null);
    } // Not using TypeScript `private` due to: microsoft/TypeScript#17744
    /**
     * Handles `formdata` event.
     *
     * @param event The event.
     */
    connectedCallback() {
      // @ts-ignore
      super.connectedCallback();
      const form = this.closest('form');
      if (form) {
        this._hFormdata = on(form, 'formdata', this._handleFormdata.bind(this));
      }
    }
    disconnectedCallback() {
      if (this._hFormdata) {
        this._hFormdata = this._hFormdata.release();
      }
      // @ts-ignore
      super.disconnectedCallback();
    }
  }
  return FormMixinImpl;
};
export default FormMixin;
//# sourceMappingURL=form.js.map
