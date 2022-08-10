import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    deviceSizes: {
      mobileSE: string;
      mobile13P: string;
      tablet: string;
      pc: string;
    };
    color: {
      black: string;
      deepBlue: string;
      blue: string;
      deepCoral: string;
      coral: string;
      sand: string;
      white: string;
    };
  }
}
