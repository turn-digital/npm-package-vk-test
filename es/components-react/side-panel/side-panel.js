/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { SIDE_PANEL_SIZE } from '././defs.js';
export { default as CustomElement } from '../../components/side-panel/side-panel.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onBeforeClose: {
    event: ''.concat(prefix, '-side-panel-beingclosed'),
  },
  onClose: {
    event: ''.concat(prefix, '-side-panel-closed'),
  },
  onNavigateBack: {
    event: ''.concat(prefix, '-side-panel-header-navigate-back'),
  },
};
export var propTypes = {
  onBeforeClose: PropTypes.func,
  onClose: PropTypes.func,
  onNavigateBack: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-side-panel'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
