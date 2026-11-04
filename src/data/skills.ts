import { Technologies } from './technologies'

export interface Skill {
  title: string
  description: string
  keywords: Technologies[]
}

const frontend: Skill = {
  title: 'Frontend',
  description: 'Interfaces, from the first component to the final interaction.',
  keywords: [Technologies.VUE, Technologies.REACT, Technologies.TYPESCRIPT, Technologies.TAILWIND],
}

const backend: Skill = {
  title: 'Backend',
  description: 'Services, APIs and the data behind them.',
  keywords: [Technologies.KOTLIN, Technologies.C_SHARP, Technologies.GO, Technologies.JAVA],
}

const hosting: Skill = {
  title: 'Self-hosting',
  description: 'Deploying, running and owning the machines it all runs on.',
  keywords: [Technologies.DOCKER, Technologies.LINUX, Technologies.SELF_HOSTED],
}

export const skills: Skill[] = [frontend, backend, hosting]
