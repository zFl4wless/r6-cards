<script lang="ts">
	import '../app.css';
	import { operators } from '../lib/data/operators';
	import OperatorCard from '../lib/components/OperatorCard.svelte';
	import OperatorSearchBar from '$lib/components/OperatorSearchBar.svelte';
	import SelectedOperator from '$lib/components/SelectedOperator.svelte';
	import SplashScreen from '$lib/components/SplashScreen.svelte';
	import { onMount } from 'svelte';

	let showSplashScreen: boolean;
	$: showSplashScreen = true;

	onMount(() => {
		showSplashScreen = false;
	});

	let search: string = '';
	$: filteredOperators =
		search && search.length > 0
			? operators.filter((operator) => operator.name.toLowerCase().startsWith(search.toLowerCase()))
			: operators;

	let selectedOperator: Operator | undefined;
	$: selectedOperator;
</script>

<main class="m-6">
	<!-- Splash Screen -->
	<SplashScreen {showSplashScreen} />

	<div class="relative xl:mr-[30rem]">
		<!-- Search Bar -->
		<OperatorSearchBar bind:search />

		<!-- Operator List -->
		<div class="flex flex-wrap justify-start gap-x-6 gap-y-28 my-28">
			{#each filteredOperators as operator}
				<OperatorCard {...operator} bind:selectedOperator />
			{/each}
		</div>

		<footer class="text-center text-light-gray">
			Made with 💙 by <a class="underline" href="https://fl4wless.de">Fl4wless</a>
		</footer>
	</div>

	<!-- Selected Operator -->
	<SelectedOperator bind:selectedOperator />
</main>
