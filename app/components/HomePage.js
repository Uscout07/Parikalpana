"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";
import i from "../Public/Caringpaws.png";
import ii from "../Public/Futurevolt.png";
import iii from "../Public/mtttalento.png";
import Image from "next/image";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  return (
    <div
      className="min-h-screen bg-cream text-purple-900"
      style={{
        backgroundImage: `url("https://Images.unsplash.com/photo-1707134657472-51902d2854a4?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
      }}
    >
      {/* Navigation */}
      <nav className="bg-purple-900 text-white p-4 md:p-6 sticky top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bungee-inline font-medium mb-4 md:mb-0">
            PARIKALPANA.IO
          </h1>
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-8 text-base md:text-lg font-semibold">
            <li>
              <a
                href="#about"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-1">
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center text-center my-5 px-4 bg-[#ffffff9c]"
          style={{
            backgroundImage: `url("https://Images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundBlendMode: "color-burn",
            backgroundSize: "cover",
          }}
        >
          <h2 className="font-bungee-inline text-4xl md:text-6xl font-medium mb-6 text-purple-900">
            Welcome to PARIKALPANA.IO
          </h2>
          <p className="text-xl md:text-2xl font-bold text-purple-900 mb-8">
            Your partner in web development excellence
          </p>
          <a
            href="#services"
            className="bg-purple-900 text-white font-bungee-inline py-3 px-8 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300"
          >
            Explore Services
          </a>
        </section>

        <section
          id="about"
          data-aos="fade-up"
          className="mt-20 mb-24 flex flex-col justify-center"
        >
          <h2 className="font-bungee-inline text-3xl md:text-4xl font-medium mb-8 text-center">
            About Us
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto font-medium">
            PARIKALPANA.IO is a leading web development agency dedicated to
            crafting modern, responsive, and user-friendly websites that enhance
            online experiences for businesses of all sizes. Our talented team of
            professionals combines a creative approach with in-depth technical
            expertise to deliver innovative digital solutions tailored to your
            unique business needs. Whether you're looking to establish an online
            presence, revamp your existing website, or build a dynamic web
            application, we have the skills and experience to bring your vision
            to life. At PARIKALPANA.IO, we prioritize functionality, aesthetics,
            and user experience, ensuring that your website not only looks great
            but also performs seamlessly across all devices. By leveraging the
            latest technologies and best practices in web development, we aim to
            create impactful digital solutions that drive engagement and growth.
            Our mission is to help businesses thrive in the digital age through
            high-quality web design and development services.
          </p>
        </section>

        <section id="services" data-aos="fade-up" className="mb-24">
          <h2 className="font-bungee-inline text-3xl md:text-4xl font-medium mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="font-bungee-inline text-xl md:text-2xl font-medium mb-4">
                WordPress Websites
              </h3>
              <p>Custom WordPress development tailored to your needs.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="font-bungee-inline text-xl md:text-2xl font-medium mb-4">
                Static Websites
              </h3>
              <p>Fast, secure, and efficient static website development.</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="font-bungee-inline text-xl md:text-2xl font-medium mb-4">
                Dynamic Websites
              </h3>
              <p>Robust and interactive dynamic web applications.</p>
            </div>
          </div>
        </section>

        <section id="technologies" data-aos="fade-up" className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bungee-inline font-medium mb-12 text-center">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <Icon
              icon="logos:html-5"
              width="48"
              height="48"
              className="md:w-16 md:h-16"
            />
            <Icon
              icon="logos:css-3"
              width="48"
              height="48"
              className="md:w-16 md:h-16"
            />
            <Icon
              icon="logos:javascript"
              width="48"
              height="48"
              className="md:w-16 md:h-16"
            />
            <Icon
              icon="logos:react"
              width="48"
              height="48"
              className="md:w-16 md:h-16"
            />
            <Icon
              icon="logos:nodejs"
              width="48"
              height="48"
              className="md:w-16 md:h-16"
            />
            <Icon
              icon="logos:mongodb"
              width="48"
              height="48"
              className="md:w-16 md:h-16"
            />
            <Icon
              icon="logos:wordpress-icon"
              width="48"
              height="48"
              className="md:w-16 md:h-16"
            />
          </div>
        </section>

        <section id="projects" data-aos="fade-up" className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bungee-inline font-medium mb-12 text-center">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src={i}
                  alt="The Caring Paws"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-bungee-inline text-xl md:text-2xl font-medium mb-2">
                  The Caring Paws
                </h3>
                <p className="mb-4">
                  A website for pet care services and information.
                </p>
                <a
                  href="https://www.thecaringpaws.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  Visit Site
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full">
                <Image src={ii} alt="FutureVolt" objectFit="cover" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-bungee-inline text-xl md:text-2xl font-medium mb-2">
                  FutureVolt
                </h3>
                <p className="mb-4">
                  An energy company website showcasing sustainable solutions.
                </p>
                <a
                  href="https://uscout07.github.io/FutureVolt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  Visit Site
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80 md:w-full">
                <Image
                  src={iii}
                  alt="The Caring Paws"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-bungee-inline text-xl md:text-2xl font-medium mb-2">
                  MT Talento
                </h3>
                <p className="mb-4">
                  A talent management and recruitment platform.
                </p>
                <a
                  href="https://uscout07.github.io/Mttalento/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonial" data-aos="fade-up" className="mb-24 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bungee-inline font-medium mb-8 text-center">
                Testimonial
        </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-2/5">
            <div className="p-4 md:p-6">
              <p className="mb-4 text-center font-medium">
                "Udit and his team listen to all our needs and did the best job.<br/>
                Reasonable prices, professional, honest, and reliable. Always<br/>
                accessible and never minded the changes. We highly recommend<br/>
                them!"
              </p>
              <p className="text-right text-sm italic text-gray-500">
                - Sylvia Martha Torres,
                 The Caring Paws
              </p>
            </div>
          </div>
        </section>

        <section id="contact" data-aos="fade-up" className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bungee-inline font-medium mb-8 text-center">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg mb-6 text-center">
              Get in touch with us for your web development needs:
            </p>
            <ul className="text-base md:text-lg space-y-4">
              <li className="flex justify-center items-center">
                <Icon icon="mdi:email" className="mr-2" />
                <a
                  href="mailto:Parikalpana.io@gmail.com"
                  className="text-purple-600 hover:underline"
                >
                  Parikalpana.io@gmail.com
                </a>
              </li>
              <li className="flex justify-center items-center">
                <Icon icon="mdi:phone" className="mr-2" />
                <a
                  href="tel:+917678134962"
                  className="text-purple-600 hover:underline"
                >
                  +91 7678134962
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 text-white p-4 md:p-6 text-center">
        <p>&copy; 2024 PARIKALPANA.IO. All rights reserved.</p>
      </footer>
    </div>
  );
}
