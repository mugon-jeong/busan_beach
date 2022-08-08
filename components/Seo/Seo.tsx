import React from 'react';
import Head from 'next/head';

const Seo = () => {
  return (
    <Head>
      <title>부산해수욕장날씨</title>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="부산해수욕장날씨" />
      <meta
        property="og:description"
        content="부산광역시 해수욕장의 날씨,수온,파고 등 해수욕에 도움이 되는 정보를 제공한다."
      />
      <meta property="og:url" content="https://busanbeachweather.com" />
      <meta property="og:article:author" content="물반사람반" />
      <meta name="naver-site-verification" content="ee1214d056ffb202a72aed111273b21151cbc728" />
    </Head>
  );
};

export default Seo;
