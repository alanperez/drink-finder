import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { 
  Modal,
  Backdrop,
  Fade} from '@mui/material';
import { useGlobalContext } from "../../context/apiContext";
import axios from "axios";

import { CardMedia } from '@mui/material';





const DrinkDetailCard =() => {

    const {currentDetail, setCurrentDetail} = useGlobalContext()
    const [initIngredient,setIngredients] = useState([])

    useEffect(() => {
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${
            currentDetail ? currentDetail : ""
          }`
        )
        .then((response) => {
          // console.log('inside the useffect for our details', response.data.drinks[0])

          setCurrentDetail(response.data.drinks[0]);
        });
    }, [currentDetail]);
    
  // console.log('clg inside detailcard', currentDetail)


  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("false");

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value) => {
    setImage(value);
    setOpen(true);
    // console.log(image);
  };

  const allIngredients = () => {
    let newIngredients = []

    for(let i = 1; i < 15; i++ ) {
      if(currentDetail[`strIngredient${i}`]) {
        newIngredients.push(currentDetail[`strIngredient${i}`])
      }
    }
    return newIngredients

  }
  useEffect(()=>{
    if(!currentDetail) return;
    setIngredients(allIngredients())
}, [currentDetail]);


// console.log('clg ingredient', initIngredient)
    return(




    

      <Grid  
        container
       direction="row"
       style={{height: "100%" }}>
        <Grid item xs={4}  alignItems="center">
          {
            (currentDetail < 1) ?
            null : 

         
          <div>
              <p>
                Drink:
                <span>{currentDetail.strDrink}</span>
              </p>
              <p>
                Category:
                <span>{currentDetail.strCategory}</span>
              </p>
              <p>
                Glass:
                <span>{currentDetail.strDrink}</span>
              </p>
              <p>
                Instructions:
                <span>{currentDetail.strInstructions}</span>
              </p>
              <p>
                Ingredients:
                <span>{initIngredient}</span>
              </p>
              <p>
                Date:
                <span>{new Date(currentDetail.dateModified).toLocaleDateString('en-GB', {   year: 'numeric', month: '2-digit',   day: '2-digit',    }).replace(/\//g, '-')}</span>
              </p>
          </div>    
           }
        </Grid>
        <Grid item xs={8}  alignItems="center">
        
        <Modal
        style={{display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundcolor: "red"
        }}}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open} timeout={500}>
          <img
            src={image}
            alt="asd"
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </Fade>
      </Modal>
          <CardMedia
        component="img"
        image={currentDetail.strDrinkThumb}
        onClick={(e) => handleImage(currentDetail.strDrinkThumb)}
      />
  
          
        </Grid>
      </Grid>
    

 

    )
}

// •	Name, Category, Glass, 
// Instructions, 
// Ingredients, date (formatted DD-MM-YYYY) and the image


export default DrinkDetailCard