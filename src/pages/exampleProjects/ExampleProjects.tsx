import "./exampleProjects.scss";
const ExampleProjects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <div className="project1 flex-class">
          <div className="project1-texts">
            <span>Featured Project</span>
            <h2>Eatly Project</h2>
            <div className="blur-card"></div>
            <p>
              This project is about food. The project is called Eatly. Eatly has
              Login, Register HomePage, Dishes and Cart sections. There is also
              Search and add to cart. A lot of attention has been paid to the
              designs in this project.
            </p>
            <div className="flex-class">
              <a href="http://yakuniy-imtihon-forntend.vercel.app">
                <img src="./icon-park-solid_click.svg" alt="Eror" />
                <img src="./icon-park-solid_click.svg" alt="Eror" />
              </a>
            </div>
          </div>
          <div className="project1-img">
            <a href="http://yakuniy-imtihon-forntend.vercel.app">
              <img src="./1.png" alt="Eror" />
            </a>
            <img src="./Gradient2.svg" className="gradi1" alt="Eror" />
          </div>
        </div>
        <div className="project1 flex-class">
          <div className="project1-img">
            <a href="http://githubfinder-snd.netlify.app">
              <img src="./2.png" alt="Eror" />
            </a>
            <img src="./Gradient2.svg" className="gradi2" alt="Eror" />
          </div>
          <div className="project1-texts project2-texts">
            <span>Featured Project</span>
            <h2>Github Finder</h2>
            <div className="blur-card"></div>
            <p>
              This project is for Github users. The name of the project is
              Github Finder. Github Finder has HomePage, About, and Details
              sections. There is also Search. In this project, the designs are
              not given much attention, but they are much more useful.
            </p>
            <div className="flex-class">
              <a href="http://githubfinder-snd.netlify.app">
                <img src="./icon-park-solid_click.svg" alt="Eror" />
                <img src="./icon-park-solid_click.svg" alt="Eror" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExampleProjects;
