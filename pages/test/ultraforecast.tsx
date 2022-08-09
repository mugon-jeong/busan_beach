import React from 'react';
import { UltraForecastProps, useGetUltraForecast } from '$queries/useGetUltraForecast';
import moment from 'moment';

const Ultraforecast = () => {
  /**
   * numOfRows 60으로 고정
   * 5시간 데이터
   * 12종류
   */
  const ultraForecastProp: UltraForecastProps = {
    pageNo: 1,
    numOfRows: 60,
    dataType: 'JSON',
    base_time: moment().subtract(1, 'hour').format('hhmm'),
    base_date: moment().format('YYYYMMDD'),
    beach_num: 304,
  };
  const {} = useGetUltraForecast(ultraForecastProp, {
    onSuccess: data => {
      console.log(data);
    },
  });
  return (
    <div>
      <div>초단기예보</div>
    </div>
  );
};

export default Ultraforecast;
