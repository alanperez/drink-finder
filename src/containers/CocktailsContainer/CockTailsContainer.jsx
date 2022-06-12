import React from "react";

import DrinkList from "../../components/CocktailLists/DrinkList";
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