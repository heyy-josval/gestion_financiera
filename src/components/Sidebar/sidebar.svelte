<script>
  import { isLoggedIn } from "../../stores";
  import Button from "./sidebarButton.svelte";

  // VARIABLES ESCALABLES
  export let title;
  export let defaultButtons;
  export let loginButtons;
  export let notLoginButtons;
</script>

<dialog class="left" id="sidebar">
  <div style="display: flex; justify-content: center; width: 100%;">
    <h5>{title}</h5>
  </div>
  <!-- <div>Some text here</div> -->
  <nav style="display: flex; flex-direction: column;">
    {#each defaultButtons as button}
      <Button title={button.title} handle={button.handle} />
    {/each}

    {#if $isLoggedIn}
      {#each loginButtons as button}
        <Button title={button.title} handle={button.handle} />
      {/each}
    {:else}
      {#each notLoginButtons as button}
        <Button title={button.title} handle={button.handle} />
      {/each}
    {/if}
  </nav>
</dialog>
