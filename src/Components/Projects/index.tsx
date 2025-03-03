import { motion } from "framer-motion";
import { projects } from '../constants';


type ProjectsProps = {
    mode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ mode }) => {
    return <>  <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >


        {projects?.map((item) => <div className={`p-6 ${mode ? " bg-white text-black" : "bg-gray-100 dark:bg-gray-800"} rounded-lg shadow-md transition-all duration-300`}>
            <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4 shadow-md"
            />
            <h4 className={` text-xl  text-bold font-semibold   ${mode ? "text-white" : "text-black"}`}>{item?.name}</h4>
            <p className={`text-sm mt-2 ${mode ? "text-white" : "text-black"}`}>{item.desc}</p></div>)}



    </motion.div> </>
}