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

  return (
    <section
      id="portfolio"
      className="flex justify-between flex-wrap bg-black lg:h-screen"
    >
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
