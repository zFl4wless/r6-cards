<script lang="ts">
	import { Search } from 'lucide-svelte';

	export let search: string;
</script>

<div class="flex bg-dark px-4 py-3 rounded-lg">
	<input
		class="bg-transparent text-light text-base w-full focus:outline-none"
		placeholder="Search an Operator"
		type="text"
		bind:value={search}
	/>
	<div class="bg-light p-1 rounded-md shadow-glow">
		<Search size={20} class="text-dark" />
	</div>
</div>
