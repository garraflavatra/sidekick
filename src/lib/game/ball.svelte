<script lang="ts">
  import { onMount } from 'svelte';
  import { getRandomBoolean, getRandomFloat, getRandomInteger } from '../random';

  import apple from '../../assets/ball/apple.png';
  import baseball from '../../assets/ball/baseball.png';
  import clover from '../../assets/ball/clover.png';
  import cookie from '../../assets/ball/cookie.png';
  import stroopwafel from '../../assets/ball/stroopwafel.png';

  const balls = [apple, baseball, clover, cookie, stroopwafel];

  let currentBall: string;

  function randomBall(): void {
    const random = getRandomInteger(0, balls.length - 1);
    currentBall = balls[random];
    return;
  }

  randomBall();

  var ballElement: Element;
  var holderElement: Element;
  var timeX = 2;
  var timeY = 2;

  function randomizeDuration(): void {
    const random = getRandomFloat(1, 7);
    if (getRandomBoolean()) timeX = random;
    else timeY = random;
    return;
  }

  randomizeDuration();

  onMount(() => {
    setTimeout(() => {
      holderElement.setAttribute('style', '');
    }, 1500);
  });

  setInterval(() => {
    randomBall();
  }, 5000);
</script>

<div style="--x: {timeX}s; --y: {timeY}s;">
  <div class="holder" style="margin-left: 50px;" bind:this={holderElement}>
    <div class="x" bind:this={ballElement}>
      <img src={currentBall} alt="Ball" class="ball" />
    </div>
  </div>
</div>

<style>
  .x,
  .ball {
    width: 50px;
    height: 50px;
  }
  .x {
    animation: x var(--x) linear infinite alternate;
  }
  .ball {
    fill: var(--fg);
    width: 50px;
    height: 50px;
    animation: y var(--y) linear infinite alternate;
    z-index: 5;
  }
  @keyframes x {
    100% {
      transform: translateX(calc(100vw - 50px));
    }
  }
  @keyframes y {
    80% {
      transform: translateY(calc(100vh - 50px));
    }
  }
</style>
