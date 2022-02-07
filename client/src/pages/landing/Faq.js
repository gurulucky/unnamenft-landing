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
    title: "How many   Club NFTs will there be?",
    content:
      "There will be a total of 10,000   Club NFTs.",
  },
  {
    title: "What is the quality of a   Club NFT?",
    content: `Each   Club NFT available on the website is an 800 x 800 PNG file for all to right click and save, however only be owning a   Club NFT will you be able to unlock its super high resolution 4000 x 4000 (pixel) version, which will be available on IPFS.  You’ll then be free to print the art yourself to create your own physical items and of course, boast about your   Club NFT ownership and diner status. `,
  },
  {
    title: "When is the public sale?",
    content: `TBA`,
  },
  {
    title: 'What kind of NFTs are   Club NFTs?',
    content: 'ERC-721 with high resolutions images hosted on IPFS.',
  },
  {
    title: 'How can I get a   Club NFT?',
    content: 'One the sale commences, you will need a Metamask wallet holding enough Ethereum cryptocurrency to purchase a   Club NFT, which can be minted on our website. Or secondary sales will be available at opensea.io or clubvirtual.io or other reputable NFT marketplace/s.',
  },
  {
    title: 'What should I do after minting an   Club NFT?',
    content: 'You can use your   Club NFT as a profile picture (PFP) online, or you can resell your   Club NFT on the secondary market. We think you should consider holding it as it will be a part of a great gaming project, we have planned, where you will be able to use it!',
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
    title: 'How much is it for a   Club NFT?',
    content: '0.05 Eth + Gas',
  },
  {
    title: 'What is Gas or Gas fee?',
    content: 'Gas fees are payments made by users to compensate for the computing energy required to process and validate transactions on a blockchain.  These fees are not collected or retained by   Club.',
  },
  {
    title: 'After I buy a   Club NFT where will it be?',
    content: '  Club NFTs are safely stored in your Metamask wallet.',
  },
  {
    title: 'How many   Club NFTs can I buy at once?',
    content: 'You can buy (mint) up to 10   Club NFTs per transaction.',
  },
  {
    title: 'After I purchase a   Club NFT will I own the IP? ',
    content: 'No, NFTs and IP are two different things.  The copyright and all associated IP rights belong to   Club.',
  },
  {
    title: 'What are the royalty fees for secondary sales of   Club NFTs?',
    content: 'The royalty fees are fixed at 7.5%. A portion of those royalties will be used for marketing to help the   Club community grow. Our team is very committed to the long-term success of this project. ',
  },
  {
    title: 'Will you have any team tokens?',
    content: '500   Club NFTs will be reserved for promotion, give aways and our developers.',
  },
  {
    title: 'How can I contact an official   Club team member?',
    content: 'You can contact our official team be sending an email to our official email admin@.club',
  },
  {
    title: 'Do you do giveaways?',
    content: 'We will hold giveaways in our Discord server and social media accounts and be rewarding those who refers us to their friends.  Please follow through our links to benefit from these and don’t forget to refer us to your friends.  Please also refer to our Roadmap.',
  },
  {
    title: 'How do I get involved?',
    content: 'Head over to the Discord and join the conversation.',
  },
  {
    title: 'Will there be utility for the   Club?',
    content: 'Absolutely. Between our planned metaverse game, IRL meetup plans, planned merch sale release, and future NFT drops, we will continually adding value for those holding any of the   Club NFTs.  Also, you’ll be an exclusive member of the   Club socialite community and who knows what that may bring in the future.',
  },
  {
    title: 'Will you work with partners?',
    content: 'The   Club is committed to working with those how continue to promote and participate constructively in the NFT space.  If you are building the next exciting metaverse, a reputable streetwear brand or maybe a drink label looking to collaborate with an exciting and progressive NFT project (and passionate team) then we’d love to hear from you.  Please send us an email to admin@.club',
  },
  {
    title: 'Are   Club NFTs a good investment?',
    content: 'That is a decision for you to make. The   Club NFTs are non-fungible tokens that represent ownership of a digital artwork only. No information on this website is or may be considered investment advice.  Our team is committed to building a strong community around the project and we believe the   Club will have a long life ahead of it and will be an ever-evolving project. However, the success of the   Club relies on so many factors that no one knows! Please don’t spend money you can’t afford to lose.'
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10,3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10,15)
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
                  border: '1px solid #1CCAFF',
                  backgroundImage: 'repeating-linear-gradient(45deg,#0b1414,#0b1414 10px,#061724 10px,#061724 20px)'
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
