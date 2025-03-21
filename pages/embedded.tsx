// /pages/embedded.tsx

import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/styles.module.css'

export default function Embedded() {
  const router = useRouter()
  const { url } = router.query

  // If there's no `url` query param, just render some fallback
  if (!url || typeof url !== 'string') {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>No URL provided!</h1>
          <Link href="/" className={styles.card}>
            Return to Menu
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* Button/Link to go back to the main menu */}
        <Link href="/" className={styles.card}>
          Return to Menu
        </Link>

        {/* Embed the external site in an iframe */}
        <div className={styles.iframeContainer}>
          <iframe
            src={url}
            style={{
              width: '100%',
              height: '80vh',
              border: 'none'
            }}
            title="Embedded Site"
          />
        </div>
      </main>
    </div>
  )
}
