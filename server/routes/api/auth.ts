import { Hono } from "hono";
import { getAuth } from "@hono/clerk-auth";
import { config } from "../../config";

export const authRoute = new Hono()
  .get("/login", async (c) => {
    return c.json(config);
  })
  .get("/state", (c) => {
    const clerkClient = c.get("clerk");
    const auth = getAuth(c);
    if (!auth?.userId) {
      return c.json({
        message: "You are not logged in.",
      });
    }

    return c.json({
      message: "You are logged in!",
      userId: auth.userId,
      user: clerkClient.users.getUser(auth.userId),
    });
  });
