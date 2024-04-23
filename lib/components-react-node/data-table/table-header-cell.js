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
Object.defineProperty(exports, 'TABLE_SORT_CYCLE', {
  enumerable: true,
  get: function () {
    return _defs.TABLE_SORT_CYCLE;
  },
});
Object.defineProperty(exports, 'TABLE_SORT_CYCLES', {
  enumerable: true,
  get: function () {
    return _defs.TABLE_SORT_CYCLES;
  },
});
Object.defineProperty(exports, 'TABLE_SORT_DIRECTION', {
  enumerable: true,
  get: function () {
    return _defs.TABLE_SORT_DIRECTION;
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
});
var propTypes = (exports.propTypes = {
  onBeforeSort: _propTypes.default.func,
});
const Component = (0, _createReactCustomElementType.default)(
  ''.concat(_settings.prefix, '-table-header-cell'),
  descriptor
);
Component.propTypes = propTypes;
var _default = (exports.default = Component);
