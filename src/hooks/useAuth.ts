import { useEffect, useState } from 'react';
import { parseCookies, destroyCookie, setCookie } from 'nookies';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const cookies = parseCookies();
    const accessToken = cookies.accessToken;
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    destroyCookie(null, 'accessToken');
    setIsLoggedIn(false);
  };

  const refreshAccessToken = async () => {
    try {
      const cookies = parseCookies();
      const refreshToken = cookies.refreshToken;
      if (!refreshToken) return null;

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
        setCookie(null, 'accessToken', refreshedAccessToken, { path: '/' });
        setIsLoggedIn(true);
      } else {
        console.error('refresh token request failed.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const cookies = parseCookies();
    const accessToken = cookies.accessToken;
    if (!accessToken) {
      refreshAccessToken();
    }
  }, []);

  const getAccessToken = () => {
    const cookies = parseCookies();
    return cookies.accessToken;
  };

  return { isLoggedIn, logout, getAccessToken };
}
