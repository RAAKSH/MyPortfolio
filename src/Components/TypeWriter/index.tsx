
import React from "react";
import Typewriter from "typewriter-effect";


type TypeWriterProps = {
    darkMode: boolean
}

export const TypeWriter: React.FC<TypeWriterProps> = ({ darkMode }) => {
    return (
        <div className={`text-2xl font-bold ${darkMode ? "text-white" : "text-blue-950"}`} >
        <Typewriter
            options={{
                strings: [
                    "Front End Developer",
                    "React.js Developer",
                    "Software Engineer",
                    "UI Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
        </div >
    );
}

