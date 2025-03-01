'use client';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import DashboardCard from "../dashboard-card";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesTwo = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const optionscolumnchart: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 25,
      resize: true,
      barColor: "#fff",
      offsetX: -15,
      sparkline: {
        enabled: true,
      },
    },
    colors: [primary],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "100%",
        borderRadius: 3,
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["rgba(0,0,0,0.01)"],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    axisBorder: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      x: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 767,
          options: {
            chart: { height: 60 },
            plotOptions: {
              bar: { columnWidth: "60%" },
            },
          },
        },
      ],
    },
  };
  const seriescolumnchart = [
    {
      name: "",
      data: [100, 60, 35, 90, 35, 100],
    },
  ];

  return (
    <DashboardCard>
      <>
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
            <ShoppingCartIcon width={22} />
          </Typography>
        </Box>

        <Box mt={3} mb={2} height="25px">
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="bar"
            height="25px" width={"100%"}
          />
        </Box>

        <Typography variant="h4">
          $16.500
          <span>
            <ArrowOutwardIcon width={18} />
          </span>
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Ventas por mes
        </Typography>
      </>
    </DashboardCard>
  );
};

export default SalesTwo;
