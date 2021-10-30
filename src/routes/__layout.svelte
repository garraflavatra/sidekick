<script lang="ts">
  import Navigation from '$lib/navigation.svelte';
  import NavigationBar from '$lib/navigation-bar.svelte';
  import '../app.css';
</script>

<svelte:head>
  <title>Sidekick</title>
</svelte:head>

<Navigation />
<NavigationBar />
<slot />
