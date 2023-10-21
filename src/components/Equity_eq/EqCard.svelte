<script>
  export let title;
  export let items;
  export let handleDelete;
  export let handleModal;
</script>

<div style="width: 100%;">
  <article>
    <h3 class="max center-align" style="margin-bottom: 2rem;">{title}</h3>
    {#if items.length == 0}
      <div style="display: flex; justify-content: center;">
        <p>Agrega un valor para continuar</p>
      </div>
    {/if}
    <div style="display: flex; gap: 10px;">
      {#each items as { title, price }, pos}
        <button
          class="secondary"
          on:click={() => {
            handleDelete(pos);
          }}
        >
          {title} - S/.{price}
        </button>
      {/each}
    </div>
    <button
      class="responsive"
      data-ui="#eq_pat_modal"
      style="margin-top: 2rem;"
      on:click={handleModal}
    >
      <i>add</i>
      <span>Agregar</span>
    </button>
  </article>
</div>
