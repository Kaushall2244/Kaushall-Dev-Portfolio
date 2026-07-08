"use client";

import { useState, useRef } from "react";
import Reveal from "../ui/Reveal";
import TextReveal from "../ui/TextReveal";
import { SkillNavigation } from "../ui/SkillNavigation";
import { SkillDisplay } from "../ui/SkillDisplay";

export interface Skill {
  title: string;
  subtitle: string;
  description: string;
  level: number;
  tech: string[];
}

const skills: Skill[] = [
  {
    title: "Core Engineering",
    subtitle: "Building Strong Foundations",
    description:
      "Learning backend engineering by building Java applications, REST APIs, database systems and solving real-world programming problems.",
    level: 90,
    tech: [
      "Java",
      "MySQL",
      "Python",
    ],
  },

  {
    title: "Frontend Development",
    subtitle: "Design meets Engineering",
    description:
      "Creating modern interfaces using React, Next.js, Tailwind CSS and premium animations with Framer Motion.",
    level: 90,
    tech: [
      "HTML, CSS",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "TypeScript",
    ],
  },

  {
    title: "Artificial Intelligence",
    subtitle: "Learning Intelligent Systems",
    description:
      "Exploring Computer Vision, OpenCV and Python while building projects involving automation and intelligent systems.",
    level: 82,
    tech: [
      "Python",
      "OpenCV",
      "Machine Learning",
      "YOLO",
    ],
  },

  {
    title: "Creative Engineering",
    subtitle: "Where Code meets Creativity",
    description:
      "Experimenting with Blender, Unreal Engine 5 and cinematic environments while combining programming with visual creativity.",
    level: 84,
    tech: [
      "Blender",
      "UE5",
      "Adobe Preimier Pro",
    ],
  },
];

export default function Skills() {

  const [selected, setSelected] = useState(0);

  const panelRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({
    x: -500,
    y: -500,
  });

  return (

    <Reveal>
      <section
        id="skills"
        className="relative overflow-hidden py-36 px-6 md:px-10 lg:px-20"
      >

        <div className="max-w-7xl mx-auto">

          <p className="text-xs uppercase tracking-[0.45em] text-[#ccff00]">
            02 / SKILLS
          </p>

          <TextReveal
            text="Learning by building. Improving with every project."
            variant="h2"
            className="mt-6 text-5xl md:text-7xl font-black text-white max-w-5xl"
          />

          <div className="mt-24 grid lg:grid-cols-[320px_1fr] gap-16">

            <SkillNavigation
              skills={skills}
              selected={selected}
              setSelected={setSelected}
            />

            <SkillDisplay
              skill={skills[selected]}
            />

          </div>

        </div>

      </section>

    </Reveal>

  );
}