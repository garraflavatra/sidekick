<script lang="ts">
	import GameCanvas from "$lib/game/game-canvas.svelte";
	import Ball from "$lib/game/ball.svelte";
	import Paddle from "$lib/game/paddle.svelte";
	import TriangleSide from "$lib/game/triangle-side.svelte";
</script>

<GameCanvas>
	<Ball/>
	<Paddle/>
	<TriangleSide/>
</GameCanvas>
