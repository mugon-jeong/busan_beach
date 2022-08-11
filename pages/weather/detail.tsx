import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import theme from '$styles/theme';
import TmplFcst from '$components/Templates/TmplFcst';
import TmplWater from '$components/Templates/TmplWater';
import TmplFcstTimely from '$components/Templates/TmplFcstTimely';
import TmplFcstDaily from '$components/Templates/TmplFcstDaily';
import TmplFcstOther from '$components/Templates/TmplFcstOther';
import LayoutWrap from '$components/Layouts/LayoutWrap';
import LayoutLeft from '$components/Layouts/LayoutLeft';
import LayoutRight from '$components/Layouts/LayoutRight';

// function Template(beach: string) {
//   return UseGetUltraForecast(304);
// }

const Detail: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrap>
        <LayoutLeft>
          <TmplFcst />
          <TmplWater />
        </LayoutLeft>
        <LayoutRight>
          <TmplFcstTimely />
          <TmplFcstDaily />
          <TmplFcstOther />
        </LayoutRight>
      </LayoutWrap>
    </ThemeProvider>
  );
};

export default Detail;
