<script>
	import GameCanvas from "$lib/game-canvas.svelte";
	import Ball from "$lib/ball.svelte";
	import Paddle from "$lib/paddle.svelte";
	import TriangleSide from "$lib/triangle-side.svelte";
</script>

<GameCanvas>
	<Ball/>
	<Paddle/>
	<TriangleSide/>
</GameCanvas>
