'use client';

import { AppState } from '@/redux/store';
import components from '@/theme/components';
import { DarkThemeColors } from '@/theme/dark-theme-colors';
import { baseDarkTheme, baselightTheme } from '@/theme/default-colors';
import { LightThemeColors } from '@/theme/light-theme-colors';
import { darkshadows, shadows } from '@/theme/shadows';
import typography from '@/theme/typography';
import * as locales from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import _ from 'lodash';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const ThemeSettings = () => {
  const activDir = useSelector((state: AppState) => state.customizer.activeDir);
  const activeTheme = useSelector((state: AppState) => state.customizer.activeTheme);
  const customizer = useSelector((state: AppState) => state.customizer);

  useEffect(() => {
    document.dir = activDir;
  }, [activDir]);

  const config = { direction: activDir, theme: activeTheme };
  const themeOptions = LightThemeColors.find((theme) => theme.name === config.theme);
  const darkthemeOptions = DarkThemeColors.find((theme) => theme.name === config.theme);
  const defaultTheme = customizer.activeMode === 'dark' ? baseDarkTheme : baselightTheme;
  const defaultShadow = customizer.activeMode === 'dark' ? darkshadows : shadows;
  const themeSelect = customizer.activeMode === 'dark' ? darkthemeOptions : themeOptions;
  const baseMode = {
    palette: {
      mode: customizer.activeMode,
    },
    shape: {
      borderRadius: customizer.borderRadius,
    },
    shadows: defaultShadow,
    typography,
    components: {
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
    },
  };

  const theme = createTheme(
    _.merge({}, baseMode, defaultTheme, locales, themeSelect, {
      direction: config.direction,
    }),
  );
  theme.components = components(theme);

  return theme;
};
