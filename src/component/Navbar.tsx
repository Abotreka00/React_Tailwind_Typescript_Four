import { Menu, XIcon } from "lucide-react";
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import "./navbar.css"

const ulItems = [
  {link: "Home", path: "home"},
  {link: "Service", path: "service"},
  {link: "About", path: "about"},
  {link: "Product", path: "product"},
  {link: "Testimonial", path: "testimonial"},
  {link: "FAQ", path: "faq"},
]

type propsUL = {
    link: string,
    path: string
}

function Navbar() {
    const [isMenu, isSetmenu] = useState(true)
    const [isStaicy, isSetstaicy] = useState(false)

useEffect(() => {
    const handleStaicy = () => { 
    if (window.scrollY > 100) {
        isSetstaicy(true)
    }else {
        isSetstaicy(false)
    }
    }
    window.addEventListener("scroll", handleStaicy)

    return () => {
    window.removeEventListener("scroll", handleStaicy)
    }
})

return (
    <div className={`fixed z-50 top-0 left-0 right-0 ${isStaicy ? "bg-brandPrimary" : "bg-Silver"} w-full h-16 flex items-center`}>
        <nav className="relative flex justify-between px-10 items-center flex-1">
            <div className="flex gap-4">
                <a href="https://github.com/Abotreka00" className="text-3xl font-bold hover:text-black/80 duration-300">Saleh..</a>
            </div>
            <ul className="hidden md:flex">
                {ulItems.map(({ link, path }: propsUL) => (
                        <Link className={`ml-5 py-[5px] px-[7px] cursor-pointer ${isStaicy ? "text-black hover:text-white/80" : "text-black hover:text-black/80"} hover:text-neutralDgry duration-300`} key={path} to={path} smooth={true} spy={true} activeClass="active" offset={-100} >{link}</Link>
                    ))}
            </ul>
            <div className="hidden lg:flex gap-2">
                <button className="p-2 cursor-pointer rounded-lg font-bold text-1xl bg-white text-brandPrimary">LogIn</button>
                <button className="p-2 cursor-pointer rounded-lg hover:bg-brandPrimary/80 duration-300 text-white font-bold bg-brandPrimary">Sign Up</button>
            </div>
            <div className="hover:text-Dgry md:hidden">
                <button className="w-full h-full" onClick={() => isSetmenu(!isMenu)}>
                    {isMenu ? <Menu /> : <XIcon /> }
                </button>
            </div>
            <div className={`absolute ${isMenu ? "hidden" : "absolute"} top-[50px] left-0 bg-brandPrimary w-full py-10 md:hidden`}>
                <ul className="flex md:hidden flex-col gap-4 font-bold">
                    {ulItems.map(({ link, path }: propsUL) => (
                        <Link className="ml-5 cursor-pointer w-fit text-black hover:text-black duration-300" key={path} to={path} smooth={true} spy={true} offset={-100} >{link}</Link>
                    ))}
                </ul>
            </div>
        </nav>
    </div>
)
}

export default Navbar