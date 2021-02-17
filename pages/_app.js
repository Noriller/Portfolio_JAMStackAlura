/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Head from 'next/head';
import React from 'react';
import ThemeWrapper from '../src/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeWrapper>
      <Head>
        <title>My Portfolio</title>
        <meta property="og:title" content="The Awesome Portfolio of Bruno Noriller" />
        <meta property="og:url" content="http://noriller.github.io/" />
        <meta
          property="og:description"
          content="Chekout everything I have in this URL. Also, this image was photoshopped by me... indeed a programmer of many talents."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bruno-noriller-jamstack-alura.vercel.app/BrunoHope.jpg" />
      </Head>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}
