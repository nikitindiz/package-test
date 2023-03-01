"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHooksSingleObjectEntry = void 0;
const capitalize_1 = require("./capitalize");
const buildHooksSingleObjectEntry = ({ filesToWrite, objectName, }) => {
    const methods = filesToWrite.map(({ name }) => `  use${(0, capitalize_1.capitalize)(name)},`).join('\n');
    return `export const ${objectName} = {
${methods}
};`;
};
exports.buildHooksSingleObjectEntry = buildHooksSingleObjectEntry;
//# sourceMappingURL=build-hooks-single-object-entry.js.map