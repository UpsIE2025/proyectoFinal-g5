import Scrollbar from '@/components/scrollbar';
import SidebarItems from '@/components/sidebar/sidebar-items';
import { hoverSidebar, toggleMobileSidebar } from '@/redux/customizerSlice';
import { Box, Drawer, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import Logo from '../logo';

const Sidebar = ({ customizer }: { customizer: any }) => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const dispatch = useDispatch();
  const theme = useTheme();
  const toggleWidth =
      customizer.isCollapse && !customizer.isSidebarHover
        ? customizer.MiniSidebarWidth
        : customizer.SidebarWidth;

  const onHoverEnter = () => {
    if (customizer.isCollapse) {
      dispatch(hoverSidebar(true));
    }
  };

  const onHoverLeave = () => {
    dispatch(hoverSidebar(false));
  };

  if (lgUp) {
    return (
      <Box
        sx={{
          width: toggleWidth,
          flexShrink: 0,
          ...(customizer.isCollapse && {
            position: 'absolute',
          }),
        }}
      >
        <Drawer
          anchor="left"
          open
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          variant="permanent"
          PaperProps={{
            sx: {
              transition: theme.transitions.create('width', {
                duration: theme.transitions.duration.shortest,
              }),
              width: toggleWidth,
              boxSizing: 'border-box',
              overflowY: 'visible',
            },
          }}
        >
          <Box
            sx={{
              height: '100%',
            }}
          >
            <Box p={2} textAlign="center">
              {
                !customizer.isCollapse ?
                  <Logo type='sidebar' />
                  :
                  <Typography fontWeight="700" variant="subtitle1" mb={1}>
                    El Ensueño
                  </Typography>
              }
            </Box>
            <Scrollbar sx={{ height: 'calc(100vh - 5px)' }}>
              <SidebarItems />
            </Scrollbar>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={customizer.isMobileSidebar}
      onClose={() => dispatch(toggleMobileSidebar())}
      variant="temporary"
      PaperProps={{
        sx: {
          width: customizer.SidebarWidth,
          border: '0 !important',
          boxShadow: (them) => them.shadows[8],
        },
      }}
    >
      <SidebarItems />
    </Drawer>
  );
};

export default Sidebar;
