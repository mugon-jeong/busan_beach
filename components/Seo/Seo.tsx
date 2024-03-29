import React from 'react';
import Head from 'next/head';
import { GA_TRACKING_ID, GOOGLE_AD_SENSE_ID } from '$config';
import Script from 'next/script';

const schemaData = {
  '@context': 'http://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      item: {
        '@type': 'Organization',
        name: '해운대',
        image: 'https://busanbeachweather.com/asset/button_haewoondae.png',
        url: 'https://busanbeachweather.com/weather/HEAWOONDAE',
      },
      position: '1',
    },
    {
      '@type': 'ListItem',
      item: {
        '@type': 'Organization',
        name: '광안리',
        image: 'https://busanbeachweather.com/asset/img/button_gwangalli.png',
        url: 'https://busanbeachweather.com/weather/GUANGANLEE',
      },
      position: '2',
    },
    {
      '@type': 'ListItem',
      item: {
        '@type': 'Organization',
        name: '다대포',
        image: 'https://busanbeachweather.com/asset/img/button_dadaepo.png',
        url: 'https://busanbeachweather.com/weather/DADAEPO',
      },
      position: '3',
    },
    {
      '@type': 'ListItem',
      item: {
        '@type': 'Organization',
        name: '송정',
        image: 'https://busanbeachweather.com/asset/img/button_songjung.png',
        url: 'https://busanbeachweather.com/weather/SONGJUNG',
      },
      position: '4',
    },
    {
      '@type': 'ListItem',
      item: {
        '@type': 'Organization',
        name: '임랑',
        image: 'https://busanbeachweather.com/asset/img/button_imlang.png',
        url: 'https://busanbeachweather.com/weather/IMLANG',
      },
      position: '5',
    },
    {
      '@type': 'ListItem',
      item: {
        '@type': 'Organization',
        name: '일광',
        image: 'https://busanbeachweather.com/asset/img/button_ilguang.png',
        url: 'https://busanbeachweather.com/weather/ILGUANG',
      },
      position: '6',
    },
    {
      '@type': 'ListItem',
      item: {
        '@type': 'Organization',
        name: '송도',
        image: 'https://busanbeachweather.com/asset/img/button_songdo.png',
        url: 'https://busanbeachweather.com/weather/SONGDO',
      },
      position: '7',
    },
  ],
};

const Seo = () => {
  const [title, description] = [
    '부산해수욕장날씨',
    '부산 7대 해수욕장 (해운대,송정,광안리,다대포,송도,일광,임랑)의 실시간 날씨,수온,파고와 풍향,풍속,미세먼지,자외선지수 그리고 일간,주간예보를 제공하여 해수욕장 방문 계획 수립에 도움을 준다. ' +
      '또한 튜브,구명조끼,파라솔,비치베드 등의 피서용품, 간이샤워실,탈의실,주차장의 유무를 제공하며 근처 관광명소 및 맛집을 추천해준다.',
  ];
  return (
    <>
      <>
        <Script
          id={'gtag'}
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Script
          id={'ld+json'}
          strategy={'beforeInteractive'}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="Adsense"
          data-ad-client={`${GOOGLE_AD_SENSE_ID}`}
          async={true}
          strategy={'beforeInteractive'}
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></Script>
      </>
      <Head>
        <title>부산해수욕장날씨</title>
        <meta name={'type'} property="og:type" content="website" />
        <meta name={'title'} property="og:title" content={title} />
        <meta name={'description'} property="og:description" content={description} />
        <meta name={'url'} property="og:url" content="https://busanbeachweather.com" />
        <meta name={'author'} property="og:article:author" content="물반사람반" />
        <meta name="naver-site-verification" content="ee1214d056ffb202a72aed111273b21151cbc728" />
        <link rel="canonical" href="https://busanbeachweather.com/" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content={title} />
        <meta name="apple-mobile-web-app-title" content={title} />
        <link rel="apple-touch-icon" href="/pwa/icon_x192.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="default icon" href="https://busanbeachweather.com/favicon.ico" />
        <link
          href="/splashscreens/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphoneplus_splash.png"
          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexr_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/iphonexsmax_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipad_splash.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro1_splash.png"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro3_splash.png"
          media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
        <link
          href="/splashscreens/ipadpro2_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
          rel="apple-touch-startup-image"
        />
      </Head>
    </>
  );
};

export default Seo;
