import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { IMG_CDN_URL } from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";
import { MenuShimmer } from "./shimmer";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [resInfo , menuItems,itemCategory] = useRestaurantMenu(resId);

    console.log(resInfo)
    console.log(menuItems)

    if(resInfo === null) return <MenuShimmer/>

    console.log(itemCategory,"itemscat")
   
    return (
     <div className="text-center ">
        <div className=" flex flex-col md:flex-row justify-around items-center bg-cover  bg-center md:py-10 py-4  px-2 md:px-10 object-fill  h-[200] text-center text-white w-full bg-slate-700 rounded-sm"> 
           <div className=" py-5 px-5 rounded-lg"> <img src={IMG_CDN_URL + resInfo?.cloudinaryImageId} alt={resInfo?.name} className="w-[120] h-[80] md:w-[250] md:h-[170] rounded-sm"  /></div>
            <div className="flex flex-col gap-2">
                <h2 className="font-extrabold text-white text-lg md:text-3xl">{resInfo?.name}</h2>
                <p className="hidden md:inline-block text-xl text-gray-400 font-bold">{resInfo?.cuisines?.join(",")}</p>
                <div className="flex justify-between gap-5 text-sm md:text-lg font-semibold">
                    <div className="bg-green-500 pr-2 rounded-md">
                        <i className="fa-solid fa-star mx-2"></i>
                        <span>{resInfo?.avgRating}</span>
                    </div>
                    <div className="restaurant-rating-slash">|</div>
                    <div>{resInfo?.sla?.slaString || "25 Mins" }</div>
                    <div className="restaurant-rating-slash">|</div>
                    <div>{resInfo?.costForTwoMessage}</div>
                </div>
            </div>
        </div>
        {itemCategory.map((category) => <RestaurantCategory key={category?.title} data = {category}/>)}

      

     </div>
    )
}

export default RestaurantMenu;