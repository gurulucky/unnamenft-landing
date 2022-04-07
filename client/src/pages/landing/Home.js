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

const ContentStyle = styled((props) => <Stack alignItems='center' spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  top: '0px',
  textAlign: 'center',
  position: 'absolute',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    // margin: 'unset',
    paddingTop: theme.spacing(20),
  }
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
            <Stack direction='column' alignItems='center' spacing={3}>
              <Typography color='text.secondary' variant='h2' >GOOD PEOPLE</Typography>
              <Typography variant='h6' sx={{ width: { xs: '90%', md: '50%' } }}>
                8,888 uniquely generated Shkary Sharks that have migrated to the cleaner and warmer network of Solana. Drawn by hand and assembled by code, no two Shkary Sharks are the same.
              </Typography>
              <Stack direction='row' spacing={5} justifyContent='center'>
                <a href='https://dicord.com' target='_blank'>
                  <IconButton color='primary' className='social-button'>
                    <Stack direction='row' spacing={2} alignItems='center'>
                      <SvgIcon><path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0a12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055a20.03 20.03 0 0 0 5.993 2.98a.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963c.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878a.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-2.981a.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38c0-1.312.956-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38c0-1.312.955-2.38 2.157-2.38c1.21 0 2.176 1.077 2.157 2.38c0 1.312-.946 2.38-2.157 2.38z" fill="currentColor" /></SvgIcon>
                      <span>
                        Discord
                      </span>
                    </Stack>
                  </IconButton>
                </a>
                <a href='https://twitter.com' target='_blank'>
                  <IconButton color='primary' className='social-button'>
                    <Stack direction='row' spacing={2} alignItems='center'>
                      <SvgIcon><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z" fill="currentColor" /></SvgIcon>
                      <span>
                        Twitter
                      </span>
                    </Stack>
                  </IconButton>

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
