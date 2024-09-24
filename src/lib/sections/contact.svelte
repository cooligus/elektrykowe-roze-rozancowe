<script>
    import joseph from "$lib/assets/joseph.jpg"
    import rose from "$lib/assets/rose.jpg"
	import Card from "$lib/ui/card.svelte";
	import Section from "$lib/ui/section.svelte";

  const cards = [
    {
      description: "Jerzy Talar",
      image: joseph,
      href: 'https://zsem.edu.pl/plany/plany/n59.html'
    },
  ]
</script>

<Section heading="Kontakt" id="contact" 
  classes="py-40 px-0 text-white bg-center bg-no-repeat bg-hero bg-cover backdrop-blur-sm" 
  headerClasses="text-rose-800 md:text-7xl text-5xl md:text-left md:absolute md:top-0 md:right-8 py-4 mb-0" 
  style={`background-image: url(${rose})`}>
  <div class="flex justify-center gap-3">
    {#each cards as card }
    <a href={card.href}>
      <Card classes="border-none w-[16em] bg-zinc-900/80 text-center p-6 backdrop-blur-md">
        <img
        src={card.image}
        alt="Profile picture of Jerzy Talar"
        class="rounded-full"
        />
        <p class="text-white font-extrabold text-2xl mt-4">
          {card.description}
        </p>
      </Card>
    </a>
    {/each}
  </div>
</Section>