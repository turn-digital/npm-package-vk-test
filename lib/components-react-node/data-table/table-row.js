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
  onRadioChange: {
    event: ''.concat(_settings.prefix, '-radio-button-changed'),
  },
  onCheckboxChange: {
    event: ''.concat(_settings.prefix, '-checkbox-changed'),
  },
  onBeforeChangeSelection: {
    event: ''.concat(_settings.prefix, '-table-row-change-selection'),
  },
  onBeforeExpandoToggle: {
    event: ''.concat(_settings.prefix, '-table-row-expando-beingtoggled'),
  },
  onExpandoToggle: {
    event: ''.concat(_settings.prefix, '-table-row-expando-toggled'),
  },
});
var propTypes = (exports.propTypes = {
  onRadioChange: _propTypes.default.func,
  onCheckboxChange: _propTypes.default.func,
  onBeforeChangeSelection: _propTypes.default.func,
  onBeforeExpandoToggle: _propTypes.default.func,
  onExpandoToggle: _propTypes.default.func,
});
const Component = (0, _createReactCustomElementType.default)(
  ''.concat(_settings.prefix, '-table-row'),
  descriptor
);
Component.propTypes = propTypes;
var _default = (exports.default = Component);
