import { ChevronRight } from "lucide-react"
import desktopimg1 from "../assets/desktop1.jpg"
import desktopimg2 from "../assets/desktop2.jpg"
import desktopimg3 from "../assets/desktop3.webp"
import { motion } from "framer-motion"

const boxItems = [
    {id: 1, img: desktopimg1, p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", button: "Readmore",},
    {id: 2, img: desktopimg2, p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", button: "Readmore",},
    {id: 3, img: desktopimg3, p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", button: "Readmore",},
]

type boxItemsProps = {
    id: number,
    img: string,
    p: string,
    button: string
}

function Blog() {
  return (
    <div className="w-full bg-Silver my-[100px] py-[100px]" id="faq">
        <div className="w-[90%] md:w-[80%] bg-white p-10 rounded-lg mx-auto">
            <motion.div 
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            variants={{hidden: {opacity: 0, y: 200}, visible: {opacity: 1, y: 0}}}
            className="mb-10 text-center">
                <h2 className="text-3xl font-bold">Caring is the new marketing</h2>
                <p className="text-[14px] mx-auto my-5 w-[90%] md:w-[60%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde temporibus officia voluptates sunt debitis suscipit consequatur, qui pariatur eum, voluptate magni necessitatibus ducimus praesentium ex soluta quam? Iure enim repellendus temporibus deleniti</p>
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 1, type: "spring", staggerChildren: 0.4}}
            className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 mt-[100px]">
                {boxItems.map(({id, img, p, button} : boxItemsProps) => (
                    <motion.div 
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 1, type: "spring"}}
                    variants={{hidden: {opacity: 0, x: 300}, visible: {opacity: 1, x: 0}}}
                    key={id} className="relative mt-[100px] md:mt-0 rounded-lg group cursor-pointer">
                        <img src={img} alt={img} className="w-full h-full rounded-lg group-hover:scale-[0.9] duration-300" />
                        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 bg-white p-5 rounded-lg w-[80%]">
                            <p className="txt-1xl font-semibold opacity-80">{p}</p>
                            <button className="text-brandPrimary/80 mt-3 font-bold flex gap-5 hover:text-brandPrimary/100 duration-300">{button} <ChevronRight /></button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default Blog