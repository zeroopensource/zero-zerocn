import { createRoute } from "@hono/zod-openapi";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";
import { createRouter } from "@/lib/create-app";
import { HttpStatusCodes } from "@/lib/http-status";
import { PACKAGEJSON } from "@/lib/packagejson";

const router = createRouter()
  .openapi(
    createRoute({
      tags: [PACKAGEJSON.nameVersion],
      method: "get",
      path: "/api",
      responses: {
        [HttpStatusCodes.OK]: jsonContent(
          createMessageObjectSchema(PACKAGEJSON.nameVersion),
          `${PACKAGEJSON.nameVersion} API Index`
        ),
      },
    }),
    (c) => {
      return c.json(
        {
          message: PACKAGEJSON.nameVersion,
        },
        HttpStatusCodes.OK
      );
    }
  )
  .openapi(
    createRoute({
      tags: [PACKAGEJSON.nameVersion],
      method: "get",
      path: "/api/errorTest",
      responses: {
        [HttpStatusCodes.INTERNAL_SERVER_ERROR]: jsonContent(
          createMessageObjectSchema("Error Test"),
          "Test error handling"
        ),
      },
    }),
    (c) => {
      c.var.logger.info("Error Test");
      c.status(HttpStatusCodes.INTERNAL_SERVER_ERROR);
      throw new Error("Error Test");
    }
  );

export default router;
