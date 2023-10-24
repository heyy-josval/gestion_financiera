<script>
  import { writable } from "svelte/store";

  const vars = writable({});
  const cti = writable(0);
  const ceo = writable(0);

  const handleCalc = () => {
    const { t, q, c, p, o } = $vars;
    $cti = c * p * (q / 2) + o * (t / q);
    $ceo = Math.sqrt((2 * o * t) / (p * c));
    console.log($vars);
    console.log($cti);
    console.log($ceo);
  };
</script>

<header style="display: grid; place-items: center;">
  <h1>Calculador de CTI y CEO</h1>
</header>

<div style="margin: 2rem; font-size: 1.5rem;">
  <ul>
    <li>T: Total de unidades requeridas este año</li>
    <li>Q: Total de unidades que se pediran en cada orden al proveedor</li>
    <li>C: Costo por mantener las unidades en almacenamiento expresado en %</li>
    <li>P: Precio de adquisicion (Costo de adquisicion)</li>
    <li>O: Costo incurrido por cada orden</li>
  </ul>
</div>

<!-- svelte-ignore a11y-label-has-associated-control -->
<div>
  <form on:submit={handleCalc}>
    <div
      style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 2rem;"
    >
      <div class="field label border">
        <input type="number" step="any" bind:value={$vars.t} required />
        <label>T</label>
      </div>
      <div class="field label border">
        <input type="number" step="any" bind:value={$vars.q} />
        <label>Q</label>
      </div>
      <div class="field label border">
        <input type="number" step="any" bind:value={$vars.c} required />
        <label>C</label>
      </div>
      <div class="field label border">
        <input type="number" step="any" bind:value={$vars.p} required />
        <label>P</label>
      </div>
      <div class="field label border">
        <input type="number" step="any" bind:value={$vars.o} required />
        <label>O</label>
      </div>
    </div>
    <div>
      <button type="submit" class="responsive">Calcular</button>
    </div>
    {#if $cti > 0 && $ceo > 0}
      <h5>
        CEO: {$ceo}
      </h5>
      <h5>
        CTI: {$cti}
      </h5>
    {/if}
  </form>
</div>
