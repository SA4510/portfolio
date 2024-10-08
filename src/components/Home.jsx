import HeroImagae from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";



const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="w-full  xs:max-w-fit md:h-screen bg-gradient-to-b from-black via-black to-gray-800 "
      >
        <div className="max-w-screen-lg py-2 px-4 mx-auto flex flex-col justify-center items-center  h-full md:flex-row ">
          <div className="flex flex-col justify-center h-full">
            
            <h2 className="text-white text-4xl font-bold md:text-7xl xs:text-center">
              I&#39;m Fullstack Developer
            </h2>

            <p className="text-gray-500 py-4 max-w-md ">
              Passionate Fullstack developer with comprehensive training in HTML,
              CSS, JavaScript, ES6, TailwindCSS, ReactJS, Redux,Node.js, Express.js, Mongodb,Sql
               Eager to apply newly acquired skills
               to real-world projects and contribute to a dynamic team. Seeking
              entry-level opportunities to kickstart a successfull carier in
              frontend development.
            </p>

            <div className="xs:flex justify-center">
              <button className="text-white cursor-pointer w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 group ">
                <Link to="Portfolio" smooth duration={500}>
                  Portfolio
                </Link>
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>

          
          <div>
            <img
              src={HeroImagae}
              alt="hero porfile"
              className="rounded-2xl mt-6 mx-auto w-64  md:w-3/4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
