"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMutableHookModule = void 0;
const capitalize_1 = require("./capitalize");
const buildMutableHookModule = ({ abiToJsImportPath, argumentsIsObject, contractAbiDir, contractAddress, contractName, inputArgsValues, name, shouldImportBigNumber, useArgsType, }) => {
    return `/** WARNING! This file is auto-generated. Please do not edit! */

${shouldImportBigNumber ? "import { BigNumber } from 'ethers';" : ''}
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import { ${contractName} } from '${contractAbiDir}/${contractName}';

${useArgsType}

type ${(0, capitalize_1.capitalize)(name)}Options = {
  chainId?: number;
  ${contractAddress ? 'network: string;\n' : ''}${contractAddress ? '' : 'contractAddress: `0x${string}`;'}
} & Parameters<typeof usePrepareContractWrite<typeof ${contractName}, '${name}', 0>>;

${contractAddress
        ? `const available${(0, capitalize_1.capitalize)(name)}Networks: Record<string, \`0x\${string}\`> = ${JSON.stringify(contractAddress, null, '  ')};`
        : ''}


export const use${(0, capitalize_1.capitalize)(name)} = (
  ${argumentsIsObject
        ? `{ ${inputArgsValues.join(',')} }: ${(0, capitalize_1.capitalize)(name)}Arguments,`
        : `args: ${(0, capitalize_1.capitalize)(name)}Arguments,`}
  { chainId${contractAddress ? '' : ', contractAddress'}${contractAddress ? ', network' : ''}, ...rest }: ${(0, capitalize_1.capitalize)(name)}Options,
) => {
  const prepare = usePrepareContractWrite({
    address: ${contractAddress ? `available${(0, capitalize_1.capitalize)(name)}Networks[network]` : 'contractAddress'},
    chainId,
    abi: ${contractName},
    functionName: '${name}',
    ${inputArgsValues.length
        ? `args${argumentsIsObject ? `: [${inputArgsValues.join(',')}]` : ''},`
        : ''}
    ...rest
  })

  const write = useContractWrite(prepare.config);

  return { prepare, write }
};
`;
};
exports.buildMutableHookModule = buildMutableHookModule;
//# sourceMappingURL=build-mutable-hook-module.js.map