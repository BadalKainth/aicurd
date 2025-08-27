import React from "react";
import img2 from "../img/about.jpg";
import RecCard from "../components/RecCard";
import PresidentsDiary from "./PresidentsDiary";
import About from "./About";
import Contact from "./Contact";
// import Donate from "./Donate";
import Blogs from "./Blogs";
import Projects from "./Projects";
import Footer from "../components/Footer";
import SEO from "../components/Seo";

const Home = () => {
  return (
    <div className="relative">
      <SEO
        title="AICURD – Vision, Mission, and Key Development Initiatives (1985–Present)"
        description="AICURD, since 1985, empowers disadvantaged communities through health, education, women empowerment, socio-economic surveys & rural development."
        keywords="AICURD, All India Centre for Urban and Rural Development, NGO India, Rural Development, Urban Development, Socio-Economic Survey, SC ST Welfare, Scheduled Castes development, Scheduled Tribes development, Backward Classes upliftment, Women Empowerment, Child Welfare, Health Awareness Camps, HIV AIDS Prevention, TB Control, RNTCP DOT Centre, Reproductive Child Health, Migrant Workers Welfare, Yamuna Action Plan, Participatory Waste Management, Poverty Alleviation, Skill Development, Capacity Building, Low Cost Housing, Cooperative Societies, Community Participation, National Integration, Environmental Awareness, Tribal Welfare, Community Development Projects, Rural Employment, Social Services NGO, Empowering Marginalized Communities."
        url="https://aicurd.org/"
        image="https://aicurd.org/images/home-cover.jpg"
      />

      <section
        id="home"
        className="w-full relative flex justify-center items-center poppins-regular"
      >
        {/* Background Image with brightness */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50 z-0"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Centered Title */}
        <div className="relative z-10 flex flex-col justify-center items-center w-10/12 h-[50vh] md:h-[100vh] gap-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl poppins-medium-italic font-bold tracking-widest lg:text-6xl xl:text-8xl leading-tight text-white text-center px-4">
            AICURD
          </h1>
          <p className="text-lg text-white text-center tracking-wider">
            <strong>AICURD </strong> undertakes holistic development projects
            across urban and rural India, focusing on education, health, women
            empowerment, and community upliftment. Through grassroots engagement
            and government-supported initiatives, it aims to improve quality of
            life and promote inclusive growth.
          </p>
        </div>
      </section>

      <div>
        <RecCard />
      </div>
      <section id="about" className="h-full ">
        <About />
      </section>
      <section id="projects" className="h-full">
        <Projects />
      </section>
      <section id="president" className="h-full">
        <PresidentsDiary />
      </section>
      <section id="blogs" className="h-full ">
        <Blogs />
      </section>
      {/* <section id="donate" className="h-full ">
        <Donate />
      </section> */}
      <section id="contact" className="h-full ">
        <Contact />
      </section>
      <section id="contact" className="h-full ">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
