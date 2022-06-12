import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { 
  Modal,
  Backdrop,
  Fade} from '@mui/material';
import { useGlobalContext } from "../../context/apiContext";
import axios from "axios";
import {Card} from '@mui/material';
import { CardMedia } from '@mui/material';



import {Typography} from '@mui/material';

const DrinkDetailCard =() => {

    const {currentDetail, setCurrentDetail,loading, setLoading} = useGlobalContext()
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
        newIngredients.push(currentDetail[`strIngredient${i}`] + ', ')
      }
    }
    // let modifiedIngr = newIngredients.join(", ")

    return newIngredients

  }
  useEffect(()=>{
    if(!currentDetail) return;
    setIngredients(allIngredients())
}, [currentDetail]);


console.log('clg ingredient', initIngredient)
    return(




    

      <Grid  
        container
       direction="row"
  
       >
        <Grid item xs={6}  direction="column" alignItems="center" >
          {
            (currentDetail < 1) ?
            null : 

         
          <div>
               <Typography gutterBottom variant="h4" component="div">
                {currentDetail.strDrink}
              </Typography>
             
              <Typography variant="subtitle1" gutterBottom component="div">
                Category: {currentDetail.strCategory}
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Glass: {currentDetail.strGlass}
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Instructions: {currentDetail.strInstructions}
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Ingredients: {initIngredient}
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
              {new Date(currentDetail.dateModified).toLocaleDateString('en-GB', {   year: 'numeric', month: '2-digit',   day: '2-digit',    }).replace(/\//g, '-')}
              </Typography>

          </div>    
           }
        </Grid>
        <Grid item xs={6}  alignItems="center">
        
        <Modal
        style={{display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundcolor: "blue"
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
      <Card sx={{ maxWidth: 350 }}>

          <CardMedia
        component="img"
        image={currentDetail.strDrinkThumb}
        style={{ cursor: 'pointer' }}
   
        onClick={(e) => handleImage(currentDetail.strDrinkThumb)}
        />
        </Card>
  
          
        </Grid>
      </Grid>
    

 

    )
}

// •	Name, Category, Glass, 
// Instructions, 
// Ingredients, date (formatted DD-MM-YYYY) and the image


export default DrinkDetailCard