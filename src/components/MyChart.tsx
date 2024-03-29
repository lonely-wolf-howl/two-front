'use client';

import { AreaChart } from '@tremor/react';
import { MY_CHART_DATA } from '../mockdatas';

export default function MyChart() {
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
}
