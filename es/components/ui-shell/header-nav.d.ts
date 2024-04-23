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
 * Header.
 *
 * @element cds-header-nav
 * @csspart menu-body The menu body.
 * @csspart divider The divider.
 */
declare class CDSHeaderNav extends LitElement {
    /**
     * The `aria-label` attribute for the menu bar UI.
     */
    menuBarLabel: string;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}
export default CDSHeaderNav;

//# sourceMappingURL=header-nav.d.ts.map
