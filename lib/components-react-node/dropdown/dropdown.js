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
    return _defs.DROPDOWN_DIRECTION;
  },
});
Object.defineProperty(exports, 'DROPDOWN_KEYBOARD_ACTION', {
  enumerable: true,
  get: function () {
    return _defs.DROPDOWN_KEYBOARD_ACTION;
  },
});
Object.defineProperty(exports, 'DROPDOWN_SIZE', {
  enumerable: true,
  get: function () {
    return _defs.DROPDOWN_SIZE;
  },
});
Object.defineProperty(exports, 'DROPDOWN_TYPE', {
  enumerable: true,
  get: function () {
    return _defs.DROPDOWN_TYPE;
  },
});
Object.defineProperty(exports, 'NAVIGATION_DIRECTION', {
  enumerable: true,
  get: function () {
    return _defs.NAVIGATION_DIRECTION;
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
  onBeforeSelect: {
    event: ''.concat(_settings.prefix, '-dropdown-beingselected'),
  },
  onSelect: {
    event: ''.concat(_settings.prefix, '-dropdown-selected'),
  },
  onBeforeToggle: {
    event: ''.concat(_settings.prefix, '-dropdown-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(_settings.prefix, '-dropdown-toggled'),
  },
});
var propTypes = (exports.propTypes = {
  onBeforeSelect: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onBeforeToggle: _propTypes.default.func,
  onToggle: _propTypes.default.func,
});
const Component = (0, _createReactCustomElementType.default)(
  ''.concat(_settings.prefix, '-dropdown'),
  descriptor
);
Component.propTypes = propTypes;
var _default = (exports.default = Component);
