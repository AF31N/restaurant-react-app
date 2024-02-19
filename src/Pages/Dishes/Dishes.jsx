import React from 'react';
import CustomCard from '../../Components/CustomCard/CustomCard';
import { Data } from '../../StaticData/Data';
import { Box, Container, styled, Typography } from '@mui/material';

const Dishes = () => {
    const DishesBox = styled(Container)(({ theme }) => ({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    }));

    const PropertiesTextBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    }));

    return (
        <Box sx={{ mt: 5, backgroundColor: 'F5FAFE', py: 10 }}>
            <Container>
                <PropertiesTextBox>
                    <Typography sx={{ fontWeight: 'bold', ml: '13px', color: '#000339', fontSize: '35px' }}>
                        Featured dishes
                    </Typography>
                    <Typography sx={{ mt: 1, ml: '13px', color: '#5A6473', fontSize: '16px' }}>
                        Explore a variety of South Indian dishes
                    </Typography>
                </PropertiesTextBox>

                <DishesBox>
                    {Data.map((foodItem) => (
                        <CustomCard
                            key={foodItem.id} // Corrected from Key to key
                            img={foodItem.img}
                            price={foodItem.price}
                            item={foodItem.item}
                            likes={foodItem.likes}
                            heart={foodItem.heart}
                            share={foodItem.share}
                        />
                    ))}
                </DishesBox>
            </Container>
        </Box>
    );
};

export default Dishes;

