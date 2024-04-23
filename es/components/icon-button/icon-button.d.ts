/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import '../tooltip/index';
import '../button/index';
import CDSButton from '../button/button';
import { ICON_BUTTON_SIZE, ICON_BUTTON_TOOLTIP_ALIGNMENT } from './defs';
export { ICON_BUTTON_SIZE, ICON_BUTTON_TOOLTIP_ALIGNMENT };
/**
 * Icon Button
 *
 */
declare class CDSIconButton extends CDSButton {
    /**
     * Specify how the trigger should align with the tooltip
     */
    align: string;
    /**
     * Determines whether the tooltip should close when inner content is activated (click, Enter or Space)
     */
    closeOnActivation: boolean;
    /**
     * Specify whether the tooltip should be open when it first renders
     */
    defaultOpen: boolean;
    /**
     * Specify the duration in milliseconds to delay before displaying the tooltip
     */
    enterDelayMs: number;
    /**
     * Specify the duration in milliseconds to delay before hiding the tooltip
     */
    leaveDelayMs: number;
    /**
     * Specify the size of the Button. Defaults to `md`.
     */
    size: string;
    updated(changedProperties: any): void;
    protected _renderTooltipContent(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSIconButton;

//# sourceMappingURL=icon-button.d.ts.map
