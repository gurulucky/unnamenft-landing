/* eslint-disable */
// material
import { alpha, useTheme, styled } from '@material-ui/core/styles';
// import { Box, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Stack } from '@material-ui/core'
//
import { MotionInView, varFadeInDown } from '../../components/animate';

// ----------------------------------------------------------------------
const KEY_INFO = [
  ['Total number of NFTs', '10,000'],
  ['SKIN', '27'],
  ['BACKGROUND', '13'],
  ['EYES', '42'],
  ['MOUTH', '43'],
  ['CLOTHES', '39'],
  ['HEAD ACCESSORY', '25'],
  ['FIN', '11'],
  ['OTHER', '22'],
  ['LEGENDARY SHARK', '8']
];

const Root = styled(Box)`
  td,
  th {
    border-bottom: 1px solid #1CCAFF;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #1CCAFF;
  }
`;

const TableStyle = styled('table')(({ theme }) => ({
  borderCollapse: 'collapse',
  // width:'100%',
  maxWidth: '800px',
  width:'100%',
  [theme.breakpoints.up('md')]: {
    // margin: 'auto',
    width: '50%'
  }
}));

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 15)
  },
  backgroundImage:
    theme.palette?.mode === 'light'
      ? `linear-gradient(180deg, ${alpha(theme.palette?.grey[300], 0)} 0%, ${theme.palette?.grey[300]} 100%)`
      : 'none'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));


// ----------------------------------------------------------------------

export default function Rarity() {
  const theme = useTheme();
  const isLight = theme.palette?.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  return (
    <RootStyle>
      <MotionInView variants={varFadeInDown}>
        <Typography className='flux_title' variant="h2" color='primary.main' sx={{ textAlign: 'center', mb: 3 }}>
          RARITY
        </Typography>
      </MotionInView>
      <Root sx={{ maxWidth: '100%' }}>
        <Stack direction={{ xs:'column', md:'row'}} spacing={1} sx={{width:'100%'}}>
          {/* <Stack sx={{ width: { md: '50%', xs: '100%' } }}> */}
            <TableStyle>
              <tbody>
                {
                  KEY_INFO.map(info =>
                    <tr>
                      <td><Typography variant='h6'>{info[0]}</Typography> </td>
                      <td><Typography variant='h6'>{info[1]}</Typography> </td>
                    </tr>
                  )
                }
              </tbody>
            </TableStyle>
          {/* </Stack> */}
          <Stack sx={{ width: { xs: '100%',  md: '50%' } }}>
            <Box component='img' src='/static/RarityTable.png' width='auto'/>
          </Stack>
        </Stack>
      </Root>
    </RootStyle>
  );
}
