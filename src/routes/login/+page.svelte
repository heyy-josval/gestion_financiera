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

<h1>Login</h1>

<button on:click={login}>Login with Google</button>
