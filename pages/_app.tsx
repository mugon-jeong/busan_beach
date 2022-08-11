import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NEXT_PUBLIC_ENV } from '$config';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Seo from '$components/Seo/Seo';
import { Global } from '@emotion/react';
import { GlobalStyle } from '$styles/GlobalStyle';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';

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
