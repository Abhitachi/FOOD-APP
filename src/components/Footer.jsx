
const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <footer className=" z-100 shadow-xls shadow-inner mt-auto">
        <div className=" z-100  shadow-lg font-semibold rounded-md text-black text-center w-full py-2">
            <span className="text-sm md:text-lg">Created by ❤️ Abhishek Shettar ©️ {year} Food App</span>
        </div>
        </footer>
    )
}
export default Footer;