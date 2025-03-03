import image from "../../assets/GirlComputer.jpg";


type AboutMeProps = {
  darkMode: boolean
}

export const AboutMe:React.FC<AboutMeProps>  = ({ darkMode }) => {

  return (

    <div className="flex flex-col md:flex-row items-center p-6 m-2 h-screen">

      <div className="w-full md:w-3/5 flex flex-col items-center text-center p-6">
        <h1 className={`text-3xl md:text-4xl font-extrabold italic ${darkMode} ? "text-white-950"  dark:text-white text-justify"`}>
          Hi, My name is Raksha C and I'm from Bengaluru.
        </h1>
        <p className={`text-lg md:text-xl font-semibold italic max-w-3xl mt-4 text-justify  ${darkMode ? "text-white" : "text-gray-900"}`}>
          I am a passionate Frontend Developer with 3.5 years of experience specializing in
          building scalable and user-friendly applications.
        </p>
        <p className={`text-lg md:text-xl font-semibold italic mt-4 text-justify ${darkMode ? "text-white" : "text-gray-900"}`}>
          I take great interest in working with modern web technologies like React, Redux, and Tailwind CSS
          to create dynamic and engaging user experiences.
        </p>
      </div>


      <div className="w-full md:w-2/5 flex justify-center items-center p-6 rounded-2xl">
        <img
          src={image}
          alt={"default"}
          className="w-full h-auto max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </div>



  )

}
