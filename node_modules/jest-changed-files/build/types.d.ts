/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare type Options = {
    lastCommit?: boolean;
    withAncestor?: boolean;
    changedSince?: string;
    includePaths?: Array<string>;
};
declare type Paths = Set<string>;
export declare type Repos = {
    git: Paths;
    hg: Paths;
};
export declare type ChangedFiles = {
    repos: Repos;
    changedFiles: Paths;
};
export declare type ChangedFilesPromise = Promise<ChangedFiles>;
export declare type SCMAdapter = {
    findChangedFiles: (cwd: string, options: Options) => Promise<Array<string>>;
    getRoot: (cwd: string) => Promise<string | null>;
};
export {};
