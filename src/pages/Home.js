import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {app} from '../../firebaseConfig'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>App Notes</title>
      <meta name='description' content='Were going to create a '></meta>
    </Head>
    <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.welcomeText}>
          <h1>Bienvenido a mi app de notas</h1>
        </div>
      </main>
    </>
  )
}
