import React from 'react'
import houseCard from '../../assets/ambience.jpg'
import { Box, Container, styled, Typography } from '@mui/material';

const Ambience = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems:'center',
        gap: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    }));

    const ImgContainer = styled(Box)(({ theme }) => ({
        width:'100%',
        [theme.breakpoints.down('md')]: {
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    }));
    const LargeText = styled(Typography)(({ theme }) => ({
        fontSize:'64px',
        color:'#000',
        fontWeight:'700',
        [theme.breakpoints.down('md')]: {
            fontSize:'32px',
        },
    }));
    const SmallText = styled(Typography)(({ theme }) => ({
        fontSize:'18px',
        color:'#788087',
        fontWeight:'500',
        [theme.breakpoints.down('md')]: {
            fontSize:'14px',
        },
    }));
    const TextFlexbox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent:'space-between',
        marginTop:theme.spacing(7),
        padding:theme.spacing(0,5,0,5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            gap: theme.spacing(5),
        },
    }));
    const Divider = styled('div')(({ theme }) => ({
        width:'13%',
        height:'5px',
        backgroundColor:'#000339',
       [theme.breakpoints.down('md')]: {
         marginLeft:'auto',
         marginRight:'auto',
        },
    }));
  return (
   <Box sx={{ py: 10 }}>
    <Container>
        <CustomBox>
            <ImgContainer>
            <img src={houseCard} alt='' style={{maxWidth:'100%'}}></img>
            </ImgContainer>

            <Box>
                <Divider/>

                <Typography 
                sx={{ fontWeight: '700', color: '#000339', fontSize: '35px'}}
                >
                    You have found a ambience you love.

                </Typography>

                <Typography 
                sx={{ lineHeight:'27px', color: '#5A6473', fontSize: '16px'}}
                >
                   Discover the epitom of culinery excellence at Savoria,ahere every visit is an enhancing rendezvous with the art of dining.

                </Typography>
            </Box>
        </CustomBox>

        <TextFlexbox>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
             }}
            >
                <LargeText>250+</LargeText>
                <SmallText>Dishes</SmallText>

            </Box>

            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
             }}
            >
                <LargeText>300+</LargeText>
                <SmallText>Trusted customers</SmallText>

            </Box>

            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
             }}
            >
                <LargeText>350+</LargeText>
                <SmallText>Deliveries per day</SmallText>

            </Box>


        </TextFlexbox>

    </Container>

   </Box>
  )
}

export default Ambience
