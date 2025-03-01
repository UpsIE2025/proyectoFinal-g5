import BlankCard from '@/components/blank-card';
import { CardContent, Grid, Skeleton } from '@mui/material';

export default function SkeletonCalendar() {
  const size = 750;
  const detailSize = 20;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <BlankCard>
          <CardContent>
            <Skeleton variant="rectangular" width={100} height={100} sx={{ borderRadius: '10px' }} />
          </CardContent>
        </BlankCard>
      </Grid>
    </Grid>
  );
}
