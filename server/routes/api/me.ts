import { Hono } from "hono";
import { getAuth } from "@hono/clerk-auth";

export const apiRoute = new Hono().get("/me", async (c) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    return c.json(null);
  }

  const clerkClient = c.get("clerk");
  return c.json(await clerkClient.users.getUser(auth.userId));
});
