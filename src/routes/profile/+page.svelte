<script>
    import { isLoggedIn, user } from "../../stores";
</script>

<h1>Profile</h1>

{#if $isLoggedIn}
    <img src={$user.photoURL} alt={$user.displayName} />
    <h3>{$user.displayName}</h3>
    <p>{$user.email}</p>
{/if}
