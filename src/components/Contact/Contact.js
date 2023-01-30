import { SocialIcon } from "react-social-icons";
//
import ContactForm from "../ContactForm/ContactForm";
//
const Contact = () => {
  return (
    <section id="contact" className="bg-black h-screen">
      <h1>Contact</h1>
      <section className="flex justify-center">
        <SocialIcon url="https://twitter.com/TomHegemanDev" className="mr-4" />
        <SocialIcon
          url="https://www.linkedin.com/in/thomas-hegeman-dev/"
          className="mr-4"
        />
        {/* needs color change */}
        <SocialIcon url="https://github.com/Hegeman-Thomas001" />
      </section>
      <ContactForm />
    </section>
  );
};

export default Contact;
