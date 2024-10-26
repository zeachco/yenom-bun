import { Clerk } from "@clerk/clerk-js";

const loginModal = document.createElement("div");
loginModal.id = "clerk-modal";
document.body.appendChild(loginModal);

export async function setUserButton(userButtonDiv: HTMLDivElement) {
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!clerkPubKey) {
    throw new Error("Add your VITE_CLERK_PUBLISHABLE_KEY to the .env file");
  }

  const clerk = new Clerk(clerkPubKey);
  await clerk.load();

  if (clerk.user) {
    clerk.mountUserButton(userButtonDiv);
  } else {
    clerk.mountSignIn(loginModal);
  }
}

export function showLogin() {
  const loginModal = document.getElementById("clerk-modal");
  if (loginModal) {
    loginModal.style.display = "block";
  }
}

let loaded = false;
export async function getClient() {
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const clerk = new Clerk(clerkPubKey);
  if (loaded) return clerk;
  await clerk.load();
  loaded = true;
  return clerk;
}
