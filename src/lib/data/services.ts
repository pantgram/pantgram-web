export type ServiceIcon = "api" | "ai" | "data" | "infra" | "micro" | "chat";

export interface Service {
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "API Development",
    description:
      "Designing and implementing RESTful APIs and API plugins with FastAPI, Django REST Framework and Node.js — built for clarity, security and maintainability.",
    features: ["REST APIs", "JWT Auth", "Full-text Search", "OpenAPI Docs"],
  },
  {
    title: "Microservices & Integrations",
    description:
      "API-driven interfaces and microservices orchestrated with Boomi iPaaS to enable seamless, plug-and-play communication between cloud and enterprise systems.",
    features: [
      "Boomi iPaaS",
      "Event-driven",
      "Legacy Systems",
      "Interoperability",
    ],
  },
  {
    title: "AI Automation",
    description:
      "Intelligent automation pipelines powered by UiPath and LLMs — automating invoice processing, document extraction and report generation end to end.",
    features: [
      "UiPath Bots",
      "LLM Extraction",
      "Python Workflows",
      "Web Automation",
    ],
  },
  {
    title: "Full-Stack Delivery",
    description:
      "Responsive front-end applications with Angular and React paired with backend services — from student information systems to real estate platforms.",
    features: ["Angular", "React", "Node.js", "TypeScript"],
  },
];
