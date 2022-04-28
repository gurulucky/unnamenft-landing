import { useState } from 'react';
// material
import { styled} from '@material-ui/core/styles';
// import { Box, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Accordion from '@material-ui/core/Accordion'
import Typography from '@material-ui/core/Typography'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
// import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
//
import { MotionInView, varFadeInDown, varFadeInRight } from '../../components/animate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// ----------------------------------------------------------------------
const FAQ_DATA = [
  {
    title: "When is the mint date?",
    content: `TBA  - We will announce the mint date on our twitter and discord, so follow us and stay tuned.`,
  },
  {
    title: "How big will the collection be?",
    content:
      "Our collection will feature 4444 very good people. Each NFT will be a unique 3D hand-drawn collectible and will be available on OpenSea on Ethereum.",
  },
  {
    title: "What are your Secondary Royalty fees?",
    content: `5%`,
  },
  {
    title: 'Who are the Goodest People?',
    content: 'The Goodest People will be our equivalent of a whitelist or allowlist. We will constantly build it up via Twitter, where we will reward community members who are early, bringing the vibe, engaged and creative. We will also offer giveaways and partnerships with other projects to introduce their communities to ours.',
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10,3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10,30)
  }
}));

export default function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <RootStyle>
      <Box sx={{ mb: 5 }}>
        <MotionInView variants={varFadeInDown}>
          <Typography className='flux_title' variant="h2" textAlign='center' color='primary.main' sx={{ mb: 3 }}>
            Faq
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInRight}>
          {
            FAQ_DATA.map((item, index) =>
              <Accordion key={item.title} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}
                sx={{
                  border: '1px solid #7dbbc3',
                  // backgroundImage: 'repeating-linear-gradient(45deg,#0b1414,#0b1414 10px,#061724 10px,#061724 20px)'
                  backgroundColor:'primary.dark'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                >
                  <Typography variant='h4' color='primary.main' sx={{ width: '90%', flexShrink: 0 }}>
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='h6'>
                    {item.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          }
        </MotionInView>
      </Box>
    </RootStyle>
  );
}
