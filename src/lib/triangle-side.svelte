<div class="triangles">
	{#each [...Array(500).keys()] as n}
		<div class="triangle" id="triangle-{n}"></div>
	{/each}
</div>

<style>
	.triangles {
		top: 0;
		left: 0;
		position: fixed;
	}
	.triangle {
		width: 0; 
		height: 0; 
		border-top: 20px solid transparent;
		border-bottom: 20px solid transparent;
		border-left: 20px solid var(--bg-light);
		z-index: 2;
	}
</style>
