// src/components/ContactSection.jsx
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaBehance, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 mt-24 px-6 md:px-20 bg-base-100 text-base-content" id='contact'>
        <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-primary">With Me</span>
        </h2>
        <p className="text-accent mt-2 max-w-xl mx-auto">
          A closer look at some of my most complete and detailed work.
        </p>
      </motion.div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 shadow-[0_2px_20px_rgba(255,255,255,0.05)]">
        {/* Left Side Card */}
        <motion.div
        className="bg-neutral rounded-xl p-8 shadow-lg flex flex-col gap-6"
        initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 4px 20px rgba(255, 1, 79, 0.4)"}}
              >
          <img
            src="/your-image.jpg" // Replace with your image path
            alt="Nevine Acotanza"
            className="rounded-xl object-cover w-full h-48"
          />
          <div>
            <h2 className="text-2xl font-bold text-secondary">Diya Purkayastha</h2>
            <p className="text-accent mb-4">Full Stack Developer</p>
            <p className="text-accent mb-4">
              I am available for work. Connect with me via and call in to my account.
            </p>
            <p className="text-accent">
              Phone: <span className="text-primary font-semibold">+8801791554645</span>
            </p>
            <p className="text-accent mb-4">
              Email: <span className="text-primary font-semibold">diyadp0@gmail.com</span>
            </p>
          </div>
          <div>
            <p className="uppercase text-sm mb-3 text-accent font-semibold tracking-widest">Find with me</p>
            <div className="flex gap-4">
              <a
                href="https://x.com/diyapurkaystha"
                className="p-3 rounded-md bg-base-200 hover:bg-primary transition-colors text-primary hover:text-white"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.behance.net/diyapurkayastha"
                className="p-3 rounded-md bg-base-200 hover:bg-primary transition-colors text-primary hover:text-white"
              >
                <FaBehance size={20} />
              </a>
              <a
                 href="https://github.com/Diya-Purkayastha/" 
                className="p-3 rounded-md bg-base-200 hover:bg-primary transition-colors text-primary hover:text-white"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form 
        className="bg-neutral shadow-[0_2px_20px_rgba(255,255,255,0.05)] rounded-xl p-8 space-y-6"
          initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 4px 20px rgba(255, 1, 79, 0.4)"}}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered bg-base-200 placeholder-accent text-base-content"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered bg-base-200 placeholder-accent text-base-content"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered bg-base-200 placeholder-accent text-base-content w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered bg-base-200 placeholder-accent text-base-content w-full"
          />
          <textarea
            rows={6}
            placeholder="Your Message"
            className="textarea textarea-bordered bg-base-200 placeholder-accent text-base-content w-full"
          ></textarea>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
