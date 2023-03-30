import Link from 'next/link'
import { Mainlayout } from '../components/layouts/MainLayout'

import styles from '../styles/Home.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] });


export default function Home() {
  return (
    <Mainlayout>
      <h1
        style={{textAlign: "center", marginBottom: "20px", marginTop: "40px"}}
      >Contact</h1>

      <div 
        className={styles.centerGrid}
      >

        <Link
          href="/about"
          className={styles.card}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Ir al ABOUT <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Conoce sobre nosotros
          </p>
        </Link>

        <Link
          href="/"
          className={styles.card}
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Ir al HOME <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Ve al inicio
          </p>
        </Link>

      </div>
    </Mainlayout>
  )
}