/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
Object.defineProperty(exports, 'TABLE_SIZE', {
  enumerable: true,
  get: function () {
    return _defs.TABLE_SIZE;
  },
});
exports.propTypes = exports.descriptor = exports.default = void 0;
var _defs = require('././defs.js');
var _createReactCustomElementType = _interopRequireDefault(
  require('../../globals/wrappers/createReactCustomElementType.js')
);
var _propTypes = _interopRequireDefault(require('prop-types'));
var _settings = require('../../globals/settings.js');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var descriptor = (exports.descriptor = {
  onBeforeSort: {
    event: ''.concat(_settings.prefix, '-table-header-cell-sort'),
  },
  onSearchInput: {
    event: ''.concat(_settings.prefix, '-search-input'),
  },
  onBeforeChangeSelectionAll: {
    event: ''.concat(_settings.prefix, '-table-change-selection-all'),
  },
  onBeforeChangeSelection: {
    event: ''.concat(_settings.prefix, '-table-row-change-selection'),
  },
  onClickCancel: {
    event: ''.concat(_settings.prefix, '-table-batch-actions-cancel-clicked'),
  },
  onExpandoToggle: {
    event: ''.concat(_settings.prefix, '-table-row-expando-toggled'),
  },
  onTableRowSelect: {
    event: ''.concat(_settings.prefix, '-table-row-selected'),
  },
  onTableRowSelectAll: {
    event: ''.concat(_settings.prefix, '-table-row-all-selected'),
  },
  onTableSorted: {
    event: ''.concat(_settings.prefix, '-table-sorted'),
  },
  onTableFiltered: {
    event: ''.concat(_settings.prefix, '-table-filtered'),
  },
});
var propTypes = (exports.propTypes = {
  onBeforeSort: _propTypes.default.func,
  onSearchInput: _propTypes.default.func,
  onBeforeChangeSelectionAll: _propTypes.default.func,
  onBeforeChangeSelection: _propTypes.default.func,
  onClickCancel: _propTypes.default.func,
  onExpandoToggle: _propTypes.default.func,
  onTableRowSelect: _propTypes.default.func,
  onTableRowSelectAll: _propTypes.default.func,
  onTableSorted: _propTypes.default.func,
  onTableFiltered: _propTypes.default.func,
});
const Component = (0, _createReactCustomElementType.default)(
  ''.concat(_settings.prefix, '-table'),
  descriptor
);
Component.propTypes = propTypes;
var _default = (exports.default = Component);
