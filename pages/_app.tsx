import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NEXT_PUBLIC_ENV } from '$config';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Seo from '$components/Seo/Seo';
import { Global } from '@emotion/react';
import { GlobalStyle } from '$styles/GlobalStyle';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { gtagPageview } from '$utils/googleAnalytics';

declare let gtag: Function;

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        suspense: true,
        useErrorBoundary: true,
      },
    },
  });
  const router = useRouter();
  useEffect(() => {
    if (NEXT_PUBLIC_ENV === 'production') {
      const handleRouteChange = (url: string) => {
        gtagPageview(url);
      };
      router.events.on('routeChangeComplete', handleRouteChange);
      router.events.on('hashChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
        router.events.off('hashChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyle} />
      <Seo />
      <AsyncBoundaryWithQuery>
        <Component {...pageProps} />
      </AsyncBoundaryWithQuery>
      {NEXT_PUBLIC_ENV === 'local' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
    </QueryClientProvider>
  );
}

export default MyApp;
