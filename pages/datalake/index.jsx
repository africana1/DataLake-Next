import Head from 'next/head';
import React from 'react';
import styles from '../../styles/Datalake.module.css';

import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

//* data is attached to the props, so it can be de-structured...
const index = ({data}) => {
  return (
    //* head tags to include metadata & improve SEO
    <React.Fragment>
      <Head>
        <title>DataLake| Kext</title>
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=7' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='keywords' content='Data lake sellers' />
        <link rel='icon' href='/logo.png' type='image/x-icon' />
      </Head>
      <div>
        <h1>DataLake</h1>
        {data.map((user) => (
          <Link href={`/datalake/${user.id}`} key={user.id}>
            <a className={styles.single}>
              <h3>Name: {user.name}</h3>
            </a>
          </Link>
        )) || 'Not Found'}
      </div>
    </React.Fragment>
  );
};

export default index;
