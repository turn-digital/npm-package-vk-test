/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
export interface ComponentProps {
  vertical?: string;
  horizontal?: string;
  [prop: string]: unknown;
}
declare class CDSItemPaddingContainer extends Component<ComponentProps> {}
export default CDSItemPaddingContainer;