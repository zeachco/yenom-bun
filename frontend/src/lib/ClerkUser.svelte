<script lang="ts">
  import { setUserButton } from "@/api/session";
  let userDiv: HTMLDivElement;
  $effect(() => {
    if (userDiv) setUserButton(userDiv);
  });
</script>

<div bind:this={userDiv}></div>
