/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import { STACK_ORIENTATION, SPACING_STEPS } from './defs';
export { STACK_ORIENTATION, SPACING_STEPS };
/**
 * The Stack component is a useful layout utility in a component-based model.
 * This allows components to not use margin and instead delegate the
 * responsibility of positioning and layout to parent components.
 *
 * In the case of the Stack component, it uses the spacing scale from the
 * Design Language in order to determine how much space there should be between
 * items rendered by the Stack component. It also supports a custom `gap` prop
 * which will allow a user to provide a custom value for the gap of the layout.
 *
 * This component supports both horizontal and vertical orientations.
 *
 * @element cds-stack
 */
declare class CDSStack extends LitElement {
    /**
     * Specify the orientation of them items in the Stack
     */
    orientation: STACK_ORIENTATION;
    /**
     * Provide either a custom value or a step from the spacing scale to be used
     * as the gap in the layout
     */
    gap: any;
    /**
     * Turn on when passing in custom value to 'gap' attribute (ie. gap="2rem")
     */
    useCustomGapValue: boolean;
    updated(changedProperties: any): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSStack;

//# sourceMappingURL=stack.d.ts.map
