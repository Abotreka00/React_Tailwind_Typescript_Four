import { Carousel } from "flowbite-react"
import undraw1 from "../assets/undraw1.png"
import undraw2 from "../assets/undraw2.png"
import undraw3 from "../assets/undraw3.png"

function Landing() {
  return (
    <div id="home" className="relative top-0 left-0">
        <div className="w-full h-screen">
            <Carousel>
                <div className="flex w-full h-full flex-col md:flex-row gap-10 px-[20px] md:px-[40px] bg-Silver items-center justify-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-5xl md:text-7xl font-semibold">Learn and Earn <span className="text-brandPrimary">in 4 Months</span></h2>
                        <p className="text-[14px] opacity-80 my-7">Lorem incidunt sunt hic quia ab iusto vero repudiandae harum. Iure, maxime reiciendis?</p>
                        <button className="bg-brandPrimary hover:bg-brandPrimary/90 duration-300 rounded-lg px-7 py-2 text-white font-semibold">Register</button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={undraw1} alt="undraw1" />
                    </div>
                </div>
                <div className="flex w-full h-full flex-col md:flex-row gap-10 px-[20px] md:px-[40px] bg-Silver items-center justify-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-5xl md:text-7xl font-semibold">Lessons and iInsights <span className="text-brandPrimary">from 8 years</span></h2>
                        <p className="text-[14px] opacity-80 my-7">Lorem incidunt sunt hic quia ab iusto vero repudiandae harum. Iure, maxime reiciendis?</p>
                        <button className="bg-brandPrimary hover:bg-brandPrimary/90 duration-300 rounded-lg px-7 py-2 text-white font-semibold">Register</button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={undraw2} alt="undraw1" />
                    </div>
                </div>
                <div className="flex w-full h-full flex-col md:flex-row gap-10 px-[20px] md:px-[40px] bg-Silver items-center justify-center">
                <div className="w-full md:w-1/2">
                        <h2 className="text-5xl md:text-7xl font-semibold">You will increase your experience <span className="text-brandPrimary">by 4 years </span></h2>
                        <p className="text-[14px] opacity-80 my-7">Lorem incidunt sunt hic quia ab iusto vero repudiandae harum. Iure, maxime reiciendis?</p>
                        <button className="bg-brandPrimary hover:bg-brandPrimary/90 duration-300 rounded-lg px-7 py-2 text-white font-semibold">Register</button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={undraw3} alt="undraw1" />
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Landing