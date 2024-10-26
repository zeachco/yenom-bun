<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import { user } from "./stores/user.svelte";
  import ClerkUser from "./lib/ClerkUser.svelte";
  import Transactions from "./lib/Transactions.svelte";
  import { onMount } from "svelte";
  import { getClient } from "./api/session";

  onMount(async () => {
    const client = await getClient();
    client.addListener(user.updateUser);
  });
</script>

<section>
  <h1>Yenom</h1>
</section>
<nav>
  <h4>
    Hello {user.name}!
  </h4>
  <ClerkUser />
</nav>
<main>
  <Transactions />
  <div class="card">
    <Counter />
  </div>
</main>

<style>
  section {
    text-align: left;
    color: antiquewhite;
    background: #333;
    padding: 1rem;
    h1 {
      padding: 0;
      margin: 0;
    }
  }
  nav {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    max-height: 4rem;
    position: sticky;
    top: 0;
    background: #3333;
  }
</style>
