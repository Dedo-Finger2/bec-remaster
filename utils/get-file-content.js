import getTemplateContent from "./get-template-content.js";

/**
 * @typedef {"test" | "challenge"} types
 */

/**
 * @param {string} name
 * @param {types} type
 * @returns {{ fileName: string, fileContent: string }}
 */
export default function (name, type) {
  const templateContent = getTemplateContent(type);
  const fileName = `challenge${name}`;
  const fileContent = templateContent.replaceAll("<% fileName %>", fileName);
  return {
    fileName,
    fileContent,
  };
}
