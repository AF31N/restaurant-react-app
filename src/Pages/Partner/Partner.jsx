import React from 'react'
import logoImg from '../../assets/logo.png'
import starsImg from '../../assets/Star.png'
import logosImg from '../../assets/logos.png'
import { styled } from '@mui/system';
import { Box, Container, Typography } from '@mui/material';
import './Partner.css'

const Partner = () => {
    const CustomContainer = styled(Container)(({theme})=>({
        justifyContent:'space-between',
        display:'flex',
        [theme.breakpoints.down("md")]:{
            flexDirection:'column',
            alignItems:'center',
            textAlign:'center',
            marginBottom:theme.spacing(4)
        },

    }));
    const CustomBox = styled(Box)(({theme})=>({
        [theme.breakpoints.down("md")]:{
            marginBottom:theme.spacing(4)
        },

    }));
  return (
    <Box sx={{mt:10}}>
        <CustomContainer>
            <CustomBox>
                <img src={logoImg} alt='' style={{maxWidth:'100%'}}></img>
                <Typography 
                variant='body2'
                sx={{
                    fontSize:'16px',
                    color:'#7D8589',
                    fontWeight:'bold',
                    mt:2,
                }}>
                    More than 45,000 trusted customers
                

                </Typography>

            </CustomBox>
            <Box>
            <img src={starsImg} alt='' style={{maxWidth:'100%'}}></img>
            <Typography 
                variant='body2'
                sx={{
                    fontSize:'16px',
                    color:'#7D8589',
                    fontWeight:'bold',
                    mt:2,
                }}>
                    5-Star Rating (2k+ Reviews)

                </Typography>

            </Box>

        </CustomContainer>
        

        <div className="centered-container">
        <img src={logosImg} alt='' />
        {/* Add more <img> tags for additional images */}
      </div>


    </Box>
  )
}

export default Partner
