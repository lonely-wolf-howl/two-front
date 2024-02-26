import { useEffect, useState } from 'react';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    document.cookie =
      'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
  };

  const getCookie = (name) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const refreshToken = getCookie('refreshToken');
        const response = await fetch('http://localhost:4000/api/auth/refresh', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${refreshToken}`,
          },
        });
        if (response.ok) {
          const { refreshedAccessToken } = await response.json();
          document.cookie = `accessToken=${refreshedAccessToken}; path=/;`;
          setIsLoggedIn(true);
        } else {
          console.error('refresh token request failed');
        }
      } catch (error) {
        console.error('error refreshing token:', error);
      }
    };

    const accessToken = getCookie('accessToken');
    if (!accessToken && refreshToken) {
      refreshAccessToken();
    }
  }, []);

  return { isLoggedIn, logout, getCookie };
}
