/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Table size.
 */
export declare enum TABLE_SIZE {
    /**
     * xs size.
     */
    XS = "xs",
    /**
     * sm size.
     */
    SM = "sm",
    /**
     * md size.
     */
    MD = "md",
    /**
     * lg size - default.
     */
    LG = "lg",
    /**
     * xl size.
     */
    XL = "xl"
}
/**
 * Table sort state.
 */
export declare enum TABLE_SORT_DIRECTION {
    /**
     * Not sorted.
     */
    NONE = "none",
    /**
     * Sorted ascendingly.
     */
    ASCENDING = "ascending",
    /**
     * Sorted descendingly.
     */
    DESCENDING = "descending"
}
/**
 * Table sort cycle.
 */
export declare enum TABLE_SORT_CYCLE {
    BI_STATES_FROM_ASCENDING = "bi-states-from-ascending",
    BI_STATES_FROM_DESCENDING = "bi-states-from-descending",
    TRI_STATES_FROM_ASCENDING = "tri-states-from-ascending",
    TRI_STATES_FROM_DESCENDING = "tri-states-from-descending"
}
/**
 * Mapping of table sort cycles to table sort states.
 */
export declare const TABLE_SORT_CYCLES: {
    "bi-states-from-ascending": TABLE_SORT_DIRECTION[];
    "bi-states-from-descending": TABLE_SORT_DIRECTION[];
    "tri-states-from-ascending": TABLE_SORT_DIRECTION[];
    "tri-states-from-descending": TABLE_SORT_DIRECTION[];
};

//# sourceMappingURL=defs.d.ts.map
