/**
 * TypeScript 7.0 does not expose the JavaScript compiler API yet.
 * Redirect only ESLint's `require("typescript")` calls to Microsoft's
 * TypeScript 6 compatibility package. Next.js and `tsc` still use TS 7.
 */
const Module = require("node:module");

const originalResolveFilename = Module._resolveFilename;
const typescript6Path = require.resolve("@typescript/typescript6");

Module._resolveFilename = function resolveFilename(
    request,
    parent,
    isMain,
    options,
) {
    if (request === "typescript") {
        return typescript6Path;
    }

    return originalResolveFilename.call(this, request, parent, isMain, options);
};