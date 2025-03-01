export interface ThemeType {
    activeDir?: string | any;
    activeMode?: string;
    activeTheme?: string; // BLUE_THEME, GREEN_THEME, BLACK_THEME, PURPLE_THEME, ORANGE_THEME
    SidebarWidth?: number;
    MiniSidebarWidth?: number;
    TopbarHeight?: number;
    isCollapse?: boolean;
    isLayout?: string;
    isSidebarHover?: boolean;
    isMobileSidebar?: boolean;
    isHorizontal?: boolean;
    isLanguage?: string;
    isCardShadow?: boolean;
    borderRadius?: number | any;
  }
  
  export const initialTheme: ThemeType = {
    activeDir: 'ltr',
    activeMode: 'light',
    activeTheme: 'ORANGE_THEME',
    SidebarWidth: 270,
    MiniSidebarWidth: 87,
    TopbarHeight: 70,
    isLayout: 'full',
    isCollapse: false,
    isSidebarHover: false,
    isMobileSidebar: false,
    isHorizontal: false,
    isLanguage: 'es',
    isCardShadow: true,
    borderRadius: 7,
  };
  