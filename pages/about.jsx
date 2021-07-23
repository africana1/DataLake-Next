import Head from 'next/head';
import React from 'react';

const About = () => {
  return (
    <React.Fragment>
      <Head>
        <title>DataLake| About</title>
        <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=7' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='keywords' content='Data lake sellers' />
        <link rel='icon' href='/logo.png' type='image/x-icon' />
      </Head>

      <div>
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem soluta beatae veniam similique.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rem soluta beatae veniam similique.
        </p>
      </div>
    </React.Fragment>
  );
};

export default About;
