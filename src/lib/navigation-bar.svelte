<script lang="ts">
	import Kbd from "./kbd.svelte";

	export let items = [
		{ key: 'a', label: 'about' },
	];
</script>

<nav>
	<table>
		{#each items as item}
			<tr>
				<td><Kbd key="{item.key}"/></td>
				<td>{item.label}</td>
			</tr>
		{/each}
	</table>
</nav>

<style>
	nav {
		position: absolute;
		margin: 20px;
		top: 0;
		right: 0;
		z-index: 20;
		white-space: pre-wrap;
		text-align: right;
	}
	table {
		border: none;
	}
	tr td:first-child {
		padding-right: 10px;
	}
</style>
