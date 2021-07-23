import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>DataLake| Home</title>
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=7' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='keywords' content='Data lake sellers' />
        <link rel='icon' href='/logo.png' type='image/x-icon' />
      </Head>

      <div>
        <h1 className={styles.title}>Data Lake</h1>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem soluta beatae veniam similique
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem soluta beatae veniam similique
        </p>
        <Link href='/kext'>
          <a className={styles.btn}>See Kext</a>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Home;
