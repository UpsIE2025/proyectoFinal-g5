import { AppState } from '@/redux/store';
import { logout } from '@/redux/userSlice';
import { logoutUser } from '@/utils/local-storage';
import { faEnvelope, faTruck, faUserPen, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const profiles: any[] = [
  {
    href: '/wedding/profile',
    title: 'Mi Perfil',
    subtitle: 'Mi información',
    icon: faUserPen,
  },
  {
    href: '/wedding/providers',
    title: 'Proveedores',
    subtitle: 'Administrar proveedores',
    icon: faTruck,
  },
  {
    href: '/wedding/customers',
    title: 'Clientes',
    subtitle: 'Ver mis clientes',
    icon: faUsers,
  },
];


const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const logoutSession = () => {
    dispatch(logout());
    logoutUser();
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === 'object' && {
            color: 'primary.main',
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={'/images/profile/user-1.jpg'}
          alt={'ProfileImg'}
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: '360px',
            p: 4,
          },
        }}
      >
        <Typography variant="h5">Mi Perfil</Typography>
        <Stack direction="row" py={3} spacing={2} alignItems="center">
          <Avatar src={'/images/profile/user-1.jpg'} alt={'ProfileImg'} sx={{ width: 95, height: 95 }} />
          <Box>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              display="flex"
              alignItems="center"
              gap={1}
            >
              <FontAwesomeIcon icon={faEnvelope} fontSize="1rem" />
              {user.username ?? ''}
            </Typography>
          </Box>
        </Stack>
        <Divider />
        {profiles.map((profile) => (
          <Box key={profile.title}>
            <Box sx={{ py: 2, px: 0 }} className="hover-text-primary">
              <Link href={profile.href}>
                <Stack direction="row" spacing={2}>
                  <Box
                    width="45px"
                    height="45px"
                    bgcolor="primary.light"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink="0"
                  >
                    <Avatar
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '5px',
                      }}
                    >
                      <FontAwesomeIcon icon={profile.icon} fontSize="1rem" />
                    </Avatar>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      color="textPrimary"
                      className="text-hover"
                      noWrap
                      sx={{
                        width: '240px',
                      }}
                    >
                      {profile.title}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle2"
                      sx={{
                        width: '240px',
                      }}
                      noWrap
                    >
                      {profile.subtitle}
                    </Typography>
                  </Box>
                </Stack>
              </Link>
            </Box>
          </Box>
        ))}
        <Box mt={2}>
          <Button variant="outlined" color="primary" fullWidth onClick={() => logoutSession()}>
            Cerrar Sesión
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
