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
Object.defineProperty(exports, 'BUTTON_KIND', {
  enumerable: true,
  get: function () {
    return _defs.BUTTON_KIND;
  },
});
Object.defineProperty(exports, 'BUTTON_SIZE', {
  enumerable: true,
  get: function () {
    return _defs.BUTTON_SIZE;
  },
});
Object.defineProperty(exports, 'BUTTON_TOOLTIP_ALIGNMENT', {
  enumerable: true,
  get: function () {
    return _defs.BUTTON_TOOLTIP_ALIGNMENT;
  },
});
Object.defineProperty(exports, 'BUTTON_TOOLTIP_POSITION', {
  enumerable: true,
  get: function () {
    return _defs.BUTTON_TOOLTIP_POSITION;
  },
});
Object.defineProperty(exports, 'BUTTON_TYPE', {
  enumerable: true,
  get: function () {
    return _defs.BUTTON_TYPE;
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
  ''.concat(_settings.prefix, '-button'),
  descriptor
);
Component.propTypes = propTypes;
var _default = (exports.default = Component);
