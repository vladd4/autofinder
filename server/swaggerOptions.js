import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AutoFinder API",
      version: "1.0.0",
      description: "API for managing cars",
    },
  },
  apis: [`${__dirname}/routes/*`],
};

export default swaggerOptions;
