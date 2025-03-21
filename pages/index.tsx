// /pages/index.tsx

import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/styles.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <h1 className={styles.title}>Shelly IP Address Table</h1>

        <div className={styles.grid}>

          {/* Use a Next.js Link to pass the URL as a query param */}
          <Link
            href={`/embedded?url=${encodeURIComponent('http://10.129.250.138')}`}
            className={styles.card}
          >
            <h2>POTRAT Room &rarr;</h2>
            <p>Shelly Pro 3</p>
          </Link>

          <Link
            href={`/embedded?url=${encodeURIComponent('http://10.130.209.17/')}`}
            className={styles.card}
          >
            <h2>CCTV Trailer &rarr;</h2>
            <p>Shelly Pro 2</p>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Contact <a href="mailto:operationaltechnology@curtin.edu.au">Operational Technology</a> 
          for more Information
        </p>
      </footer>
    </div>
  )
}

export default Home
