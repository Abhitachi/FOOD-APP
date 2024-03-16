import { useState } from 'react';
import { mailto } from '../utils/constant';
import img from '../utils/images/Contact-Us.png';

const Contact = () => {
    const [message , setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        
        <div className="flex flex-col-reverse md:flex-row justify-evenly">
            <div className="flex justify-center items-center w-full md:w-9/12">
                <img src={img} alt="Contact us" className={!message ? `md:w-9/12`:`md:w-6/12`} />
            </div>
          {!message && <div className="flex flex-col justify-center items-center gap-3 w-full md:w-6/12  z-10">
                <h1 className='font-bold text-center text-2xl px-4 py-2 rounded text-blue-600 shadow-xs -mt-2'>Contact us</h1>
                <form onSubmit={handleSubmit} action={`mailto : ${mailto}`} className='flex flex-col gap-2 w-[80%] md:w-3/5'>
                <input type="text" placeholder="Name" className='border-orange-600 border-solid border-2 w-full p-2' required/>
                    <input type="email" placeholder="Email" className='border-orange-600 border-solid border-2 w-full p-2' required/>
                    <textarea placeholder="Type your Message here..."  required className='border-orange-600 border-solid border-2 w-full p-2'></textarea>
                    <button type="submit"  className='bg-orange-600 text-white  transition-all shadow-md rounded-md py-2 font-bold'>Submit</button>
                </form>
            </div>
            }
            {message && <span className='text-center font-semibold text-sm md:text-xl md:mt-[35%] text-orange-500 relative md:absolute shadow-slate-50 p-3  shadow-xs z-10'>Thanks for contacting FoodApp, We will reply ASAP.</span>}
        </div>
    )
}

export default Contact;