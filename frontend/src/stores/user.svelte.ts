import { api } from "@/api";
import { getClient } from "@/api/session";

let name = $state("You");
async function updateUser() {
  try {
    const response = await api.me.$get();
    const json = await response.json();
    name = json?.fullName ?? json?.firstName ?? json?.lastName ?? "You";
  } catch (err) {
    console.error(err);
    name = "unknown";
  }
}

export const user = {
  updateUser,
  get name() {
    return name;
  },
  async signout() {
    const client = await getClient();
    await client.signOut();
  },
};
