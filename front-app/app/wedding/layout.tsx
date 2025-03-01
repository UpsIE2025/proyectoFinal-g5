'use client';

import Customizer from '@/components/customizer';
import Header from '@/components/navbar/header';
import HorizontalHeader from '@/components/navbar/horizontal-header';
import Sidebar from '@/components/sidebar/sidebar';
import SuspenseSkeleton from '@/components/suspense-skeleton';
import { AppState } from '@/redux/store';
import { Box, Container, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  width: '100%',
  backgroundColor: 'transparent',
}));

export default function UserLayout({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const customizer = useSelector((state: AppState) => state.customizer);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <SuspenseSkeleton loading={loading}>
      <MainWrapper>
        {customizer.isHorizontal ? <></> : <Sidebar customizer={customizer} />}
        <PageWrapper
          className="page-wrapper"
          sx={{
            ...(customizer.isCollapse && {
              [theme.breakpoints.up('lg')]: {
                ml: `${customizer.MiniSidebarWidth}px`,
              },
            }),
          }}
        >
          {customizer.isHorizontal ? <HorizontalHeader /> : <Header />}
          {/* {customizer.isHorizontal ? <Navigation /> : ''} */}
          <Container
            sx={{
              maxWidth: customizer.isLayout === 'boxed' ? 'lg' : '100%!important',
            }}
          >
            <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
              {children}
            </Box>
          </Container>
          <Customizer />
        </PageWrapper>
      </MainWrapper>
    </SuspenseSkeleton>
  );
}
