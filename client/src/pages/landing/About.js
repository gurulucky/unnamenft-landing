/* eslint-disable */
import { alpha, useTheme, styled } from '@material-ui/core/styles';

// import { Box, Grid, Button, Container, Typography, Stack } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { varFadeInUp, MotionInView } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(7, 15)
  },
  // backgroundImage:
  //   theme.palette?.mode === 'light'
  //     ? `linear-gradient(180deg, ${alpha(theme.palette?.grey[300], 0)} 0%, ${theme.palette?.grey[300]} 100%)`
  //     : 'none'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginLeft:'auto',
  marginRight:'auto',
  marginBottom: theme.spacing(7),
  [theme.breakpoints.up('md')]: {
    width:'70%',
    textAlign: 'left',
    marginBottom: 0
  }
}));


const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0
};

// ----------------------------------------------------------------------

export default function About() {
  const theme = useTheme();

  return (
    <RootStyle>
      <ContentStyle>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" color='primary.main' textAlign='center' sx={{ mb: 3, mt: { md: 8 } }}>
            What are good people?
          </Typography>
          <Typography
            variant='h4'
            textAlign='center'
            paragraph
          >
            The good people are the brainchild of Just Sandy ( Sandra ) Her goal was always to build a space to hang out and connect, create and vibe with likeminded people.
          </Typography>
          <Typography
            variant='h4'
            textAlign='center'
            paragraph
          >
            With heavy influence of fashion and music, the long term goal is and always has been to keep pushing the boundaries of creation and see what magic we can create.
          </Typography>
          <Typography
            variant='h4'
            textAlign='center'
            paragraph
          > Here you’ll be able to follow the collective gang of creative intro and extroverts, living in their own little world they call home.
          </Typography>
        </MotionInView>
      </ContentStyle>
    </RootStyle >
  );
}
