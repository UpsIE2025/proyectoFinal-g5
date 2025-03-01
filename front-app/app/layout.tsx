'use client';

import { AuthProvider } from "@/providers/auth.provider";
import store from "@/redux/store";
import { ThemeSettings } from "@/theme/theme";
import MyAppType from "@/types/my-app.type";
import createEmotionCache from "@/utils/create-emotion-cache";
import { CacheProvider } from '@emotion/react';
import { config } from "@fortawesome/fontawesome-svg-core";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

config.autoAddCss = true;

const MyApp = ({ emotionCache = createEmotionCache(), children }: MyAppType) => {
  const theme = ThemeSettings();

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          {children}
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default function RootLayout(props: MyAppType) {
  return (
    <html lang="en">
      <head>
        <title>El Ensueño</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-big-calendar@1.13.0/lib/css/react-big-calendar.min.css"></link>
      </head>
      <body>
        <Provider store={store}>
          <MyApp {...props} />
        </Provider>
      </body>
    </html>
  );
}
