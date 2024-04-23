/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { descriptor as parentDescriptor } from '././selectable-tile.js';
import { propTypes as parentPropTypes } from '././selectable-tile.js';
export { default as CustomElement } from '../../components/tile/radio-tile.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = Object.assign({}, parentDescriptor, {
  onRadioChange: {
    event: ''.concat(prefix, '-radio-tile-selected'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  onRadioChange: PropTypes.func,
});
const Component = createReactCustomElementType(
  ''.concat(prefix, '-radio-tile'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
