<script>
    export let classes;
</script>

<div
  class={
    "rounded-xl border bg-card text-card-foreground shadow " + classes
  }
>
  <slot/>
</div>