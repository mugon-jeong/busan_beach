import React from 'react';
import Head from 'next/head';
import { NAVER_ANALYTICS_KEY } from '$config';
import Script from 'next/script';

const Seo = () => {
  const [title, description] = [
    '부산해수욕장날씨',
    '부산광역시 해수욕장의 날씨,수온,파고 등 해수욕에 도움이 되는 정보를 제공한다.',
  ];
  return (
    <Head>
      <title>부산해수욕장날씨</title>
      <meta name={'type'} property="og:type" content="website" />
      <meta name={'title'} property="og:title" content={title} />
      <meta name={'description'} property="og:description" content={description} />
      <meta name={'url'} property="og:url" content="https://busanbeachweather.com" />
      <meta name={'author'} property="og:article:author" content="물반사람반" />
      <meta name="naver-site-verification" content="ee1214d056ffb202a72aed111273b21151cbc728" />
      <link rel="canonical" href="https://busanbeachweather.com/" />
      <Script type="text/javascript" src="//wcs.naver.net/wcslog.js" />
      <Script
        id={'naver_script'}
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "${NAVER_ANALYTICS_KEY}";
            if(window.wcs) {
            wcs_do();
                `,
        }}
      />
    </Head>
  );
};

export default Seo;
