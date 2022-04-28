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
    title: '0% - The Launch',
    contents: ['Aussie Bogan Club NFTs will be available for minting.']
  },
  {
    title: '25% - ABC Airdrop',
    contents: [
      'Exclusive for the first few NFT holders (randomly selected) Chief Bogan will airdrop 50 NFTs.',
      'ABC NFT holders to commence uploading, to our social channels, their creations including skits, art and photos for a chance to be selected as a winner by the ABC community.',
      'Aussie Bogan Club utility commences.',
      'Enjoy the interaction with your fellow Aussie Bogan Club member.'
    ]
  },
  {
    title: '50% - More Giveaways & Utility',
    contents: [
      'A further 50 ABC NFTs will be given away to existing NFT holders.',
      'ABC breeding program specification development commences.',
      'Pursue utility expansion opportunities including partnerships.'
    ]
  },
  {
    title: '75% - Merch. Store & Next ABC NFT Drop',
    contents: [
      'Continue to pursue utility expansion opportunities including partnerships.',
      'Commence development of merchandise store and collection.',
      'Chief Bogan will give away another 50 ABC NFTs to holders on a randomly selected basis.',
      'Creation of next ABC NFT drop will commence including integration into breeding program.'
    ]
  },
  {
    title: '100% - Bogans Rejoice!',
    contents: [
      'A new beginning for the Aussie Bogan Club',
      'In another act of generosity, Chief Bogan will give away another 50 ABC NFTs to holders on a randomly selected basis.',
      'Continue with development of ABC merchandise, breeding program, next ABC NFT drop creation and utility expansion including partnerships.',
      'ABC NFT holders encouraged to upload, to our social channels, their creations including skits, art and photos for a chance to be selected as winners by the ABC community and enjoy the prizes including having their creations turned into NFTs.'
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
      <Typography variant="h4" color='primary'>
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
              Roadmap
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
