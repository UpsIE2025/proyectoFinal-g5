import Growth from "@/components/home/growth";
import MonthlyEarnings from "@/components/home/monthly-earnings";
import RevenueUpdates from "@/components/home/revenue-updates";
import SalesOverview from "@/components/home/sales-overview";
import SalesTwo from "@/components/home/sales-two";
import TopCards from "@/components/home/top-cards";
import PageContainer from "@/components/page-container";
import { Box, Grid } from "@mui/material";

export default function Home() {
    return (
        <PageContainer>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <TopCards />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <RevenueUpdates />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <SalesOverview />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <SalesTwo />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Growth />
                            </Grid>
                            <Grid item xs={12}>
                                <MonthlyEarnings />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </PageContainer>
    )
}