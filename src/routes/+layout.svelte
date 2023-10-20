<script>
  import { onAuthStateChanged } from "firebase/auth";
  import { auth } from "./firebase";
  import { isLoggedIn, user } from "../stores";
  import { goto } from "$app/navigation";
  import {
    defaultButtons,
    loginButtons,
    notLoginButtons,
  } from "../sidebarOptions";
  import Sidebar from "../components/Sidebar/sidebar.svelte";
  import Topbar from "../components/Topbar/topbar.svelte";

  onAuthStateChanged(auth, (authUser) => {
    $user = authUser;
    $isLoggedIn = !!authUser;
  });
</script>

<Topbar
  handleProfile={() => {
    goto("profile");
  }}
  title="Gestion Financiera"
/>

<Sidebar title="Modulos" {defaultButtons} {loginButtons} {notLoginButtons} />

<main class="responsive">
  <slot />
</main>
