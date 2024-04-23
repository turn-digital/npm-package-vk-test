/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { NOTIFICATION_TYPE } from './defs';
import CDSInlineNotification from './inline-notification';
/**
 * Toast notification.
 *
 * @element cds-toast-notification
 * @slot subtitle - The subtitle.
 * @slot title - The title.
 * @fires cds-notification-beingclosed
 *   The custom event fired before this notification is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification.
 * @fires cds-notification-closed - The custom event fired after this notification is closed upon a user gesture.
 */
declare class CDSToastNotification extends CDSInlineNotification {
    protected _type: NOTIFICATION_TYPE;
    protected _renderText(): import("lit-html").TemplateResult<1>;
    /**
     * Specify the caption
     */
    caption: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSToastNotification;

//# sourceMappingURL=toast-notification.d.ts.map
