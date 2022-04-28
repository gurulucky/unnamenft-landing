/* eslint-disable */
import { useState } from 'react';
import { alpha, useTheme, styled, withStyles } from '@material-ui/styles';

import { Box, Grid, Button, Container, Typography, Stack, List, ListItem, ListItemText } from '@material-ui/core';

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
    <Typography variant='h4'>
      Community building is our priority, and it is vital to continuously engage, grow and protect fellow Ions for long-term brand building.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>
  ],
  [
    <Typography variant='h3' color='secondary.main'>
      Engaging spaces(Executing)
    </Typography>,
    <Typography variant='h4'>
      At Imaginary Ones, your fellow ions are like your second family. #ionsfollowions and #ionssupportions forever! We aim to foster a closely-knitted community that can rub our expertise off one another and lift each other up to greater heights.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Physical Events(Imagining)
    </Typography>,
    <Typography variant='h4'>
      Exhibitions are one of the best ways non-NFT people can experience a brand. We can’t wait to meet our holders face to face.
      Our digital presence is everything. As we embark on the road to the metaverse, we explore different methods to enable Ions to experience better ways to interact and grow together.

    </Typography>
  ],
  [
    <Typography variant='h4'>
      Community building is our priority, and it is vital to continuously engage, grow and protect fellow Ions for long-term brand building.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>
  ],
  [
    <Typography variant='h3' color='secondary.main'>
      Engaging spaces(Executing)
    </Typography>,
    <Typography variant='h4'>
      At Imaginary Ones, your fellow ions are like your second family. #ionsfollowions and #ionssupportions forever! We aim to foster a closely-knitted community that can rub our expertise off one another and lift each other up to greater heights.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Physical Events(Imagining)
    </Typography>,
    <Typography variant='h4'>
      Exhibitions are one of the best ways non-NFT people can experience a brand. We can’t wait to meet our holders face to face.
      Our digital presence is everything. As we embark on the road to the metaverse, we explore different methods to enable Ions to experience better ways to interact and grow together.

    </Typography>
  ],
  [
    <Typography variant='h4'>
      Community building is our priority, and it is vital to continuously engage, grow and protect fellow Ions for long-term brand building.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>
  ],
  [
    <Typography variant='h3' color='secondary.main'>
      Engaging spaces(Executing)
    </Typography>,
    <Typography variant='h4'>
      At Imaginary Ones, your fellow ions are like your second family. #ionsfollowions and #ionssupportions forever! We aim to foster a closely-knitted community that can rub our expertise off one another and lift each other up to greater heights.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Physical Events(Imagining)
    </Typography>,
    <Typography variant='h4'>
      Exhibitions are one of the best ways non-NFT people can experience a brand. We can’t wait to meet our holders face to face.
      Our digital presence is everything. As we embark on the road to the metaverse, we explore different methods to enable Ions to experience better ways to interact and grow together.

    </Typography>
  ],
  [
    <Typography variant='h4'>
      Community building is our priority, and it is vital to continuously engage, grow and protect fellow Ions for long-term brand building.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>,
    <Typography variant='h3' color='secondary.main'>
      Full-time moderation team(Seeking)
    </Typography>,
    <Typography variant='h4'>
      A great community needs an excellent moderation team. The mod team will be filled with people with great personalities, effective communicators, and creative thinkers.
    </Typography>
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
  const [selectedIndex, setSelectedIndex] = useState(0);

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
            backgroundColor: 'white', borderRadius: '20px', height: '70vh', width: '70%', overflowY: 'auto', p: 5,
            "&::-webkit-scrollbar": {
              width: 20,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#daedbd"
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#de6b48",
              borderRadius: 2
            }
          }}>
            {
              CONTENTS[selectedIndex].map(item => item)
            }
          </Box>
        </Stack>
      </ContentStyle>
    </RootStyle >
  );
}
