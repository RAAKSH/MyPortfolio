import React from "react";
import antd from "../../assets/ant-design-2.svg";

type SkillsProps = {
    mode: boolean
}

export const Skills: React.FC<SkillsProps> = ({ mode }) => {
    return (
        <div className="border-2 border-gray-600 rounded-lg p-8 shadow-md max-w-4xl mx-auto mt-8 ">
            <h2 className={`text-3xl font-bold text-center mb-6 ${mode ? "text-white" : "text-gray-800"}`}>Skills</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-6 justify-start items-center">

                <div className="flex items-center space-x-3 text-lg font-semibold">
                    <i className="fa-brands fa-js text-yellow-500 text-3xl"></i>
                    <span>JavaScript</span>
                </div>


                <div className="flex items-center space-x-3 text-lg font-semibold">
                    <i className="fa-brands fa-react text-blue-500 text-3xl"></i>
                    <span>React</span>
                </div>
                <div className="flex items-center space-x-3 text-lg font-semibold">
                   
                    <span>Next.js</span>
                </div>
                

                <div className="flex items-center space-x-3 text-lg font-semibold">
                    <i className="fa-brands fa-css3-alt text-blue-700 text-3xl"></i>
                    <span>CSS3</span>
                </div>


                <div className="flex items-center space-x-3 text-lg font-semibold">
                    <i className="fa-brands fa-html5 text-orange-500 text-3xl"></i>
                    <span>HTML5</span>
                </div>


                <div className="flex items-center space-x-3 text-lg font-semibold">
                    <i className="fa-brands fa-bootstrap text-indigo-500 text-3xl"></i>
                    <span>Bootstrap</span>
                </div>


                <div className="flex items-center  text-lg font-semibold text-wrap">
                    <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" className="w-8 h-8" alt="Tailwind CSS" />
                    <span>Tailwind CSS</span>
                </div>


                <div className="flex items-center space-x-3 text-lg font-semibold">
                    <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" className="w-8 h-8" alt="Redux" />
                    <span>Redux</span>
                </div>


                <div className="flex items-center space-x-3 text-lg font-semibold">
                    <img src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" className="w-8 h-8" alt="Material UI" />
                    <span>Material UI</span>
                </div>


                <div className="flex items-center space-x-3 text-lg font-semibold">
                    <img src={antd} className="w-8 h-8" alt="Ant Design" />
                    <span>Ant Design</span>
                </div>



                <div className="flex items-center space-x-3 text-lg font-semibold">
                    <i className="fa-solid fa-code text-blue-600 text-3xl"></i>
                    <span>TypeScript</span>
                </div>


                <div className="flex items-center space-x-3 text-lg font-semibold">

                    <span>React Query</span>
                </div>
            </div>
        </div>
    );
};
