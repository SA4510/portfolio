import HTML from "../assets/skill/HTML.png";
import CSS from "../assets/skill/CSS.png";
import Bootstrap from "../assets/skill/Bootstrap.png";
import TailwindCSS from "../assets/skill/TailwindCSS.png";
import JavaScript from "../assets/skill/JavaScript.png";
import ReduxJS   from "../assets/skill/ReduxJS.png"
import ReactJS from "../assets/skill/ReactJS.png";

import Postman from "../assets/skill/Postman.png";
import Git from "../assets/skill/Git.png";
import GitHub from "../assets/skill/GitHub.png";

const Skill = () => {
  const skills = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-500",
    },
    {
      id: 4,
      src: TailwindCSS,
      title: "TailwindCSS",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: ReactJS,
      title: "ReactJS",
      style: "shadow-teal-500",
    },
    {
      id: 7,
      src: ReduxJS,
      title: "ReduxJS",
      style: "shadow-violet-500",
    },
    {
      id: 8,
      src: Git,
      title: "Git",
      style: "shadow-orange-900",
    },
    {
      id: 9,
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-800",
    },
    {
      id: 10,
      src: Postman,
      title: "Postman",
      style: "shadow-orange-800",
    },
  ];

  return (
    <>
      <div
        name="Skills"
        className="bg-gradient-to-b  from-gray-800 to to-black w-full max-h-fit"
      >
        <div className="max-w-screen-lg mx-auto p-4 sm:pt-20 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 px-2 inline">
              Skills
            </p>
            <p className="py-6">
              These are the technologies, I&#39; ve worked with
            </p>
          </div>

          <div className="w-full grid xs:grid-cols-1 grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {/* Card */}
            {skills.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-4  rounded-lg ${style}`}
              >
                <img
                  src={src}
                  alt={title + " " + "image"}
                  className="w-20 mx-auto"
                />
                <p className="mt-4 pt-6  text-xl font-bold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
