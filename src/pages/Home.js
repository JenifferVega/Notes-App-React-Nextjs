import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { app , database} from "../../firebaseConfig";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [ tittle, SetTittle] = useState('');
  const [ description, setDescription] = useState('');
  const databaseRef = collection(database, 'CRUD Data')

  let router = useRouter();
  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (!token) {
      router.push("/Register");
    }
  }, []);

  const addData = ()=>{
    addDoc(databaseRef,{
      tittle: tittle,
      description: description
    })
    .then(()=>{
      alert('Data sent')
      SetTittle('')
      setDescription('')
    })
    .catch((error) => {
      console.log("error", error);
    })
  }

  return (
    <>
      <Head>
        <title>App Notes</title>
        <meta name="description" content="Were going to create a "></meta>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.welcomeText}>
          <h1>Welcome to your App-Notes</h1>
          <input
          className={styles.input}
          placeholder="Tittle"
          typeof="text"
          value={tittle}
          onChange={event => SetTittle(event.target.value)}
          ></input>
          <input
          className={styles.input}
          placeholder="Description"
          typeof="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
          ></input>
          <button
          className={styles.button}
          onClick={addData}
          >Add</button>
        </div>
      </main>
    </>
  );
}
