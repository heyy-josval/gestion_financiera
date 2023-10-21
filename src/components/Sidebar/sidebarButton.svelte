<script>
  export let title;
  export let handle;
</script>

<button
  class="responsive fill large"
  on:click={handle}
  style="text-transform: uppercase;"
>
  {title}
</button>
