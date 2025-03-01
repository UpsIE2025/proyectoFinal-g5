import BreadCrumbType from '@/types/bread-crumb.type';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Breadcrumbs, Grid, Theme, Typography } from '@mui/material';
import NextLink from 'next/link';

const Breadcrumb = ({ subtitle, items, title, children }: BreadCrumbType) => (
  <Grid
    container
    sx={{
      backgroundColor: 'primary.light',
      borderRadius: (theme: Theme) => theme.shape.borderRadius / 4,
      p: '30px 25px 20px',
      marginBottom: '30px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Grid item xs={12} sm={6} lg={8} mb={1}>
      <Typography variant="h4">{title}</Typography>
      <Typography
        color="textSecondary"
        variant="h6"
        fontWeight={400}
        mt={0.8}
        mb={0}
      >
        {subtitle}
      </Typography>
      <Breadcrumbs
        separator={
          <FontAwesomeIcon icon={faCircle} fontSize="0.2rem" />
        }
        sx={{ alignItems: 'center', mt: items ? '10px' : '' }}
        aria-label="breadcrumb"
      >
        {items
          ? items.map((item) => (
            <div key={item.title}>
              {item.to ? (
                <NextLink href={item.to} passHref>
                  <Typography color="textSecondary">{item.title}</Typography>
                </NextLink>
              ) : (
                <Typography color="textPrimary">{item.title}</Typography>
              )}
            </div>
          ))
          : ''}
      </Breadcrumbs>
    </Grid>
    <Grid item xs={12} sm={6} lg={4} display="flex" alignItems="flex-end">
      <Box
        sx={{
          display: { xs: 'none', md: 'block', lg: 'flex' },
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        {children ? (
          <Box sx={{ top: 'px', position: 'absolute' }}>{children}</Box>
        ) : (
          <>
            <Box sx={{ top: '0px', position: 'absolute' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100px" height="100px">
                <path fill="#3dd9eb" d="M11,18c-3.313,0-6,2.686-6,6c0,3.313,2.687,6,6,6c3.314,0,6-2.687,6-6C17,20.687,14.314,18,11,18" />
                <path fill="#3dd9eb" d="M37,5c-3.313,0-6,2.687-6,6c0,3.313,2.687,6,6,6c3.314,0,6-2.687,6-6C43,7.687,40.314,5,37,5" />
                <path fill="#3dd9eb" d="M37,31c-3.313,0-6,2.686-6,6c0,3.313,2.687,6,6,6c3.314,0,6-2.687,6-6C43,33.687,40.314,31,37,31" />
                <path fill="#6c19ff" d="M31.819,14.028L25.073,22h-8.415C16.88,22.626,17,23.299,17,24c0,0.701-0.12,1.374-0.341,2h8.414 l6.746,7.973c0.688-1.175,1.765-2.095,3.053-2.584L28.62,24l6.251-7.389C33.583,16.123,32.507,15.202,31.819,14.028" />
                <path fill="#00b3d7" d="M16.658,22H11v4h5.659C16.88,25.375,17,24.701,17,24C17,23.299,16.88,22.626,16.658,22" />
                <path fill="#00b3d7" d="M35.474,9.708l-3.655,4.32c0.688,1.175,1.764,2.095,3.053,2.584l3.655-4.319L35.474,9.708" />
                <path fill="#00b3d7" d="M34.872,31.389c-1.288,0.489-2.365,1.409-3.053,2.584l3.655,4.319l3.053-2.584L34.872,31.389" />
              </svg>
            </Box>
          </>
        )}
      </Box>
    </Grid>
  </Grid>
);

export default Breadcrumb;
