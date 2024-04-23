/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import CDSIconButton from '../icon-button/icon-button';
/**
 * Copy.
 *
 * @element cds-copy
 */
declare class CDSCopy extends CDSIconButton {
    /**
     * `true` to show the feedback tooltip.
     */
    private _showFeedback;
    /**
     * `true` to show the feedback tooltip.
     */
    private _animation;
    private _createHandleFeedbackTooltip;
    /**
     * Handles showing/hiding the feedback tooltip.
     */
    private _handleFeedbackTooltip;
    /**
     * Handles `click` event on the copy button.
     */
    private _handleClickButton;
    /**
     * Specify the string that is displayed when the button is clicked and the content is copi
     */
    feedback: string;
    /**
     * The number in milliseconds to determine how long the tooltip should remain.
     */
    feedbackTimeout: number;
    protected _renderTooltipContent(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    updated(changedProperties: any): void;
    static styles: any;
}
export default CDSCopy;

//# sourceMappingURL=copy.d.ts.map
