import { useState } from "react";
import styles from "../styles/Register.module.css";
import { Inter } from "next/font/google";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { app } from "../../firebaseConfig";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  const auth = getAuth(app);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = () => {
    console.log("SignUp", SignUp);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/Home");
        console.log("router", router);
      })
      .catch((error) => {
        console.log("error", error);
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
          <h2>or</h2>
          <button type="submit" className={styles.button}>
            SignIn
          </button>
        </form>
      </main>
    </div>
  );
}
