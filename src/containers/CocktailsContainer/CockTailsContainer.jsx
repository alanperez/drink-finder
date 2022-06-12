import React from "react";

import DrinkList from "../../components/CocktailLists/DrinkList";
import FilterBy from "../../components/FilterBy/FilterBy";
import SortBy from "../../components/SortBy/SortBy";
import { Grid } from "@mui/material";
export function CocktailsContainer() {

    return (
        <Grid container spacing={12}>

            <Grid item xs={12} >
                <DrinkList/>
            </Grid>
        </Grid>
    )


}