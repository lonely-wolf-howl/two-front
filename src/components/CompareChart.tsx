'use client';

import { BarList } from '@tremor/react';
import { COMPARE_CHART_DATA } from '../mockdatas';

const CompareChart = () => (
  <BarList data={COMPARE_CHART_DATA} className="mx-auto max-w-sm" />
);
export default CompareChart;
