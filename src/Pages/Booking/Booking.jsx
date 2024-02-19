import React from 'react'
import { styled } from '@mui/system';
import buyIcon from '../../assets/buy_icon.png'
import sellIcon from '../../assets/sell_icon.png'
import rentIcon from '../../assets/sell_icon.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CustomButton from '../../Components/CustomButton/CustomButton'
import { Box, Typography } from '@mui/material';

const Booking=()=> {
    const CustomBox = styled(Box)(({})=>({
        fontSize:'15px',
        color:'#4F5361',
        fontWeight:'bold',
        cursor:'pointer',
        '&:hover':{color:'#fff'}
         
        
 
     }));
     const GuidesBox = styled(Box)(({theme})=>({
        justifyContent:'space-around',
        display:'flex',
        width:'70%',
        marginTop:theme.spacing(5),
        marginBottom:theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            width:'100%',
        },
        [theme.breakpoints.down("sm")]:{
            flexDirection:'column',
            marginBottom:'0',

        },


 
     }));
     const GuideBox = styled(Box)(({ theme }) => ({
        alignItems: 'center', // Center the items horizontally
        display: 'flex',
        flexDirection: 'column',
        marginTop: theme.spacing(5),
        textAlign: 'center', // Center the text horizontally
        [theme.breakpoints.down("md")]: {
            margin: theme.spacing(2, 0, 2, 0),
        },
    }));
    
  return (
    <Box 
    sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'40px',
      }}
    >
        <div style={{
            width:'5%',
            height:'5px',
            background:'#000339',
            margin:'auto',
        }}>

        </div>

        <Typography 
        variant='h3'
        sx={{fontSize:'35px',color:'#000339',fontWeight:'bold',my:3}}
        >
            How to book?
        </Typography>

        <CustomBox>
            <Typography 
            variant='body2'
            sx={{fontSize:'16px',color:'#5A6473',fontWeight:'500',textAlign:'center'}}
            >
                Everything you need to know when you book for advance slot

            </Typography>

        </CustomBox>

        <GuidesBox>


            <GuideBox>
            <img src={buyIcon} alt='' style={{  maxWidth: '50px', height: 'auto' }} />
                <Typography 
                variant='body2'
                sx={{fontSize:'20px',color:'#383c45',fontWeight:'500',my:1}}
                >
                Order Guides     
            </Typography>
            <Box 
             sx={{
                display:'flex',
                cursor:'pointer',
                alignItems:'center',
                justifyContent:'space-between',
              }}
            >

             <Typography 
                variant='body2'
                sx={{fontSize:'14px',color:'#0689ff',fontWeight:'bold'}}
                >
                How to Order  
                <ArrowRightAltIcon style={{color:'#0689ff'}}></ArrowRightAltIcon>  
            </Typography>
            </Box>

            </GuideBox>

            <GuideBox>
            <img src={sellIcon} alt='' style={{  maxWidth: '50px', height: 'auto' }} />
                <Typography 
                variant='body2'
                sx={{fontSize:'20px',color:'#383c45',fontWeight:'500',my:1}}
                >
                Order guides    
            </Typography>
            <Box 
             sx={{
                display:'flex',
                cursor:'pointer',
                alignItems:'center',
                justifyContent:'space-between',
              }}
            >

             <Typography 
                variant='body2'
                sx={{fontSize:'14px',color:'#0689ff',fontWeight:'bold'}}
                >
                How to Order  
                <ArrowRightAltIcon style={{color:'#0689ff'}}></ArrowRightAltIcon>  
            </Typography>
            </Box>

            </GuideBox>

            <GuideBox>
            <img src={rentIcon} alt='' style={{  maxWidth: '50px', height: 'auto' }} />
                <Typography 
                variant='body2'
                sx={{fontSize:'20px',color:'#383c45',fontWeight:'500',my:1}}
                >
                Payment guides    
            </Typography>
            <Box 
             sx={{
                display:'flex',
                cursor:'pointer',
                alignItems:'center',
                justifyContent:'space-between',
              }}
            >

             <Typography 
                variant='body2'
                sx={{fontSize:'14px',color:'#0689ff',fontWeight:'bold'}}
                >
                How to pay
                <ArrowRightAltIcon style={{color:'#0689ff'}}></ArrowRightAltIcon>  
            </Typography>
            </Box>

            </GuideBox>

        </GuidesBox>
        <CustomButton 
        backgroundcolor='#0F184C'
        color='#fff'
        buttonText='See full guides'
        guideButton={true}
        />
    
    </Box>
    
  )
}

export default Booking
