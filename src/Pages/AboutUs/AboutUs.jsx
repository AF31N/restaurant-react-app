import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const AboutUs = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        width: '30%',
        [theme.breakpoints.down('md')]: {
            width: '85%',
        },
    }));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '45px',
                minHeight: 'calc(100vh - 200px)', // Adjusted the minimum height
            }}
        >
            <div style={{ width: '5%', height: '5px', backgroundColor: '#000339', margin: '0 auto' }}></div>

            <Typography
                sx={{
                    fontSize: '35px',
                    color: '#000339',
                    fontWeight: 'bold',
                    my: 3,
                }}
            >
                About us
            </Typography>

            <CustomBox>
                <Typography
                    sx={{
                        fontSize: '16px',
                        color: '#5A6473',
                        fontWeight: '500',
                        textAlign: 'center',
                    }}
                >
                    Welcome to our restaurant, where culinary excellence meets warm hospitality.
                </Typography>
            </CustomBox>
        </Box>
    );
};

export default AboutUs;

