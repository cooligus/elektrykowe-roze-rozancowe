<script>
	import Contact from './contact.svelte';
	import Footer from './footer.svelte';
	import Heading from './heading.svelte';
	import Registration from './registration.svelte';
	import Rules from './rules.svelte';
</script>

<svelte:head>
	<title>Elektrykowe Róże Różańcowe</title>
</svelte:head>

<div class="dark:bg-gray-900 dark:text-white bg-white">
	<Heading />
	<Rules />
	<Registration />
	<Contact />
	<Footer />
</div>
