import fs from "node:fs";
import path from "node:path";

/**
 * @typedef {"test" | "challenge"} types
 */

/**
 * @param {types} type
 * @returns {string}
 */
export default function (type) {
  return fs.readFileSync(
    path.resolve(
      import.meta.dirname,
      "../templates",
      `${type}.template.ejs.js`,
    ),
    {
      encoding: "utf-8",
    },
  );
}
