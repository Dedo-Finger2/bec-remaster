## Bec - Beecrowd Challenge JS Generator

![](https://github.com/Dedo-Finger2/bec-remaster/blob/master/public/cover.png?raw=true)

<p align="center">
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" />
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <br />
  <strong> 🚀 A CLI tool to quickly create new Beecrowd challenges with corresponding test files writen in Jest! 🚀 </strong>
</p>

---

### ✨ Features

* Generates a new JavaScript file with choosen challenge name.
* Creates a separate test file to write unit tests for your challenge solution before submiting it.
* Offers convenient aliases for commonly used commands.

---

### ⬇️ Installation

```bash
npm install bec-beecrowd-generator
```

- Create your first challenge:

```bash
npx bec --generate-challenge --name 1000 --test
```

---

### 📝 Test and Challenge structure

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

---

### ⚙️ Usage

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

---

### 🤓 Variables

* `--name {NAME}` (`-n {NAME}`): Specifies the name for your challenge and test files.
* `--test` (`-t`): (Optional) Flag to only generate a test file along-side with the challenge file.

---

### 📱 Contact me

- LinkedIn: https://www.linkedin.com/in/antonio-mauricio-4645832b3/
- Instagram: https://www.instagram.com/antonioalmeida2003/
- Email: antonioimportant@gmail.com
