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
      <div>
        <span data-testid="error-message">{error.message}</span>
        <div data-testid="retry-button" onClick={refreshFetch}>
          <Image src="/asset/img/309.svg" alt="에러이미지" width={40} height={40} />
          재시도 해주세요!
        </div>
      </div>
    </>
  );
}

export default ErrorFallback;
