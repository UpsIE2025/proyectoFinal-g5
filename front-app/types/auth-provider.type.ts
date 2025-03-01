import { ReactNode } from 'react';

export default interface AuthProviderType {
  children: ReactNode;
  isPublic?: boolean;
}
