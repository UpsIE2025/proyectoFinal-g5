'use client';

import { AppState } from '@/redux/store';
import { login, logout } from '@/redux/userSlice';
import AuthProviderType from '@/types/auth-provider.type';
import { getParam, logoutUser } from '@/utils/local-storage';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AuthContext = createContext({ isLogged: false });

export function AuthProvider({ children }: AuthProviderType) {
  const [isLogged, setIsLogged] = useState(false);
  const user = useSelector((state: AppState) => state.user);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect((): void => {
    console.log(pathname);
    if (!['/login/', '/error/'].includes(pathname)) {
      const token: string | null = getParam('authToken');
      const expires: string | null = getParam('expires');
      const userStorage: string | null = getParam('user');

      console.log(userStorage);
      console.log(!token || !expires || (new Date(expires) < new Date()) || !userStorage);

      if (!token || !expires || (new Date(expires) < new Date()) || !userStorage) {
        dispatch(logout());
        logoutUser();
        setIsLogged(false);
        router.push('/');
      } else if (userStorage) {
        dispatch(login(JSON.parse(userStorage)));
        setIsLogged(true);
      }
    }
  }, [user.id, dispatch, router, pathname]);

  return (
    <AuthContext.Provider value={{ isLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
