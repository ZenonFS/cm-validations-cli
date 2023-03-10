import path from "path";

export const jsonToStringify = (route: string) => {
  const { idError, idSick, validations } = require(path.join(
    process.cwd(),
    route
  ));
  return `('${JSON.stringify(validations)}',${idSick},"${idError}")`;
};
