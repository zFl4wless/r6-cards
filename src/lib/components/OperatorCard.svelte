<script lang="ts">
	import OperatorStatistics from './OperatorStatistics.svelte';

	export let name: string;
	export let badge: string;
	export let image: string;
	export let armor_rating: number;
	export let speed_rating: number;
	export let type: string;
	const typeBg = 'bg-' + type;

	const titleCaseWord = (word: string) => word[0].toUpperCase() + word.slice(1);
</script>

<div
	class="relative bg-card-background flex flex-col text-center justify-center w-full rounded-lg cursor-pointer py-8"
>
	<div>
		<img
			class="absolute -top-20 left-1/2 -translate-x-1/2"
			src={image}
			alt="Profile image of {name}"
			width={280}
		/>
		<img
			class="absolute top-32 left-1/2 -translate-x-1/2"
			src={badge}
			alt="Operator badge of {name}"
			width={65}
			height={65}
		/>
	</div>

	<div class="mt-40">
		<h1 class="text-2xl font-bold tracking-wide">{titleCaseWord(name)}</h1>
		<div class="{typeBg} inline-block text-sm uppercase font-semibold px-2 py-0.5 rounded-md">
			{type}
		</div>

		<div class="my-10">
			<OperatorStatistics armorRating={armor_rating} speedRating={speed_rating} />
		</div>
	</div>
</div>
