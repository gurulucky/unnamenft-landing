/* eslint-disable */
import { motion } from 'framer-motion';
// material
import { styled, useTheme } from '@material-ui/core/styles';
// import { Typography, Stack, useMediaQuery, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import Stack from '@material-ui/core/Stack'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import { varWrapEnter, varFadeInRight } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // position: 'relative',
  // // backgroundColor: theme.palette?.grey[400],
  // backgroundImage: "url('/static/bg.jpg')",
  // backgroundSize: '100% auto',
  // backgroundRepeat: 'no-repeat',
  // marginTop: "60px",
  // [theme.breakpoints.up('lg')]: {
  //   backgroundSize: '100% auto',
  //   // top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100vh',
  //   // display: 'flex',
  //   position: 'fixed',
  //   // alignItems: 'flex-start',
  //   // justifyContent:'center'
  // }
  position: 'relative',
  marginTop: '64px',
  // [theme.breakpoints.up('md')]: {
    // top: 0,
    // left: 0,
    width: '100%',
    // display: 'flex',
    // alignItems: 'center'
  // }
}));

const ContentStyle = styled((props) => <Stack sx={{ width: 1 }} alignItems='center' spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  margin: 'auto',
  top: '0px',
  textAlign: 'center',
  position: 'absolute',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    // margin: 'unset',
    paddingTop: theme.spacing(8),
  }
}));

// ----------------------------------------------------------------------

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <RootStyle >
        {/* <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} /> */}

        {/* <HeroImgStyle alt="hero" src="/static/chief_nft.png" variants={varFadeInUp} /> */}

        {/* <Container maxWidth="lg"> */}
        <Box component="img" src='https://ucarecdn.com/ba72a09c-0b11-4686-b132-20d9791bfb16/boy_bg.jpg' sx={{width:'100%'}}>

        </Box>
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Typography variant={matches ? 'h2' : 'h3'} className='flux'>GOOD PEOPLE</Typography>
          </motion.div>

        </ContentStyle>
        {/* </Container> */}
      </RootStyle>
      {/* <Box sx={{ height: { md: '100vh' } }} /> */}
    </>
  );
}
