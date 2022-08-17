import React from 'react';
import AtomDate from '../Atoms/AtomDate';
import AtomPlace from '../Atoms/AtomPlace';
import Weather from '../Molecules/Weather';
import { convertCurrentDay, getCurrentDate, getCurrentMonth } from '$utils/date';
import AsyncBoundaryWithQuery from '$components/Boundary/AsyncBoundaryWithQuery';
import SkeletonWeather from '$components/Molecules/SkeletonWeather';
import ErrorMesage from '$components/Molecules/ErrorMessage';

const OFcstNow = ({ beach, beachCode }: { beach: string; beachCode: number }) => {
  const [month, date, day] = [getCurrentMonth(), getCurrentDate(), convertCurrentDay()];
  return (
    <>
      <AtomDate today={`${month}월 ${date}일 ${day}요일`} />
      <AtomPlace place={beach} />
      <AsyncBoundaryWithQuery
        pendingFallback={<SkeletonWeather />}
        rejectedFallback={() => <ErrorMesage IsLarge={false} />}
      >
        <Weather beachCode={beachCode} />
      </AsyncBoundaryWithQuery>
    </>
  );
};

export default OFcstNow;
