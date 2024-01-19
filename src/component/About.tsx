import mobileImg from "../assets/mobileImg.png"
import imgicons1 from "../assets/imglogo1.webp"
import imgicons2 from "../assets/imglogo2.jpg"
import imgicons3 from "../assets/imglogo3.avif"
import imgicons4 from "../assets/imglogo4.jpg"
import { motion } from "framer-motion"

function About() {
  return (
    <div id="about">
        <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1, type: "spring"}}
        viewport={{once: true, amount: 0.5}}
        variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}}
        className="flex flex-col md:flex-row items-center px-5 md:px-10">
            <div className="w-full md:w-[40%]">
                <img src={mobileImg} alt="" className="w-full"/>
            </div>
            <div  className="w-full md:w-[60%]">
                <h2 className="text-3xl font-bold">The unseen of spending three years at pixelgrade</h2>
                <p className="text-[14px] mx-auto my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde temporibus officia voluptates sunt debitis suscipit consequatur, qui pariatur eum, voluptate magni necessitatibus ducimus praesentium ex soluta quam? Iure enim repellendus temporibus deleniti laborum, quisquam, dolorem commodi, consectetur veritatis voluptatem fugit!</p>
                <button className="bg-brandPrimary hover:bg-brandPrimary/90 duration-300 rounded-lg px-7 py-2 text-white font-semibold">Learn More</button>
            </div>
        </motion.div>

        <div className="flex flex-col gap-11 md:flex-row items-center px-5 md:px-10 bg-Silver py-20">
            <motion.div 
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            variants={{hidden: {opacity: 0, x: -200}, visible: {opacity: 1, x: 0}}}
            className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold">Helping a local <span className="text-brandPrimary">business reinvent itself</span></h2>
                <p className="text-[14px] mx-auto my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, iste?</p>
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            variants={{hidden: {opacity: 0, x: 200}, visible: {opacity: 1, x: 0}}}
            className="w-full md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                        <img src={imgicons1} alt="" className="w-[30px]"/>
                        <div>
                            <p className="text-1xl font-semibold">2,245,321</p>
                            <span className="opacity-80 text-[14px]">Member</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={imgicons2} alt="" className="w-[30px]"/>
                        <div>
                            <p className="text-1xl font-semibold">45,324</p>
                            <span className="opacity-80 text-[14px]">clubs</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={imgicons3} alt="" className="w-[30px]"/>
                        <div>
                            <p className="text-1xl font-semibold">858,435</p>
                            <span className="opacity-80 text-[14px]">Event Bookings</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={imgicons4} alt="" className="w-[30px]"/>
                        <div>
                            <p className="text-1xl font-semibold">1,943,342</p>
                            <span className="opacity-80 text-[14px]">Payments</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About