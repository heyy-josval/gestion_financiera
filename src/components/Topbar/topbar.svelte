<script>
  import { goto } from "$app/navigation";

  export let title;
  export let handleProfile;
</script>

<header>
  <nav>
    <button data-ui="#sidebar" class="circle transparent">
      <i>menu</i>
    </button>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <h5
      class="max center-align"
      style="cursor: pointer;"
      on:click={() => {
        goto("/");
      }}
    >
      {title}
    </h5>
    <button class="circle transparent" on:click={handleProfile}>
      <i class="responsive extra"> account_circle </i>
    </button>
  </nav>
</header>
