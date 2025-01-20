<script>
	import Card from '$lib/card.svelte';
	import Section from '$lib/section.svelte';

	const cards = [
		{
			description: 'Jedna róża składa się z 20 osób',
			image: '/images/people.svg'
		},
		{
			description: 'Każda osoba codziennie odmawia jeden dziesiątek różańca',
			image: '/images/rosary.svg'
		},
		{
			description: 'Co miesiąc wymienia się tajemniczkę u zalatora (szefa róży)',
			image: '/images/change.svg'
		},
		{
			description: 'Co miesiąc na discordzie odbywa się krótkie spotkanie',
			image: '/images/meeting.svg'
		}
	];
</script>

<Section
	heading="Reguły"
	classes="py-40 bg-right bg-no-repeat bg-hero bg-contain backdrop-blur-3xl dark:bg-gray-900/60"
>
	<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-[65em] m-auto">
		{#each cards as card}
			<Card
				classes="bg-gradient-to-r from-rose-900 to-rose-700  border-none text-white w-[16em] text-center justify-self-center"
			>
				<div class="flex flex-col space-y-1.5 p-6">
					<h3 class="font-normal leading-none tracking-tight">
						{card.description}
					</h3>
				</div>

				<div class="p-6 pt-0 flex justify-center">
					<img src={card.image} alt="" class="invert w-[12em]" />
				</div>
			</Card>
		{/each}
	</div>
</Section>
