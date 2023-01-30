import Project from "../Project/Project";
//
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: "https://placeimg.com/400/350/animals",
      title: "Project Title",
      description: "Project that does thing!",
      skillOne: "skill one",
      skillTwo: "skill two",
      skillThree: "skill three",
      githubLink: "github link",
      liveSiteLink: "live site link",
    },
    {
      id: 2,
      image: "https://placeimg.com/400/350/animals",
      title: "Project Title",
      description: "Project that does thing!",
      skillOne: "skill one",
      skillTwo: "skill two",
      skillThree: "skill three",
      githubLink: "github link",
      liveSiteLink: "live site link",
    },
    {
      id: 3,
      image: "https://placeimg.com/400/350/animals",
      title: "Project Title",
      description: "Project that does thing!",
      skillOne: "skill one",
      skillTwo: "skill two",
      skillThree: "skill three",
      githubLink: "github link",
      liveSiteLink: "live site link",
    },
  ];

  const projectsList = projects.map((project) => (
    <Project key={project.id} project={project} />
  ));

  return (
    <section
      id="portfolio"
      className="flex justify-between flex-wrap bg-black text-slate-200"
    >
      {projectsList}
    </section>
  );
};

export default Portfolio;
