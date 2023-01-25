import meImg from "../../assets/me_linkedIn.png";
//
const About = () => {
  return (
    <>
      <section id="about" className="lg:h-screen bg-black lg:flex lg:justify-center lg:items-center lg:px-60">
        <img className="lg:h-2/4 lg:w-auto lg:mr-4" src={meImg} alt="me" />
        <section className="lg:h-2/4 lg:text-xl">
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt necessitatibus ea iusto, fugit qui magnam rerum accusamus iure pariatur nostrum assumenda voluptatum dolores minima neque vitae repellat. Ipsum, aut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos officia dignissimos pariatur veniam, voluptates quisquam saepe sequi temporibus exercitationem ut hic. Aperiam nesciunt voluptatem sapiente iusto itaque. Ex, voluptas voluptatum!</p>
          <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos officia dignissimos pariatur veniam, voluptates quisquam saepe sequi temporibus exercitationem ut hic. Aperiam nesciunt voluptatem sapiente iusto itaque. Ex, voluptas voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt necessitatibus ea iusto, fugit qui magnam rerum accusamus iure pariatur nostrum assumenda voluptatum dolores minima neque vitae repellat.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque consequatur vero inventore recusandae libero corporis excepturi et! Repellat, accusamus inventore explicabo ipsum nostrum error quas nesciunt nobis quod. Vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt necessitatibus ea iusto, fugit qui magnam rerum accusamus iure pariatur nostrum assumenda voluptatum dolores minima neque vitae repellat. Ipsum, aut.</p>
        </section>
      </section>
    </>
  );
};

export default About;
