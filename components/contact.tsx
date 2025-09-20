// Redesigned Contact section for minimal, elegant portfolio

const Contact = () => {
  return (
    <section id="contact" className="max-w-2xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-extrabold text-accent mb-8 text-center">Contact</h2>
      <form className="contact-form flex flex-col gap-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="text-base"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="text-base"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          className="text-base"
          required
        />
        <button type="submit" className="hero-btn w-full mt-2">
          Send Message
        </button>
      </form>
      <div className="text-center text-gray-400 text-sm mt-8">
        Or email me directly at{" "}
        <a href="mailto:akaashthawani13@yahoo.com" className="text-accent underline">
          akaashthawani13@yahoo.com
        </a>
      </div>
    </section>
  )
}

export default Contact
