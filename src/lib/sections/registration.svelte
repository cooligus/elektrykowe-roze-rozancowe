<script>

    import confession from "$lib/assets/confession.jpg"
	import Section from "$lib/ui/section.svelte";

</script>

    <Section heading="Zapisy" classes="pb-40">
      <div class="flex justify-center items-center gap-5 md:flex-row flex-col">
        <div class="md:w-[30em] md:h-[20em] w-[15em] overflow-hidden flex items-center rounded-xl">
          <img
          class="object-fill relative top-7"
          src={confession}
          alt="Confession: happy priest"
          />
        </div>
        <p class="font-extrabold text-xl md:text-left text-center">
          Ponieważ nasze plakaty są <br/>
          trollogenne, nie obsługujemy <br/>
          cyfrowych zapisów - musisz<br/>
          iść do ludzi którzy są podani <br/>
          w <a href="#contact" class="underline">kontakcie</a>
        </p> 
      </div>
    </Section>