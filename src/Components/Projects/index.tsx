import { motion } from "framer-motion";
import { projects } from '../constants';


type ProjectsProps = {
    mode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ mode }) => {
    return (
        <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {projects?.map((item) => (
                <div 
                    key={item?.id} 
                    className={`p-6 ${mode ? "bg-gray-100 dark:bg-gray-800" : "bg-blue-50"} 
                    rounded-lg shadow-lg border border-gray-400 transition-all duration-300`}
                >
                    <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-md mb-4 shadow-md"
                    />
                    <h4 className="text-xl text-black font-semibold">{item?.name}</h4>
                    <p className="text-m mt-2 text-black text-justify">{item.desc}</p>
                </div>
            ))}
        </motion.div>
    );
};