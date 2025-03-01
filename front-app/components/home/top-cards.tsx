import { Box, CardContent, Grid, Typography } from "@mui/material";

import { faCalendar, faMoneyCheck, faPenNib, faStar, faTruck, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const topcards = [
  {
    icon: faUser,
    title: "Clientes",
    digits: "120",
    bgcolor: "secondary",
  },
  {
    icon: faTruck,
    title: "Proveedores",
    digits: "50",
    bgcolor: "warning",
  },
  {
    icon: faCalendar,
    title: "Reservas",
    digits: "356",
    bgcolor: "secondary",
  },
  {
    icon: faStar,
    title: "Eventos",
    digits: "80",
    bgcolor: "error",
  },
  {
    icon: faMoneyCheck,
    title: "Beneficio",
    digits: "$9,600",
    bgcolor: "success",
  },
  {
    icon: faPenNib,
    title: "Decoraciones",
    digits: "59",
    bgcolor: "info",
  },
];

const TopCards = () => {
  return (
    <Grid container spacing={3} mt={3}>
      {topcards.map((topcard, i) => (
        <Grid item xs={12} sm={4} lg={2} key={i}>
          <Box bgcolor={topcard.bgcolor + ".light"} textAlign="center">
            <CardContent>
              <FontAwesomeIcon icon={topcard.icon} fontSize="1rem" />
              <Typography
                color={topcard.bgcolor + ".main"}
                mt={1}
                variant="subtitle1"
                fontWeight={600}
              >
                {topcard.title}
              </Typography>
              <Typography
                color={topcard.bgcolor + ".main"}
                variant="h4"
                fontWeight={600}
              >
                {topcard.digits}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
