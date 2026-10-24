import { repository } from "./repository";

export interface Fact {
  label: string;
  value: string;
}

const country: Fact = { label: "base", value: "Luxembourg" };
const languages: Fact = { label: "languages", value: "lu, de, fr, en" };
const focus: Fact = { label: "focus", value: "web, tools, self-hosted" };
const experience: Fact = { label: "experience", value: "5+ years" };
const fuel: Fact = { label: "fuel", value: "coffee ☕" };
const source: Fact = { label: "source", value: repository.base };

export const facts = [country, languages, focus, experience, fuel, source];
