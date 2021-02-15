/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import React from 'react';
import ThemeWrapper from '../src/Theme/ThemeWrapper';

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
