/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { AttributePart, Directive, DirectiveParameters } from 'lit/directive.js';
export interface AttributesInfo {
    readonly [name: string]: string;
}
/**
 * A directive that applies attributes from a key-value pairs.
 * This must be used in the `...` name and must be the only part used in the attribute.
 * It applies the key-value pairs in the `attributesInfo` argument
 * and sets them as attribute name/value pairs.
 *
 */
declare class SpreadDirective extends Directive {
    /**
     * The update function that handles the attribute setting.
     *
     * @param part an object with an API to manage the element's DOM
     * @returns the render function
     */
    update(part: AttributePart, [attributesInfo]: DirectiveParameters<this>): AttributesInfo;
    /**
     * The rendering function that simply takes in the arguments to be used
     * in the update() function.
     *
     * @param attributesInfo The key-value pair to be set as the attribute name/value pairs.
     * @returns the attributes info
     */
    render(attributesInfo: AttributesInfo): AttributesInfo;
}
declare const spread: (attributesInfo: AttributesInfo) => import("lit-html/directive").DirectiveResult<typeof SpreadDirective>;
export default spread;

//# sourceMappingURL=spread.d.ts.map
