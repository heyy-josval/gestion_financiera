<script>
  import Title from "../components/Svelte/title.svelte";
  import { goto } from "$app/navigation";
</script>

<div
  style="width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;"
>
  <Title title="Inicio" />
  <h1 class="max center-align" id="text-down">
    Gestion Financiera y de Procesos de Negocio
  </h1>
  <!-- svelte-ignore a11y-missing-attribute -->
  <img id="logo" style="height: 25rem;" src="/money.png" />
  <p style="font-size: 1.5rem; text-align: center;">
    Para empezar a usar el software por favor abre la barra lateral de
    navegacion
    <!-- svelte-ignore a11y-missing-attribute -->
    y dirigete a <a class="link">Iniciar Sesion</a> o simplemente dando click en
    este boton:
  </p>
  <button
    class="large"
    style="margin-top: 1rem;"
    on:click={() => {
      goto("/login");
    }}>Iniciar Sesion</button
  >
</div>

<style lang="css">
  #logo {
    display: inline-block;
    animation: 1s logo-intro;
  }

  #text-down {
    display: inline-block;
    animation: 1s text-down;
  }

  @keyframes logo-intro {
    0% {
      opacity: 0;
      transform: rotate(-90deg) scale(0.5) translateY(25%);
    }
    75% {
      opacity: 1;
      transform: rotate(0) scale(1.1) translateY(0);
    }
    100% {
      opacity: 1;
      transform: rotate(0) scale(1) translateY(0);
    }
  }

  @keyframes text-down {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }
    75% {
      opacity: 1;
      transform: translateY(20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
