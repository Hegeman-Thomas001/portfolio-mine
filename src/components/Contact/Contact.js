import { SocialIcon } from "react-social-icons";
//
import ContactForm from "../ContactForm/ContactForm";
//
const Contact = () => {
  return (
    <section id="contact" className="bg-black h-screen">
      <h1>Contact</h1>
      <section>
        <SocialIcon url="https://twitter.com/TomHegemanDev" />
        <SocialIcon url="https://www.linkedin.com/in/thomas-hegeman-dev/" />
        {/* needs color change */}
        <SocialIcon url="https://github.com/Hegeman-Thomas001" />
      </section>
      <ContactForm />
    </section>
  );
};

export default Contact;
