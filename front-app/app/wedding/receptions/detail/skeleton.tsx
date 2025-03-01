import BlankCard from '@/components/blank-card';
import GridItem from '@/components/grid-item';
import { Box, CardContent, Grid, Skeleton, Typography } from '@mui/material';

export default function SkeletonReception() {
  const size = 750;
  const detailSize = 20;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <BlankCard>
          <CardContent>
            <Typography variant="h5" mb={1}>
              <Skeleton variant="rectangular" width={180} height={25} sx={{ borderRadius: '10px' }} />
            </Typography>
            <Typography color="textSecondary" mb={3}>
              <Skeleton variant="rectangular" width={size} height={detailSize} sx={{ borderRadius: '10px' }} />
            </Typography>
            <Box sx={{ width: '100%' }}>
              <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={6}>
                  <GridItem>
                    <Box>
                      <Typography variant="h5" mb={1} mt={2}>
                        <Skeleton variant="rectangular" width={100} height={15} sx={{ borderRadius: '10px' }} />
                      </Typography>
                      <Skeleton variant="rectangular" width={size} height={45} sx={{ borderRadius: '10px' }} />
                    </Box>
                  </GridItem>
                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                  <GridItem>
                    <Box>
                      <Typography variant="h5" mb={1} mt={2}>
                        <Skeleton variant="rectangular" width={100} height={15} sx={{ borderRadius: '10px' }} />
                      </Typography>
                      <Skeleton variant="rectangular" width={size} height={45} sx={{ borderRadius: '10px' }} />
                    </Box>
                  </GridItem>
                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                  <GridItem>
                    <Box>
                      <Typography variant="h5" mb={1} mt={2}>
                        <Skeleton variant="rectangular" width={100} height={15} sx={{ borderRadius: '10px' }} />
                      </Typography>
                      <Skeleton variant="rectangular" width={size} height={45} sx={{ borderRadius: '10px' }} />
                    </Box>
                  </GridItem>
                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                  <GridItem>
                    <Box>
                      <Typography variant="h5" mb={1} mt={2}>
                        <Skeleton variant="rectangular" width={100} height={15} sx={{ borderRadius: '10px' }} />
                      </Typography>
                      <Skeleton variant="rectangular" width={size} height={45} sx={{ borderRadius: '10px' }} />
                    </Box>
                  </GridItem>
                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                  <GridItem>
                    <Box>
                      <Typography variant="h5" mb={1} mt={2}>
                        <Skeleton variant="rectangular" width={100} height={15} sx={{ borderRadius: '10px' }} />
                      </Typography>
                      <Skeleton variant="rectangular" width={size} height={45} sx={{ borderRadius: '10px' }} />
                    </Box>
                  </GridItem>
                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                  <GridItem>
                    <Box>
                      <Typography variant="h5" mb={1} mt={2}>
                        <Skeleton variant="rectangular" width={100} height={15} sx={{ borderRadius: '10px' }} />
                      </Typography>
                      <Skeleton variant="rectangular" width={size} height={45} sx={{ borderRadius: '10px' }} />
                    </Box>
                  </GridItem>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </BlankCard>
      </Grid>
    </Grid>
  );
}
