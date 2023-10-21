<script>
  import { auth } from "../firebase";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { isLoggedIn, user } from "../../stores";
  import { goto } from "$app/navigation";

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((res) => {
        // console.log(res);
        $user = res.user;
        $isLoggedIn = true;
        goto("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };
</script>

<div
  style="width: 100%; display: flex; align-items: center; flex-direction: column; margin-top: 1rem;"
>
  <h1>Inicio de Sesion</h1>

  <article
    style="width: 40%; display: flex; flex-direction: column; gap: 1rem;"
  >
    <button on:click={login} class="extra responsive">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src="/google.png" />
      <span>Ingresar con Google</span>
    </button>
    <button disabled class="extra responsive">
      <span>Ingresar con Credenciales</span>
    </button>
  </article>
</div>
