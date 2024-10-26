<script lang="ts">
  import { transactionsStore } from "@/stores/transactions.svelte";
</script>

{#each transactionsStore.transactions as transaction}
  <div>
    <p>{transaction.transaction_id}</p>
    <p>{transaction.amount}</p>
    <p>{transaction.original_description}</p>
    <p>{transaction.datetime}</p>
  </div>
{/each}
