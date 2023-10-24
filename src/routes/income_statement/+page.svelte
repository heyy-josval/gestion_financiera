<script>
  import { writable } from "svelte/store";
  let resultItem = {};
  let totalResult = 0;
  const switchInp = writable(false);
  const results = writable([]);

  const handleItem = () => {
    if ($switchInp) {
      let a = $results.length - 2;
      let b = $results.length - 1;
      let result;
      if ($results[b].type == "Porcentaje") {
        result =
          $results[a].value - $results[a].value * ($results[b].value / 100);
        // console.log($results[a].value);
        // console.log($results[b].value / 100);
        // console.log(result);
      } else {
        result = $results[a].value - $results[b].value;
      }
      resultItem.value = result;
    }
    results.update((items) => [...items, resultItem]);
    ui("#dialog");
    console.log($results);
  };
</script>

<div>
  <header style="display: grid; place-items: center;">
    <h1>Estado de resultados</h1>
  </header>
  <div style="margin: 2rem;">
    <button
      data-ui="#dialog"
      on:click={() => {
        resultItem = {};
      }}>Agregar nuevo item</button
    >
  </div>
  <div style="display: grid; place-items: center;">
    {#if $results.length == 0}
      <h5>No hay items...</h5>
    {/if}
    {#each $results as { variant, title, value, type }, pos}
      <div
        style="display: flex; width: 50rem; justify-content: space-between; font-size: 1.5rem;"
      >
        <p style="font-weight: bold;">{title}:</p>
        <p>
          <span style="font-weight: bold; color: #fc5f53;"
            >{variant == "Regular" ? "" : "< "}</span
          >
          <span>{type == "Numero" ? "S/." : ""}</span>
          {value}
          <span>{type == "Porcentaje" ? " %" : ""}</span>
          <span style="font-weight: bold; color: #fc5f53;"
            >{variant == "Regular" ? "" : "> "}</span
          >
        </p>
      </div>
    {/each}
  </div>
</div>

<dialog class="modal" id="dialog" style="padding: 2rem;">
  <h5>Agregar nuevo item</h5>
  <br />
  <form on:submit={handleItem}>
    <div class="field suffix border">
      <select bind:value={resultItem.type} required>
        <option>Numero</option>
        <option>Porcentaje</option>
      </select>
      <i>arrow_drop_down</i>
    </div>
    <label class="switch">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label style="margin-right: 1rem;">
        El valor es la resta de lo anterior?
      </label>
      <input
        type="checkbox"
        on:change={() => {
          $switchInp = !$switchInp;
        }}
      />
      <span />
    </label>
    <div class="field label border">
      <input type="text" bind:value={resultItem.title} required />
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>Nombre</label>
    </div>
    {#if $switchInp == false}
      <div class="field label border">
        <input
          type="number"
          step="any"
          bind:value={resultItem.value}
          required
        />
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Valor</label>
      </div>
    {/if}
    <div class="field suffix border">
      <select bind:value={resultItem.variant} required>
        <option>Regular</option>
        <option>Resta</option>
      </select>
      <i>arrow_drop_down</i>
    </div>
    <button
      data-ui="#dialog"
      type="button"
      on:click={() => {
        resultItem = {};
      }}>Cancelar</button
    >
    <button type="submit">Agregar</button>
  </form>
</dialog>
