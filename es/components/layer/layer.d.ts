/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
/**
 * Basic layer
 *
 * @element cds-layer
 * @fires cds-use-layer
 *   The name of the custom event fired when the "use layer" action occurs.
 * @slot children - The elements contained within the component.
 */
declare class CDSLayer extends LitElement {
    /**
     * Specify the layer level and override any existing levels based on hierarchy
     */
    level: number;
    layers: any;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that selects a layer component.
     */
    static get selectorLayer(): string;
    /**
     * A selector that selects a layer component.
     */
    static get eventUseLayer(): string;
    static styles: any;
}
export default CDSLayer;

//# sourceMappingURL=layer.d.ts.map
