import fs from "node:fs";
import path from "node:path";
import getFileContent from "./get-file-content.js";

/**
 * @typedef {"test" | "challenge"} types
 */

/**
 * @param {string} name - File name
 * @param {types} type - File type
 */
export default function (name, type) {
  const { fileName, fileContent } = getFileContent(name, type);
  const folder = type + "s";
  fs.writeFileSync(
    path.resolve("./", folder, `${fileName}.${type}.js`),
    fileContent,
  );
}
