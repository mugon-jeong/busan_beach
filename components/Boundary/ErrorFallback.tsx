import { useRouter } from 'next/router';
import { RenderFallbackParams } from '$components/Boundary/ErrorBoundary';
import Image from 'next/image';

function ErrorFallback({ error, reset }: RenderFallbackParams) {
  const router = useRouter();
  const refreshFetch = () => {
    if (reset !== undefined) {
      reset();
    }
  };

  return (
    <>
      <span data-testid="error-message">{error.message}</span>
      <button data-testid="retry-button" onClick={refreshFetch}>
        재시도
      </button>
    </>
  );
}

export default ErrorFallback;
