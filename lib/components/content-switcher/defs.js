"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NAVIGATION_DIRECTION = exports.CONTENT_SWITCHER_SIZE = void 0;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Navigation direction, associated with key symbols.
 */
const NAVIGATION_DIRECTION = exports.NAVIGATION_DIRECTION = {
  Left: -1,
  ArrowLeft: -1,
  Right: 1,
  ArrowRight: 1
};

/**
 * Button size.
 */
let CONTENT_SWITCHER_SIZE = exports.CONTENT_SWITCHER_SIZE = void 0;
(function (CONTENT_SWITCHER_SIZE) {
  CONTENT_SWITCHER_SIZE["REGULAR"] = "";
  CONTENT_SWITCHER_SIZE["SMALL"] = "sm";
  CONTENT_SWITCHER_SIZE["LARGE"] = "lg";
  CONTENT_SWITCHER_SIZE["EXTRA_LARGE"] = "xl";
})(CONTENT_SWITCHER_SIZE || (exports.CONTENT_SWITCHER_SIZE = CONTENT_SWITCHER_SIZE = {}));
//# sourceMappingURL=defs.js.map
