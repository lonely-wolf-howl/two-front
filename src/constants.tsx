import { Icon } from '@iconify/react';

export const NAV_ITEMS = [
  {
    title: '체성분',
    path: '/',
    icon: <Icon icon="mdi:chart-line" width="24" height="24" />,
  },
  {
    title: '도전',
    path: '/challenges',
    icon: <Icon icon="lucide:goal" width="24" height="24" />,
  },
  {
    title: '오운완',
    path: '/workouts',
    icon: (
      <Icon icon="material-symbols:exercise-outline" width="24" height="24" />
    ),
  },
];

export const getPathname = (path) => {
  let name = '';
  if (path === '/') {
    name = '체성분';
  } else if (path === '/challenges') {
    name = '도전';
  } else if (path === '/workouts') {
    name = '오운완';
  }
  return name;
};
