export const getPathname = (path) => {
  let name = '';
  if (path === '/dashboard') {
    name = '체성분';
  } else if (path === '/challenges') {
    name = '도전';
  } else if (path.startsWith('/chats')) {
    name = '채팅';
  } else if (path === '/me') {
    name = '내 정보';
  } else if (path === '/notifications') {
    name = '알림';
  }
  return name;
};
