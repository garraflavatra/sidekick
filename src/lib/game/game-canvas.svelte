<div class="game">
  <slot />
</div>

<style>
  .game {
    overflow: hidden;
    cursor: url('../../assets/cursor/cursor.cur') 2 2, auto;
    width: 100vw;
    height: 100vh;
    z-index: 200;
  }
  .game:hover {
    cursor: url('../../assets/cursor/cursor.cur') 2 2, auto;
  }
</style>
