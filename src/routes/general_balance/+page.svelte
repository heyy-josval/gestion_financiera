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
        : itemType === "assetsNC"
        ? assetsNC
        : itemType === "liabilities"
        ? liabilities
        : itemType === "liabilitiesNC"
        ? liabilitiesNC
        : itemType === "equity"
        ? equity
        : itemType === "incomes"
        ? incomes
        : itemType === "expenses"
        ? expenses
        : costs;
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
      title="Activos Corrientes"
      items={$assets}
      handleDelete={(pos) => handleDelete(assets, pos)}
      handleModal={() => {
        handleModal("assets");
      }}
    />
    <EqCard
      title="Activos No Corrientes"
      items={$assetsNC}
      handleDelete={(pos) => handleDelete(assetsNC, pos)}
      handleModal={() => {
        handleModal("assetsNC");
      }}
    />
    <EqCard
      title="Pasivos Corrientes"
      items={$liabilities}
      handleDelete={(pos) => handleDelete(liabilities, pos)}
      handleModal={() => handleModal("liabilities")}
    />
    <EqCard
      title="Pasivos No Corrientes"
      items={$liabilitiesNC}
      handleDelete={(pos) => handleDelete(liabilitiesNC, pos)}
      handleModal={() => handleModal("liabilitiesNC")}
    />
    <EqCard
      title="Patrimonios"
      items={$equity}
      handleDelete={(pos) => handleDelete(equity, pos)}
      handleModal={() => handleModal("equity")}
    />
    <EqCard
      title="Ingresos"
      items={$incomes}
      handleDelete={(pos) => handleDelete(incomes, pos)}
      handleModal={() => handleModal("incomes")}
    />
    <EqCard
      title="Gastos"
      items={$expenses}
      handleDelete={(pos) => handleDelete(expenses, pos)}
      handleModal={() => handleModal("expenses")}
    />
    <EqCard
      title="Costos"
      items={$costs}
      handleDelete={(pos) => handleDelete(costs, pos)}
      handleModal={() => handleModal("costs")}
    />
  </div>
  <div style="width: 50%;">
    <div>
      <article>
        <h3 class="max center-align">Resultados</h3>
        <div style="font-size: 1.35rem;">
          {#if $assets.length > 0 || $assetsNC.length > 0}
            <p>Suma de activos: S/. {$sumAssets}</p>
          {/if}
          {#if $liabilities.length > 0 || $liabilitiesNC.length > 0}
            <p>Suma de pasivos: S/. {$sumLiabilities}</p>
          {/if}
          {#if $equity.length > 0 || $incomes.length > 0 || $expenses.length > 0 || $costs.length > 0}
            <p>Suma de patrimonios: S/. {$sumEquities}</p>
          {/if}
        </div>
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
