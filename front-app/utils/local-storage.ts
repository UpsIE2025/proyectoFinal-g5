export const getParam = (param: string): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(param);
  }

  return null;
};

export const setParam = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const deleteParam = (key: string): void => {
  localStorage.removeItem(key);
};

export const logoutUser = (): void => {
  if (typeof window !== 'undefined') {
    deleteParam('user');
    deleteParam('token');
    deleteParam('expires');
  }
};
