import React from 'react';
import fbIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import linkedinIcon from '../../assets/instagram.png';
import { styled } from '@mui/system';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    const FooterLinkItems = [
    'Guides', <br></br>,
    'Services',<br></br>,
    'Contact Us'
];
    const FooterLinkItems2 = ['Location',<br></br>,
     'Partnerships', <br></br>,
     'Terms of use & Privacy Policies'];

     const CustomContainer = styled(Container)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-around',
        gap: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            textAlign: 'center',
        },
    }));

    const IconBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        fontSize: '64px',
        color: '#fff',
        fontWeight: 'bold',
        margin: theme.spacing(4, 0, 4, 0),
        gap: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px',
        },
       
    }));
    

    const FooterLink = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: theme.spacing(2),
        },
        '& > *': {
            marginRight: theme.spacing(4), 
            marginBottom: theme.spacing(2), 
            '&:last-child': {
                marginRight: 0,
                marginBottom: 0, 
            },
        },
        '&:hover': {
            color: '#66B2FF',
        },
    }));
    
    

    return (
        <Box sx={{ py: 10, backgroundColor: '#FFF6B2' }}>
            <CustomContainer>
            
                <Box>
                    <Typography sx={{ fontSize: '20px', fontWeight: '700', color: '#1C1C1D', mb: 2 }}>
                        Featured
                    </Typography>
                    {FooterLinkItems.map((link, index) => (
                        <FooterLink key={index}>{link}</FooterLink>
                    ))}
                </Box>

               
                <Box>
                    <Typography sx={{ fontSize: '20px', fontWeight: '700', color: '#1C1C1D', mb: 2 }}>
                        Overview
                    </Typography>
                    {FooterLinkItems2.map((link2, index) => (
                        <FooterLink key={index}>{link2}</FooterLink>
                    ))}
                </Box>

              
                <Box>
                    <Typography sx={{ fontSize: '20px', fontWeight: '700', color: '#1C1C1D', mb: 2 }}>
                        Get In Touch
                    </Typography>
                    <Typography sx={{ fontSize: '16px', fontWeight: '500', color: '#7A7A7E', mb: 2 }}>
                        Keep in touch with our social media platforms
                    </Typography>
                    <IconBox>
                        <img src={fbIcon} alt="" style={{ cursor: 'pointer' }} />
                        <img 
                        src={twitterIcon}
                         alt="" 
                         style={{ cursor: 'pointer' }} />
                        <img 
                        src={linkedinIcon}
                         alt="" 
                         style={{ cursor: 'pointer' }} />
                    </IconBox>
                </Box>
            </CustomContainer>
        </Box>
    );
};

export default Footer;

