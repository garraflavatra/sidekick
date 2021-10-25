<script lang="ts">
	export let yPosition: number = undefined;

	function handleMouseMove(event: MouseEvent) {
		yPosition = event.pageY;
	}
</script>

<div class="paddle" style="top: {yPosition}px"></div>

<svelte:body on:mousemove={handleMouseMove}/>

<style>
	.paddle {
		width: 20px;
		height: 20vh;
		background-color: var(--fg);
		position: absolute;
		z-index: 10;
	}
</style>
