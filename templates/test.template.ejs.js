import { <% fileName %> } from "./../challenges/<% fileName %>.challenge.js";

describe("Default - ...", () => {
  it.each([])(
    "...",
    () => {
      const result = <% fileName %>([]);

      expect(result).toBe(`...`);
    },
  );
});
