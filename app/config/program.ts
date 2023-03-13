import { Command } from "commander";
import { sticker } from "@poppinss/cliui";
import { jsonToStringify } from "../utils/functions/jsonToStringify";
// import clipboard from "clipboardy";

const program = new Command();
const { version } = require("./../../package.json");

program
  .alias("cmv")
  .name("cmv")
  .description("CM Validations CLI")
  .version(version);

program.command("ping").action(() => {
  console.log("pong");
  // clipboard.writeSync("🦄");

  // console.log(clipboard.readSync());
});

program
  .command("stringify-json")
  .description("Stringify the JSON")
  .argument("<route_json>", "route of json")
  .argument("<route_sql>", "route of sql to append data")
  .action((route_json, route_sql) => {
    // sticker().add(jsonToStringify(route)).render();
    console.log(`
    ${jsonToStringify(route_json, route_sql)}
    `);
  });

export default program;
