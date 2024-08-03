import yargs from "yargs";

export default class Cli {
  #commands
  #args
  #aliassesName

  constructor(args) {
    this.#commands = new Map();
    this.#aliassesName = new Map();
    this.#args = args;
  }

  registerCommand(name, callback, options = {}) {
    this.#commands.set(name, {
      callback,
      alias: options.alias
    });
    if (options.alias) {
      this.#registerNameAlias(name, options.alias);
    }
    return this;
  }

  static async build(processArgv) {
    const { argv } = yargs(processArgv);
    const args = await argv;
    return new Cli(args)
  }

  run() {
    const commands = this.#getPossibleCommandsAndAliasses()
    let commandFound = false;
    commands.forEach((command) => {
      if (Object.keys(this.#args).includes(command)) {
        this.#commands.get(this.#formatCommand(command))?.callback(this.#args);
        commandFound = true;
      }
    });
    if (!commandFound) {
      console.log("Command not registered.");
    }
  }

  #registerNameAlias(name, alias) {
    this.#aliassesName.set(alias, name);
  }

  #formatCommand(commandAlias) {
    const commandName = this.#aliassesName.get(commandAlias);
    return commandName ? commandName : commandAlias;
  }

  #getPossibleCommandsAndAliasses() {
    const keys = Array.from(this.#commands.keys())
    const aliases = Array.from(this.#commands.values()).map((options) => options.alias).filter((alias) => alias !== undefined);
    const commands = [...keys, ...aliases]
    return commands;
  }

  get commands() {
    return this.#commands.keys();
  }
}