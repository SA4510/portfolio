
const About = () => {
    return (
      <>
        <div
          name="About"
          className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-1 xs:mt-20">
              <p className="text-4xl font-bold inline border-b-4 border-gray-50">
                About
              </p>
            </div>
  
            <p className="text-lg sm:mt-20  ">
              A dedicated and skilled fullstack developer with specialization
              in react.js,node.js commited to staying current with new technologies 
              and industry trends. As a recent graduate, i am seeking a role 
              which allow me to continue learning and perfecting my skills as 
              i provide high-quality work.
              <span className="block font-bold text-teal-500">
                Tech Stacks - HTML, CSS, Tailwind, JavaScript, ES6, React,
                Redux, Node.js, Express.js, Mongodb, Sql,
              </span>
              <span className="block font-bold text-teal-500">
                Tools - Vs-code, Postman, Git, GitHub
              </span>
            </p>
          </div>
        </div>
      </>
    );
  };
  
  export default About;
