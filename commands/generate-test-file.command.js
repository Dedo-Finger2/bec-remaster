import createFolder from "./../utils/create-folder.js";
import createFile from "./../utils/create-file.js";

export default async function (args) {
  const name = args.name || args.n;
  createFolder("tests");
  createFile(name, "test");
  console.log("Test file created!");
}
