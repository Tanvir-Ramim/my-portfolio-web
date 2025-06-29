import medi from "../../assets/medi.png";
import phone from "../../assets/mobile.png";
import weepoka from "./Screenshot_10.png";
import planter from "./Screenshot_11.png";
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  return (
    <div id="project" className="max-w-[1300px] mx-auto  lg:mt-20 md:mt-5 ">
      <h1 className="text-white text-[42px] font-semibold text-center ">
        Projects
      </h1>

      <p className="md:text-[20px] text-[17px] text-center  mt-3 leading-8 text-[#F2F3F494]">
        Each project is a unique piece of development
      </p>
      <div>
        {/* 1st project */}
        <div className="mt-8 md:mt-4 p-3">
          <div className="flex md:flex-row flex-col md:p-5 p-3 lg:gap-0 md:gap-3 ">
            <div className="flex-1 flex lg:justify-start justify-center">
              <img
                className="w-[600px]  rounded-md h-[350px]"
                src={weepoka}
                alt=""
              />
            </div>
            <div className="flex-1  flex items-center">
              <div>
                <h1 className="text-center lg:text-2xl md:text-xl text-lg text-white font-semibold md:mt-0 mt-5">
                  Weepoka Theme
                </h1>
                <h1 className="lg:text-[20px] md:text-[16px] text-[15px] text-center  md:mt-3 leading-8 text-[#F2F3F494]">
                  Developed a modern theme-selling website offering both dynamic
                  and static themes with live preview functionality. Integrated
                  Stripe.js for secure online payments. Implemented a real-time
                  chat system for instant customer support and user interaction.
                  Focused on a smooth user experience and responsive design
                </h1>
                <div className="flex gap-6 justify-center lg:mt-8 md:mt-5 mt-4 ">
                  <a
                    href="https://weepoka.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2F3F494] border py-1 px-4 border-[#854CE6] font-medium  flex items-center gap-2 w-fit"
                  >
                    {" "}
                    <FaExternalLinkAlt className="text-lg text-white" /> Live
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd project */}

        <div className="mt-8 md:mt-4 p-3">
          <div className="flex md:flex-row flex-col md:p-5 p-3 lg:gap-0 md:gap-3 ">
            <div className="flex-1  flex items-center">
              <div>
                <h1 className="text-center lg:text-2xl md:text-xl text-lg text-white font-semibold md:mt-0 mt-5">
                  Planter Box
                </h1>
                <h1 className="lg:text-[20px] md:text-[16px] text-[15px] text-center  md:mt-3 leading-8 text-[#F2F3F494]">
                  Built a dynamic portfolio website named Planter Box,
                  showcasing interior and exterior design projects. Users can
                  easily add and manage project entries with images and details.
                  Included a career section where companies can post job
                  listings and users can apply directly. Focused on a clean UI
                  and smooth content management experience.
                </h1>
                <div className="flex gap-6 justify-center lg:mt-8 md:mt-5 mt-4 ">
                  <a
                    href="https://planter-box.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2F3F494] border py-1 px-4 border-[#854CE6] font-medium  flex items-center gap-2 w-fit"
                  >
                    {" "}
                    <FaExternalLinkAlt className="text-lg text-white" /> Live
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 md:-order-none order-first flex lg:justify-start justify-center  ">
              <img
                className="w-[600px] rounded-md  h-[350px]"
                src={planter}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 3rd project */}
        <h1 className="text-white text-[30px] font-semibold text-center mt-10 mb-5 ">
          Team Project
        </h1>
        <div className="mt-8 md:mt-4 p-3">
          <div className="flex md:flex-row flex-col md:p-5 p-3 lg:gap-0 md:gap-3 ">
            <div className="flex-1 flex lg:justify-start justify-center">
              <img
                className="w-[600px] rounded-md h-[350px]"
                src={phone}
                alt=""
              />
            </div>
            <div className="flex-1  flex items-center">
              <div>
                <h1 className="text-center lg:text-2xl md:text-xl text-lg text-white font-semibold md:mt-0 mt-5">
                  Meet Wave
                </h1>
                <h1 className="lg:text-[20px] md:text-[16px] text-[15px] text-center  md:mt-3 leading-8 text-[#F2F3F494]">
                  Our team collaborated to create a meeting website where users
                  can connect with others through audio and video calls. Our
                  focus on simplicity and accessibility is reflected in a
                  user-friendly interface and reliable features. Through close
                  teamwork, we ensured successful feature implementation and a
                  smooth user experience, demonstrating our commitment to
                  innovation.
                </h1>
                <div className="flex flex-wrap gap-6 justify-center lg:mt-8 md:mt-5 mt-4 ">
                  <a
                    href="https://meet-wave.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2F3F494] border py-1 px-4 border-[#854CE6] font-medium  flex items-center gap-2 w-fit"
                  >
                    {" "}
                    <FaExternalLinkAlt className="text-lg text-white" /> Live
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
