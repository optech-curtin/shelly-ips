import type { NextPage } from 'next'
import styles from '../styles/styles.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1 className={styles.title}>
          Shelly Ip Address Table
        </h1>
        <div className={styles.grid}>
          <a href="https://10.129.250.138" className={styles.card}>
            <h2>POTRAT Room &rarr;</h2>
            <p>Shelly Pro 3</p>
          </a>

          <a href="https://10.129.250.84" className={styles.card}>
            <h2>CCTV Trailer &rarr;</h2>
            <p>Shelly Pro 2</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          <p>Contact <a href="mailto:operationaltechnology@curtin.edu.au">Operational Technology</a> for more Information</p>
      </footer>
    </div>
  )
}

export default Home