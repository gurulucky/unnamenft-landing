/* eslint-disable */
import { motion } from 'framer-motion';
// material
import { styled, useTheme } from '@material-ui/core/styles';
// import { Typography, Stack, useMediaQuery, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import Stack from '@material-ui/core/Stack'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import { Button, SvgIcon, IconButton } from '@material-ui/core'
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
  // marginTop: '64px',
  // [theme.breakpoints.up('md')]: {
  // top: 0,
  // left: 0,
  width: '100%',
  // display: 'flex',
  // alignItems: 'center'
  // }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  zIndex: 10,
  top: '0px',
  textAlign: 'center',
  position: 'absolute',
  paddingTop: theme.spacing('50vh'),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    // margin: 'unset',
    paddingTop: theme.spacing('80vh'),
  },
  right: 0,
  left: 0
}));

// ----------------------------------------------------------------------

export default function Home() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <RootStyle >
        {
          isDesktop ?
            <Box component="img" src='/static/home/home.jpg' width='100%' />
            :
            <Box component="img" src='/static/home/home_xs.jpg' width='100%' />
        }
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Stack direction='column' justifyContent='center' alignItems='center' spacing={3}>
              <Typography variant='h6' sx={{ width: { xs: '90%', md: '50%' } }}>
                4444 fashionable minis just trying to catch a vibe. With a carefully curated but extensive range of stylish assets, as with nature, no two good people are the same.
              </Typography>
              <Stack direction='row' spacing={5} justifyContent='center'>
                <a href='https://twitter.com/Goodpeoplenft' target='_blank'>
                  <Button color='primary' className='social-button'>
                    <Stack direction='row' spacing={2} alignItems='center'>
                      <SvgIcon><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z" fill="currentColor" /></SvgIcon>
                      <span>
                        Twitter
                      </span>
                    </Stack>
                  </Button>

                </a>
                <a href='https://www.instagram.com/goodpeople_nft/' target='_blank'>
                  <Button color='primary' className='social-button'>
                    <Stack direction='row' spacing={2} alignItems='center'>
                      <SvgIcon><path d="M12 2c2.717 0 3.056.01 4.122.06c1.065.05 1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465c-1.066.047-1.405.06-4.122.06c-2.717 0-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153a4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0a1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6z" fill="currentColor" /></SvgIcon>
                      <span>
                        Instagram
                      </span>
                    </Stack>
                  </Button>
                </a>

              </Stack>
            </Stack>
          </motion.div>

        </ContentStyle>
        {/* </Container> */}
      </RootStyle>
      {/* <Box sx={{ height: { md: '100vh' } }} /> */}
    </>
  );
}
