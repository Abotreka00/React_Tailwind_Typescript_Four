import { Facebook, Linkedin, MessageCircle, Twitch } from "lucide-react"

function Footer() {
  return (
    <div className="relative bottom-0 left-0 bg-DgryPrimary">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mx-[20px] md:mx-[40px] py-10 text-white">
            <div className="col-span-2 mb-10 md:mb-0">
                <h2 className="text-3xl uppercase font-bold">Saleh..</h2>
                <p className="my-5 opacity-60">Copyright @ 2024, all rights reserved</p>
                <div className="flex gap-5 opacity-80">
                    <a className="hover:opacity-60 duration-300" href="https://www.facebook.com/saleh.hossam.988"><Facebook /></a>
                    <a className="hover:opacity-60 duration-300" href=""><Twitch /></a>
                    <a className="hover:opacity-60 duration-300" href=""><Linkedin /></a>
                    <a className="hover:opacity-60 duration-300" href=""><MessageCircle /></a>
                </div>
            </div>
            <div>
                <h3 className="mb-4 opacity-85 text-2xl">Company</h3>
                <ul>
                    <li className="opacity-70 hover:opacity-50 duration-200 cursor-pointer mb-1">About us</li>
                    <li className="opacity-70 hover:opacity-50 duration-200 cursor-pointer mb-1">Blog</li>
                    <li className="opacity-70 hover:opacity-50 duration-200 cursor-pointer mb-1">Contact us</li>
                    <li className="opacity-70 hover:opacity-50 duration-200 cursor-pointer mb-1">Pricing</li>
                    <li className="opacity-70 hover:opacity-50 duration-200 cursor-pointer mb-1">Testimonias</li>
                </ul>
            </div>
            <div>
                <h3 className="mb-4 opacity-85 text-2xl">Support</h3>
                <ul>
                    <li className="opacity-70 hover:opacity-50 duration-200 cursor-pointer mb-1">About us</li>
                    <li className="opacity-70 hover:opacity-50 duration-200 cursor-pointer mb-1">Blog</li>
                    <li className="opacity-70 hover:opacity-50 duration-200 cursor-pointer mb-1">Contact us</li>
                    <li className="opacity-70 hover:opacity-50 duration-200 cursor-pointer mb-1">Pricing</li>
                    <li className="opacity-70 hover:opacity-50 duration-200 cursor-pointer mb-1">Testimonias</li>
                </ul>
            </div>
            <div className="col-span-2  mt-10 md:mt-0">
                <h3 className="mb-4 opacity-85">Stay up to date</h3>
                <form className="flex flex-col gap-5">
                    <input className="focus:border-none focus:outline-none rounded-lg placeholder:text-black text-black w-1/2" type="email" placeholder="Your Email Address" />
                    <input type="submit" value="Send" className="bg-brandPrimary hover:bg-brandPrimary/90 block w-fit cursor-pointer duration-300 rounded-lg px-7 py-2 text-white font-semibold"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer