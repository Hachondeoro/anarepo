import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
      </Head>

      <main className={styles.main}>
        <img
          src="/images/analogo.jpg"
          className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
        />
        <h1 className="title">
          Ana Nuñez NAATI Translations
        </h1>
        <p className={styles.description}>
          The best translations in the NT
        </p>
        <h2 className="title">
          <Link href="/posts/biography"><a>BIOGRAPHY</a></Link>
        </h2>
        <h2 className="title">
          <Link href="/posts/contact-details"><a>CONTACT DETAILS</a></Link>
        </h2>
        <h2 className="title">
          <Link href="/posts/biography"><a>CLIENT TESTIMONIALS</a></Link>
        </h2>
        <h2 className="title">
          <Link href="/posts/biography"><a>NAATI CERTIFICATION</a></Link>
        </h2>

      </main>
    </div>
  )
}



// A nice EN/ES bar title
