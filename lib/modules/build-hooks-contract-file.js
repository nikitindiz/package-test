"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildHooksContractFile = void 0;
const path = require("path");
const build_hook_implementation_file_name_1 = require("./build-hook-implementation-file-name");
const build_hooks_implementation_string_1 = require("./build-hooks-implementation-string");
const buildHooksContractFile = ({ abiToJsImportPath, contractAbiDir, contractAddress, contractEntity, contractName, dir, }) => {
    const fileName = (0, build_hook_implementation_file_name_1.buildHookImplementationFileName)(contractEntity);
    const filePath = path.normalize(path.join(dir, 'modules', fileName + '.ts'));
    const fileContent = (0, build_hooks_implementation_string_1.buildHooksImplementationString)(Object.assign({ abiToJsImportPath,
        contractAddress,
        contractName,
        contractAbiDir }, contractEntity));
    return {
        name: contractEntity.name,
        fileName,
        filePath,
        fileContent,
    };
};
exports.buildHooksContractFile = buildHooksContractFile;
//# sourceMappingURL=build-hooks-contract-file.js.map