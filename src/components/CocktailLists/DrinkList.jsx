import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useGlobalContext } from '../../context/apiContext';
import Typography from '@mui/material/Typography';

import ListedDrinks from './ListedDrinks';
import DrinkDetailCard from '../CocktailDetail/DrinkDetailCard';

import SortBy from '../SortBy/SortBy';
import FilterBy from '../FilterBy/FilterBy';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const DrinkList = () => {


  const {initialResults,currentDetail, setCurrentDetail} = useGlobalContext()

  // console.log('clg init', initialResults)
  // console.log('clg curr det', currentDetail)
    return (
      
        <Box sx={{ borderRadius: '5px' }} >
          {initialResults < 1 ? (
            <div></div>
          ):
    <>
        <Grid container>
          <div></div>
        </Grid>
        <Grid container >
            <Grid container item xs={12} md={8} >
                <FilterBy/>
            </Grid>
            <Grid container item xs={12} md={4} >
                <SortBy />
            </Grid>
          <Grid item xs={12} md={3}  >
              <Item sx={{height: 500}}>
                <Typography variant='h5'>Drink Results</Typography>
                <ListedDrinks />
              </Item>
              
          </Grid>
          <Grid item xs={12} md={9} >

              <Item sx={{height: 500}}><Typography variant='h5'>Full Details</Typography>
              <DrinkDetailCard/>
              </Item>
            
          </Grid>
        </Grid>
          </>
          }
        
      </Box>
    )
}


export default DrinkList