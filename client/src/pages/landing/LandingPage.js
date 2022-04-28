/* eslint-disable */
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { scroller } from 'react-scroll';
// material
import { styled } from '@material-ui/core/styles';
import Stack from '@material-ui/core/Stack';
// components
import Page from '../../components/Page';
import About from './About'
import Future from './Future'
import Collection from './Collection'
import Faq from './Faq'
import Home from './Home'
import Rarity from './Rarity'
import Membership from './Utility'
import Minting from './Minting'
import Roadmap from './Roadmap'
import Team from './Team'
import AlertDialog from '../AlertDialog'
// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative'
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  const { hash } = useLocation();
  useEffect(() => {
    console.log(hash);
    scroller.scrollTo(hash.replace('#', ''), {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  })
  return (
    <RootStyle title="Good people" id="move_top">
      <Stack id='home'>
        <Home />

      </Stack>
      <ContentStyle>
        <Stack id='about'>

          <About />
        </Stack>
        <Stack id='future'>

          <Future />
        </Stack>
        <Stack id="roadmap">
          <Roadmap />
        </Stack>
        <Stack id='mint'>
          <Minting />

        </Stack>
        {/* <Stack id='collection'>

          <Collection />
        </Stack> */}
        <Stack id='rarity'>
          <Rarity />
        </Stack>
        <Stack id='utility'>
          <Membership />
        </Stack>
        <Stack id='team'>
          <Team />
        </Stack>

        <Stack id='faq'>
          <Faq />

        </Stack>
        <AlertDialog />
      </ContentStyle>
    </RootStyle>
  );
}
