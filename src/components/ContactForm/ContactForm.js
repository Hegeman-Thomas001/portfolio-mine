//
const ContactForm = () => {
  return (
    <section className="bg-black">
      <section className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl font-extrabold text-center text-slate-300">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-slate-200 sm:text-xl">
          Hi, please leave a message!
        </p>
        <form action="#" className="space-y-8">
          <section>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-slate-200"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-black border border-slate-300 text-slate-200 rounded-lg focus:ring-slate-300 focus:border-slate-300 block w-full p-2.5 placeholder-slate-200"
              placeholder="name@email.com"
              required
            />
          </section>
          <section>
            <label
              htmlFor="subject"
              className="block mb-2 font-medium text-slate-200"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-slate-200 bg-black rounded-lg border border-slate-300 shadow-sm focus:ring-slate-300 focus:border-slate-300 placeholder-slate-200"
              placeholder="Subject goes here"
              required
            />
          </section>
          <section className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-slate-200"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-slate-200 rounded-lg shadow-sm border bg-black placeholder-slate-200 border-slate-300 focus:ring-slate-300 focus:border-slate-300"
              placeholder="Leave a comment..."
            ></textarea>
          </section>
          <button
            type="submit"
            className="py-3 px-5 font-medium text-center text-slate-200 hover:text-slate-100 rounded-lg bg-red-900 hover:bg-red-700 sm:w-fit focus:ring-4 focus:outline-none focus:ring-slate-300"
          >
            Send message
          </button>
        </form>
      </section>
    </section>
  );
};

export default ContactForm;
