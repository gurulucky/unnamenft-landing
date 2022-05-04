/* eslint-disable */
import { useState } from 'react'
// material
import { useTheme, styled, alpha } from '@material-ui/core/styles';
import { Box, Grid, Stack, Typography, IconButton, Paper, SvgIcon } from '@material-ui/core';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../components/animate';

// ----------------------------------------------------------------------
const NAMES = [
  'Sandra',
  'Duke'
]

const ROLES = [
  'Designer & Founder',
  'Technical Lead'
];

const IMAGES = [
  '/static/sandra.jpg',
  '/static/duke.jpg',
]

const SOCIALS = [
  { icon: <SvgIcon><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z" fill="currentColor" /></SvgIcon>, href: 'https://twitter.com/Goodpeoplenft' },
  { icon: <SvgIcon><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z" fill="currentColor" /></SvgIcon>, href: 'https://twitter.com/Goodpeoplenft' },
];

const PLANS = [...Array(2)].map((_, index) => ({
  name: NAMES[index],
  role: ROLES[index],
  image: IMAGES[index],
  social: SOCIALS[index]
}));

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 3),
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 15)
  }
}));

function PlanCard({ plan, cardIndex }) {
  const theme = useTheme();
  const { name, role, image, social } = plan;

  const isLight = theme.palette?.mode === 'light';

  return (
    <Paper
      sx={{
        zIndex: 1,
        borderRadius: '10px',
        border: '1px solid black',
        width: { xs: '80%', sm: '50%', md: '35%' }
      }}
    >
      <Stack direction='row' sx={{ borderBottom: '1px solid black' }}>
        <Stack direction='row' justifyContent='space-around' alignItems='center' sx={{ width: '40%', borderRight: '1px solid black', p: 1 }}>
          <Typography variant='h6'>{name}</Typography>
          <a href={`${social.href}`} target='_blank'>
            <IconButton color='primary' size="large">
              {social.icon}
            </IconButton>
          </a>
        </Stack>
        <Stack direction='row' justifyContent='space-around' alignItems='center' sx={{ width: '60%', p: 1 }}>
          <Typography variant='h6'>{role}</Typography>
        </Stack>
      </Stack>
      <Stack sx={{ p: 3 }}>
        <Box component='img' src={image} width='auto' height='auto' sx={{ borderRadius: '10px' }} />
      </Stack>
    </Paper>
  );
}

export default function Team() {
  return (
    <RootStyle>
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <MotionInView variants={varFadeInDown}>
          <Typography className='flux_title' variant="h2" color='primary.main' sx={{ mb: 3 }}>
            Team
          </Typography>
        </MotionInView>
      </Box>

      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-around' alignItems='center' spacing={3}>
        {PLANS.map((plan, index) => (
          <PlanCard plan={plan} cardIndex={index} />
        ))}
      </Stack>
    </RootStyle >
  );
}
