'use client';

import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  styled,
  useMediaQuery
} from '@mui/material';

import Profile from '@/components/navbar/profile';
import { toggleMobileSidebar, toggleSidebar } from '@/redux/customizerSlice';
import { AppState } from '@/redux/store';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const [menuBox, setMenuBox] = useState(null);
  const user = useSelector((state: AppState) => state.user);

  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));


  const openBox = (event: any) => {
    setMenuBox(event.currentTarget);
  };

  const closeBox = () => {
    setMenuBox(null);
  };

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={lgUp ? () => dispatch(toggleSidebar()) : () => dispatch(toggleMobileSidebar())}
        >
          <FontAwesomeIcon icon={faBars} fontSize="1rem" />
        </IconButton>
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
