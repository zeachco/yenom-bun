import { Hono } from "hono";
import { logger } from "hono/logger";
import { authRoute } from "./routes/api/auth";
import { clerkMiddleware } from "@hono/clerk-auth";
import { serveStatic } from "hono/bun";
import { apiRoute } from "./routes/api/me";
import { plaidRoute } from "./routes/api/plaid";
import { config } from "./config";

export const app = new Hono();

app.use("*", logger());

app.use(
  "*",
  clerkMiddleware({
    publishableKey: config.clerkPubKey,
    secretKey: config.clerkSecretKey,
    userAgent: "hono",
    telemetry: {
      debug: true,
    },
  })
);
const apiRoutes = app
  .basePath("/api")
  .route("/", apiRoute)
  .route("/auth", authRoute)
  .route("/plaid", plaidRoute);

app.get("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

export type ApiRoutes = typeof apiRoutes;
