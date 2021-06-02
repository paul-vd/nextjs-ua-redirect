import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import userAgents from 'top-user-agents';

// for this example i'm using all user-agents, but you would normally target specific user-agents
// const userAgents = require('ua-list')('ie');

export const getServerSideProps = async (context) => {
  const userAgent = context.req.headers['user-agent'];
  return {
    props: {
      matchesRedirectAgent: userAgents.includes(userAgent),
      userAgent,
    },
  };
};

export default function Home({ matchesRedirectAgent, userAgent }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          The current User-Agent: <br />
          <code className={styles.code}>{userAgent}</code>
        </p>
        {matchesRedirectAgent && (
          <p className={styles.description} style={{ color: 'red' }}>
            Your browser should have redirected to{' '}
            <a href="/old-browser.html">/old-browser.html</a>
          </p>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
