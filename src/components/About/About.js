import meImg from "../../assets/me_linkedIn.png";
//
const About = () => {
  return (
    <>
      <section
        id="about"
        className="md:h-screen bg-black md:px-10 md:flex md:flex-col lg:flex-row md:justify-center md:items-center"
      >
        <section className="md:h-2/4 lg:w-1/3 shrink-0 md:mr-4">
          <img className="h-full w-auto" src={meImg} alt="me" />
        </section>
        <section className="lg:h-2/4 lg:w-auto lg:text-xl">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem incidunt necessitatibus ea iusto, fugit qui magnam
            rerum accusamus iure pariatur nostrum assumenda voluptatum dolores
            minima neque vitae repellat. Ipsum, aut. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Quos officia dignissimos pariatur
            veniam, voluptates quisquam saepe sequi temporibus exercitationem ut
            hic. Aperiam nesciunt voluptatem sapiente iusto itaque. Ex, voluptas
            voluptatum!
          </p>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            officia dignissimos pariatur veniam, voluptates quisquam saepe sequi
            temporibus exercitationem ut hic. Aperiam nesciunt voluptatem
            sapiente iusto itaque. Ex, voluptas voluptatum! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Exercitationem incidunt
            necessitatibus ea iusto, fugit qui magnam rerum accusamus iure
            pariatur nostrum assumenda voluptatum dolores minima neque vitae
            repellat.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            eaque consequatur vero inventore recusandae libero corporis
            excepturi et! Repellat, accusamus inventore explicabo ipsum nostrum
            error quas nesciunt nobis quod. Vitae. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Exercitationem incidunt necessitatibus
            ea iusto, fugit qui magnam rerum accusamus iure pariatur nostrum
            assumenda voluptatum dolores minima neque vitae repellat. Ipsum,
            aut.
          </p>
        </section>
      </section>
    </>
  );
};

export default About;
