import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useGlobalContext } from '../../context/apiContext';
export default function SortBy() {



  const { handleSorting} = useGlobalContext()



  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200, }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleSorting}
          autoWidth
          label="Sort By"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem label="Name" value="Name">Name</MenuItem>
          <MenuItem label="Date" value="Date">Date</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}