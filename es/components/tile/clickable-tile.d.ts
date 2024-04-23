/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import CDSLink from '../link/link';
import { TILE_COLOR_SCHEME } from './defs';
/**
 * Clickable tile.
 *
 * @element cds-clickable-tile
 */
declare class CDSClickableTile extends CDSLink {
    protected get _classes(): import("lit-html/directive").DirectiveResult<typeof import("lit-html/directives/class-map").ClassMapDirective>;
    /**
     * The color scheme.
     */
    colorScheme: TILE_COLOR_SCHEME;
    /**
     * The a11y role for `<a>`.
     */
    linkRole: string;
    /**
     * Specify if the `ClickableTile` component should be rendered with rounded corners.
     * Only valid when `slug` prop is present
     */
    hasRoundedCorners: boolean;
    slug: boolean;
    /**
     * @returns The inner content.
     */
    protected _renderInner(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that will return the slug item.
     */
    static get slugItem(): string;
    static styles: any;
}
export default CDSClickableTile;

//# sourceMappingURL=clickable-tile.d.ts.map
