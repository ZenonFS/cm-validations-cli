import path from "path";
import fs from "fs";

export const jsonToStringify = (route: string, routeToAppend?: string) => {
  convertJson(require(path.join(process.cwd(), route)), routeToAppend);
};

export const arrayToStringify = (route: string, routeToAppend?: string) => {
  require(path.join(process.cwd(), route)).map(
    ({
      idError,
      idSick,
      validations,
      parameter,
    }: {
      idError: string;
      idSick: string;
      validations: any[];
      parameter: string;
    }) => {
      convertJson({ idError, idSick, validations, parameter }, routeToAppend);
    }
  );
};

const convertJson = (
  {
    idError,
    idSick,
    validations,
    parameter,
  }: { idError: string; idSick: string; validations: any[]; parameter: string },
  routeToAppend?: string
) => {
  const DATA_TO_RETURN = `("${parameter}",'${JSON.stringify(
    validations
  )}',${idSick},"${idError}")`;
  if (routeToAppend) {
    fs.appendFileSync(
      path.join(process.cwd(), routeToAppend),
      `,${DATA_TO_RETURN}`
    );
    return;
  }

  console.log(`
    ${DATA_TO_RETURN}
    `);
};
