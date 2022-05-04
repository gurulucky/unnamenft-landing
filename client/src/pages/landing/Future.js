/* eslint-disable */
import { useState } from 'react';
import Slider from "react-slick";
import { alpha, useTheme, styled, withStyles } from '@material-ui/styles';

import { Box, Grid, Button, Container, Typography, Stack, List, ListItem, ListItemText, useMediaQuery } from '@material-ui/core';

import { varFadeInUp, MotionInView } from '../../components/animate';

// ----------------------------------------------------------------------
const ITEMS = [
  'Community',
  'Figurines',
  'The Good Bank',
  'Animation',
  'Collaborations',
  'Merch',
  'Metaverse',
]

const CONTENTS = [
  [
    'We are looking to build a diverse community of art, fashion and music enthusiasts. An engaged community, with excellent moderators combined with a dedicated team will be integral to the long term development of The Good People brand.',
    'We will build a community that encourages creativity and exploration of new ideas. We will have team members constantly on hand to assist the community and provide regular project updates and milestones. We will also organise regular AMAs where important announcements will be made and the community will be able to interact with the team.',
    'Post launch, we will organise real life events where the will bring the community together, good vibes only.'
  ],
  [
    'Our main offering in the real world will be  focused on providing the most impressive figurines that will be a truly one of a kind collectible. These will be high quality, colorful and meticulously built, guaranteed to be objects of desire.',
    'We will also be developing an application that will allow you to design your custom 1of 1  figurine, with a wide range of assets. I mean who doesn’t want a stylish mini of themselves?'
  ],
  [
    'The Good Bank will be a community governed treasury, where there will be proposals and votes on how the funds will be used. The funds will be earmarked to potentially cover charity donations, real life events and to support artists and creatives who are a part of the community. The Good Bank will be funded from 5% of revenue from our primary mint and also 15% of royalties from sales in the secondary market. Merch sales will also contribute 10% of revenue to TGB.'
  ],
  [
    'Animation is a crucial part of the future of The Good People. We will be building a team of the most talented animators to work on a series of short films, with which we will look to approach the most popular streaming platforms. We will also look to release an animated NFT collection in the future as we expand the Good People ecosystem.'
  ],
  [
    'Strategic partnership will be crucial for the community and future of the project. We are building for the long term and emphasis is on long term sustainability of the project.',
    'We will look to foster partnerships with world class brands in high fashion and music to create limited collections that will help increase the reach of the project and also enhance our reputation. Good People holders will have exclusivity to enter into a WL raffle for these collaborations.',
    'We will also be partnering with other notable NFT projects to grow our community and form allies, just the way good people do!'
  ],
  [
    "We will be taking quality time to curate the best range of merch including apparel, rugs, stickers and keychains.  All of our products will feature the project's quintessential colorful 3D form, in limited drops so they are truly collectibles.",
    `Good People holders will also receive discounts on merch and will also be able to make suggestions on merch drops that they would like to see. FInally, 10% of merch revenue will be sent to grow The Good Bank.`
  ],
  [
    `While the Metaverse is still in its infancy, with a lot of development still going on. We have the lofty ambition of becoming the go to brand for style on the verse! We will be responsible for dripping up all your avatars with the most unique assets.`,
    `We will also be researching the possibility of a Sims style game, where a community can gather around fashion and music. Ambitious yes, but impossible is nothing they say? The goal is to keep on top of development and adequately prepared for when the metaverse kicks into full motion.`
  ]
]

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
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: theme.spacing(7),
  [theme.breakpoints.up('md')]: {
    width: '70%',
    textAlign: 'left',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

const FutureListItem = withStyles({
  root: {
    borderRadius: '25px',
    "&$selected": {
      backgroundColor: "#de6b48",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    "&$selected:hover": {
      backgroundColor: "#f4b9b2",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    "&:hover": {
      backgroundColor: "#f4b9b2",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    }
  },
  selected: {}
})(ListItem);

export default function Future() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [selectedIndex, setSelectedIndex] = useState(0);

  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    Infinite: false,
    centerPadding: '60px',
    afterChange: current => handleListItemClick({}, current)
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <RootStyle>
      <ContentStyle>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" color='primary.main' textAlign='center' sx={{ mb: 3, mt: { md: 8 } }}>
            Future
          </Typography>
        </MotionInView>
        {
          isDesktop ?
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Stack>
                <List component="nav" aria-label="secondary mailbox folder">
                  {
                    ITEMS.map((item, index) =>
                      <FutureListItem
                        button
                        selected={selectedIndex === index}
                        onClick={(event) => handleListItemClick(event, index)}
                      >
                        <ListItemText primary={<Typography variant='h4'>{item}</Typography>} />
                      </FutureListItem>
                    )
                  }
                </List>
              </Stack>
              <Box sx={{
                backgroundColor: 'white', borderRadius: '20px', height: '70vh', width: '70%', overflowY: 'auto', p: 5
              }}>
                {
                  CONTENTS[selectedIndex].map(item => item)
                }
              </Box>
            </Stack>
            :
            <Stack direction='column' spacing={2}>
              <Slider {...settings}>
                {
                  ITEMS.map((item, index) =>
                    <FutureListItem
                      button
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}
                    >
                      <ListItemText primary={<Typography variant='h4' textAlign='center'>{item}</Typography>} />
                    </FutureListItem>
                  )
                }
              </Slider>
              <Box sx={{
                backgroundColor: 'white', borderRadius: '20px', height: '70vh', overflowY: 'auto', p: 5
              }}>
                {
                  CONTENTS[selectedIndex].map(item =>
                    <Typography variant='h4' color='secondary.main' paragraph>
                      {item}
                    </Typography>)
                }
              </Box>
            </Stack>
        }

      </ContentStyle>
    </RootStyle >
  );
}
