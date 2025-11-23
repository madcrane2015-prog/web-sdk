<script lang="ts">
  import { type Snippet } from "svelte";
  const props: { children: Snippet } = $props();
</script>

{@render props.children()}

