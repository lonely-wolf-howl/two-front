'use client';

import { BarList } from '@tremor/react';
import { COMPARE_CHART_DATA } from '../mockdatas';

export default function CompareChart() {
  return (
    <>
      <BarList data={COMPARE_CHART_DATA} className="mx-auto max-w-sm" />
    </>
  );
}
