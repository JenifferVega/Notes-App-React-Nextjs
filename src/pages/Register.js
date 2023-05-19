import { useEffect, useState } from "react";
import styles from "../styles/Register.module.css";
import { Inter } from "next/font/google";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import { app } from "../../firebaseConfig";
import googleLogo from "../assets/google.png";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  console.log("googleLogo", googleLogo);
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = () => {
    console.log("SignUp", SignUp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        sessionStorage.setItem("Item", response.user.accessToken);
        router.push("/Home");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then(() => {
        router.push("/Home");
        sessionStorage.setItem("Item", response.user.accessToken);
        console.log("router", router);
      })
      .catch((error) => {
        console.log("error", error);
      });

    useEffect(() => {
      let token = sessionStorage.getItem("Token");

      if (Token) {
        router.push("/Home");
      }
    });
  };

  return (
    <div>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.welcomeText}>
          <h1>Register</h1>
        </div>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            className={styles.input}
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            className={styles.input}
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button type="submit" className={styles.button} onClick={SignUp}>
            SignUp
          </button>
          <button
            type="submit"
            className={styles.button}
            onClick={signUpWithGoogle}
          >
            Sign Up with Google
          </button>
          <button>
            {/* <img src={googleLogo.src} alt="Google" className={styles.buttonGoogle}/>!>>*/}
          </button>
        </form>
      </main>
    </div>
  );
}
