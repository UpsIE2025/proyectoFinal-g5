import { ThemeType, initialTheme } from '@/types/theme.type';
import { createSlice } from '@reduxjs/toolkit';

export const CustomizerSlice = createSlice({
  name: 'customizer',
  initialState: initialTheme,
  reducers: {
    setTheme: (state: ThemeType, action) => {
      state.activeTheme = action.payload;
    },
    setDarkMode: (state: ThemeType, action) => {
      state.activeMode = action.payload;
    },

    setDir: (state: ThemeType, action) => {
      state.activeDir = action.payload;
    },
    setLanguage: (state: ThemeType, action) => {
      state.isLanguage = action.payload;
    },
    setCardShadow: (state: ThemeType, action) => {
      state.isCardShadow = action.payload;
    },
    toggleSidebar: (state) => {
      state.isCollapse = !state.isCollapse;
    },
    hoverSidebar: (state: ThemeType, action) => {
      state.isSidebarHover = action.payload;
    },
    toggleMobileSidebar: (state) => {
      state.isMobileSidebar = !state.isMobileSidebar;
    },
    toggleLayout: (state: ThemeType, action) => {
      state.isLayout = action.payload;
    },
    toggleHorizontal: (state: ThemeType, action) => {
      state.isHorizontal = action.payload;
    },
    setBorderRadius: (state: ThemeType, action) => {
      state.borderRadius = action.payload;
    },
  },
});

export const {
  setTheme,
  setDarkMode,
  setDir,
  toggleSidebar,
  hoverSidebar,
  toggleMobileSidebar,
  toggleLayout,
  setBorderRadius,
  toggleHorizontal,
  setLanguage,
  setCardShadow,
} = CustomizerSlice.actions;

export default CustomizerSlice.reducer;
