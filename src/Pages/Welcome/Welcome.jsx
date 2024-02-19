import React from 'react'
import welcome from '../../assets/welcome.png'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

const Welcome=()=> {
    const CustomBox = styled(Box)(({theme})=>({
        justifyContent:'center',
        display:'flex',
        gap:theme.spacing(5),
        marginTop:theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            flexDirection:'column',
            alignItems:'center',
            textAlign:'center'
        },

    }));
    const Title = styled(Typography)(({theme})=>({
        fontSize:'64px',
        color:'#fff',
        fontWeight:'bold',
        margin:theme.spacing(4,0,4,0),
        [theme.breakpoints.down("sm")]:{
            fontSize:'40px',
        },

    }));
  return (
   <Box sx={{backgroundColor:'#FED801',minHeight:'80vh'}}>
    <Container>
        <CustomBox>
            <Box sx={{flex:'1'}}>
                <Typography variant='body2'
                sx={{
                    fontSize:'18px',
                    color:'#687690',
                    fontWeight:'500',
                    mt:10,
                    mb:4,
                }}>
                    Welcome to Techflix Restaurent

                </Typography>

                <Title variant='h1'>
                    Discover a place where you'll love to eat

                </Title>

                <Typography variant='body2'
                sx={{fontSize:'18px',color:'#5A6473',my:2}}>
                    Immerse yourself in the elegant ambience as you savor each bite,accompanied by your extensive selection of hard-picked wines and carefull curated cocktails

                </Typography>

                <CustomButton 
                backgroundcolor='#0F1B4C'
                color='#fff'
                buttonText='More About Us'
                welcomeButton={true}
                />

            </Box>

            <Box sx={{flex:'1.25'}}>
                <img src={welcome} alt='' style={{maxWidth:'100%',marginBottom:'2rem'}}></img>


            </Box>

        </CustomBox>


    </Container>

   </Box>
  );
};

export default Welcome
