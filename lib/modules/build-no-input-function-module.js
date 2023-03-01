"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildNoInputFunctionModule = void 0;
const capitalize_1 = require("./capitalize");
const buildNoInputFunctionModule = ({ abiToJsImportPath, contractAbiDir, contractAddress, contractName, name, }) => {
    return `/** WARNING! This file is auto-generated. Please do not edit! */

import { readContract } from '@wagmi/core';
import { ${contractName} } from '${contractAbiDir}/${contractName}';
import { GetContractReturnType } from '${abiToJsImportPath}';

type ${(0, capitalize_1.capitalize)(name)}Options = {
  chainId?: number;
  ${contractAddress ? 'network: string;\n' : ''}${contractAddress ? '' : 'contractAddress: `0x${string}`;'}
};

export const ${name} = ({ chainId${contractAddress ? '' : ', contractAddress'}${contractAddress ? ', network' : ''} }: ${(0, capitalize_1.capitalize)(name)}Options) =>
  readContract<typeof ${contractName}, '${name}'>({
    address: ${contractAddress ? `"${contractAddress}"` : 'contractAddress'},
    abi: ${contractName},
    functionName: '${name}',
    chainId,
  }) as Promise<GetContractReturnType<typeof ${contractName}, '${name}'>>;
`;
};
exports.buildNoInputFunctionModule = buildNoInputFunctionModule;
//# sourceMappingURL=build-no-input-function-module.js.map