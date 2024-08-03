#!/usr/bin/env node

import generateChallengeFileCommand from "../commands/generate-challenge-file.command.js";
import generateTestFileCommand from "../commands/generate-test-file.command.js";
import Cli from "./../class/Cli.class.js";

(await Cli.build(process.argv))
  .registerCommand("generateChallenge", generateChallengeFileCommand, { alias: "gc" })
  .registerCommand("generateTest", generateTestFileCommand, { alias: "gt" })
  .run();
