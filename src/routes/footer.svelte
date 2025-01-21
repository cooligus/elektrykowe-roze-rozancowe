<script>
	const footerLinks = [
		{
			description: 'Co to różaniec?',
			href: '/blog/rosary'
		},
		{
			description: 'Polityka prywatności',
			href: '/blog/privacy'
		}
	];
</script>

<div class="bg-black md:p-30 p-10">
	<div class="container m-auto flex md:justify-between flex-col md:flex-row">
		<h2
			class="md:text-6xl text-2xl text-rose-600 uppercase font-extrabold md:text-left text-center"
		>
			Eletrykowe <br />
			Róże Różańcowe
		</h2>
		<ul class="list-none font-extrabold text-xl md:text-right text-center text-white">
			{#each footerLinks as link}
				<li>
					<a href={link.href}>{link.description}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
