import _decorate from "@babel/runtime/helpers/esm/decorate";
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { customElement } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import CDSButtonSet from '../button/button-set';

/**
 * Button set.
 *
 * @element cds-side-panel-button-set
 */
let CDSSidePanelButtonSet = _decorate([customElement(`${prefix}-side-panel-button-set`)], function (_initialize, _CDSButtonSet) {
  class CDSSidePanelButtonSet extends _CDSButtonSet {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSidePanelButtonSet,
    d: [{
      kind: "method",
      key: "_handleSlotChange",
      value: function _handleSlotChange() {
        // do not re-order button set
        return;
      }
    }]
  };
}, CDSButtonSet);
/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default CDSSidePanelButtonSet;
//# sourceMappingURL=side-panel-button-set.js.map
