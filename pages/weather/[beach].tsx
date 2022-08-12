import type { NextPage } from 'next';
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
import { useState } from 'react';
import Link from 'next/link';

const Beach: NextPage = () => {
  const [posX, setPosX] = useState(0);

  const router = useRouter();
  const { beach } = router.query;
  const pram = PARAMS[beach as string];
  return (
    <div
      onTouchStart={e => {
        setPosX(e.changedTouches[0].pageX);
      }}
      onTouchEnd={e => {
        if (e.changedTouches[0].pageX > posX + window.outerWidth / 5) {
          router.back();
        }
      }}
    >
      <ThemeProvider theme={theme}>
        <LayoutWrap>
          <LayoutLeft>
            <TmplFcst nx={pram.FORECAST.NX} ny={pram.FORECAST.NY} />
            <TmplWater beachCode={pram.BEACH} />
          </LayoutLeft>
          <LayoutRight>
            <TmplFcstTimely />
            <TmplFcstDaily />
            <TmplFcstOther areaNo={pram.AREANO} oceanCode={pram.OCEANCODE} areaIndex={pram.AREAINDEX} />
          </LayoutRight>
        </LayoutWrap>
      </ThemeProvider>
    </div>
  );
};

export default Beach;
