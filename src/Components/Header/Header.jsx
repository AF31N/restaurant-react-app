import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import logoImg from '../../assets/logo.png';

import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscelleneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [mobileMenu, setMobileMenu] = useState({ left: false });
    const navigate = useNavigate();

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250
            }}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {nav_titles.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 && <HomeIcon />}
                                {index === 1 && <FeaturedPlayListIcon />}
                                {index === 2 && <MiscelleneousServicesIcon />}
                                {index === 3 && <ContactsIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.display} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const nav_titles = [
        { path: '/', display: 'Home' },
        { path: '/dishes', display: 'Dishes' },
        { path: '/services', display: 'Services' },
        { path: '/about', display: 'About Us' }
    ];

    const NavBarLinksBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: 'none'
        },
    }));

    const NavBarLink = styled(Typography)(({}) => ({
        fontSize: '15px',
        color: '#4F5361',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': { color: '#fff' },
        textDecoration: 'none'
    }));

    const NavBarLogo = styled("img")(({ theme }) => ({
        cursor: 'pointer',
        [theme.breakpoints.down("md")]: {
            display: 'none'
        },
    }));

    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: 'pointer',
        display: 'none',
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: 'block'
        },
    }));

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '40px',
                maxWidth: 'auto',
                backgroundColor: '#FED801',
                marginLeft: '0px',
                marginBottom: '-24px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2.5rem'
                }}
            >
                <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                <Drawer
                    anchor='left'
                    open={mobileMenu['left']}
                    onClose={toggleDrawer("left", false)}
                >
                    {list('left')}
                </Drawer>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <NavBarLogo src={logoImg} alt='' />
                </Box>
                <NavBarLinksBox>
                    {nav_titles.map((titles, index) => (
                        <NavBarLink variant='body2' key={index} onClick={() => navigate(titles.path)}>
                            {titles.display}
                        </NavBarLink>
                    ))}
                </NavBarLinksBox>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem'
                }}
            >
                <NavBarLink variant='body2'>
                    Sign Up
                </NavBarLink>
                <CustomButton
                    backgroundcolor="#0F1B4C"
                    color='#fff'
                    buttonText="Register"
                />
            </Box>
        </Box>
    );
}

export default Header;
