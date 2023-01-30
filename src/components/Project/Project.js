import "./Project.css";
//
const Project = ({ project }) => {
  const {
    image,
    title,
    description,
    skillOne,
    skillTwo,
    skillThree,
    githubLink,
    liveSiteLink,
  } = project;

  return (
    <section className="card h-fit w-96 bg-base-100 shadow-xl project-card">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <section className="card-body">
        <h2 className="card-title">{title}</h2>
        <section>
          <span className="badge badge-outline mr-2">{skillOne}</span>
          <span className="badge badge-outline mr-2">{skillTwo}</span>
          <span className="badge badge-outline">{skillThree}</span>
        </section>
        <p>{description}</p>
        <section className="card-actions justify-end">
          <a href={githubLink} className="btn project-github text-slate-300">
            Github
          </a>
          <a href={liveSiteLink} className="btn project-site text-slate-300">
            Visit Site
          </a>
        </section>
      </section>
    </section>
  );
};

export default Project;
