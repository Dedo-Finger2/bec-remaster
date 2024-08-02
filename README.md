## Bec - Beecrowd Challenge JS Generator

This CLI tool helps you quickly create new Beecrowd challenges with corresponding test files write in Jest!

### Features

* Generates a new JavaScript file with choosen challenge name.
* Creates a separate test file to write unit tests for your challenge solution before submiting it.
* Offers convenient aliases for commonly used commands.

### Installation

```bash
npm install bec-beecrowd-generator
```

- Create your first challenge:

```bash
npx bec --generate-challenge --name 1000 --test
```

### Test and Challenge structure

```js
/**
 * @param { Array<string> } lines - Variable with all data provided in order
 * @returns { string }
 */
export function <% fileName %>(lines) {
  // Your code goes here...

  const message = ``;
  console.log(message);
  return message;
}
```

```js
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
```

### Usage

**Generating a Challenge File:**

```bash
bec --generate-challenge --name <challenge_name>
# or
bec --gc -n <challenge_name>
```

> Replace `<challenge_name>` with the desired name for your challenge file (e.g., `bec --generate-challenge my-new-challenge`).
> This will create a new file named `<challenge_name>.challenge.js` inside a `challenges` folder.

**Generating a Test File:**

```bash
bec --generate-test --name <challenge_name>
# or
bec --gt -n <challenge_name>
```

> Replace `<challenge_name>` with the same name used for your challenge file.
> This will create a new file named `<challenge_name>.test.js` inside a `tests` folder.


**Generating a Challenge File With it's Test File:**

```bash
bec --generate-challenge --name <challenge_name> --test
# or
bec --gc -n <challenge_name> -t
```

### Variables

* `--name {NAME}` (`-n {NAME}`): Specifies the name for your challenge and test files.
* `--test` (`-t`): (Optional) Flag to only generate a test file along-side with the challenge file.
