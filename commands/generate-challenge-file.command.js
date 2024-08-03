import createFolder from "./../utils/create-folder.js";
import createFile from "./../utils/create-file.js";
import generateTestFileCommand from "./generate-test-file.command.js";

export default async function (args) {
  const name = args.name || args.n;
  const test = args.test || args.t;
  if (test) {
    generateTestFileCommand(args);
  }
  createFolder("challenges");
  createFile(name, "challenge");
  console.log("Challenge file created!");
}
