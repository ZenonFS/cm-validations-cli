import { Command } from "commander";
import path from "path";
import { sticker } from "@poppinss/cliui";

import CMValidationsUtils from "cm-validations-utils";

const program = new Command();

program
  .alias("cmv")
  .name("cmv")
  .description("CM Validations CLI")
  .version("0.1.0");

program
  .command("stringify-json")
  .description("Stringify the JSON")
  .argument("<route>", "route of json")
  .argument("<id_sick>", "id of sick")
  .argument("<id_error>", "id of error")
  .action((route, id_sick, id_error) => {
    // const _JSON = require(path.join(process.cwd(), route));
    CMValidationsUtils._functions.jsonToQuery(route, id_sick, id_error);
    // sticker()
    //   .add(`('${JSON.stringify(_JSON)}',${id_sick},"${id_error}")`)

    //   .render();
  });

export default program;
