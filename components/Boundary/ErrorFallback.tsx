import { useRouter } from 'next/router';
import { RenderFallbackParams } from '$components/Boundary/ErrorBoundary';
import styled from '@emotion/styled';
import ErrorRefresh from '$components/Molecules/ErrorRefresh';

const WrapErrorRefresh = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ErrorFallback({ error, reset }: RenderFallbackParams) {
  const router = useRouter();
  const refreshFetch = () => {
    if (reset !== undefined) {
      reset();
    }
  };

  return (
    <WrapErrorRefresh>
      <div onClick={refreshFetch}>
        <ErrorRefresh />
      </div>
    </WrapErrorRefresh>
  );
}

export default ErrorFallback;
