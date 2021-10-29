<script lang="ts">
  import Logo from './logo.svelte';
  import Popup from './popup.svelte';

  let openAbout = false;
  let openHowToPlay = false;

  function keyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'a':
        openAbout = !openAbout;
        break;

      case 'h':
        openHowToPlay = !openHowToPlay;
        break;

      default:
        break;
    }
  }
</script>

<svelte:body on:keypress={keyDown} />

<Popup open={openAbout}>
  <h2>about <Logo /></h2>
  <p>
    This is just a simple demo of half the Pong game. It has only one paddle, a bouncing ball and a
    not-so-dangerous-yet wall.
  </p>
  <br />
  <h2>how to play</h2>
  <p>TL;DR: not.</p>
  <p>This is just a simple demo of half the Pong game and it's not yet playable.</p>
</Popup>

<Popup open={openHowToPlay}>
  <h2>how to play <Logo /></h2>
  <p>TL;DR: not.</p>
  <p>This is just a simple demo of half the Pong game and it's not yet playable.</p>
</Popup>
