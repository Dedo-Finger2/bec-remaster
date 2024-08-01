#!/usr/bin/env node

import yargs from "yargs";
const { argv } = yargs(process.argv);

import GenerateChallengeFile from "./commands/generate-challenge-file.command.js";
import GenerateTestFile from "./commands/generate-test-file.command.js";

const args = await argv;
const name = args.name || args.n;
const generateChallengeFileCommand = args.generateChallenge || args.gc;
const generateTestFileCommand = args.generateTest || args.gt;
const generateChallengeAndTestFileCommand =
  generateChallengeFileCommand & args.test;
if (generateChallengeAndTestFileCommand && name) {
  await GenerateChallengeFile(args);
  await GenerateTestFile(args);
} else if (generateChallengeFileCommand && name) {
  await GenerateChallengeFile(args);
} else if (generateTestFileCommand && name) {
  await GenerateTestFile(args);
} else {
  console.log("Invalid command...");
}
