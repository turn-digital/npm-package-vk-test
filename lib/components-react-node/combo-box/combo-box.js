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
Object.defineProperty(exports, 'DROPDOWN_DIRECTION', {
  enumerable: true,
  get: function () {
    return _dropdown.DROPDOWN_DIRECTION;
  },
});
Object.defineProperty(exports, 'DROPDOWN_SIZE', {
  enumerable: true,
  get: function () {
    return _dropdown.DROPDOWN_SIZE;
  },
});
exports.propTypes = exports.descriptor = exports.default = void 0;
var _dropdown = require('../dropdown/dropdown.js');
var _createReactCustomElementType = _interopRequireDefault(
  require('../../globals/wrappers/createReactCustomElementType.js')
);
var _propTypes = _interopRequireDefault(require('prop-types'));
var _settings = require('../../globals/settings.js');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var descriptor = (exports.descriptor = Object.assign({}, _dropdown.descriptor, {
  onBeforeToggle: {
    event: ''.concat(_settings.prefix, '-combo-box-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(_settings.prefix, '-combo-box-toggled'),
  },
  onBeforeSelect: {
    event: ''.concat(_settings.prefix, '-combo-box-beingselected'),
  },
  onSelect: {
    event: ''.concat(_settings.prefix, '-combo-box-selected'),
  },
}));
var propTypes = (exports.propTypes = Object.assign({}, _dropdown.propTypes, {
  onBeforeToggle: _propTypes.default.func,
  onToggle: _propTypes.default.func,
  onBeforeSelect: _propTypes.default.func,
  onSelect: _propTypes.default.func,
}));
const Component = (0, _createReactCustomElementType.default)(
  ''.concat(_settings.prefix, '-combo-box'),
  descriptor
);
Component.propTypes = propTypes;
var _default = (exports.default = Component);
