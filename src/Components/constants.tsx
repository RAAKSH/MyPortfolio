import BoxedBite from "../assets/BoxedBite.png";
import weather from "../assets/WeatherApp.png";
import filmflex from "../assets/filmflex.png";
import nextLevel from "../assets/nextLevel.png";
import HR from "../assets/hr.png" ;
import newsphere from "../assets/newsphere.png"

export const projects = [{
    id: 1,
    name: "Boxed Bite",
    desc: "A fully responsive food delivery app seamlessly integrating Swiggy’s live API. Built from the ground up using React, this app leverages modern web development techniques, ensuring a smooth user experience and optimized performance.",
    img: BoxedBite,
    live:  "https://boxedbite.netlify.app/",
    gitHub:"https://github.com/RAAKSH/boxed_bite"
},

{
    id: 2,
    name: "FilmflexGPT",
    desc: "FilmflexGPT is a  Netflix clone with GPT-3 integration. It includes firebase authentication,leveraging data from the TMDB API to provide a vast library of movie. And also sophisticated movie recommendation system by integrating the OpenAI API, enabling the app to generate personalized recommendations based on user preferences. Additionally, introduced multilingual features to cater to adiverse user base. ",
    img: filmflex,
    live:"https://filmflex-gpt-854r-iwgsa0ita-raakshs-projects.vercel.app/",
    gitHub:"https://github.com/RAAKSH/filmflex-gpt"
},
{
    id: 3,
    name: "Weather Forecast",
    desc: "The Weather App is a React-based web application that provides real-time weather updates for any city worldwide. It utilizes the OpenWeather API to fetch weather data and displays key details like temperature, humidity, wind speed. This app  ensures a dynamic and responsive user experience.",
    img: weather,
    gitHub:"https://github.com/RAAKSH/WeatherApp"
},
{
    id: 4,
    name: "NextLevel Food Community (Next js)",
    desc: "This dynamic full-stack application,built with Next.js, serves as an engaging platform for sharing and discovering recipes within your community. Dive into a diverse array of dishes, complete with step-by-step preparation instructions, and inspire others by sharing your culinary masterpieces.",
    img: nextLevel,
    live:"https://nextlevelfoodcommunity.netlify.app/",
    gitHub:"https://github.com/RAAKSH/nextlevel-food-community"
},

{
    id: 5,
    name: "HR Dashboard Application",
    desc: "This dynamic full-stack HR Dashboard is designed and built using React, TypeScript, Redux, and Express.js to simulate a real-world HR management system supporting multiple tenants (companies). The application provides a clean and responsive user experience with modular architecture, production-ready coding standards, and mock backend integration for simulating real API behavior.",
    img: HR,
    live:"https://hr-dashboard-indol.vercel.app/",
    gitHub:"https://github.com/RAAKSH/hr-dashboard"
},

{
    id: 6,
    name: "News Sphere (Next js)",
    desc: "News Sphere is a modern, responsive news portal built with React.js, designed to deliver the latest headlines and trending stories in a clean, user-friendly interface. Whether it's world news, technology, sports, or entertainment — News Sphere keeps users informed and engaged.",
    img: newsphere,
    live:"https://news-sphere-six.vercel.app/",
    gitHub:"https://github.com/RAAKSH/news-sphere"
},

]