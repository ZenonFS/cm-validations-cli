import path from "path";
import fs from "fs";

export const jsonToStringify = (route: string, routeToAppend?: string) => {
  const { idError, idSick, validations, parameter } = require(path.join(
    process.cwd(),
    route
  ));
  const DATA_TO_RETURN = `("${parameter}",'${JSON.stringify(
    validations
  )}',${idSick},"${idError}")`;
  if (routeToAppend) {
    fs.appendFileSync(
      path.join(process.cwd(), routeToAppend),
      `,${DATA_TO_RETURN}`
    );
  }
  return DATA_TO_RETURN;
};
