import React from 'react';
import likeIcon from '../../assets/like.png';
import heartIcon from '../../assets/heart.png';
import shareIcon from '../../assets/share.png';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomCard = ({ img, price, item, likes, heart, share }) => {
    const DishBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '300px', // Set the width of each box
        height: '400px', // Set the height of each box
        border: '1px solid #ccc',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px',
        transition: 'transform 0.3s ease-in-out', // Transition for smooth hover effect
        '&:hover': {
            transform: 'scale(1.05)', // Increase size on hover
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Add a shadow on hover
        },
    }));

    const InfoBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px', // Adjust the gap between items
        marginTop: '8px', // Add margin to separate sections
    }));

    const ImgContainer = styled(Box)(({ theme }) => ({
        width: '100%',
        marginBottom: '8px', // Add margin at the bottom of the image
    }));

    return (
        <DishBox>
            <ImgContainer>
                <img src={img} alt='' style={{ width: '100%', height: 'auto' }} />
            </ImgContainer>
            <Typography variant='body2' sx={{ fontWeight: '700' }}>
                ${price}
            </Typography>
            <Typography variant='body2' sx={{ marginY: '8px' }}>
                {item}
            </Typography>
            <InfoBox>
                <img src={likeIcon} alt='' style={{ width: '20px', height: '20px' }} />
                <Typography variant='body2'>{likes}</Typography>
                <img src={heartIcon} alt='' style={{ width: '20px', height: '20px' }} />
                <Typography variant='body2'>{heart}</Typography>
                <img src={shareIcon} alt='' style={{ width: '20px', height: '20px' }} />
                <Typography variant='body2'>{share}</Typography>
            </InfoBox>
        </DishBox>
    );
};

export default CustomCard;



