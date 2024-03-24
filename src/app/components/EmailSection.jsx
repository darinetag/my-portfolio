"use client";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="lg:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#649173] via-teal-900 to-blue-900 rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="z-10">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white my-4 mt-3">
          Let&apos;s Connect
        </h5>
        <p className="text-gray-600 dark:text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently on the search for new oppurtunities, my inbox is
          always open. Feel free to reach out if you have a question or just
          want to say hey, I will get back to you!
        </p>
        <div className="socials flex flex-row gap-3">
          <Link href="https://github.com/darinetag">
            <BsGithub className="dark:text-white text-2xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/darine-tag/">
            <BsLinkedin className="dark:text-white text-2xl" />
          </Link>
        </div>
      </div>
      <div>
        <form
          className="flex flex-col"
          action="mailto:tagdarinefatma@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="dark:text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="dark:bg-[#18191E] border border-[#33353F] placeholder-gray-900 dark:placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="dark:text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="dark:bg-[#18191E] border border-[#33353F] placeholder-gray-900 dark:placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hey there"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="dark:text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="dark:bg-[#18191E] border border-[#33353F] placeholder-gray-900 dark:placeholder-[#9CA2A9] dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="  Let's chat about..."
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-br from-[#649173] via-teal-900 to-blue-900 hover:bg-teal-900  text-white font-medium py-2.5 px-5 mt-4 rounded-lg w-full"
          >
            {" "}
            Send message{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
