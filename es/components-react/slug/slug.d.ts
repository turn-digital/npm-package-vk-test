/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../toggle-tip/toggletip';
export interface ComponentProps extends ParentComponentProps {}
declare class CDSSlug extends Component<ComponentProps> {}
export default CDSSlug;
