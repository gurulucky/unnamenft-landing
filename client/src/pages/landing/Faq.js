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
    title: "What is an NFT?",
    content: `A non-fungible token, also known as an NFT is a unique unit of data that is stored on a digital ledger (Blockchain). They often represent easily reproducible items such as digital images, photos, videos and audio and use blockchain technology to show verified proof of ownership.`,
  },
  {
    title: "How many    NFTs will there be?",
    content:
      "There will be a total of 10,000    NFTs.",
  },
  {
    title: "What is the quality of a    NFT?",
    content: `Each    NFT available on the website is an 800 x 800 PNG file for all to right click and save, however only be owning a    NFT will you be able to unlock its super high resolution 4000 x 4000 (pixel) version, which will be available on IPFS.  You’ll then be free to print the art yourself to create your own physical items and of course, boast about your    NFT ownership and diner status. `,
  },
  {
    title: "When is the public sale?",
    content: `TBA`,
  },
  {
    title: 'What kind of NFTs are    NFTs?',
    content: 'ERC-721 with high resolutions images hosted on IPFS.',
  },
  {
    title: 'How can I get a    NFT?',
    content: 'One the sale commences, you will need a Metamask wallet holding enough Ethereum cryptocurrency to purchase a    NFT, which can be minted on our website. Or secondary sales will be available at opensea.io or virtual.io or other reputable NFT marketplace/s.',
  },
  {
    title: 'What should I do after minting an    NFT?',
    content: 'You can use your    NFT as a profile picture (PFP) online, or you can resell your    NFT on the secondary market. We think you should consider holding it as it will be a part of a great gaming project, we have planned, where you will be able to use it!',
  },
  {
    title: 'What is Metamask?',
    content: 'MetaMask is a decentralized digital wallet that can be used to store digital currency (cryptocurrency) and NFTs. It can be accessed through a browser extension or through a mobile/smart phone app.',
  },
  {
    title: 'I don’t have a cryptocurrency wallet yet?',
    content: 'If you don’t have a digital wallet, you can create a Metamask wallet by visiting https://metamask.io/',
  },
  {
    title: 'How much is it for a    NFT?',
    content: '0.05 Eth + Gas',
  },
  {
    title: 'What is Gas or Gas fee?',
    content: 'Gas fees are payments made by users to compensate for the computing energy required to process and validate transactions on a blockchain.  These fees are not collected or retained by   .',
  },
  {
    title: 'After I buy a    NFT where will it be?',
    content: '   NFTs are safely stored in your Metamask wallet.',
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
              <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}
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
