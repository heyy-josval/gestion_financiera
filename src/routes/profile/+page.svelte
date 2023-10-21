<script>
  import { isLoggedIn, user } from "../../stores";
</script>

<div
  style="display: flex; flex-direction: column; align-items: center; gap: 1rem; margin-top: 2rem;"
>
  <h1>Perfil</h1>

  {#if $isLoggedIn}
    <div style="border-radius: 50%;">
      <img
        style="height: 10rem;"
        src={$user.photoURL}
        alt={$user.displayName}
      />
    </div>
    <h3>{$user.displayName}</h3>
    <p>{$user.email}</p>
  {/if}
</div>
