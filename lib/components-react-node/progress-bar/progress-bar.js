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
Object.defineProperty(exports, 'PROGRESS_BAR_SIZE', {
  enumerable: true,
  get: function () {
    return _defs.PROGRESS_BAR_SIZE;
  },
});
Object.defineProperty(exports, 'PROGRESS_BAR_STATUS', {
  enumerable: true,
  get: function () {
    return _defs.PROGRESS_BAR_STATUS;
  },
});
Object.defineProperty(exports, 'PROGRESS_BAR_TYPE', {
  enumerable: true,
  get: function () {
    return _defs.PROGRESS_BAR_TYPE;
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
var descriptor = (exports.descriptor = {});
var propTypes = (exports.propTypes = {});
const Component = (0, _createReactCustomElementType.default)(
  ''.concat(_settings.prefix, '-progress-bar'),
  descriptor
);
Component.propTypes = propTypes;
var _default = (exports.default = Component);
