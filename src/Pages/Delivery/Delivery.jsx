import React from 'react'
import DeliveryImg from '../../assets/DeliveryImg.png'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { Box, Container, styled, Typography } from '@mui/material';


const Delivery = () => {
    const CustomContainer = styled(Container)(({theme})=>({
        backgroundColor:'#FED801',
        height:'416px',
        borderRadius:'15px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        [theme.breakpoints.down("md")]:{
            flexDirection: 'column',
            alignItems: 'center',
            height:'auto',
            width:'90%',
            padding:theme.spacing(3,3,0,3),
        },

    }));
    const CustomBox = styled(Box)(({theme})=>({
        padding:theme.spacing(10,0,10,0),
        margin:theme.spacing(0,2,0,2),
        [theme.breakpoints.down('md')]: {
            padding:'0',
        },

    }));
  return (
    <CustomBox>
        <CustomContainer>
            <Box>
        <Typography 
                sx={{ fontWeight: '700', color: 'white', fontSize: '35px',fontFamily:'monospace'}}
                >
                    Super fast home delivery.

                </Typography>

                <Typography 
                sx={{ fontWeight: '800', color: '#000', fontSize: '16px',fontFamily:'monospace',my:3}}
                >
                    Door to door delivery.

                </Typography>

                <CustomButton
                backgroundcolor='#fff'
                color='#17275F'
                buttonText='Order Now!!'

                />
                </Box>
                <img src={DeliveryImg} alt='' style={{maxWidth:'100%'}}></img>

        </CustomContainer>

    </CustomBox>
  )
}

export default Delivery
