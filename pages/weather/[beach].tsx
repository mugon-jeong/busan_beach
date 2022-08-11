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
import { useRouter } from 'next/router';
import { PARAMS } from '$constants/params';

// function Template(beach: string) {
//   return UseGetUltraForecast(304);
// }

const Beach: NextPage = () => {
  const router = useRouter();
  const { beach } = router.query;
  const pram = PARAMS[beach as string];
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrap>
        <LayoutLeft>
          <TmplFcst nx={pram.FORECAST.NX} ny={pram.FORECAST.NY} />
          <TmplWater beachCode={pram.BEACH} />
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

export default Beach;
