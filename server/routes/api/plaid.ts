import {
  Configuration,
  PlaidApi,
  PlaidEnvironments,
  type Transaction,
} from "plaid";
import { Hono } from "hono";
import { config } from "../../config";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": config.plaidClientId,
      "PLAID-SECRET": config.plaidSecret,
    },
  },
});

export const plaidRoute = new Hono().get("/transactions", async (c) => {
  return c.json([] as Transaction[]);
});
