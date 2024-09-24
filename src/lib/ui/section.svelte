<script>
	export let classes = '';
	export let id = '';
	export let style = '';
	export let headerClasses = '';
	export let heading = '';
</script>

<section class={'p-6 relative z-10 bg-primary ' + classes} {id} {style}>
	<h2 class={'uppercase text-5xl font-extrabold text-b text-center mb-8 ' + headerClasses}>
		{heading}
	</h2>
	<slot />
</section>
