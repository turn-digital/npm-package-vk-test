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
  onCurrentRadioTileSelection: {
    event: ''.concat(_settings.prefix, '-current-radio-tile-selection'),
  },
  onCurrentSelectableTilesSelection: {
    event: ''.concat(_settings.prefix, '-current-selectable-tile-selections'),
  },
});
var propTypes = (exports.propTypes = {
  onCurrentRadioTileSelection: _propTypes.default.func,
  onCurrentSelectableTilesSelection: _propTypes.default.func,
});
const Component = (0, _createReactCustomElementType.default)(
  ''.concat(_settings.prefix, '-tile-group'),
  descriptor
);
Component.propTypes = propTypes;
var _default = (exports.default = Component);
