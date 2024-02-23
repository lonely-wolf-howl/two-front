'use client';

import { AreaChart } from '@tremor/react';
import { MY_CHART_DATA } from '../mockdatas';

const MyChart = () => {
  return (
    <AreaChart
      className="h-72"
      data={MY_CHART_DATA}
      index="date"
      categories={['weight', 'fat', 'muscle']}
      colors={['red', 'yellow', 'green']}
      yAxisWidth={30}
    />
  );
};
export default MyChart;
