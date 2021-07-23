import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map((user) => {
    return {
      params: {id: user.id.toString()},
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};

const DataLakeDetails = ({user}) => {
  return (
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
        <h1>Name: {user.name}</h1>
        <p>
          <b>Phone: {user.phone}</b>
        </p>
        <p>
          <b> Email: {user.email} </b>
        </p>
        <address>
          <b>
            Address: {user.address.street} {user.address.suite} {user.address.city}
          </b>
        </address>{' '}
        <p>
          <b>Website: {user.website} </b>
        </p>
        <p>
          <b>Company: {user.company.name}</b>
        </p>
        <span>
          <b> Catch Phrase: {user.company.catchPhrase}</b>
        </span>
      </div>
      <Link href={`/datalake/`}>
        <a className={styles.btn}>Back</a>
      </Link>
    </React.Fragment>
  );
};

export default DataLakeDetails;
