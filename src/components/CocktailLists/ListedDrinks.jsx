import React from "react";
import Typography from '@mui/material/Typography';
import { Box,List, ListItem,ListItemText  } from "@mui/material";
import { useGlobalContext } from "../../context/apiContext";
import Loader from "../Loader/Loading";



const ListedDrinks = () => {


    const{initialResults, setCurrentDetail, loading} = useGlobalContext()

    // console.log(initialResults)
    return (
        <Box>

            {loading && <Loader />}
            {!loading && initialResults.length < 1 && <></>}
            <List sx={{maxHeight: 400, overflow: 'auto'}} >

        {initialResults.map((drink, indx) => (
        
        <ListItem key={indx}
        onClick={() => {
            setCurrentDetail(drink.idDrink);
            // console.log('cl onclick', currentDetail);
        }}>
      {/* <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemAvatar> */}
      <ListItemText
        primary={drink.strDrink}
        secondary={
            <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
              >
              {drink.strCategory}
            </Typography>
            <br/>
            {drink.strGlass}
          </React.Fragment>
        }
        />
    </ListItem>
    ))}
          </List>
        </Box>
    )
}

export default ListedDrinks