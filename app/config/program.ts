import { Command } from "commander";
import { jsonToStringify } from "../utils/functions/jsonToStringify";

const program = new Command();
const { version } = require("./../../package.json");

program
  .alias("cmv")
  .name("cmv")
  .description("CM Validations CLI")
  .version(version);

program.command("ping").action(() => {
  console.log("pong");
});

program
  .command("json-to-stringify")
  .alias("jts")
  .description("Stringify the JSON")
  .argument("<route_json>", "route of json")
  .argument("<route_sql>", "route of sql to append data")
  .option("-st|--show-in-terminal", "show in terminal the result", false)
  .action((route_json, route_sql) => {
    const { showInTerminal } = program.opts();
    jsonToStringify(route_json, route_sql, showInTerminal);
  });

export default program;
