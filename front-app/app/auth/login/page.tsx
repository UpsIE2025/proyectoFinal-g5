'use client';

import Logo from '@/components/logo';
import PageContainer from '@/components/page-container';
import { AppState } from '@/redux/store';
import { login } from '@/redux/userSlice';
import { setParam } from '@/utils/local-storage';
import { Box, Card, Grid, Stack, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './form';

export default function Login() {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const user = useSelector((state: AppState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (user.id) {
        router.push('/wedding/dashboard');
      }
    }, 2000);
  }, [user.id, router]);

  const submitForm = async (values: any) => {
    setParam('user', JSON.stringify({
      id: 1,
      username: values.username,
    }));
    setParam('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1pY2hhZWwgU2FsYXphciIsImlhdCI6MTUxNjIzOTAyMn0.7NTqqQx3zoOhBRed6BRqFxegFA4ftlcR12P4w55IpMI');
    const date = new Date().setMinutes(new Date().getMinutes() + 5);
    setParam('expires', date.toString());
    dispatch(login({
      id: 1,
      username: values.username,
    }));
    router.push('/wedding/dashboard');
  };

  return (
    <PageContainer>
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            xl={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '450px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo type='header'/>
              </Box>
              <Stack>
                <Box>
                  <LoginForm submitForm={submitForm} />
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
