import type { NextPage } from 'next';
import { ThemeProvider } from '@emotion/react';
import theme from '$styles/theme';
import TmplFcst from '$components/Templates/TmplFcst';
import TmplWater from '$components/Templates/TmplWater';
import TmplFcstTimely from '$components/Templates/TmplFcstTimely';
import TmplFcstDaily from '$components/Templates/TmplFcstDaily';
import TmplFcstOther from '$components/Templates/TmplFcstOther';
import TmplFac from '$components/Templates/TmplFac';
import LayoutWrap from '$components/Layouts/LayoutWrap';
import LayoutLeft from '$components/Layouts/LayoutLeft';
import LayoutRight from '$components/Layouts/LayoutRight';
import { useRouter } from 'next/router';
import { PARAMS } from '$constants/params';
import { FAC } from '$constants/fac';
import { useEffect, useState } from 'react';

const Beach: NextPage = () => {
  const router = useRouter();
  const [param, setParam] = useState(PARAMS['HEAWOONDAE']);

  const [fac, setFac] = useState(FAC['HEAWOONDAE']);

  useEffect(() => {
    const { beach } = router.query;
    const getParam = PARAMS[beach as string];
    setParam(getParam);
    const getFac = FAC[beach as string];
    setFac(getFac);
  }, [router]);

  return (
    <ThemeProvider theme={theme}>
      <LayoutWrap>
        <LayoutLeft>
          <TmplFcst beach={param.KO} nx={param.FORECAST.NX} ny={param.FORECAST.NY} />
          <TmplWater beachCode={param.BEACH} />
        </LayoutLeft>
        <LayoutRight>
          <TmplFcstTimely nx={param.FORECAST.NX} ny={param.FORECAST.NY} />
          <TmplFcstDaily regIdM={param.REGIDMEDIUM} regIdR={param.REGIDRAIN} />
          <TmplFcstOther areaNo={param.AREANO} oceanCode={param.OCEANCODE} areaIndex={param.AREAINDEX} />
          <TmplFac
            swim={fac.SWIM}
            parking={fac.PARKING}
            booth={fac.BOOTH}
            shower={fac.SHOWER}
            lifejacket={fac.LIFEJACKET}
            parasole={fac.PARASOLE}
            sunbed={fac.SUNBED}
            tube={fac.TUBE}
          />
        </LayoutRight>
      </LayoutWrap>
    </ThemeProvider>
  );
};

export default Beach;
