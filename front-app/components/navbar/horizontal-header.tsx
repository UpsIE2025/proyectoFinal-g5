import Profile from '@/components/navbar/profile';
import { toggleMobileSidebar } from '@/redux/customizerSlice';
import { AppState } from '@/redux/store';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Theme,
  Toolbar,
  styled,
  useMediaQuery,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const HorizontalHeader = () => {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',

    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({ margin: '0 auto', width: '100%', color: `${theme.palette.text.secondary} !important` }));

  return (
    <AppBarStyled position="sticky" color="default" elevation={8}>
      <ToolbarStyled
        sx={{
          maxWidth: customizer.isLayout === 'boxed' ? 'lg' : '100%!important',
        }}
      >
        <Box sx={{ width: lgDown ? '45px' : 'auto', overflow: 'hidden' }}>
          LOGO
        </Box>
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}
        {lgDown ? (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => dispatch(toggleMobileSidebar())}
          >
            <FontAwesomeIcon icon={faBars} fontSize="1rem" />
          </IconButton>
        ) : (
          ''
        )}
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default HorizontalHeader;
