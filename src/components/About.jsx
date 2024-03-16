import { useEffect, useState } from "react";
import User from "./User";


const About = () => {

    const [about , setAbout] = useState("");

    useEffect( () => {
         getAboutDetails();   
    },[]);

    const getAboutDetails = async () => {
        const data = await fetch("https://api.github.com/users/Abhitachi");
        const res = await data.json();
        console.log(res);
        setAbout(res)
    }

    return (
        <div className="mx-auto text-center w-full md:w-9/12  bg-white py-1">
            <h1 className="text-lg shadow-lg inline-block w-9/12  font-bold  text-center bg-orange-500 text-white py-2 my-2 px-3 rounded-md">About The Developer</h1>
            <User data = {about}/>
        </div>
    )
}

export default About