import React from "react";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";

import { RandomCocktail } from "../../components/RandomCocktail/RandomCocktail";
import SearchBar from "../../components/SearchBar/SearchBar";

import { CocktailsContainer } from "../CocktailsContainer/CockTailsContainer";
import DrinkList from "../../components/CocktailLists/DrinkList";

export function MainLayout() {
  return (
    <Grid
      container
      spacing={4}
      justify="center"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} sm={6} md={12}>
        <h1>Logo</h1>
      </Grid>
      <Grid item xs={6} sm={6} md={12}>
        <SearchBar />
      </Grid>
      <Grid item xs={12}>
        <DrinkList/>
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <RandomCocktail />
      </Grid>
    </Grid>
  );
}
