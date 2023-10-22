<script>
  export let type;
  export let handleUpdate;
  export let handleSums;
  let formValues = {};
</script>

<dialog class="modal" id="eq_pat_modal">
  <h5 class="max center-align" style="margin-top: 1rem;">
    Agregar {type == "assets"
      ? "activo corriente"
      : type == "assetsNC"
      ? "activo no corriente"
      : type == "liabilities"
      ? "pasivo corriente"
      : type == "liabilitiesNC"
      ? "pasivo no corriente"
      : type == "equity"
      ? "patrimonio"
      : type == "incomes"
      ? "ingreso"
      : type == "expenses"
      ? "gasto"
      : "costo"}
  </h5>

  <!-- svelte-ignore a11y-label-has-associated-control -->
  <div style="margin-top: 2rem;">
    <form
      style="display: flex; flex-direction: column; align-items: center; width: 100%; gap: 1rem; margin-top: 1rem;"
      on:submit|preventDefault={() => {}}
    >
      <div class="field label round border" style="margin: 0; width: 100%;">
        <input type="text" required bind:value={formValues.title} />
        <label>Nombre</label>
      </div>
      <div class="field label round border" style="margin: 0; width: 100%;">
        <input
          type="number"
          step="any"
          required
          bind:value={formValues.price}
        />
        <label>Precio</label>
      </div>

      <div
        style="width: 100%; display: flex; flex-direction: column; gap: 1rem;"
      >
        <button class="border responsive" data-ui="#eq_pat_modal" type="button"
          >Cancel</button
        >
        <button
          class="responsive"
          type="submit"
          on:click={() => {
            handleUpdate(formValues, type);
            handleSums();
            formValues = {};
          }}>Confirm</button
        >
      </div>
    </form>
  </div>
</dialog>
