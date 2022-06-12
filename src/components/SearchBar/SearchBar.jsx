import React, {useState} from "react";
import Button from '@mui/material/Button';

import { Grid,Autocomplete,TextField } from "@mui/material";
import { useAPI } from "../../context/apiContext";
import { useGlobalContext } from "../../context/apiContext";
const SearchBar = () => {

  const {setLocalStorage, initialHistory} = useGlobalContext()
  const {searchDrinks} = useAPI()

  const [search, setSearch] = useState()


  const handleSubmit = (e) => {
    e.preventDefault();
    searchDrinks(search);
    // console.log('clg set search',setSearch)
    setLocalStorage(search)
  };
  // console.log('clg drink search term', drinkSearch)
    return (
      <form onSubmit={handleSubmit}>

<Grid container   spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center">
     <Grid container direction="row" item xs={12} md={12}  > 
     <Autocomplete
     sx={{ width: 300 }}
            autoSelect
            freeSolo
            id="search"
            onChange={(event, value) => setSearch(value)}
            options={initialHistory}
            getOptionLabel={(option) => typeof option === 'string'
            || option instanceof String ? option : ""}
            filterSelectedOptions
    
            autoHighlight={true}
            renderInput={params => (
              <TextField
              {...params}
              id="search"
              name="search"
              variant="outlined"
              label="Search"
              
              placeholder="Search for Drink"
              />
              )}
              />

        <Button  variant="contained" color="secondary" type="submit">
          Search
        </Button>
     </Grid>
</Grid>
              </form>


               



      
    )
}


export default SearchBar