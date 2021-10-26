<script lang="ts">
	import { onMount } from 'svelte';
	import { getRandomBoolean, getRandomInteger } from '../utils';

	var ballElement: Element;
	var holderElement: Element;
	var timeX = 2;
	var timeY = 2;

	onMount(() => {
		function randomizeDuration(): void {
			const random = getRandomInteger(1, 7);
			if (getRandomBoolean()) timeX = random;
			else timeY = random;
			return;
		}

		randomizeDuration();

		setTimeout(() => {
			holderElement.setAttribute('style', '');
		}, 1500);
	});
</script>

<div style="--x: {timeX}s; --y: {timeY}s;">
	<div class="holder" style="margin-left: 50px;" bind:this={holderElement}>
		<div class="x" bind:this={ballElement}>
			<svg xmlns="http://www.w3.org/2000/svg" class="ball" viewBox="0 0 16 16">
				<circle cx="8" cy="8" r="8" />
			</svg>
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
