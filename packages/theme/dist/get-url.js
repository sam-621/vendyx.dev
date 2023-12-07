"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrl = void 0;
/**
 * utility function to get a partial path to a file
 * @param path path to file
 * @returns a new partial path to the file
 */
var getUrl = function (path) {
    return "/static/".concat(path);
};
exports.getUrl = getUrl;
