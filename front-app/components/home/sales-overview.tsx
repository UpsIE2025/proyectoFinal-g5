'use client';

import GrainIcon from '@mui/icons-material/Grain';
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dynamic from "next/dynamic";
import DashboardCard from '../dashboard-card';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesOverview = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const primarylight = theme.palette.primary.light;
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  const optionscolumnchart: any = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",

      toolbar: {
        show: false,
      },
      height: 275,
    },
    labels: ["Gastos", "Inversión", "Ganancias"],
    colors: [primary, primarylight, secondary],
    plotOptions: {
      pie: {

        donut: {
          size: '89%',
          background: 'transparent',

          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              color: textColor,
              fontSize: '20px',
              fontWeight: '600',
              label: '$23,450',
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [30, 35, 45];

  return (
    <DashboardCard title="Resumen de Eventos" subtitle="Cada Mes">
      <>
        <Box mt={3} height="255px">
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height="275px"
            width={"100%"}
          />
        </Box>

        <Stack direction="row" spacing={2} justifyContent="space-between" mt={7}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              width={38}
              height={38}
              bgcolor="primary.light"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                color="primary.main"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <GrainIcon width={22} />
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="600">
                $13,450
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Total gastos
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              width={38}
              height={38}
              bgcolor="secondary.light"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                color="secondary.main"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <GrainIcon width={22} />
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="600">
                $23,450
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Total ganancias
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </>
    </DashboardCard>
  );
};

export default SalesOverview;
