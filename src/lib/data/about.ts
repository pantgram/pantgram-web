export interface Expertise {
  label: string;
  description: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface AboutData {
  heading: string;
  headingHighlight: string;
  bio: string[];
  expertise: Expertise[];
  heroTagline: string;
  heroTaglineHighlight: string;
  heroDescription: string;
  heroStats: HeroStat[];
  codeSnippet: string;
}

export const about: AboutData = {
  heading: "Engineering scalable systems",
  headingHighlight: "behind the scenes",
  bio: [
    "I'm a Software Engineer with a degree in Computer Science from Aristotle University of Thessaloniki, equipped with proven experience in backend systems development. I design and implement APIs and microservices across education and enterprise domains, and I enjoy tackling complex challenges to create efficient and scalable systems.",
    "Most recently I have been building AI-powered automation pipelines — combining UiPath, Python and LLMs to automate invoice processing, document extraction and legacy system integrations. Driven by a passion for software engineering, I strive to deliver innovative solutions and impactful results.",
  ],
  expertise: [
    { label: "Backend", description: "APIs, Microservices, Databases" },
    { label: "Integrations", description: "Boomi iPaaS, Enterprise Systems" },
    { label: "AI Automation", description: "UiPath, LLMs, Workflows" },
    { label: "Full Stack", description: "Angular, React, Node.js" },
  ],
  heroTagline: "Pantelis Grammatikopoulos",
  heroTaglineHighlight: "Software Engineer — Thessaloniki, GR",
  heroDescription:
    "Backend systems, APIs and microservices across education and enterprise domains — plus AI-powered automation pipelines that turn manual work into reliable, scalable workflows.",
  heroStats: [
    { value: "2.5+", label: "Years Exp" },
    { value: "4", label: "Companies" },
    { value: "3", label: "Publications & Projects" },
  ],
  codeSnippet: `class Engineer:
    def __init__(self):
        self.name = "Pantelis"
        self.role = "Software Engineer"
        self.education = "BSc CS, AUTh"
        self.languages = [
            "Python", "Java",
            "TypeScript", "JavaScript",
            "SQL",
        ]
        self.tools = [
            "FastAPI", "SQLAlchemy",
            "PostgreSQL", "Pydantic",
            "Docker", "Git",
            "UiPath", "Boomi",
        ]

    def build(self, idea):
        # Ship it!
        return self._craft(idea)`,
};
