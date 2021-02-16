/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Head from 'next/head';
import React from 'react';
import ThemeWrapper from '../src/Theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeWrapper>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}
