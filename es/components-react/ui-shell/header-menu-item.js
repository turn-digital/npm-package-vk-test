/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { descriptor as parentDescriptor } from '././header-nav-item.js';
import { propTypes as parentPropTypes } from '././header-nav-item.js';
export { default as CustomElement } from '../../components/ui-shell/header-menu-item.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = Object.assign({}, parentDescriptor, {});
export var propTypes = Object.assign({}, parentPropTypes, {});
const Component = createReactCustomElementType(
  ''.concat(prefix, '-header-menu-item'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
