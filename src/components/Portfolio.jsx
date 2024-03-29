import RealEstate from "../assets/portfolio/RealEstate.png"
import Studioblog from "../assets/portfolio/Studioblog.png"
import NewsApp from "../assets/portfolio/NewsApp.png"
import TodoApp from "../assets/portfolio/TodoApp.png"




const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: RealEstate,
    },
    {
      id: 2,
      src:Studioblog ,
    },
    {
      id: 3,
      src: NewsApp,
    },
    {
      id: 4,
      src: TodoApp,
    },
  ];

  return (
    <>
      <div
        name="Portfolio"
        className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto pt-16 flex flex-col justify-center w-full  h-full">
          {/* Heading */}
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>

            <p className="py-6">Check out some of my work right here </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 place-content-center">
            {/* Card */}

            {portfolios.map(({ id, src }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="project image"
                  className="rounded-md hover:scale-105 duration-200"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
