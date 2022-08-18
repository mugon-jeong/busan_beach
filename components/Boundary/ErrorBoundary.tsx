import React, { ReactNode } from 'react';

// 공통에러처리 후 건드리면 안됨

export type RenderFallbackParams = {
  error: Error;
  reset?: (...args: unknown[]) => void;
};

export type ErrorBoundaryProps = {
  renderFallback: (params: RenderFallbackParams) => ReactNode;
  reset: (...args: unknown[]) => void;
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: any;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // 에러 캐치
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  resetErrorBoundary = () => {
    const { reset } = this.props;
    this.setState({ error: null, hasError: false });
    reset();
  };

  // 공통에러처리
  componentDidCatch(error: any, errorInfo: any) {
    // window.location.replace('/');
    // 예기치 못한 에러는 메인페이지로 이동
    // console.log('error', error);
    // if (isInstanceOfCommonApiError(error)) {
    //   console.log('error', error);
    //   window.location.replace('/');
    // }
  }

  render() {
    const { resetErrorBoundary } = this;
    const { hasError, error } = this.state;
    const { children, renderFallback } = this.props;

    if (hasError && error) {
      return renderFallback({
        error,
        reset: resetErrorBoundary,
      });
    }

    return children;
  }
}

export default ErrorBoundary;
