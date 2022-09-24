'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

function _stripAnsi() {
  const data = _interopRequireDefault(require('strip-ansi'));

  _stripAnsi = function () {
    return data;
  };

  return data;
}

function _jestMessageUtil() {
  const data = require('jest-message-util');

  _jestMessageUtil = function () {
    return data;
  };

  return data;
}

var _BaseReporter = _interopRequireDefault(require('./BaseReporter'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const titleSeparator = ' \u203A ';

class GitHubActionsReporter extends _BaseReporter.default {
  static filename = __filename;

  onTestFileResult({context}, {testResults}) {
    testResults.forEach(result => {
      const title = [...result.ancestorTitles, result.title].join(
        titleSeparator
      );
      result.retryReasons?.forEach((retryReason, index) => {
        this.#createAnnotation({
          ...this.#getMessageDetails(retryReason, context.config),
          title: `RETRY ${index + 1}: ${title}`,
          type: 'warning'
        });
      });
      result.failureMessages.forEach(failureMessage => {
        this.#createAnnotation({
          ...this.#getMessageDetails(failureMessage, context.config),
          title,
          type: 'error'
        });
      });
    });
  }

  #getMessageDetails(failureMessage, config) {
    const {message, stack} = (0, _jestMessageUtil().separateMessageFromStack)(
      failureMessage
    );
    const stackLines = (0, _jestMessageUtil().getStackTraceLines)(stack);
    const topFrame = (0, _jestMessageUtil().getTopFrame)(stackLines);
    const normalizedStackLines = stackLines.map(line =>
      (0, _jestMessageUtil().formatPath)(line, config)
    );
    const messageText = [message, ...normalizedStackLines].join('\n');
    return {
      file: topFrame?.file,
      line: topFrame?.line,
      message: messageText
    };
  }

  #createAnnotation({file, line, message, title, type}) {
    message = (0, _stripAnsi().default)(
      // copied from: https://github.com/actions/toolkit/blob/main/packages/core/src/command.ts
      message.replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A')
    );
    this.log(
      `\n::${type} file=${file},line=${line},title=${title}::${message}`
    );
  }
}

exports.default = GitHubActionsReporter;
