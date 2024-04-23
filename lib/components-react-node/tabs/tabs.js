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
Object.defineProperty(exports, 'NAVIGATION_DIRECTION', {
  enumerable: true,
  get: function () {
    return _contentSwitcher.NAVIGATION_DIRECTION;
  },
});
Object.defineProperty(exports, 'TABS_KEYBOARD_ACTION', {
  enumerable: true,
  get: function () {
    return _defs.TABS_KEYBOARD_ACTION;
  },
});
Object.defineProperty(exports, 'TABS_TYPE', {
  enumerable: true,
  get: function () {
    return _defs.TABS_TYPE;
  },
});
exports.propTypes = exports.descriptor = exports.default = void 0;
var _defs = require('././defs.js');
var _contentSwitcher = require('../content-switcher/content-switcher.js');
var _createReactCustomElementType = _interopRequireDefault(
  require('../../globals/wrappers/createReactCustomElementType.js')
);
var _propTypes = _interopRequireDefault(require('prop-types'));
var _settings = require('../../globals/settings.js');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var descriptor = (exports.descriptor = Object.assign(
  {},
  _contentSwitcher.descriptor,
  {
    onBeforeSelect: {
      event: ''.concat(_settings.prefix, '-tabs-beingselected'),
    },
    onSelect: {
      event: ''.concat(_settings.prefix, '-tabs-selected'),
    },
  }
));
var propTypes = (exports.propTypes = Object.assign(
  {},
  _contentSwitcher.propTypes,
  {
    onBeforeSelect: _propTypes.default.func,
    onSelect: _propTypes.default.func,
  }
));
const Component = (0, _createReactCustomElementType.default)(
  ''.concat(_settings.prefix, '-tabs'),
  descriptor
);
Component.propTypes = propTypes;
var _default = (exports.default = Component);
