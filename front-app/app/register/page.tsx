import PageContainer from "@/components/page-container";
import Logo from "@/components/logo";
import {Box, Card, Grid, Stack} from "@mui/material";
import RegisterForm from "@/app/register/register-form";

export default function Register(){

    return(
        <div>
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
                                        <RegisterForm/>
                                    </Box>
                                </Stack>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </PageContainer>
        </div>
    );
}