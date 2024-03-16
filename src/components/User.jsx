import React from "react";
import { Link } from "react-router-dom";

class User extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count:0,
        }
    }
    // can't destructure here 
 

    render(){

        const {data} = this.props; /**able to destructure here */
        console.log(this.props)
        if(!data){
            return <div className="text-lg animate-spin text-center align-middle">"🔃"</div>
        }

        return(
            <div className="flex flex-col md:flex-row mx-auto my-4 text-center py-4 justify-around items-center w-full md:w-9/12 md:shadow-lg hover:shadow-2xl transition-shadow md:shadow-slate-300 ">
            <div className="mx-auto  w-full md:w-6/12 px-4">
               <Link to={data.html_url}><img src={data.avatar_url} alt="" className="z-10 rounded-lg md:px-2 mx-auto md:mx-6 h-2/4" /></Link>
               <Link to={data.html_url}><h1 className="font-semibold px-2 drop-shadow-lg text-center my-2 text-black rounded-md"> {data.name} - AKA - {data.login}</h1></Link>
            </div>
            <div className="w-full md:w-6/12">
                {/* <img src={dose} alt="" className="mx-2 w-full h-screen" />
                 */}
                <p className="font-light text-sm md:text-lg py-2 text-black  px-6 justify-start">
                A Software Developer Enthusiast, proficient in programming languages such as Java and JavaScript. Strong background in object-oriented programming,functional programming, database management and software development lifecycle. A quick learner with strong problem-solving skills, able to work efficiently both independently and in a team environment.
               </p>
            </div>
            </div>
        )
    }
}

export default User;