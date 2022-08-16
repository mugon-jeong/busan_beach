import { useRouter } from 'next/router';
import { RenderFallbackParams } from '$components/Boundary/ErrorBoundary';

function ErrorFallback({ error, reset }: RenderFallbackParams) {
  const router = useRouter();
  const refreshFetch = () => {
    if (reset !== undefined) {
      reset();
    }
  };

  return (
    <>
      <button data-testid="retry-button" onClick={refreshFetch}>
        재시도
      </button>
    </>
  );
}

export default ErrorFallback;
