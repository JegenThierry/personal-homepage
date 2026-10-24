import { Technologies } from "./technologies";

export interface Skill {
  index: string;
  title: string;
  description: string;
  keywords: Technologies[];
}

const frontend: Skill = {
  index: "01",
  title: "Frontend",
  description: "Making things look like crema on a coffee.",
  keywords: [Technologies.VUE, Technologies.REACT, Technologies.TYPESCRIPT, Technologies.TAILWIND],
};

const backend: Skill = {
  index: "02",
  title: "Backend",
  description: "Services and logic that keep the coffee machine running.",
  keywords: [Technologies.KOTLIN, Technologies.C_SHARP, Technologies.GO, Technologies.JAVA],
};

const hosting: Skill = {
  index: "03",
  title: "Self-hosting",
  description: "Why buy your coffee when you can own your own coffee machine. Privacy first.",
  keywords: [Technologies.DOCKER, Technologies.LINUX, Technologies.SELF_HOSTING],
};

export const skills: Skill[] = [frontend, backend, hosting];
