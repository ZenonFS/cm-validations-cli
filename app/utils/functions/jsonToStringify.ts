import path from "path";

export const jsonToStringify = (route: string) => {
  const { idError, idSick, validations, parameter } = require(path.join(
    process.cwd(),
    route
  ));
  return `("${parameter}",'${JSON.stringify(
    validations
  )}',${idSick},"${idError}")`;
};
