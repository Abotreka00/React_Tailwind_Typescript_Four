import { motion } from "framer-motion"
import mobile2 from "../assets/mobile2.png"
import bgImg from "../assets/bgImg.jpg"
import imglogo1 from "../assets/imglogo1.webp"
import imglogo2 from "../assets/imglogo2.jpg"
import imglogo3 from "../assets/imglogo3.avif"
import imglogo4 from "../assets/imglogo4.jpg"
import imglogo5 from "../assets/imglogo5.jpg"
import imglogo6 from "../assets/imglogo6.webp"
import { ChevronRight } from "lucide-react"

function Products() {
  return (
    <div id="product">
        <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{duration: 1, type: "spring"}}
        viewport={{once: true, amount: 0.5}}
        variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}}
        className="flex flex-col md:flex-row items-center px-5 md:px-10">
            <div className="w-full md:w-[40%]">
                <img src={mobile2} alt="" className="w-full"/>
            </div>
            <div  className="w-full md:w-[60%]">
                <h2 className="text-3xl font-bold">How to design your site footer like we did</h2>
                <p className="text-[14px] mx-auto my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde temporibus officia voluptates sunt debitis suscipit consequatur, qui pariatur eum, voluptate magni necessitatibus ducimus praesentium ex soluta quam? Iure enim repellendus temporibus deleniti laborum, quisquam, dolorem commodi, consectetur veritatis voluptatem fugit!</p>
                <button className="bg-brandPrimary hover:bg-brandPrimary/90 duration-300 rounded-lg px-7 py-2 text-white font-semibold">Learn More</button>
            </div>
        </motion.div>
        <div className="mt-10 flex flex-col md:flex-row gap-5 items-center px-5 md:px-10">
            <motion.div 
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            variants={{hidden: {opacity: 0, x: -200}, visible: {opacity: 1, x: 0}}}
            className="w-full md:w-[30%]">
                <img src={bgImg} alt="" className="w-fit" />
            </motion.div>
            <motion.div 
            id="testimonial"
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            variants={{hidden: {opacity: 0, x: 200}, visible: {opacity: 1, x: 0}}}
            className="w-full md:w-[70%]">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officia excepturi praesentium veniam voluptatibus odio minima suscipit et, in provident rem quia, facere ipsa reprehenderit ut fugiat commodi debitis! Dolore debitis quos, quibusdam possimus quod distinctio architecto iure dolores minima eaque eius dolor ut temporibus voluptatum eum quis ad perferendis!</p>
                <h4 className="my-4 text-1xl text-brandPrimary font-bold">Tim Smith</h4>
                <p className="opacity-80">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <div className="grid grid-cols-3 md:grid-cols-8 gap-10 w-full px-20 mt-10">
                    <img src={imglogo1} alt="" className="w-[50px] h-[50px]"/>
                    <img src={imglogo2} alt="" className="w-[50px] h-[50px]"/>
                    <img src={imglogo3} alt="" className="w-[50px] h-[50px]"/>
                    <img src={imglogo4} alt="" className="w-[50px] h-[50px]"/>
                    <img src={imglogo5} alt="" className="w-[50px] h-[50px]"/>
                    <img src={imglogo6} alt="" className="w-[50px] h-[50px]"/>
                    <button className="flex items-center col-span-2 text-[12px] gap-4 text-brandPrimary">Meet all customers <ChevronRight /></button>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Products