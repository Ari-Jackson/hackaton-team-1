import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-in");
  };
  return (
    <div className=" flex flex-col mt-[5%] mb-52">
      <div className="flex flex-col mt-[10%] md:flex-row flex-grow justify-center">
        <div className="">
          <img
            className="w-64 flex-grow"
            src="src/assets/DALL·E_toddler.png"
            alt="banner"
          />
        </div>
        <div className="bg-white  rounded-r-lg shadow-md w-[18%] pl-6">
          <h1 className="w-[20%] text-5xl font-extrabold tracking-tight text-[#0065ff]  p-4 flex hover:animate-shake ">
            Tiny Tot Tracker
          </h1>
          <button
           onClick={handleClick}
            className=" ml-6 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group hover:shadow-xl"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease ">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-orange-500 rounded-full blur-md"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#ff801c]-500 rounded-full blur-md"></span>
            </span>
            <span className="relative text-white">Let&apos;s Start</span>
          </button>
        </div>
      </div>
      <h2 className="text-center my-24 text-[#053560] italic text-2xl">
        Simple Assessment - Life Changing Results{" "}
      </h2>
      <div 
      id="about"
      className="mt-12 text-center mx-64 p-[2%] bg-white text-[#002f70] opacity-80 rounded-lg">
        <p>
        Our innovative app is designed to empower parents by offering a simple
        yet effective self-evaluation tool for tracking their child‘s
        developmental milestones. As every child&apos;s journey is unique,
        (application name) serves as a preliminary assessment to help parents
        gain valuable insights into their little one&apos;s growth. 
        <br></br>
        <br></br>
        Understanding
        that this self-evaluation is not a substitute for professional
        assessments, the app will provide curated resources and guidance to
        connect parents with trusted experts, ensuring a comprehensive
        confirmation process. Embrace the joy of parenthood with confidence,
        supported by (application name)’s reliable assistance every step of the
        way.
        </p>
      </div>
    </div>
  );
}

// <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
// <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
// <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
// </span>
// <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
// <span class="relative invisible">Button Text</span>
// </a>