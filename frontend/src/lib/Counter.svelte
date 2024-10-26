<script lang="ts">
  import { globalCounter } from "../stores/count.svelte";
  import { user } from "../stores/user.svelte";
</script>

<button onclick={globalCounter.incrementCount}>
  count is {globalCounter.count}
</button>
