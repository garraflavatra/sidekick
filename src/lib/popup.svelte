<script lang="ts">
	import Kbd from "./kbd.svelte";

	export let open = false;

	function onKeypress(event: KeyboardEvent) {
		if (event.key == 'Escape' && open === true) {
			open = !open;
		}
	}
</script>

<svelte:body on:keypress={onKeypress}/>

<div class="modal" class:open={open}>
	<slot></slot>
	<button on:click={() => { open = !open }}>
		<Kbd key="esc"/> close
	</button>
</div>

<style>
	.modal {
		position: absolute;
		margin: 20px;
		padding: 50px;
		text-align: center;
		display: none;
		border: 2px solid var(--fg);
		z-index: 50;
		background-color: var(--bg);
		box-shadow: 8px 8px 0 var(--fg);
	}
	.open {
		display: block;
	}
</style>
