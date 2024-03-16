import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { useOnlineStatus } from "../hooks/useOnlineStatus"
import logo1 from '../utils/images/logo1.png'
// import {fa} from '@fortawesome/free-solid-svg-icons'

export const Title = () => {
    return(
        <div className="w-38 h-20 text-center mx-auto md:mx-0 md:w-56 " >
            <img src={logo1} alt=""  className='w-56 p-4'/>
            {/* {console.log("hi")} */}
        </div>
    )
}


const Header = ({userName,status}) => {
 

    const cartItems = useSelector((store) => store.cart.items)

    console.log(cartItems.length, "cartItems");
    const [loginStatus, setLoginStatus] = useState("login");

    const handleClick = (name) => {
      const status = loginStatus === "login" ? "logout" : "login";
      setLoginStatus(status);
    };


    const onlineStatus = useOnlineStatus();
    return(
        <div className=" flex flex-col  md:flex-row justify-between align-middle z-50 mb-2 shadow-md relative">
            <Title />
            <ul className="nav-items flex justify-between items-center py-2  md:p-4 md:m-2 m-0 text-lg md:text-xl">
                <li className="mr- px-3 hidden md:inline-block"> {status && onlineStatus ?"🟢":"🔴"}</li>
                <li className="mr- px-3 hover:bg-orange-600 rounded-md hover:transition-all hover:text-white">{status &&  <Link to = "/">Home</Link>}</li>
                <li className="mr- px-3 hover:bg-orange-600 rounded-md  hover:transition-all  hover:text-white">{status && <Link to="/about">About</Link>}</li>
                <li className="mr- px-3 hover:bg-orange-600 rounded-md  hover:transition-all hover:text-white">{status && <Link to="/contact">Contact</Link>}</li>
                <li className="mr- px-3 hover:bg-orange-600 rounded-md hover:text-white hover:py-1 ">{status && <Link to="/cart"><div className="relative"><div className="absolute top-[-6px] right-[-6px]"><span className= {cartItems.length === 0 ?`text-sm md:text-sm`:`text-sm md:text-sm text-white bg-gray-400 px-1 rounded-full`}>{cartItems.length > 0 ? cartItems.length : ""}</span></div></div><i className="fa-solid fa-cart-shopping text-xl -mb-1 py-1"></i></Link>}</li>
                <li className="mr- px-3 hover:bg-orange-600 rounded-md hover:text-white">{status && <i class="fa-solid fa-user"></i>}<span className="hidden md:inline-block">{userName}</span></li>
            </ul>

        </div>
    )
}

export default Header;