import { FileToWrite } from '../types/FileToWrite';
type BuildHooksSingleObjectEntryArgs = {
    filesToWrite: FileToWrite[];
    objectName: string;
};
export declare const buildHooksSingleObjectEntry: ({ filesToWrite, objectName, }: BuildHooksSingleObjectEntryArgs) => string;
export {};
