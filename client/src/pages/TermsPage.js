import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
// import { Box, Button, Typography, Container, ListItem } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import ListItem from '@material-ui/core/ListItem'
// components
import { MotionContainer, varBounceIn, varFadeInRight } from '../components/animate';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Terms() {
  return (
    <RootStyle title="404 Page Not Found | Minimal-UI">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ margin: 'auto' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" color='primary.main' paragraph>
                Terms & conditions
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>

              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                This website is owned and operated by  Bogan Club Pty Ltd (ACN 653 688 414), which is the owner of the  Bogan Club concept, design and all associated intellectual property (“IP”) including the domain name bogan.club. Throughout the site, the term "we", "us", “our”, “Company", “ Bogan Club”, “bogan.club”, “ABC” as the context may require, refer to  Bogan Club Pty Ltd. By visiting our site and/or purchasing something from us, you engage in our service (“Service”) and agree to be bound by the following terms and conditions (“Terms”).
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                We reserve the right to update, change or replace any part of these Terms of services without prior written notice at any time, and it is your responsibility to periodically review these Terms to stay informed of updates. Any changes to the Terms will be in effect as of the last updated referenced on the site and at the top of these Terms.
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                Your continued use of this site after the last updated date will constitute your acceptance of agreement.
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                By visiting the website of our products merchants, in particular www.opensea.io or clubvirtual.io as the case may be, you also engage and agree to be bound by their terms and conditions.
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                This website is for informational purposes and serves as a binding contract for purchasers of ABC NFTs.
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                ABC is a generative collection of digital artwork (NFTs) housed and run on the Ethereum Network. Users and collector of these NFTs are solely responsible for the safety and the management of their own private assets, which include but are not limited to Ethereum wallets, validating all transactions and contracts generated by this website prior to and after purchases.
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                Users certify through purchase that they understand that, as the ABC smart contract runs on the Ethereum network and is bound by their system and terms, there is no ability to undo, reverse, or restore any transactions.
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                Any connected services included this website are provided “as is” and “as available” without any warranty of any kind. Use of this website constitutes your agreement that you are accepting sole responsibility for any and all transactions involving ABC digital collectibles.
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                By agreeing to these Terms, you represent that you are at least the age of majority in your state or province of residence.
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                You may not use our products and/or services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>

              <Typography variant="h5" color='primary.main' paragraph>
                OWNERSHIP, USAGE & IP
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                When you purchase your ABC NFT, you own the NFT. The ownership is transferred to you on the Ethereum blockchain for that individual piece of art, combination of traits and number. Ownership of the NFT is ruled by the smart contract and the Ethereum Network terms. We have no ability to alter, freeze, seize or modify the ownership of any ABC NFT.
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                All buyers acknowledge and agree that, following the purchase of any ABC NFT on the website, they do not have any legal ownership right, or title to any copyrights, trademarks or other intellectual property rights to the underlying artwork of the ABC NFT. All copyrights and intellectual property rights in the underlying artwork shall remain vested in ABC, including but not limited to the right to reproduce, to prepare derivative works, to display, to perform and to distribute the artworks.
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                Following the purchase of an ABC NFT on the website, the buyer may display or perform the ABC NFT publicly or privately for the purposes of promoting, sharing, discussing or commenting on the buyer’s purchase, ownership or interest in the ABC NFT.
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                The buyer of the ABC NFT may display or perform the NFT on:
                <ListItem>
                  (a) third party platforms in association with an offer to sell or trade the NFT; and
                </ListItem>
                <ListItem>
                  (b) within decentralised virtual environments (including other NFT marketplaces, virtual or physical galleries and virtual or physical museums).
                </ListItem>
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                The buyer acknowledges and agrees that it may not, nor permit any third party, without the prior written consent of ABC:
                <ListItem>
                  (a) make “commercial use” of any underlying artwork to the NFT including by selling the copies of, access to the artwork or otherwise commercially exploiting the artwork;
                </ListItem>
                <ListItem>

                  (b) modify, distort or modify the artwork in a way which would be prejudicial to the Artist’s interests;
                </ListItem>
                <ListItem>

                  (c) use the artwork to advertise, market or sell any third-party product or service;
                </ListItem>
                <ListItem>

                  (d) use the artwork in connection with any form of media that depicts hatred, intolerance, violence, cruelty or anything else that may be considered hate speech;
                </ListItem>
                <ListItem>

                  (e) sell, distribute for commercial gain, or otherwise commercialise merchandise that includes the artwork;
                </ListItem>
                <ListItem>

                  (f) attempt to trademark, copyright or otherwise acquire additional intellectual property rights in or to the artwork;
                </ListItem>
                <ListItem>

                  (g) attempt to mint an NFT representing the same artwork; and
                </ListItem>
                <ListItem>

                  (h) falsify, misrepresent, or conceal the ownership of the artwork or the NFT.
                </ListItem>
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>

              <Typography variant="h5" color='primary.main' paragraph>
                FEEDBACK
              </Typography>
              <Typography paragraph={true} sx={{ color: 'text.secondary' }}>
                You can submit comments, bug reports, ideas about the site or the project. By submitting any feedback, you agree that we are free to use them in any way we choose without additional compensation to you and you hereby grant us a perpetual, irrevocable, nonexclusive worldwide licence to incorporate and use the feedback for any purpose.
              </Typography>
            </motion.div>
            <Button to="/" size="large" variant="contained" component={RouterLink}>
              Go to Home
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle >
  );
}
