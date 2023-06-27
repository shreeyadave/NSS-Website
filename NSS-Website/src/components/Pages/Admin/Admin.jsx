import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import { Grid } from "@mui/material";
import { getDoc, collection, doc } from "@firebase/firestore";
import { auth, firestore } from "../../../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "@firebase/auth";
import { Button } from "@mui/material";
import DashBoard from "./DashBoard";
import SignIn from "./Register";
import { analytics } from "../../../firebase";
import { logEvent } from "@firebase/analytics";

export default function Admin() {
  const [logged, setLogged] = useState(false);
  const provider = new GoogleAuthProvider();
  const logginFields = ["name", "email", "profilePic", "loggedIn"];

  const grantAccess = async (loginEmail) => {
    const ref = doc(firestore, "executives", loginEmail);
    try {
      const snap = await getDoc(ref);
      console.log(snap.data(), snap.id);
      if (snap.data().access) {
        setLogged(true);
        console.log(logged);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        grantAccess(email);

        logEvent(analytics, "executive_login", { email: email });

        // localStorage.setItem("loggedIn", true);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setLogged(false);
        logginFields.map((field) => localStorage.removeItem(field));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <Grid container>
        {logged ? <DashBoard /> : <SignIn handleSignIn={handleSignIn} />}
      </Grid>
    </Layout>
  );
}
