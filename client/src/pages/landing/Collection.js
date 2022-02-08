/* eslint-disable */
// material
import { useTheme, styled } from '@material-ui/core/styles';
// import { Box, Typography, useMediaQuery } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
//
import {MotionInView, varFadeInDown } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    // padding: theme.spacing(3),
    padding: theme.spacing(10,3),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(10,15)
    }
}));

// ----------------------------------------------------------------------
const Scroll = styled(Box)(() => ({
    height: 256,
    background: 'url(https://ucarecdn.com/c6da352c-993e-4948-80a1-b1e99cbab7e9/ss.jpg)',
    backgroundSize: '768px 254px',
    animation: 'mosaic 5s linear infinite',
    '@keyframes mosaic': {
        '0%': {
            backgroundPosition: '0 0'
        },
        '100%': {
            backgroundPosition: '-768px 0'
        }
    }
}));

const Scroll_2 = styled(Box)(() => ({
    height: 256,
    background: 'url(https://ucarecdn.com/c6da352c-993e-4948-80a1-b1e99cbab7e9/ss.jpg)',
    backgroundSize: '768px 254px',
    animation: 'mosaic 5s linear infinite',
    '@keyframes mosaic': {
        '0%': {
            backgroundPosition: '0 0'
        },
        '100%': {
            backgroundPosition: '-768px 0'
        }
    }
}));

// ----------------------------------------------------------------------

export default function LandingMinimalHelps() {
    const theme = useTheme();
    const isLight = theme.palette?.mode === 'light';
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <RootStyle>
            <Box sx={{ mb: { xs: 3, md: 8 } }}>
                <MotionInView variants={varFadeInDown}>
                    <Typography className='flux_title' variant="h2" color='primary.main' sx={{ textAlign: 'center', mb: 3 }}>
                        The Collection
                    </Typography>
                </MotionInView>
            </Box>
            <Scroll />
            <Scroll_2 />
        </RootStyle>
    );
}


