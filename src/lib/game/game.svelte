<script lang="ts">
  import GameCanvas from './game-canvas.svelte';
  import Ball from './ball.svelte';
  import Paddle from './paddle.svelte';
  import TriangleSide from './triangle-side.svelte';
</script>

<GameCanvas>
  <Ball />
  <Paddle />
  <TriangleSide />
</GameCanvas>
