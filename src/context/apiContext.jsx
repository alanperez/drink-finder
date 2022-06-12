import React,{useContext, useState, useEffect, createContext } from "react";
import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';
import LocalBarRoundedIcon from '@mui/icons-material/LocalBarRounded';
import LiquorRoundedIcon from '@mui/icons-material/LiquorRounded';
import LiquorIcon from '@mui/icons-material/Liquor';
import axios from "axios";
const APIContext = createContext();

export function APIContextProvider({children}) {
    // Initial Loading
    const [loading, setLoading] = useState(false)
    //  Lookup a random cocktail
    const [randomCocktails, setCocktails] = useState([])
    // Search cocktail by name
    const [searchName, setSearchName] = useState("")

    const [initialResults, setResults] = useState([])
    // save to our recent searches
    const [recentSearch, setRecentSearch] = useState([])

    const [initDetail, setDetail] = useState([])


    // save user searches to ls
    const [savedSearched, setSavedSearches] = useState([])

    // specific drink
    const[currentDetail, setCurrentDetail] = useState([])
    // sorting by name
    const [names, setNames] = useState([]);
    // sort by date
    const [initDates, setDates] = useState([]);
    const [drinkSearch, setDrinkSearch] = useState([])


    const getIcon = (name) =>{
        switch (name) {
          case 'Cocktail glass':
            return <LocalBarRoundedIcon />;
          case 'Whiskey glass':
            return <SportsBarRoundedIcon/>;
          case 'Beer mug':
            return <LiquorRoundedIcon/>;
          case 'Ordinary Drink':
            return <SportsBarRoundedIcon/>;
          default:
            return <LiquorIcon />;
        }
      }


    
      const initialHistory = JSON.parse(localStorage.getItem('history')) || [];
      let [history, setHistory] = useState(initialHistory);
      const setLocalStorage = (item) => {
        const hist = JSON.parse(localStorage.getItem('history')) || [];
        if (hist.indexOf(item) !== -1) {
            hist.splice(hist.indexOf(item), 1)
        }
        if (hist.length > 4) {
            hist.pop();
        }
        hist.unshift(item);
        localStorage.setItem('history', JSON.stringify(hist))
        setHistory(hist);
    }
    useEffect(() => {
        // console.log('console.log history useeffect,', history);
        // console.log(data)
    }, [history]);

    useEffect(() => {
        setHistory(JSON.parse(localStorage.getItem('history')))
        // console.log('clg history inside useffect 2', history)
    }, []);
    const searchDrinks = async (search) => {
        setLoading(true)

        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
            const {data} = await axios(url)
            const {drinks} = data

            // modify the date
            const newDrinks = drinks.map(obj => { return { ...obj,strGlass: getIcon(obj.strGlass) ,dateModified: new Date(obj.dateModified).toLocaleDateString('en-GB', {   year: 'numeric', month: '2-digit',   day: '2-digit',    }).replace(/\//g, '-') } })
            
            // console.log('clg newdrinks', newDrinks)
            setResults(newDrinks)
    
            // console.log('clg search inside search drinks func', search)
            setSavedSearches(search)
            setRecentSearch(search)
            // console.log('clg saved terms', savedSearched, recentSearch)
            setDrinkSearch(search)
        } catch (error) {
         
            console.log('clg search drinks function error', error)
        }
        setLoading(false)
    }


        // const sortByName = () => {
       
        //   const sortedNames = initialResults.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
        //   setNames(sortedNames);
        //   console.log('sorted names inside sortByNameFunc', sortedNames);
          
        // };

        // const sortByDate = () => {
       
        //     const sortedDates = initialResults
        //     //  spread in our data while only formatting the date
        //     .map(obj => { return { ...obj, dateModified: new Date(obj.dateModified).toLocaleDateString('en-GB', {   year: 'numeric', month: '2-digit',   day: '2-digit',    }).replace(/\//g, '-') } })
        //     // sort date
        //     .sort((a, b) => {
        //         a = a.dateModified.split('-');
        //         b = b.dateModified.split('-');
        //         return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
        //     })
        //     setDates(sortedDates);
        //     console.log('sorted dates inside SortByDateFunc', sortedDates);
            
        //   };

        // console.log('clg names', names);
        // console.log('clg dates', initDates)

    const sortByDate = (array) =>
    array.sort( (a, b) => {
        a = a.dateModified.split('-');
        b = b.dateModified.split('-');
        return b[2] - a[2] || b[1] - a[1] || b[0] - a[0];
    });
  const sortByName = (array) =>
    array.sort( (a, b) => {
      return a.strDrink.localeCompare(b.strDrink);
    });
    const [SortingValue, setSortingValue] = useState("");
    const handleSorting = (e) => {
      setSortingValue(e.target.value);
      // console.log(e.target.value, SortingValue);
      switch (e.target.value) {
        case "Date":
          setDates(sortByDate(initialResults));
          break;
        case "Name":
          setNames(sortByName(initialResults));
          break;
        default:
          console.log('default after cases')
      }
      
    };
    return (
        <APIContext.Provider value={{initialHistory,setLocalStorage,handleSorting,sortByName, sortByDate,loading,randomCocktails,setSearchName, initialResults, initDetail,searchDrinks, recentSearch, currentDetail, setCurrentDetail, drinkSearch}}>
            {children}
        </APIContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(APIContext);
  };

export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }