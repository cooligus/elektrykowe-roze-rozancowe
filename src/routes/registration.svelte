<script>
	import Section from '$lib/section.svelte';
</script>

<Section heading="Zapisy" classes="pb-40">
	<div class="flex justify-center items-center gap-5 md:flex-row flex-col">
		<div class="md:w-[30em] md:h-[20em] w-[15em] overflow-hidden flex items-center rounded-xl">
			<img
				class="object-fill relative top-7"
				src="/images/confession.jpg"
				alt="Confession: happy priest"
			/>
		</div>
		<p class="font-extrabold text-xl md:text-left text-center">
			Jeśli wiesz jak się dostać do<br />
			ludzi, którzy są podani <br />
			w <a href="#contact" class="underline">kontakcie</a> to odwiedź <br />
			nasz
			<a href="https://matrix.to/#/#elektrykowe-roze-rozancowe:matrix.org" class="underline"
				>pokój na matrixie</a
			>
		</p>
	</div>
</Section>
