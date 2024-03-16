import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/CartSlice";
import { ITEM_IMG_CDN_URL } from "../utils/constant";

const ItemList = (props) => {
    // console.log(items)
    const items = props.items;
    const cart = props.cart;

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item))
  }

    return (
        <div>
            {items.map((item) => (  
               <div key={item?.card?.info?.id} className="p-2 m-2 border-grey-800 border-b-2 flex justify-between">
                <div className="flex flex-col text-left w-9/12 ">
                <span>{item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? "🥩":"🫛"}</span>
                    <div className="text-base md:text-lg font-bold">

                        <span className="text-sm md:text-lg mr-3">{item?.card?.info?.name}</span>
                        <span className="text-sm md:text-lg">₹{(item?.card?.info?.price)? (item?.card?.info?.price)/100 : (item?.card?.info?.defaultPrice)/100}</span>
                    </div>
                    <div className="text-sm font-light"><span>{item?.card?.info?.description}</span></div>
                 </div>
                 <div className="w-4/12 md:w-3/12 p-2 md:p-4 relative">
                    <div className="absolute p-1 md:p-2 bottom-0 left-1/2 transform -translate-x-1/2">
                   {cart? <div className="flex md:flex gap-3"><span className="bg-green-400 px-2 py-0 md:px-3 text-white text-xs md:text-xl shadow-sm md:shadow-md font-bold md:font-extrabold cursor-pointer rounded-xs md:rounded-md" onClick={() => {handleAddItem(item)}}>+</span> <span className="bg-red-400 text-white font-extrabold text-xs md:text-2xl shadow-sm md:shadow-md px-[10px] md:px-3 py-0 cursor-pointer rounded-sm md:rounded-md" onClick={() => {handleRemoveItem(item)}}>-</span></div> :   <button className="bg-whit shadow-md text-sm md:text-lg md:shadow-lg py-1 px-2 md:px-4 text-green-400 font-bold  bg-white rounded-md hover:animate-pulse " onClick={() => handleAddItem(item)}>ADD</button>}
                    </div>  
                    <img src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId} alt=""  className="rounded-md"/>
                 </div>
               </div>
            )
            )}
        </div>
    )
}

export default ItemList;
