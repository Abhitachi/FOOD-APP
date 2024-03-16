// import { restaurantList } from "../utils/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { swiggy_api_url } from "../utils/constant";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./shimmer";



const Body = () => {
    const [searchText , setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [errorMessage , setErrorMessage] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    console.log(filterRestaurants); 
    console.log(searchText);

    // effect to render data from apis
    useEffect(() => {
         fetchData();
    },[])

    // fetching data from lie swiggy api
 
        const fetchData = async() =>{
            try{
                const data = await fetch(swiggy_api_url)
                const json = await data.json();
        
                // console.log(json);
    
                async function checkJsonData(jsonData){
                    for(let i = 0; i < jsonData?.data?.cards.length; i++){
                        let checkJSON = json.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants;
    
                        if(checkJSON !== undefined) return checkJSON;
                    }
                }
    
                const resData = await checkJsonData(json);
                
                // console.log(checkJSON)
                setRestaurants(resData)
                setFilterRestaurants(resData)
            }catch (error){
                console.log(error);
            }

        }

    function filterRestaurant (searchText , restaurants){
        console.log("restaurants",restaurants)
        if(searchText !== ""){
            const filterData = restaurants.filter((restaurant) => {
                return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase());   
            })
            console.log("filtered",filterData)
            setFilterRestaurants(filterData);
            setErrorMessage("");
            if (filterData?.length === 0) {
                setErrorMessage(
                  `Sorry, we couldn't find any results for "${searchText}"`
                );
              } 
        }else{
            setErrorMessage("");
            setFilterRestaurants(restaurants);
        }
    }

    console.log("length",restaurants.length)
    return (restaurants.length === 0 ?<Shimmer /> :
        <div className="z-2 md:mx-auto">
        <div className="flex justify-evenly align-middle  box-border m-5">
                <div className="custom-input-width flex justify-between md:inline-block">
                <input type="text" className="border border-solid border-black w-full md:w-4/6  h-8 md:h-12 rounded-md placeholder:font-bold placeholder:px-2 mr-3 md:mr-4" 
                placeholder="Search for restaurant and Food..." 
                value={searchText} 
                onChange={(e) => {
                    setSearchText(e.target.value)
                    filterRestaurant(searchText,restaurants)
                }}
                />
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-2 py-1 h-8 text-xs md:text-lg md:py-1 md:px-4 rounded-md md:rounded-full md:h-12" onClick={() => {
                const data = filterRestaurant(searchText,restaurants)
                console.log("data",data)
               
            }}>Search</button>
                </div>
        </div>
        {errorMessage && <div className="error-container text-center text-lg font-semibold text-red-600">{errorMessage}</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filterRestaurants.map((restaurant) => {
                return(
                    <Link to={"/restaurant/" + restaurant?.info?.id} 
                    key={restaurant?.info?.id}
                    >
                    {restaurant?.data?.promoted ? <RestaurantCardPromoted {...restaurant?.info}/> :  <RestaurantCard  {...restaurant?.info} />}
                   
                    </Link> 
                )
            })}
        </div>
        </div>
    )
}

export default Body;