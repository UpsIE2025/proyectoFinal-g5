import { ReactNode } from 'react';

export default interface SuspenseSkeletonType {
  children?: ReactNode | undefined;
  skeleton?: ReactNode;
  loading: boolean;
}
