import { signOut } from "firebase/auth";
import { auth } from "./routes/firebase";
import { goto } from "$app/navigation";

const logout = async () => {
  await signOut(auth)
    .then(() => {
      $isLoggedIn = false;
      $user = {};
    })
    .catch((err) => {
      console.log(err);
    });
};

const defaultButtons = [
  {
    title: "Inicio",
    handle: function () {
      goto("/");
    },
  },
];

const loginButtons = [
  {
    title: "Perfil",
    handle: function () {
      goto("/profile");
    },
  },
  {
    title: "Ecuacion Patrimonial",
    handle: function () {
      goto("/equity_equation");
    },
  },
  {
    title: "Balance General",
    handle: function () {
      goto("/general_balance");
    },
  },
  {
    title: "Estado de Resultados",
    handle: function () {
      goto("/income_statement");
    },
  },
  {
    title: "Punto de Equilibrio",
    handle: function () {
      goto("/equity_equation");
    },
  },
  {
    title: "Cerrar Sesion",
    handle: logout,
  },
];

const notLoginButtons = [
  {
    title: "Iniciar sesion",
    handle: function () {
      goto("/login");
    },
  },
];

export { defaultButtons, loginButtons, notLoginButtons };
