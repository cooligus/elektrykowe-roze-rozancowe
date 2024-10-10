<script>
	import Card from '$lib/card.svelte';
	import Section from '$lib/section.svelte';

	const cards = [
		{
			description: 'Discord',
			image: '/images/discord.svg',
			href: 'https://discord.gg/MB3xshNdsC',
			alt: 'Discord server'
		},
	];
</script>

<Section
	heading="Kontakt"
	id="contact"
	classes="py-40 px-0 text-white bg-center bg-no-repeat bg-hero bg-cover backdrop-blur-sm"
	headerClasses="text-rose-800 md:text-7xl text-5xl md:text-left md:absolute md:top-0 md:right-8 py-4 mb-0"
	style={`background-image: url('/images/rose.jpg')`}
>
	<div class="flex justify-center gap-3 flex-col sm:flex-row ">
		{#each cards as card}
			<a href={card.href} class="flex justify-center">
				<Card classes="border-none w-[16em] h-[18em] bg-zinc-900/80 text-center p-12 backdrop-blur-md flex flex-col justify-center">
					<img src={card.image} alt={card.alt} />
					<p class="text-white font-extrabold text-2xl mt-4">
						{card.description}
					</p>
				</Card>
			</a>
		{/each}
	</div>
</Section>
