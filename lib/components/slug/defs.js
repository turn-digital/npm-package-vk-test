"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SLUG_SIZE = exports.SLUG_KIND = exports.SLUG_DOT_TYPE = void 0;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Slug size.
 */
let SLUG_SIZE = exports.SLUG_SIZE = void 0;
/**
 * Slug kind.
 */
(function (SLUG_SIZE) {
  SLUG_SIZE["MINI"] = "mini";
  SLUG_SIZE["EXTRA_EXTRA_SMALL"] = "2xs";
  SLUG_SIZE["EXTRA_SMALL"] = "xs";
  SLUG_SIZE["SMALL"] = "sm";
  SLUG_SIZE["MEDIUM"] = "md";
  SLUG_SIZE["LARGE"] = "lg";
  SLUG_SIZE["EXTRA_LARGE"] = "xl";
})(SLUG_SIZE || (exports.SLUG_SIZE = SLUG_SIZE = {}));
let SLUG_KIND = exports.SLUG_KIND = void 0;
/**
 * Slug dot type.
 */
(function (SLUG_KIND) {
  SLUG_KIND["DEFAULT"] = "";
  SLUG_KIND["HOLLOW"] = "hollow";
  SLUG_KIND["INLINE"] = "inline";
})(SLUG_KIND || (exports.SLUG_KIND = SLUG_KIND = {}));
let SLUG_DOT_TYPE = exports.SLUG_DOT_TYPE = void 0;
(function (SLUG_DOT_TYPE) {
  SLUG_DOT_TYPE["DEFAULT"] = "";
  SLUG_DOT_TYPE["HOLLOW"] = "hollow";
})(SLUG_DOT_TYPE || (exports.SLUG_DOT_TYPE = SLUG_DOT_TYPE = {}));
//# sourceMappingURL=defs.js.map
