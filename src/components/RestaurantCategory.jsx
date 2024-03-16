import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {

    const [showItem , setShowItem] = useState(false);

    const handleClick = () => {
        setShowItem(!showItem)
    }

    console.log(data,"data")
    console.log(showItem)

    return (
        <div className="bg-grey-600 m-auto w-full md:w-6/12 my-4 py-4 border-grey-400 border-b-4">
            <div className="flex justify-between" onClick={handleClick}>
                <span className="text-black mx-4 font-bold text-sm text-nowrap md:text-lg ">{data.title}&nbsp;({data.itemCards.length})</span>
                <span className="text-black mx-4 size-9 text-lg  inline-block">{showItem?"△":"▽"}</span>
               
            </div>
            {showItem && <ItemList items = {data?.itemCards}/>}
           
        </div>
        
    )
}

export default RestaurantCategory;