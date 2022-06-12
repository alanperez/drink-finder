import React, {useEffect,useState} from "react";


import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import Loader from "../Loader/Loading";
import axios from "axios";

export function RandomCocktail() {
    
    const [randomCocktail, setRandomCocktail] = useState([])
    const [loading, setLoading] = useState(false)

    const randomDrink = async () => {
        try {
            setLoading(true);
            const res = await axios('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            setRandomCocktail(res.data.drinks[0])
        } catch (err) {
            console.log('error in random drank', err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        randomDrink()
    },[])

    // console.log(randomCocktail)
    // const { loading, randomCocktails } = useGlobalContext();
    if (!randomCocktail) {
      return <Loader />;
    }

    // console.log('clg random cocktail', randomCocktail)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        image={randomCocktail.strDrinkThumb}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {randomCocktail.strDrink}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Category: {randomCocktail.strCategory}
        </Typography>
        <Typography variant="body3" color="text.tertiary">
            Glass: {randomCocktail.strGlass}
        </Typography>
      </CardContent>
    </Card>
  );
}
