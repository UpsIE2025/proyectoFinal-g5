import createCache from '@emotion/cache';
import { EmotionCache } from '@emotion/react';

const isBrowser = typeof document !== 'undefined';

export default function createEmotionCache(): EmotionCache {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]',
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'mui-style', insertionPoint });
}
