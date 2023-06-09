import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loginpage from './Loginpage';

const useStyles = makeStyles(theme => ({
  WaitingButton: {
    '&:hover': {
      backgroundColor: 'white'
    }
  },
  HomeBox: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '& Button': {
      [theme.breakpoints.down('sm')]: {
        marginBottom: 20
      }
    }
  }
}));
const Homepage = () => {
  const state = useSelector(state => state.connectWallet.walletConnected);
  const classes = useStyles();
  let navigate = useNavigate();
  return (
    <div>
      {state ? (
        <Box
          sx={{
            background: '#240b36',
            width: '100%',
            height: '100vh'
          }}
        >
          <Navbar />
          <Container
            maxWidth="lg"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginTop: 20,
              padding: 1
            }}
          >
            <Typography variant="h2" align="center" gutterBottom color="common.white">
              A Blockchain Loan Lending Decentralized Application
            </Typography>
            <Typography variant="h6" align="center" gutterBottom color="gray">
              Borrow and Lend loans on the blockchain while earning interest of upto 50%.
            </Typography>
            <Box
              mt={3}
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className={classes.HomeBox}
            >
              <Button
                variant="contained"
                className={classes.WaitingButton}
                sx={{ color: 'primary.main', backgroundColor: 'white', marginRight: 2 }}
                onClick={() => navigate('/borrow')}
              >
                Borrow on Ethereum
              </Button>
              <Button sx={{ border: '1px solid white' }} onClick={() => navigate('/lend')}>
                Invest on Ethereum
              </Button>
            </Box>
          </Container>
        </Box>
      ) : (
        <Loginpage />
      )}
    </div>
  );
};

export default Homepage;
