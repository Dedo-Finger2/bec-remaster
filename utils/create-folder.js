import fs from "node:fs";
import path from "node:path";

/**
 * @param {string} name
 */
export default function (name) {
  if (!fs.existsSync(path.resolve("./", name))) {
    fs.mkdirSync(path.resolve("./", name));
  }
}
