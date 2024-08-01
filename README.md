## Bec - Beecrowd Challenge JS Generator

This CLI tool helps you quickly create new Beecrowd challenges with corresponding test files.

### Features

* Generates a new JavaScript file for your challenge name.
* Creates a separate test file to write unit tests for your challenge solution.
* Offers convenient aliases for commonly used commands.

### Installation

**Coming Soon!**

Bec is currently under development. We'll provide installation instructions when it's ready for public use.

### Usage

**Generating a Challenge File:**

```bash
bec --generate-challenge --name <challenge_name>
# or
bec --gc -n <challenge_name>
```

Replace `<challenge_name>` with the desired name for your challenge file (e.g., `bec --generate-challenge my-new-challenge`). This will create a new file named `<challenge_name>.js` inside a `challenges` folder.

**Generating a Test File:**

```bash
bec --generate-test --name <challenge_name>
# or
bec --gt -n <challenge_name>
```

**Generating a Challenge File With it's Test File:**

```bash
bec --generate-challenge --name <challenge_name> --test
# or
bec --gc -n <challenge_name> -t
```

Replace `<challenge_name>` with the same name used for your challenge file. This will create a new file named `<challenge_name>.test.js` inside a `tests` folder.

### Variables

* `--name {NAME}` (`-n {NAME}`): Specifies the name for your challenge and test files.
* `--test` (`-t`): (Optional) Flag to only generate a test file along-side with the challenge file.
