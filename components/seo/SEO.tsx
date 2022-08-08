import React from 'react';
import Head from 'next/head';

const Seo = () => {
  return (
    <Head>
      <title>BusanBeachWeather</title>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="BusanBeachWeather" />
      <meta property="og:description" content="페이지 설명" />
      <meta property="og:url" content="https://busanbeachweather.com" />
      <meta property="og:article:author" content="물반사람반" />
      <meta name="naver-site-verification" content="ee1214d056ffb202a72aed111273b21151cbc728" />
    </Head>
  );
};

export default Seo;
