import React from 'react';
import Head from 'next/head';
import { GA_TRACKING_ID } from '$config';
import Script from 'next/script';

const Seo = () => {
  const [title, description] = [
    '부산해수욕장날씨',
    '부산광역시 해수욕장의 날씨,수온,파고 등 해수욕에 도움이 되는 정보를 제공한다.',
  ];
  return (
    <>
      <>
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
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
        <meta name="msapplication-TileColor" content="#61C2A1" />
        <meta name="theme-color" content="#61C2A1" />
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
