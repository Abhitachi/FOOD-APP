import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/CartSlice";
import ItemList from "./ItemList";

const Cart = () => {

    const currPrice =  useSelector(store => store.cart.price) 

    console.log(currPrice)

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return(
        <div className=""> 
            <div className="md:m-auto w-full md:w-6/12 text-center">
            <h1 className="text-center m-auto inline-block  w-6/12 text-2xl font-bold my-4 bg-green-400 px-2 rounded-md py-1 text-white">Cart</h1>
           
            </div>
            <div className="w-full md:w-6/12 m-auto ">
                {cartItems.length == 0 && <h1 className="text-center font-bold text-sm md:text-lg">Your Cart is Empty, Please Add Items to the Cart</h1>}
                {<ItemList items={cartItems} cart={true}/> }
            </div>
            <hr className="mx-auto w-9/12 text-center p-[1px] mt-3 bg-gray-600"/>
            <div className="md:text-center flex align-middle justify-between w-full md:w-9/12 mx-0 md:mx-auto">
            <h2 className=" font-bold text-center text-red-500 inline-block mx-2 md:mx-4 text-sm md:text-lg px-2 md:px-4 rounded-md py-1 my-4  shadow-md bg-white cursor-pointer  hover:shadow-lg transition-shadow" onClick={handleClearCart}>Clear Cart</h2>
            <span className="bg-white font-bold shadow-md px-2 md:px-4 rounded-md  mx-2 py-1 text-sm md:text-lg my-4 text-green-500 hover:shadow-lg transition-shadow">Total Price : ₹ {cartItems.length > 0 ?parseInt(currPrice) : 0}</span>
            </div>
        </div>
    )
}

export default Cart;