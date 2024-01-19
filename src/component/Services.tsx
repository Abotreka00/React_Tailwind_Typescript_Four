import imglogo1 from "../assets/imglogo1.webp"
import imglogo2 from "../assets/imglogo2.jpg"
import imglogo3 from "../assets/imglogo3.avif"
import imglogo4 from "../assets/imglogo4.jpg"
import imglogo5 from "../assets/imglogo5.jpg"
import imglogo6 from "../assets/imglogo6.webp"
import logoimggrid1 from "../assets/logoimggrid1.jpg"
import logoimggrid2 from "../assets/logoimggrid2.webp"
import logoimggrid3 from "../assets/logoimggrid3.webp"
import {motion} from "framer-motion"

function Services() {
  return (
    <div id="service" className="w-full relative bg-white py-10">
        <div className="text-center flex flex-col gap-4 mb-10 px-[20px] md:px-[40px]">
            <motion.div 
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1, type: "spring"}}
            viewport={{once: true, amount: 0.5}}
            variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}}
            >
                <h2 className="text-2xl font-semibold">Our Clients</h2>
                <p className="mx-auto mt-2 md:w-[50%] w-[90%] mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptate.</p>
            </motion.div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 w-full px-20">
                <motion.img
                initial="hidden"
                whileInView="visible"
                transition={{duration: 2, type: "spring"}}
                viewport={{once: true, amount: 0.5}}
                variants={{hidden: {opacity: 0, scale: 0.5}, visible: {opacity: 1, scale: 1}}}
                src={imglogo1} alt="" className="w-[50px] h-[50px]"/>
                <motion.img
                initial="hidden"
                whileInView="visible"
                transition={{duration: 2, type: "spring", delay: 0.2}}
                viewport={{once: true, amount: 0.5}}
                variants={{hidden: {opacity: 0, scale: 0.5}, visible: {opacity: 1, scale: 1}}}
                src={imglogo2} alt="" className="w-[50px] h-[50px]"/>
                <motion.img
                initial="hidden"
                whileInView="visible"
                transition={{duration: 2, type: "spring", delay: 0.4}}
                viewport={{once: true, amount: 0.5}}
                variants={{hidden: {opacity: 0, scale: 0.5}, visible: {opacity: 1, scale: 1}}}
                src={imglogo3} alt="" className="w-[50px] h-[50px]"/>
                <motion.img
                initial="hidden"
                whileInView="visible"
                transition={{duration: 2, type: "spring", delay: 0.6}}
                viewport={{once: true, amount: 0.5}}
                variants={{hidden: {opacity: 0, scale: 0.5}, visible: {opacity: 1, scale: 1}}}
                src={imglogo4} alt="" className="w-[50px] h-[50px]"/>
                <motion.img
                initial="hidden"
                whileInView="visible"
                transition={{duration: 2, type: "spring", delay: 0.8}}
                viewport={{once: true, amount: 0.5}}
                variants={{hidden: {opacity: 0, scale: 0.5}, visible: {opacity: 1, scale: 1}}}
                src={imglogo5} alt="" className="w-[50px] h-[50px]"/>
                <motion.img
                initial="hidden"
                whileInView="visible"
                transition={{duration: 2, type: "spring", delay: 1}}
                viewport={{once: true, amount: 0.5}}
                variants={{hidden: {opacity: 0, scale: 0.5}, visible: {opacity: 1, scale: 1}}}
                src={imglogo6} alt="" className="w-[50px] h-[50px]"/>
            </div>
        </div>
        <motion.div className="flex flex-col mt-20" 
            initial="hidden"
            whileInView="visible"
            transition={{duration: 1, type: "spring",delay: 1}}
            viewport={{once: true, amount: 0.5}}
            variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}}
            >
            <h3 className="text-3xl font-bold text-center">Manage your entire community in a single system</h3>
            <p className="text-[14px] mx-auto my-5">Lorem ipsum dolor sit amet.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5 md:px-10 my-10">
                <motion.div 
                initial="hidden"
                whileInView="visible"
                transition={{duration: 1, type: "spring",delay: 1.4}}
                viewport={{once: true, amount: 0.5}}
                variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}}
                className="hover:border-b-2 cursor-pointer hover:border-brandPrimary hover:translate-y-5 duration-300 pb-5">
                    <img src={logoimggrid1} alt="" className="w-[40px] h-[40px] mx-auto mb-4"/>
                    <h4 className="text-3xl font-semibold mb-4 text-center">Membership organisations</h4>
                    <p className="text-[14px] opacity-80">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente iusto natus dolores quasi dicta tempora voluptatum nam eligendi quam quo.</p>
                </motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                transition={{duration: 1, type: "spring",delay: 1.6}}
                viewport={{once: true, amount: 0.5}}
                variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}}
                className="hover:border-b-2 cursor-pointer hover:border-brandPrimary hover:translate-y-5 duration-300 pb-5">
                    <img src={logoimggrid2} alt="" className="w-[40px] h-[40px] mx-auto mb-4"/>
                    <h4 className="text-3xl font-semibold mb-4 text-center">National Associations</h4>
                    <p className="text-[14px] opacity-80">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente iusto natus dolores quasi dicta tempora voluptatum nam eligendi quam quo.</p>
                </motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                transition={{duration: 1, type: "spring",delay: 1.8}}
                viewport={{once: true, amount: 0.5}}
                variants={{hidden: {opacity: 0, y: 100}, visible: {opacity: 1, y: 0}}}
                className="hover:border-b-2 cursor-pointer hover:border-brandPrimary hover:translate-y-5 duration-300 pb-5">
                    <img src={logoimggrid3} alt="" className="w-[40px] h-[40px] mx-auto mb-4"/>
                    <h4 className="text-3xl font-semibold mb-4 text-center">Clubs And Groups</h4>
                    <p className="text-[14px] opacity-80">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente iusto natus dolores quasi dicta tempora voluptatum nam eligendi quam quo.</p>
                </motion.div>
            </div>
        </motion.div>
    </div>
  )
}

export default Services