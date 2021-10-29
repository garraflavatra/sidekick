<script lang="ts" context="module">
  import type { Coordinates } from './coordinates';

  export const triangleCount = 200;

  export const coordinates: Coordinates = {
    x: 0,
    y: 0,
    width: 20,
    height: 20 * triangleCount
  };
</script>

<div class="triangles">
  {#each [...Array(triangleCount).keys()] as n}
    <div class="triangle" id="triangle-{n}" />
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
