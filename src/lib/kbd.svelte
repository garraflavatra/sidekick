<script lang="ts">
	export let key: string;
</script>

<kbd>{key}</kbd>

<style>
	kbd {
		font-family: inherit;
		font-size: inherit;
	}
	kbd::before {
		content: '<';
	}
	kbd::after {
		content: '>';
	}
</style>
