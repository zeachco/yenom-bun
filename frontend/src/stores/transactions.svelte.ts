import { api } from "@/api";
import { getClient } from "@/api/session";
// import type { Transaction } from "plaid";

let transactions = $state([] as any[]);
export async function loadInitialTransactions() {
  const response = await api.plaid.transactions.$get();
  const json = await response.json();
  transactions = json;
}

export const transactionsStore = {
  get transactions() {
    return transactions;
  },
  async signout() {
    const client = await getClient();
    await client.signOut();
  },
};
