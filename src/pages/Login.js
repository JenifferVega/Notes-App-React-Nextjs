import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <div>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.welcomeText}>
          <h1>Login</h1>
        </div>
      </main>
    </div>
  );
}
