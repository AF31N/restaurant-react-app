import { Button } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const CustomButton = ({
  backgroundcolor,
  color,
  buttonText,
  welcomeButton,
  guideButton,
  getStartedButton,
}) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundcolor,
    color: color,
    fontWeight: '200',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '0.5rem 1.25rem',
    borderRadius: '7px',
    textTransform: 'none',
    display: 'block',
    border: '2px solid transparent',
    '&:hover': {
      backgroundColor: color,
      color: backgroundcolor,
      borderColor: backgroundcolor,
    },
    [theme.breakpoints.down('md')]: {
      margin: (welcomeButton || getStartedButton) && theme.spacing(0, 'auto', 3, 'auto'),
      width: (welcomeButton || getStartedButton) && '90%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: guideButton && theme.spacing(3),
      width: guideButton && '90%',
    },
  }));

  return <StyledButton>{buttonText}</StyledButton>;
};

export default CustomButton;

