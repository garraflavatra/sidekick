<div class="x">
	<svg xmlns="http://www.w3.org/2000/svg" class="ball" viewBox="0 0 16 16">
		<circle cx="8" cy="8" r="8"/>
	</svg>
</div>

<style>
	.x, .ball {
		width: 50px;
		height: 50px;
	}
	.x {
		animation: x 5s linear infinite alternate;
	}
	.ball {
		fill: var(--fg);
		width: 50px;
		height: 50px;
		animation: y 2s linear infinite alternate;
		z-index: 5;
	}
	@keyframes x {
		100% {
			transform: translateX(calc(100vw - 50px));
		}
	}
	@keyframes y {
		100% {
			transform: translateY(calc(100vh - 50px));
		}
	}
</style>

