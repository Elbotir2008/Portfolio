import About from "./about/About";
import Contact from "./contact/Contact";
import ExampleProjects from "./exampleProjects/ExampleProjects";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";

const HomePage = () => {
  return (
    <main>
      <About />
      <WorkExperience />
      <Skills />
      <ExampleProjects />
      <Contact />
    </main>
  );
};

export default HomePage;
