/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/turn-avatar/avatar.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  symbols: {},
  backgroundColor: {},
  avatarText: {},
};
export var propTypes = {
  symbols: PropTypes.string,
  backgroundColor: PropTypes.string,
  avatarText: PropTypes.string,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-avatar'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
