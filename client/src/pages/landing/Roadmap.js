/* eslint-disable */
import { useRef } from 'react';
import Slider from 'react-slick';
// material
import { useTheme, styled } from '@material-ui/core/styles';
// import { Box, useMediaQuery, Typography, ListItem, ListItemIcon, Stack } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Stack from '@material-ui/core/Stack'
import { Button } from '@material-ui/core';
// import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
//
import { MotionInView, varFadeInDown, varFadeInLeft, varFadeInRight } from '../../components/animate';
import CheckIcon from '@material-ui/icons/Check';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
// ----------------------------------------------------------------------

const RoadMapData = [
  {
    title: 'Pre Mint',
    contents: [
      'Pre-launch marketing campaign',
      'Gather and engage a strong community around Good People',
      'Collaboration with several NFT projects'
    ]
  },
  {
    title: 'Phase 1',
    contents: [
      'Reveal happens 72 hours after mint.',
      'Holders who minted either the full gold or full chrome silver people will be eligible to have a custom 3D character made for them by our in-house design team.',
      'The Merch store goes live with drippy clothing available for order.'
    ]
  },
  {
    title: 'Phase 2',
    contents: [
      'The good bank makes its first charity donation voted by the community.',
      'Our first drop of figurines goes into production awaiting public sale.'
    ]
  },
  {
    title: 'Phase 3',
    contents: [
      'The drop of 2-3 mini collections with high profile partners in the fashion and music industry.'
    ]
  },
  {
    title: 'Phase 4',
    contents: [
      'First Good People Meet up. The community will be given options for where would be most ideal for a good people holders and supporters to meet to appreciate fashion and music.',
      'Animated Good People Collection goes live.'
    ]
  },
  {
    title: 'Phase 5',
    contents: [
      'Work begins on the animated Good People series.',
      'Animated Good People Collection goes live.'
    ]
  }
]

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0)
  }
}));

const BorderStyle = styled(Stack)(({ theme }) => ({
  border: '1px solid #7dbbc3',
  borderLeft: '10px solid #7dbbc3',
  boxShadow: 'rgba(0, 0, 0, .2) 15px 28px 25px -18px',
  backgroundColor: '#e5b181',
  padding: '5px',
  margin: '10px'
}))

const RoadmapItem = ({ title, contents }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <BorderStyle direction='column'>
      <Typography variant="h4" color='primary' textAlign='center'>
        {title}
      </Typography>
      {
        contents.map((text,index) =>
          <ListItem key={index}>
            <ListItemIcon>
              <LabelImportantIcon />
            </ListItemIcon>
            <Typography variant={matches ? 'h6' : 'body1'}>{text}</Typography>
          </ListItem>
        )
      }
    </BorderStyle>
  )
}



export default function Roadmap() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const carouselRef = useRef();

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    Infinite: false,
    centerPadding: '60px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' }
      }
    ]
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <RootStyle>
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <MotionInView variants={varFadeInDown}>
          <Stack direction='row' justifyContent='space-around' alignItems='center'>
            <Button className='button-arrow' onClick={handlePrevious}>{`<`}</Button>
            <Typography className='flux_title' variant="h2" color='primary.main' sx={{ mb: 3 }}>
              Good Map
            </Typography>
            <Button className='button-arrow' onClick={handleNext}>{`>`}</Button>
          </Stack>
        </MotionInView>
      </Box>
      <Slider ref={carouselRef} {...settings}>
        {RoadMapData.map((item) => (
          <RoadmapItem key={item.title} title={item.title} contents={item.contents} />
        ))}
      </Slider>
      {/* <CarouselControlsArrowsBasic2 onNext={handleNext} onPrevious={handlePrevious} /> */}
    </RootStyle>
  );
}
