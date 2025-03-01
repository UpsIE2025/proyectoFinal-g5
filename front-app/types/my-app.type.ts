import { EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import React from 'react';

export default interface MyAppType extends AppProps {
  emotionCache?: EmotionCache;
  children: React.ReactNode;
}
