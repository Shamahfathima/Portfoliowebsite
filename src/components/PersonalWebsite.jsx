import React from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h1 className="text-2xl font-bold text-white">Shamah</h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-yellow-500 transition duration-300">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-yellow-500 transition duration-300">
              Projects
            </a>
            <a href="#skills" className="text-gray-300 hover:text-yellow-500 transition duration-300">
              Skills
            </a>
            <a href="#contact" className="text-gray-300 hover:text-yellow-500 transition duration-300">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 text-2xl hover:text-yellow-500"
            >
              {isOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="px-4 py-4 space-y-2">
            <a href="#about" className="block text-gray-300 hover:text-yellow-500">
              About
            </a>
            <a href="#projects" className="block text-gray-300 hover:text-yellow-500">
              Projects
            </a>
            <a href="#skills" className="block text-gray-300 hover:text-yellow-500">
              Skills
            </a>
            <a href="#contact" className="block text-gray-300 hover:text-yellow-500">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white"
    >
      <div className="flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Profile Picture */}
        <div className="mb-8 md:mb-0 md:mr-8">
        <img
          src="/images/Sham.jpg"
          alt="Shamah's Profile"
          className="w-40 h-50 md:w-64 md:h-70 rounded-full border-8 border-yellow-500 shadow-2xl"
        />

        </div>
  
        {/* Introduction */}
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Hi, I'm <span className="text-yellow-500">Shamah</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Data Science and Artificial Intelligence Enthusiast
          </p>
          <a
            href="#contact"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
  
const ProjectCard = ({ title, description, image, link }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2 text-yellow-500">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        className="text-yellow-500 hover:text-yellow-600 font-medium"
      >
        View Project →
      </a>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "LLM Model",
      description: "Created a Large Language Model from Scratch",
      image: "",
      link: "https://github.com/Shamahfathima/LLM.git",
    },
    {
      title: "Self-Driving Car",
      description: "AI-powered self-driving car simulation.",
      image: "/api/placeholder/400/200",
      link: "https://github.com/Shamahfathima/SelfDrivingCar.git",
    },
    {
      title: "InternEase",
      description: "A platform for UCSC students to apply for internships.",
      image: "/images/interneaseLogo.png",
      link: "https://github.com/nufdhamacky/InternEase.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skills = [
    { category: "Frontend", items: ["React", "HTML5", "CSS3", "JavaScript"] },
    { category: "Backend", items: ["Python", "Java", "SQL", "C/C++"] },
    { category: "Tools", items: ["Git","PyTorch", "Matpotlib", "AWS", ] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-md p-6"
            >
              <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-20 bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold mb-12 text-yellow-500">Get in Touch</h2>
      <div className="flex justify-center space-x-8 text-3xl">
        <a href="https://github.com" className="hover:text-yellow-500">
          GH
        </a>
        <a href="https://linkedin.com" className="hover:text-yellow-500">
          IN
        </a>
        <a href="mailto:your@email.com" className="hover:text-yellow-500">
          ✉
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p>© {new Date().getFullYear()} Shamah. All rights reserved.</p>
    </div>
  </footer>
);

const PersonalWebsite = () => (
  <div className="min-h-screen">
    <Navigation />
    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
    <Footer />
  </div>
);

export default PersonalWebsite;