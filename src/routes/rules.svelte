<script>
	import Card from '$lib/card.svelte';
	import Section from '$lib/section.svelte';

	const cards = [
		{
			description: 'Jedna róża składa się z 20 osób',
			image: '/images/people.jpg'
		},
		{
			description: 'Każda osoba codziennie odmawia jeden dziesiątek różańca',
			image: '/images/rosary.jpg'
		},
		{
			description: 'Co miesiąc dostajesz nową tajemnicę do odmawiania',
			image: '/images/list.jpg'
		},
		{
			description: 'Co miesiąc na discordzie odbywa się krótkie spotkanie',
			image: '/images/meeting.jpg'
		}
	];
</script>

<Section
	heading="Reguły"
	classes="py-40 bg-right bg-no-repeat bg-hero bg-contain backdrop-blur-3xl dark:bg-gray-900/60"
>
	<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:max-w-[35em] xl:max-w-[65em] m-auto">
		{#each cards as card}
			<Card
				classes="bg-gray-800 border-none text-white w-[16em] text-center justify-self-center flex flex-col justify-between items-between"
			>
				<div class="flex flex-col space-y-1.5 p-6">
					<h3 class="font-bold leading-none">
						{card.description}
					</h3>
				</div>

				<div class="m-3 flex justify-center rounded-xl overflow-hidden">
					<img src={card.image} alt="" class="w-full h-full" />
				</div>
			</Card>
		{/each}
	</div>
</Section>
