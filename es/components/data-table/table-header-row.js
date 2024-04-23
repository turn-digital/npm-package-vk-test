import _decorate from "@babel/runtime/helpers/esm/decorate";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { prefix } from '../../globals/settings';
import CDSTableRow from './table-row';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Data table header row.
 *
 * @element cds-table-header-row
 * @fires cds-table-change-selection-all
 *   The name of the custom event fired before this row is selected/unselected upon a user gesture.
 *   Cancellation of this event stops the user-initiated change in selection.
 */
let CDSTableHeaderRow = _decorate([customElement(`${prefix}-table-header-row`)], function (_initialize, _CDSTableRow) {
  class CDSTableHeaderRow extends _CDSTableRow {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTableHeaderRow,
    d: [{
      kind: "get",
      static: true,
      key: "eventBeforeChangeSelection",
      value:
      /**
       * The name of the custom event fired before this row is selected/unselected upon a user gesture.
       * Cancellation of this event stops the user-initiated change in selection.
       */
      function eventBeforeChangeSelection() {
        return `${prefix}-table-change-selection-all`;
      }
    }]
  };
}, CDSTableRow);
export default CDSTableHeaderRow;
//# sourceMappingURL=table-header-row.js.map
