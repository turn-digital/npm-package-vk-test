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
exports.propTypes = exports.descriptor = exports.default = void 0;
var _createReactCustomElementType = _interopRequireDefault(
  require('../../globals/wrappers/createReactCustomElementType.js')
);
var _propTypes = _interopRequireDefault(require('prop-types'));
var _settings = require('../../globals/settings.js');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var descriptor = (exports.descriptor = {
  onChangeCurrent: {
    event: ''.concat(_settings.prefix, '-pagination-changed-current'),
  },
  onChangeSelect: {
    event: ''.concat(_settings.prefix, '-select-selected'),
  },
});
var propTypes = (exports.propTypes = {
  onChangeCurrent: _propTypes.default.func,
  onChangeSelect: _propTypes.default.func,
});
const Component = (0, _createReactCustomElementType.default)(
  ''.concat(_settings.prefix, '-pagination'),
  descriptor
);
Component.propTypes = propTypes;
var _default = (exports.default = Component);
