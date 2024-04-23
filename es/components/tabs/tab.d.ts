/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import CDSContentSwitcherItem from '../content-switcher/content-switcher-item';
import { TABS_TYPE } from './tabs';
/**
 * Basic tab.
 *
 * @element cds-tab
 */
export default class CDSTab extends CDSContentSwitcherItem {
    /**
     * `true` if this tab should be highlighted.
     * If `true`, parent `<cds-tabs>` selects/deselects this tab upon keyboard interaction.
     *
     * @private
     */
    highlighted: boolean;
    /**
     * Tab type.
     */
    type: TABS_TYPE;
    /**
     * The tab text content.
     */
    tabTitle: any;
    /**
     * Handles `slotchange` event.
     */
    protected _handleSlotChange({ target }: Event): void;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any;
}

//# sourceMappingURL=tab.d.ts.map
