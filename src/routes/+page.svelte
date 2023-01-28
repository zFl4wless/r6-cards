<script lang="ts">
	import '../app.css';
	import { operators } from '../lib/data/operators';
	import OperatorCard from '../lib/components/OperatorCard.svelte';
	import OperatorSearchBar from '$lib/components/OperatorSearchBar.svelte';

	let search: string = '';
	$: filteredOperators = search
		? operators.filter((operator) => operator.name.toLowerCase().startsWith(search.toLowerCase()))
		: operators;
</script>

<main class="m-6">
	<!-- Search Bar -->
	<OperatorSearchBar bind:search />

	<!-- Operator List -->
	<div class="flex flex-wrap justify-center gap-x-6 gap-y-28 my-28">
		{#each filteredOperators as operator}
			<OperatorCard {...operator} />
		{/each}
	</div>
</main>
