import { useState } from "react";
import Link from "../link/Link";
import {  AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {id:1, path: "/", name: "Home" }, 
        {id:2, path: "/about", name: "About" },
        {id:3, path: "/services", name: "Services" },
        {id:4, path: "/contact", name: "Contact" },
        {id:5, path: "/profile/:username", name: "Profile" }
    ];

    return (
      
            <nav className="bg-purple-600 p-6">
               <div onClick={()=>setOpen(!open)} className="md:hidden">
                {
                    open === true ? <AiOutlineClose className="text-2xl"></AiOutlineClose> :  <AiOutlineMenu className="text-2xl "></AiOutlineMenu>
                }
               
                </div>
               <ul className={`md:flex gap-4 duration-1000 absolute md:static
                ${open? 'top-16' : '-top-64'}
                bg-purple-800 text-white p-6`}>
               {
                    routes.map((route) => <Link key={route.id} route={route}></Link> )
                }
               </ul>
            </nav>
        
    );
};

export default Navbar;