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
  .action((route_json, route_sql) => {
    jsonToStringify(route_json, route_sql);
  });

program
  .command("array-to-stringify")
  .alias("ats")
  .description("Array of JSONs to Stringify")
  .argument("<route_jsonarray>", "route of aaray of jsons")
  .argument("<route_sql>", "route of sql to append data")
  .action((route_json, route_sql) => {
    jsonToStringify(route_json, route_sql);
  });

export default program;
