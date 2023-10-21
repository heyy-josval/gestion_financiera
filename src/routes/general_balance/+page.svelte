<script>
  import EqCard from "../../components/Equity_eq/EqCard.svelte";
  import { writable } from "svelte/store";
  import EqModal from "../../components/Equity_eq/EqModal.svelte";

  const assets = writable([]);
  const assetsNC = writable([]);
  const liabilities = writable([]);
  const liabilitiesNC = writable([]);
  const equity = writable([]);
  const incomes = writable([]);
  const expenses = writable([]);
  const costs = writable([]);

  const type = writable(null);

  const sumAssets = writable(0);
  const sumLiabilities = writable(0);
  const sumEquities = writable(0);

  const isTrue = writable(false);

  const calcResult = () => {
    $isTrue = $sumAssets == $sumLiabilities + $sumEquities;
  };

  function addAssets() {
    let sum = 0;
    $assets.forEach((asset) => {
      sum += asset.price;
    });
    $assetsNC.forEach((asset) => {
      sum += asset.price;
    });
    $sumAssets = sum;
  }
  function addLiabilities() {
    let sum = 0;
    $liabilities.forEach((asset) => {
      sum += asset.price;
    });
    $liabilitiesNC.forEach((asset) => {
      sum += asset.price;
    });
    $sumLiabilities = sum;
  }
  function addEquities() {
    let sum = 0;
    let netUtility = 0;
    $equity.forEach((asset) => {
      sum += asset.price;
    });
    let totalIncomes = 0;
    $incomes.forEach((asset) => {
      totalIncomes += asset.price;
    });
    let expensesAndCosts = 0;
    $expenses.forEach((asset) => {
      expensesAndCosts += asset.price;
    });
    $costs.forEach((asset) => {
      expensesAndCosts += asset.price;
    });
    netUtility = totalIncomes - expensesAndCosts;
    $sumEquities = sum + netUtility;
  }

  const handleArray = (arr, pos) =>
    arr.update((currentArray) =>
      currentArray.filter((_, index) => index !== pos)
    );

  const handleDelete = (arr, pos) => handleArray(arr, pos);

  const handleModal = (newType) => {
    type.set(newType);
  };

  const handleUpdateArray = (item, itemType) => {
    const store =
      itemType === "assets"
        ? assets
        : itemType === "liabilities"
        ? liabilities
        : equity;
    store.update((currentItems) => [...currentItems, item]);
  };
</script>

<h1 class="max center-align">Balance general</h1>

<div
  style="display: flex; justify-content: space-between; margin-top: 2rem; width: 100%; gap: 1rem;"
>
  <div
    style="width: 50%; display: flex; flex-direction: column; align-items: center; gap: 1rem;"
  >
    <EqCard
      title="Activos"
      items={$assets}
      handleDelete={(pos) => handleDelete(assets, pos)}
      handleModal={() => {
        handleModal("assets");
      }}
    />
    <EqCard
      title="Pasivos"
      items={$liabilities}
      handleDelete={(pos) => handleDelete(liabilities, pos)}
      handleModal={() => handleModal("liabilities")}
    />
    <EqCard
      title="Patrimonios"
      items={$equity}
      handleDelete={(pos) => handleDelete(equity, pos)}
      handleModal={() => handleModal("equity")}
    />
  </div>
  <div style="width: 50%;">
    <div>
      <article>
        <h3 class="max center-align">Resultados</h3>
        <table class="border medium-space center-align">
          <thead>
            <tr>
              <th style="font-weight: bold;">#</th>
              <th style="font-weight: bold;">Nombre</th>
              <th style="font-weight: bold;">Precio</th>
              <th style="font-weight: bold;">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {#each $assets as asset, pos}
              <tr>
                <td>{pos + 1}</td>
                <td>{asset.title}</td>
                <td>S/. {asset.price}</td>
                <td>Activo</td>
              </tr>
            {/each}
            {#if $assets.length > 0}
              <tr style="font-weight: bold;" class="error">
                <td colspan="2">Total activos</td>
                <td>S/. {$sumAssets}</td>
                <td>Resultado</td>
              </tr>
            {/if}
            {#each $liabilities as liability, pos}
              <tr>
                <td>{pos + 1}</td>
                <td>{liability.title}</td>
                <td>S/. {liability.price}</td>
                <td>Pasivo</td>
              </tr>
            {/each}
            {#if $liabilities.length > 0}
              <tr style="font-weight: bold;" class="error">
                <td colspan="2">Total pasivos</td>
                <td>S/. {$sumLiabilities}</td>
                <td>Resultado</td>
              </tr>
            {/if}
            {#each $equity as eq, pos}
              <tr>
                <td>{pos + 1}</td>
                <td>{eq.title}</td>
                <td>S/. {eq.price}</td>
                <td>Patrimonio</td>
              </tr>
            {/each}
            {#if $equity.length > 0}
              <tr style="font-weight: bold;" class="error">
                <td colspan="2">Total patrimonios</td>
                <td>S/. {$sumEquities}</td>
                <td>Resultado</td>
              </tr>
            {/if}
          </tbody>
        </table>
        <button
          class="responsive fill"
          style="margin-top: 2rem;"
          on:click={calcResult}
        >
          Calcular Total
        </button>
        <h5 class="max center-align">
          La ecuacion es: &nbsp; <span class="secondary" style="padding: 5px;"
            >{$isTrue ? "Correcta" : "Incorrecta"}</span
          >
        </h5>
      </article>
    </div>
  </div>
</div>

<EqModal
  type={$type}
  handleUpdate={handleUpdateArray}
  handleSums={() => {
    addAssets();
    addLiabilities();
    addEquities();
  }}
/>
