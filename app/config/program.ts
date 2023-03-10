import { Command } from "commander";
import { sticker } from "@poppinss/cliui";
import { jsonToStringify } from "../utils/functions/jsonToStringify";
import clipboard from "clipboardy";

const program = new Command();

program
  .alias("cmv")
  .name("cmv")
  .description("CM Validations CLI")
  .version("0.1.0");

program.command("ping").action(() => {
  console.log("pong");
  clipboard.writeSync("🦄");

  console.log(clipboard.readSync());
});

program
  .command("stringify-json")
  .description("Stringify the JSON")
  .argument("<route>", "route of json")
  .action((route) => {
    sticker().add(jsonToStringify(route)).render();
  });

export default program;
