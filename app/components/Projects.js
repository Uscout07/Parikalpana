"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import i from "./ui/Caringpaws.png";
import ii from "./ui/Futurevolt.png";
import iii from "./ui/mtttalento.png";
import iv from './ui/ChrisRealtor.png'

const CardContainer = ({ className, children }) => (
  <div className={`perspective-1000 ${className}`}>{children}</div>
);

const CardBody = ({ className, children }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
    className={`transform-style-3d ${className}`}
  >
    {children}
  </motion.div>
);

const CardItem = ({ className, children, as: Component = "div", ...props }) => (
  <Component className={`transform-z-20 ${className}`} {...props}>
    {children}
  </Component>
);

export function ProjectsSection() {
  const projects = [
    {
      title: "Chris Simons Realtor",
      description: "A web portfolio for a Realtor.",
      imgUrl: iv,
      link: "https://uscout07.github.io/ChrisRealtor/"
    },
    {
      title: "The Caring Paws",
      description: "A website for pet care services and information.",
      imgUrl: i,
      link: "https://www.thecaringpaws.com/"
    },
    {
      title: "FutureVolt",
      description: "An energy company website showcasing sustainable solutions.",
      imgUrl: ii,
      link: "https://uscout07.github.io/FutureVolt/"
    },
    {
      title: "MT Talento",
      description: "A talent management and recruitment platform.",
      imgUrl: iii,
      link: "https://uscout07.github.io/Mttalento/"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bungee-inline font-medium mb-12 text-center dark:text-white">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-white dark:bg-gray-800 relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] dark:hover:shadow-purple-500/[0.1] w-full h-[600px] rounded-xl p-6 border border-black/[0.1] dark:border-white/[0.2]">
                <CardItem
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-2"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  className="text-gray-500 dark:text-gray-300 text-sm mb-4"
                >
                  {project.description}
                </CardItem>
                <CardItem className="w-full h-96 mb-4 relative">
                  <Image
                    src={project.imgUrl}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>
                <CardItem
                  as={Link}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-purple-600 text-white text-sm font-bold hover:bg-purple-700 transition-colors inline-block"
                >
                  Visit Site
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}