"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHooksIndexEntryImportsAndExports = void 0;
const capitalize_1 = require("./capitalize");
const buildHooksIndexEntryImportsAndExports = ({ filesToWrite, }) => filesToWrite
    .map(({ name, fileName }) => `import { use${(0, capitalize_1.capitalize)(name)} } from './modules/${fileName}';\nexport * from './modules/${fileName}';`)
    .join('\n');
exports.buildHooksIndexEntryImportsAndExports = buildHooksIndexEntryImportsAndExports;
//# sourceMappingURL=build-hooks-index-entry-imports-and-exports.js.map