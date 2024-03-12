"use client";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import frontend from "../public/frontend.jpg";
import backend from "../public/backend.png";
import fullstack from "../public/fullstack.png";
import bookstoreApi from "../public/bookstoreApi.png";
import crypto from "../public/crypto.png";
import fullstack02 from "../public/isoftStudios.png";
import "../app/app.css"



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="min-h-screen px-10 dark:bg-gray-900">
        <nav className="flex justify-between py-10">
          <h1 className="text-xl font-burtons dark:text-white">Zaman Mehmood</h1>
          <ul className="flex items-center">
            <li
              className="cursor-pointer text-xl"
              onClick={() => setDarkMode(!darkMode)}
            >
              <BsFillMoonStarsFill className="dark:text-white" />
            </li>
            <li className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 text-white ml-5 rounded-md">
              <a href="https://github.com/ZamanMehmood" target="blank">
                RESUME
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center lg:p-10 sm:p-4">
          <h2 className="text-teal-500 font-Poppins font-bold text-5xl py-2 lg:text-6xl">
            Zaman Mehmood
          </h2>
          <h3 className="lg:text-2xl text-xl py-2 dark:text-white">
            Software Engineer
          </h3>
          <p className="font-normal text-xl py-5 leading-8 text-slate-800 dark:text-white lg:max-w-2xl mx-auto">
          Hello, it's a pleasure to meet you! I hold a degree in Computer Engineering and have over two years of industry experience. Currently, I operate as an independent freelancer committed to delivering top-notch software solutions. I'm excited about the opportunity to collaborate on your project!






          </p>
        </div>
        <div className="flex justify-center text-5xl text-gray-600 gap-11 py-3">
          <a href="https://github.com/ZamanMehmood" target="blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/zaman-mehmood-65323b21b/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <section>
          <h3 className="text-2xl text-teal-500 font-bold my-3">SERVICES</h3>
          <div className="md:flex gap-10">
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5">
              <Image
                alt="frontend"
                src={frontend}
                width={400}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2">
              
I specialize in frontend technologies, particularly React, Next.js, Bootstrap, and Tailwind CSS. My focus is on creating captivating and flexible user interfaces to enhance user experience. Leveraging the strengths of these technologies, I deliver frontend solutions that are both high-performing and visually appealing.
              </p>
            </div>
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5">
              <Image
                alt="backend"
                src={backend}
                width={400}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2">
              I specialize in backend services using Node.js, Express, and MongoDB, crafting efficient and scalable web applications. From architecture design to API implementation and database management, I deliver tailored solutions for your needs, bringing your ideas to life with powerful backend development.






              </p>
            </div>
            <div className="text-center shadow-lg p-2 rounded-lg dark:bg-white mb-5">
              <Image
                alt="fullstack"
                src={fullstack}
                width={400}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2">
              In full-stack development, I utilize Node.js, Express, MongoDB, React, Next.js, Bootstrap, and Tailwind CSS, seamlessly integrating frontend and backend technologies. With proficiency in both areas, I provide comprehensive solutions for web applications, ranging from efficient server-side systems to captivating user interfaces.






              </p>
            </div>
          </div>
        </section>
        <section>
          <p className="text-2xl text-teal-500 font-bold my-3">PROJECTS</p>
          <div className="gap-10 md:flex justify-center ">
            <div className="flex flex-col justify-center pcard items-center shadow-lg p-2 rounded-lg dark:bg-white mb-5 lg:w-4/12">
              <span>
                <Image
                  alt="crypto"
                  src={crypto}
                  width={400}
                  height={200}
                  className="mx-auto"
                />
                <p className="py-3">
                This project is a frontend demonstration crafted in React and Tailwind CSS. It showcases an online payment website, focusing solely on frontend design and functionality without any backend integration. It serves to exhibit my expertise in frontend development and design.






                </p>
              </span>
              <div className="flex justify-center">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://crypto-olive.vercel.app/"
                  target="blank"
                >
                  Live
                </a>

                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://github.com/ZamanMehmood/Crypto"
                  target="blank"
                >
                  code
                </a>
              </div>
            </div>
            <div className="text-center pcard shadow-lg p-2 rounded-lg dark:bg-white mb-5 lg:w-4/12">
              <span>
                <Image
                  alt="booksapi"
                  src={bookstoreApi}
                  width={400}
                  height={200}
                  className="mx-auto"
                />
                <p className="py-3">
                  This is an API - backend for an online bookshop. This backend
                  has two entities, users and books. A user can register and
                  login. User can read all books and buy a book, while admin-
                  superuser can add, edit, delete a book. Admin can block or
                  unblock any user and can see the sales stats of any book for a
                  specific deuration.
                </p>
              </span>
              <div className="flex justify-center">
                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://documenter.getpostman.com/view/16657820/2s93z5AkBa"
                  target="blank"
                >
                  Live
                </a>

                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://github.com/ZamanMehmood/bookshop-api"
                  target="blank"
                >
                  code
                </a>
              </div>
            </div>
            <div className="text-center pcard shadow-lg p-2 rounded-lg dark:bg-white mb-5 lg:w-4/12">
              <span>
                <Image
                  alt="fullstack02"
                  src={fullstack02}
                  width={400}
                  height={200}
                  className="mx-auto"
                />
                <p className="py-3">
                  This is a fullstack project made with node, express, mongoDB
                  and a templating engine called EJS. This is a campground
                  website where users can creat their own campground, rent and
                  rate a campground. The app also has a five star rating and
                  review functionality for campgrounds they stayed in.
                </p>
              </span>
              <div className="flex justify-center">
              <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://isoftstudios.com/"
                  target="blank"
                >
                  Live
                </a>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-2 rounded-md m-1"
                  href="https://github.com/ZamanMehmood/Campzen"
                  target="blank"
                >
                  code
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
